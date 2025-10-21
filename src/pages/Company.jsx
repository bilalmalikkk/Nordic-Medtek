import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import heroImage from '../assets/Landingpage.png'

export default function Company() {
  const { t } = useTranslation()
  const location = useLocation()
  const fromPage = location.state?.from || '/'
  
  return (
    <div className="min-h-screen w-full">
      <div className="w-full">
      {/* Back Button */}
      <section className="py-4 w-full bg-gray-50">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to={fromPage}
            className="inline-flex items-center text-gray-600 hover:text-teal-600 transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-medium">Tilbake</span>
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="pt-12 pb-20 md:pt-16 md:pb-28 w-full relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                  {t('company.hero.title')}
                </h1>
                <div className="w-20 h-1 bg-teal-600 rounded-full"></div>
              </div>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 italic leading-relaxed bg-white p-4 sm:p-6 rounded-xl shadow-sm border-l-4 border-teal-500">
                {t('company.hero.description1')}
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/partners" 
                  state={{ from: '/company' }}
                  className="group inline-flex items-center justify-center bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-900 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  {t('company.hero.button1')}
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link 
                  to="/products" 
                  state={{ from: '/company' }}
                  className="group inline-flex items-center justify-center bg-yellow-200 text-gray-800 px-8 py-4 rounded-xl font-semibold hover:bg-yellow-300 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  {t('company.hero.button2')}
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link 
                  to="/competitive-advantage" 
                  state={{ from: '/company' }}
                  className="group inline-flex items-center justify-center bg-green-200 text-gray-800 px-8 py-4 rounded-xl font-semibold hover:bg-green-300 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  {t('company.hero.button3')}
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-lg">
                <div className="absolute -inset-4 bg-gradient-to-r from-teal-400 to-blue-500 rounded-2xl blur opacity-20"></div>
                <div className="relative bg-white p-4 rounded-2xl shadow-2xl">
                  <img 
                    src={heroImage} 
                    alt="Elderly woman and caregiver holding hands" 
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Collaborate Section */}
      <section className="py-20 w-full bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="w-full max-w-8xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('company.whyCollaborate.title')}</h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Ready to Start</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">{t('company.whyCollaborate.left')}</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Trust & Reliability</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">{t('company.whyCollaborate.right')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Collaborate With Section */}
      <section className="py-20 w-full bg-white">
        <div className="w-full max-w-8xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('company.whoCollaborate.title')}</h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
          </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-teal-200">
                <div className="w-16 h-16 bg-teal-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('company.whoCollaborate.careEnvironments.title')}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{t('company.whoCollaborate.careEnvironments.description')}</p>
                <Link to="/vaktrom-integration" state={{ from: '/company' }} className="inline-flex items-center text-teal-600 hover:text-teal-700 font-semibold transition-colors group">
                  {t('company.whoCollaborate.careEnvironments.link')}
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-blue-200">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('company.whoCollaborate.broaderAssortment.title')}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{t('company.whoCollaborate.broaderAssortment.description')}</p>
                <Link to="/partners" state={{ from: '/company' }} className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors group">
                  {t('company.whoCollaborate.broaderAssortment.link')}
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-green-200">
                <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('company.whoCollaborate.competitiveAdvantage.title')}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{t('company.whoCollaborate.competitiveAdvantage.description')}</p>
                <Link to="/guidance" state={{ from: '/company' }} className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold transition-colors group">
                  {t('company.whoCollaborate.competitiveAdvantage.link')}
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
        </div>
      </section>

      {/* Partnership Benefits Section */}
      <section className="py-20 w-full bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="w-full max-w-8xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('company.benefits.title')}</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto rounded-full"></div>
          </div>
            <div className="grid md:grid-cols-2 gap-8">
              {(t('company.benefits.items', { returnObjects: true }) || []).map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-green-200">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 w-full bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="w-full max-w-8xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">{t('company.cta.title')}</h2>
          <Link 
            to="/partners" 
            state={{ from: '/company' }}
            className="group inline-flex items-center justify-center bg-teal-600 text-white px-12 py-6 rounded-2xl font-semibold text-lg hover:bg-teal-700 transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-teal-500/25"
          >
            {t('company.cta.button')}
            <svg className="w-6 h-6 ml-3 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 w-full bg-white">
        <div className="w-full max-w-8xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('company.faq.title')}</h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
          </div>
            <div className="space-y-6">
              {(t('company.faq.questions', { returnObjects: true }) || []).map((faq, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed ml-12">{faq.answer}</p>
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 w-full bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="w-full max-w-8xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
          <div className="bg-white rounded-3xl shadow-2xl p-12 border-2 border-orange-200">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="text-left flex-1">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('company.finalCta.title')}</h2>
                <p className="text-xl text-gray-700 leading-relaxed">
                  {t('company.finalCta.description')}
                </p>
              </div>
              <div className="flex-shrink-0">
                <Link 
                  to="/guidance" 
                  state={{ from: '/company' }}
                  className="group inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-12 py-6 rounded-2xl font-semibold text-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
                >
                  {t('company.finalCta.button')}
                  <svg className="w-6 h-6 ml-3 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-200 py-8 w-full">
        <div className="w-full max-w-8xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 text-center">
          <p className="text-gray-600">{t('company.footer')}</p>
        </div>
      </footer>
      </div>
    </div>
  )
}


