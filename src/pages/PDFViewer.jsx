import { useParams, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function PDFViewer() {
  const { pdfName } = useParams()
  const navigate = useNavigate()
  const { t } = useTranslation()

  const pdfTitles = {
    'innstalation_gateway.pdf': 'Installasjonsveiledning for Gateway',
    'innstalation_radar_R2.pdf': 'Installasjonsveiledning for Radarbasert Fallsensor',
    'innstalation_bloodpresure.pdf': 'Installasjonsveiledning for Blodtrykksmåler'
  }

  const title = pdfTitles[pdfName] || 'PDF Document'

  return (
    <div className="min-h-screen w-full bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate(-1)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <h1 className="text-xl font-semibold text-gray-900">{title}</h1>
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

      {/* PDF Content */}
      <div className="w-full h-[calc(100vh-80px)]">
        <iframe
          src={`/${pdfName}`}
          className="w-full h-full border-0"
          title={title}
        />
      </div>
    </div>
  )
}
