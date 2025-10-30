import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import SEOHead from '../components/SEOHead'

export default function PrivacyPolicy() {
  const { i18n } = useTranslation()
  const currentLanguage = i18n.language || 'no'
  
  const pdfUrl = '/privacy-statement.pdf'
  const title = currentLanguage === 'no' ? 'Personvernerklæring' : 'Privacy Policy'
  const description = currentLanguage === 'no' 
    ? 'Personvernerklæring for Nordic Medical Technologies AS'
    : 'Privacy Policy for Nordic Medical Technologies AS'

  useEffect(() => {
    // Open PDF in new tab when component mounts
    window.open(pdfUrl, '_blank')
  }, [])

  return (
    <>
      <SEOHead 
        title={title}
        description={description}
        keywords="privacy policy, personvernerklæring, GDPR, data protection, Nordic Medical Technologies"
        url="/privacy"
      />
      <div className="min-h-screen w-full bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-2xl px-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            {currentLanguage === 'no' 
              ? 'PDF-en åpnes i et nytt vindu. Hvis den ikke åpnes automatisk, klikk på lenken nedenfor.'
              : 'The PDF will open in a new window. If it doesn\'t open automatically, please click the link below.'}
          </p>
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors text-lg font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            {currentLanguage === 'no' ? 'Åpne personvernerklæring' : 'Open Privacy Policy'}
          </a>
        </div>
      </div>
    </>
  )
}
