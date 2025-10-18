import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import videoCallImage from '../assets/video call.png'

export default function EaseBlink1() {
  const { t } = useTranslation()
  
  return (
    <div className="easeblink1-page min-h-screen w-full">
      <div className="w-full">
        {/* Back Button */}
        <div className="w-full bg-gray-50 border-b border-gray-200">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link 
              to="/private"
              className="inline-flex items-center text-gray-700 hover:text-teal-600 transition-colors group"
            >
              <svg 
                className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="font-medium">{t('easeblink1.backButton')}</span>
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 md:py-24 w-full bg-white">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  {t('easeblink1.title')}
                </h1>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  {t('easeblink1.description')}
                </p>
              </div>
              
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="w-80 h-80 bg-white rounded-3xl shadow-2xl border-4 border-gray-100 overflow-hidden">
                    <img 
                      src={videoCallImage} 
                      alt="Video call interface" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-teal-500 rounded-full opacity-80"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full opacity-60"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-16 w-full bg-gradient-to-b from-gray-50 to-white">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="p-8 md:p-12">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-6">
                      <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      {t('easeblink1.isolationTitle')}
                    </h2>
                  </div>
                  
                  <div className="prose prose-lg max-w-none text-gray-700 mb-8">
                    <p className="text-xl leading-relaxed">
                      {t('easeblink1.isolationDescription')}
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <Link 
                      to="/contact"
                      className="inline-flex items-center bg-teal-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-teal-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      {t('easeblink1.ctaButton')}
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 w-full bg-white">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t('easeblink1.featuresTitle')}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {t('easeblink1.featuresDescription')}
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('easeblink1.feature1.title')}</h3>
                <p className="text-gray-600">{t('easeblink1.feature1.description')}</p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('easeblink1.feature2.title')}</h3>
                <p className="text-gray-600">{t('easeblink1.feature2.description')}</p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('easeblink1.feature3.title')}</h3>
                <p className="text-gray-600">{t('easeblink1.feature3.description')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 w-full bg-gradient-to-br from-teal-50 to-blue-50">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t('easeblink1.ctaTitle')}
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              {t('easeblink1.ctaDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="inline-flex items-center bg-teal-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-teal-700 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {t('easeblink1.contactButton')}
              </Link>
              <Link 
                to="/demo"
                className="inline-flex items-center bg-white text-teal-600 border-2 border-teal-600 px-8 py-4 rounded-xl font-semibold hover:bg-teal-50 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {t('easeblink1.demoButton')}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
