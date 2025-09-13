import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function Municipality() {
  const { t } = useTranslation()
  
  return (
    <div className="municipality-page min-h-screen w-full">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="hero-section min-h-[calc(100vh-100px)] flex items-center w-full bg-gradient-to-br from-gray-50 to-white">
        <div className="w-full">
          <div className="text-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  {t('municipality.hero.title')}
                </h1>
                <div className="w-20 h-1 bg-teal-600 mx-auto rounded-full"></div>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed bg-white p-6 rounded-xl shadow-sm border-l-4 border-teal-500">
                {t('municipality.hero.description')}
              </p>
              <div className="pt-4">
                <Link 
                  to="/demo" 
                  className="group inline-flex items-center justify-center bg-yellow-400 text-gray-800 px-8 py-4 rounded-xl font-semibold hover:bg-yellow-500 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  {t('municipality.hero.button')}
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section py-20 w-full bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Kommunale fordeler</h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
          </div>
            
            {/* 6-card grid layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Row 1 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {t('municipality.benefits.safeCare.title')}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('municipality.benefits.safeCare.link')}
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {t('municipality.benefits.moreTime.title')}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('municipality.benefits.moreTime.link')}
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {t('municipality.benefits.knowledgeBase.title')}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('municipality.benefits.knowledgeBase.link')}
                </p>
              </div>

              {/* Row 2 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {t('municipality.benefits.economic.title')}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('municipality.benefits.economic.link')}
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {t('municipality.benefits.secureData.title')}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('municipality.benefits.secureData.link')}
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {t('municipality.benefits.partnership.title')}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('municipality.benefits.partnership.link')}
                </p>
              </div>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-20 w-full bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            {t('municipality.cta.title')}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/guidance" 
              className="group inline-flex items-center justify-center bg-teal-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-teal-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {t('municipality.cta.contact')}
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link 
              to="/demo" 
              className="group inline-flex items-center justify-center bg-yellow-500 text-gray-800 px-8 py-4 rounded-xl font-semibold hover:bg-yellow-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {t('municipality.cta.demo')}
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section py-20 w-full bg-white">
        <div className="w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('municipality.faq.title')}
            </h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
          </div>
          <div className="space-y-6">
            {t('municipality.faq.questions', { returnObjects: true }).map((faq, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed ml-12">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta-section py-20 w-full bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="w-full">
          <div className="bg-white rounded-3xl shadow-2xl p-12 border-2 border-orange-200">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {t('municipality.finalCta.title')}
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                {t('municipality.finalCta.description')}
              </p>
              <Link 
                to="/guidance" 
                className="group inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-12 py-6 rounded-2xl font-semibold text-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                {t('municipality.finalCta.button')}
                <svg className="w-6 h-6 ml-3 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-200 py-8 w-full">
        <div className="w-full">
          <div className="text-center text-slate-600">
            {t('municipality.footer')}
          </div>
        </div>
      </footer>
      </div>
    </div>
  )
}