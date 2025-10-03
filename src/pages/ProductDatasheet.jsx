import { useParams, useNavigate, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useProduct } from '../hooks/useCmsProducts'
import { API_BASE_URL } from '../services/cmsApi'

export default function ProductDatasheet() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { t } = useTranslation()
  const { product, loading, error } = useProduct(id)

  if (loading) {
    return (
      <div className="min-h-screen w-full bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto mb-4"></div>
          <p className="text-gray-600">{t('products.loading')}</p>
        </div>
      </div>
    )
  }

  if (error || !product) {
    return (
      <div className="min-h-screen w-full bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-gray-600 mb-4">{t('products.noDatasheet')}</p>
          <Link to="/products" className="text-teal-600 hover:text-teal-700 hover:underline">
            ← {t('products.backToProducts')}
          </Link>
        </div>
      </div>
    )
  }

  const datasheetUrl = product.datasheet_url?.startsWith('http') 
    ? product.datasheet_url 
    : product.datasheet_url 
      ? `${API_BASE_URL}${product.datasheet_url}` 
      : null

  return (
    <div className="min-h-screen w-full bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate(-1)}
                className="text-gray-600 hover:text-gray-900 transition-colors p-2 rounded-lg hover:bg-gray-100"
                aria-label="Go back"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div>
                <h1 className="text-lg sm:text-xl font-semibold text-gray-900">
                  {product.product_name}
                </h1>
                <p className="text-sm text-gray-600">{t('products.viewDatasheet')}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {datasheetUrl && (
                <a
                  href={datasheetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm text-teal-600 hover:text-teal-700 hover:bg-teal-50 rounded-lg transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  {t('products.openInNewTab')}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* PDF Viewer */}
      <div className="w-full h-[calc(100vh-80px)]">
        {datasheetUrl ? (
          <iframe
            src={`${datasheetUrl}#view=FitH`}
            className="w-full h-full border-0"
            title={`${product.product_name} - ${t('products.viewDatasheet')}`}
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="text-gray-600 mb-4">{t('products.noDatasheet')}</p>
              <Link to="/products" className="text-teal-600 hover:text-teal-700 hover:underline">
                ← {t('products.backToProducts')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

