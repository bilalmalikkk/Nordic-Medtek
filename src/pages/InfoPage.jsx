import { useParams, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function InfoPage() {
  const { infoType } = useParams()
  const navigate = useNavigate()
  const { t } = useTranslation()

  const content = {
    easyToInstall: {
      title: t('homePage1.whyChooseUs.cards.easyToInstall.popup.title'),
      description: t('homePage1.whyChooseUs.cards.easyToInstall.popup.description')
    },
    bestPrice: {
      title: t('homePage1.whyChooseUs.cards.bestPrice.popup.title'),
      description: t('homePage1.whyChooseUs.cards.bestPrice.popup.description')
    }
  }

  const pageContent = content[infoType] || content.easyToInstall

  return (
    <div className="min-h-screen w-full bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between max-w-[1600px] mx-auto">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate(-1)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <h1 className="text-xl font-semibold text-gray-900">{pageContent.title}</h1>
            </div>
            <button
              onClick={() => navigate(-1)}
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-sm font-medium"
            >
              Lukk
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="w-full py-12">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                {pageContent.title}
              </h2>
              <div className="w-16 h-1 bg-teal-600 rounded-full"></div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                {pageContent.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
