import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import CmsApiService, { API_BASE_URL } from '../services/cmsApi'

export default function ProductDetail() {
  const { t } = useTranslation()
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [showDatasheet, setShowDatasheet] = useState(false)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true)
        const data = await CmsApiService.getProduct(id)
        setProduct(data.product)
      } catch (error) {
        setError(error.message)
        console.error('Error fetching product:', error)
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchProduct()
    }
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen w-full bg-gray-50">
        <div className="container-page py-16">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading product...</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error || !product) {
    return (
      <div className="min-h-screen w-full bg-gray-50">
        <div className="container-page py-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Product Not Found</h1>
            <p className="text-gray-600 mb-8">{error || 'The product you are looking for does not exist.'}</p>
            <Link 
              to="/products"
              className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors"
            >
              Back to Products
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen w-full bg-gray-50">
      <div className="container-page py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-teal-600">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-teal-600">Products</Link>
            <span>/</span>
            <span className="text-gray-900">{product.product_name}</span>
          </div>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-6">
            {product.image_url ? (
              <div className="aspect-w-16 aspect-h-12 bg-white rounded-2xl shadow-lg overflow-hidden">
                <img 
                  src={product.image_url.startsWith('http') ? product.image_url : `${API_BASE_URL}${product.image_url}`}
                  alt={product.product_name}
                  className="w-full h-96 object-cover"
                />
              </div>
            ) : (
              <div className="aspect-w-16 aspect-h-12 bg-gradient-to-br from-teal-100 to-teal-200 rounded-2xl shadow-lg flex items-center justify-center">
                <svg className="w-24 h-24 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-teal-100 text-teal-800">
                  {product.category_name || 'Product'}
                </span>
                {product.is_featured && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                    Featured
                  </span>
                )}
              </div>
              
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.product_name}</h1>
              
              <p className="text-lg text-gray-600 mb-6">{product.title}</p>
              
              <div className="bg-gray-100 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-600 mb-1">Item Number</p>
                <p className="font-semibold text-gray-900">{product.item_number}</p>
              </div>
            </div>

            {/* Technical Data */}
            {product.technical_data && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Technical Specifications</h3>
                <p className="text-gray-700 leading-relaxed">{product.technical_data}</p>
              </div>
            )}

            {/* Rich Text Description */}
            {product.rich_text_description && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Description</h3>
                <div 
                  className="text-gray-700 leading-relaxed prose prose-sm max-w-none"
                  dangerouslySetInnerHTML={{ __html: product.rich_text_description }}
                />
              </div>
            )}

            {/* Datasheet Section */}
            {product.datasheet_url && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Product Datasheet</h3>
                
                {!showDatasheet ? (
                  <div className="text-center">
                    <div className="mb-4">
                      <svg className="w-16 h-16 text-red-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                      <p className="text-gray-600 mb-4">View the complete product datasheet with detailed specifications and technical information.</p>
                    </div>
                    <button
                      onClick={() => setShowDatasheet(true)}
                      className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors flex items-center mx-auto"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      View Datasheet
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <p className="text-gray-600">Datasheet is now visible below</p>
                      <button
                        onClick={() => setShowDatasheet(false)}
                        className="text-gray-500 hover:text-gray-700 text-sm"
                      >
                        Hide Datasheet
                      </button>
                    </div>
                    <div className="border rounded-lg overflow-hidden">
                      <iframe
                        src={product.datasheet_url.startsWith('http') ? product.datasheet_url : `${API_BASE_URL}${product.datasheet_url}`}
                        className="w-full h-96"
                        title={`${product.product_name} Datasheet`}
                      />
                    </div>
                    <div className="text-center">
                      <a
                        href={product.datasheet_url.startsWith('http') ? product.datasheet_url : `${API_BASE_URL}${product.datasheet_url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors inline-flex items-center"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Download PDF
                      </a>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link 
                to="/products"
                className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors text-center"
              >
                Back to Products
              </Link>
              <a
                href="mailto:info@nordicmedtek.com?subject=Inquiry about product"
                className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors text-center"
              >
                Contact for Information
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
