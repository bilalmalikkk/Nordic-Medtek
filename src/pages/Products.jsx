import { useTranslation } from 'react-i18next'
import { useProducts, useCategories } from '../hooks/useCmsProducts'
import { API_BASE_URL } from '../services/cmsApi'
import { Link } from 'react-router-dom'

export default function Products() {
  const { t } = useTranslation()
  const { products, loading: productsLoading, error: productsError } = useProducts({ status: 'PUBLISHED' })
  const { categories, loading: categoriesLoading } = useCategories()

  // Fallback to static data if CMS is not available
  const fallbackProducts = [
    { id: 'fall-sensor', product_name: 'Fallsensor', category_name: 'Sikkerhet', technical_data: 'Varsler fall i hjemmet og ute.' },
    { id: 'bp-monitor', product_name: 'Blodtrykksmåler', category_name: 'Medisinsk', technical_data: 'Automatiserte målinger med deling til pårørende/lege.' },
    { id: 'pill-dispenser', product_name: 'Medisin-dispenser', category_name: 'Sikkerhet', technical_data: 'Påminnelser og varsler ved uteblitt dose.' }
  ]

  // Use CMS products if available, otherwise fallback to static data
  const displayProducts = products.length > 0 ? products : fallbackProducts
  const isLoading = productsLoading || categoriesLoading
  const hasError = productsError && products.length === 0

  if (isLoading) {
    return (
      <div className="container-page">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto mb-4"></div>
            <p className="text-gray-600">{t('products.loading')}</p>
          </div>
        </div>
      </div>
    )
  }

  if (hasError) {
    console.warn('CMS not available, using fallback data:', productsError)
  }

  // Group products by category
  const groups = displayProducts.reduce((acc, product) => {
    const categoryName = product.category_name || 'Andre'
    if (!acc[categoryName]) {
      acc[categoryName] = []
    }
    acc[categoryName].push(product)
    return acc
  }, {})

  return (
    <div className="min-h-screen w-full bg-gray-50">
      <div className="w-full">
        {/* Hero Section */}
        <section className="py-12 w-full relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6">
                {t('products.title')}
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto">
                {t('products.subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Products by Category */}
        <section className="py-20 w-full">
          <div className="w-full max-w-8xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
            {Object.keys(groups).length === 0 ? (
              <div className="text-center py-16">
                <p className="text-gray-600">{t('products.noProducts')}</p>
              </div>
            ) : (
              <div className="space-y-16">
              {Object.entries(groups).map(([category, categoryProducts]) => (
                <div key={category} className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">{category}</h2>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {categoryProducts.map((product) => (
                      <div key={product.id} className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <div className="aspect-w-16 aspect-h-12 bg-gray-100">
                          {product.image_url ? (
                            <img 
                              src={product.image_url.startsWith('http') ? product.image_url : `${API_BASE_URL}${product.image_url}`}
                              alt={product.product_name}
                              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          ) : (
                            <div className="w-full h-48 bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center">
                              <svg className="w-12 h-12 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                              </svg>
                            </div>
                          )}
                        </div>
                        
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-3">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                              {product.status || t('products.active')}
                            </span>
                            {product.is_featured && (
                              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                {t('products.featured')}
                              </span>
                            )}
                          </div>
                          
                          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                            {product.product_name}
                          </h3>
                          
                          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                            {product.technical_data || product.rich_text_description}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-500">{t('products.itemNumber', { number: product.item_number })}</span>
                            <Link 
                              to={`/products/${product.id}`}
                              className="bg-teal-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors"
                            >
                              {t('products.readMore')}
                            </Link>
                          </div>
                        </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  )
}


