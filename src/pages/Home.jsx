import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import heroImage from '../assets/Landingpage.png'

export default function Home() {
  const { t } = useTranslation()
  return (
    <div className="min-h-screen w-full">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-100px)] flex items-center w-full bg-gradient-to-br from-gray-50 to-white">
        <div className="w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  {t('hero.title1')}
                </h1>
                <div className="w-20 h-1 bg-teal-600 rounded-full"></div>
              </div>
              <p className="text-xl text-gray-700 italic leading-relaxed bg-white p-6 rounded-xl shadow-sm border-l-4 border-teal-500">
                {t('hero.lead')}
              </p>
              <div className="pt-4">
                <Link 
                  to="/demo" 
                  className="group inline-flex items-center justify-center bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-900 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  {t('hero.button')}
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

      {/* Hvem er du Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-yellow-100 w-full">
        <div className="w-full px-8 sm:px-12 lg:px-16 xl:px-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('home.whoAreYou')}</h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
          </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('home.targetAudiences.municipalities.title')}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {t('home.targetAudiences.municipalities.description')}
                </p>
                <Link 
                  to="/municipality" 
                  className="inline-flex items-center text-teal-600 hover:text-teal-700 font-semibold transition-colors group"
                >
                  {t('home.targetAudiences.municipalities.link')}
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('home.targetAudiences.healthcare.title')}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {t('home.targetAudiences.healthcare.description')}
                </p>
                <Link 
                  to="/company" 
                  className="inline-flex items-center text-teal-600 hover:text-teal-700 font-semibold transition-colors group"
                >
                  {t('home.targetAudiences.healthcare.link')}
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('home.targetAudiences.relatives.title')}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {t('home.targetAudiences.relatives.description')}
                </p>
                <Link 
                  to="/private" 
                  className="inline-flex items-center text-teal-600 hover:text-teal-700 font-semibold transition-colors group"
                >
                  {t('home.targetAudiences.relatives.link')}
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('home.targetAudiences.partners.title')}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {t('home.targetAudiences.partners.description')}
                </p>
                <Link 
                  to="/partners" 
                  className="inline-flex items-center text-teal-600 hover:text-teal-700 font-semibold transition-colors group"
                >
                  {t('home.targetAudiences.partners.link')}
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
        </div>
      </section>

      {/* Hvorfor - vårt formål Section */}
      <section className="py-20 w-full bg-white">
        <div className="w-full px-8 sm:px-12 lg:px-16 xl:px-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('home.why.title')}</h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
          </div>
          <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-8 rounded-2xl shadow-lg border border-teal-100">
            <p className="text-xl text-gray-700 leading-relaxed text-center">
              {t('home.why.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Hvordan - vår tilnærming Section */}
      <section className="py-20 w-full bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="w-full px-8 sm:px-12 lg:px-16 xl:px-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('home.how.title')}</h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100">
            <p className="text-xl text-gray-700 leading-relaxed text-center">
              {t('home.how.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Hva - våre løsninger Section */}
      <section className="py-20 w-full bg-white">
        <div className="w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('home.what.title')}</h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {(t('home.what.solutions', { returnObjects: true }) || []).map((solution, index) => (
              <div key={index} className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-teal-200">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">{solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fordeler Section */}
      <section className="py-20 w-full bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('home.benefits.title')}</h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {(t('home.benefits.items', { returnObjects: true }) || []).map((benefit, index) => (
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

      {/* First CTA Section */}
      <section className="py-20 w-full bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">{t('home.cta1.title')}</h2>
          <Link 
            to="/guidance" 
            className="group inline-flex items-center justify-center bg-teal-600 text-white px-12 py-6 rounded-2xl font-semibold text-lg hover:bg-teal-700 transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-teal-500/25"
          >
            {t('home.cta1.button')}
            <svg className="w-6 h-6 ml-3 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 w-full bg-white">
        <div className="w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('home.faq.title')}</h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
          </div>
          <div className="space-y-6">
            {(t('home.faq.questions', { returnObjects: true }) || []).map((faq, index) => (
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
        <div className="w-full px-8 sm:px-12 lg:px-16 xl:px-20">
          <div className="bg-white rounded-3xl shadow-2xl p-12 border-2 border-orange-200">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('home.cta2.title')}</h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                {t('home.cta2.description')}
              </p>
              <Link 
                to="/guidance" 
                className="group inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-12 py-6 rounded-2xl font-semibold text-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                {t('home.cta2.button')}
                <svg className="w-6 h-6 ml-3 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-200 py-8 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">{t('home.footer')}</p>
        </div>
      </footer>
      </div>
    </div>
  )
}


