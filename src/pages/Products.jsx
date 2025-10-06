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
    { id: 'fall-sensor', product_name: 'Fallsensor', item_number: '11501', category_name: 'Sikkerhet', technical_data: 'Varsler fall i hjemmet og ute.', rich_text_description: '<p>Avansert sensor som oppdager fallhendelser i hjemmet og utendørs. Systemet sender automatisk varsel til pårørende eller helsepersonell ved farlige situasjoner.</p>' },
    { id: 'bp-monitor', product_name: 'Blodtrykksmåler', item_number: '12602', category_name: 'Medisinsk', technical_data: 'Automatiserte målinger med deling til pårørende/lege.', rich_text_description: '<p>Moderne blodtrykksmåler som automatisk sender målinger til helsepersonell og pårørende. Sikrer kontinuerlig overvåking av pasientens helsetilstand.</p>' },
    { id: 'pill-dispenser', product_name: 'Medisin-dispenser', item_number: '11503', category_name: 'Sikkerhet', technical_data: 'Påminnelser og varsler ved uteblitt dose.', rich_text_description: '<p>Smart medisin-dispenser som gir påminnelser og sender varsler hvis medisin ikke blir tatt. Integrerer med helsepersonells systemer for optimal medisinering.</p>' }
  ]

  // Use CMS products if available, otherwise fallback to static data
  const displayProducts = products.length > 0 ? products : fallbackProducts
  
  // Debug: Log the products being used
  console.log('Products from CMS:', products)
  console.log('Display products:', displayProducts)
  console.log('First product rich text:', displayProducts[0]?.rich_text_description)
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
              <div className="mt-6 flex justify-center">
                <Link
                  to="/trygghet-og-fallsikring"
                  className="inline-flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors"
                >
                  Gå til trygghet og fallsikring
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  to="/alarm-buttons"
                  className="ml-4 inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
                >
                  Alarmknapper og rask varsling
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
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
                      <div key={product.id} className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
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
                        
                        <div className="p-6 flex flex-col flex-grow text-left">
                          <h3 className="text-xl font-semibold text-gray-900 mb-1 group-hover:text-teal-600 transition-colors">
                            {product.product_name}
                          </h3>
                          
                          <p className="text-gray-600 text-sm mb-2">
                            {product.item_number}
                          </p>
                          
                          <p className="text-gray-800 text-sm font-bold mb-2">
                            {product.technical_data}
                          </p>
                          
                          <div 
                            className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow prose prose-sm max-w-none"
                            dangerouslySetInnerHTML={{ 
                              __html: product.rich_text_description || product.rich_text || '<p><em>No rich text content available</em></p>' 
                            }}
                          />
                          
                          <div className="flex justify-center mt-auto">
                            <Link
                              to={product.datasheet_url ? `/products/${product.id}/datasheet` : '#'}
                              className={`text-sm px-6 py-3 rounded-lg transition-colors flex items-center gap-2 ${
                                product.datasheet_url 
                                  ? 'bg-teal-600 text-white hover:bg-teal-700' 
                                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                              }`}
                              onClick={(e) => !product.datasheet_url && e.preventDefault()}
                            >
                              Datasheet
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


