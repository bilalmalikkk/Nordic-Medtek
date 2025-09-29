import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import landingPage from '../assets/Landingpage.png'
import alarm from '../assets/alarm.png'
import blodtrykk from '../assets/blodtrykk.png'
import fallsensor from '../assets/fallsensor.png'
import mann from '../assets/mann.png'
import hus from '../assets/hus.png'
import blokker from '../assets/blokker.png'
import zeroKr from '../assets/0kr.png'

export default function Private() {
  const { t } = useTranslation()
  
  return (
    <div className="private-page min-h-screen w-full">
      <div className="w-full">
      {/* Hero Section */}
      <section className="hero-section min-h-[calc(100vh-100px)] flex items-center w-full bg-gradient-to-br from-gray-50 to-white">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                    {t('private.hero.title')}
                  </h1>
                  <div className="w-20 h-1 bg-teal-600 rounded-full"></div>
                </div>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed bg-white p-4 sm:p-6 rounded-xl shadow-sm border-l-4 border-teal-500">
                  {t('private.hero.description')}
                </p>
                <div className="pt-4">
                  <Link 
                    to="/guidance" 
                    className="group inline-flex items-center justify-center bg-gray-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-gray-900 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
                  >
                    {t('private.hero.button')}
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
                  <div className="absolute -inset-4 bg-gradient-to-r from-teal-400 to-blue-500 rounded-2xl blur opacity-20"></div>
                  <div className="relative bg-white p-4 rounded-2xl shadow-2xl">
                    <img 
                      src={landingPage} 
                      alt="Eldre par som tar vare på hverandre" 
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="solutions-section py-20 w-full bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('private.solutions.title')}
            </h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Security Solutions Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="flex items-start">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-gray-700 leading-relaxed">
                    {t('private.solutions.security.title')}
                  </p>
                </div>
              </div>
            </div>

            {/* Medical Solutions Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="flex items-start">
                <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                  <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-gray-700 leading-relaxed">
                    {t('private.solutions.medical.title')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Concerns Section */}
      <section className="concerns-section py-20 w-full bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('private.concerns.title')}
            </h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
          </div>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Alarm and Communication */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <img src={alarm} alt="Alarm og kommunikasjon" className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {t('private.concerns.alarm.title')}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {t('private.concerns.alarm.description')}
                  </p>
                  <Link 
                    to="/alarm-communication" 
                    className="group inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    {t('private.concerns.alarm.button')}
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Medical Follow-up */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="text-center">
                  <div className="w-20 h-20 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <img src={blodtrykk} alt="Medisinsk oppfølging" className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {t('private.concerns.medical.title')}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {t('private.concerns.medical.description')}
                  </p>
                  <Link 
                    to="/medical-followup" 
                    className="group inline-flex items-center justify-center bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    {t('private.concerns.medical.button')}
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Safety */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <img src={fallsensor} alt="Trygghet" className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {t('private.concerns.safety.title')}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {t('private.concerns.safety.description')}
                  </p>
                  <Link 
                    to="/safety-solutions" 
                    className="group inline-flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    {t('private.concerns.safety.button')}
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* Guidance Section */}
      <section className="guidance-section py-20 w-full bg-white">
        <div className="w-full">
          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-3xl shadow-2xl p-12 border-2 border-orange-200">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {t('private.guidance.title')}
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                {t('private.guidance.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/guidance" 
                  className="group inline-flex items-center justify-center bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-900 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  {t('private.guidance.button1')}
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link 
                  to="/experiences" 
                  className="group inline-flex items-center justify-center bg-yellow-400 text-gray-800 px-8 py-4 rounded-xl font-semibold hover:bg-yellow-500 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  {t('private.guidance.button2')}
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section py-20 w-full bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('private.whyChoose.title')}
            </h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Easy Setup */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-green-200">
              <div className="flex items-start">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                  <img src={mann} alt="Enkel installasjon" className="w-10 h-10" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Enkel installasjon</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {t('private.whyChoose.easySetup')}
                  </p>
                </div>
              </div>
            </div>

            {/* Security */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-green-200">
              <div className="flex items-start">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                  <img src={hus} alt="Sikkerhet" className="w-10 h-10" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Sikkerhet</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {t('private.whyChoose.security')}
                  </p>
                </div>
              </div>
            </div>

            {/* Modular */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-green-200">
              <div className="flex items-start">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                  <img src={blokker} alt="Modulær løsning" className="w-10 h-10" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Modulær løsning</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {t('private.whyChoose.modular')}
                  </p>
                </div>
              </div>
            </div>

            {/* No Hidden Costs */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-green-200">
              <div className="flex items-start">
                <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                  <img src={zeroKr} alt="Ingen skjulte kostnader" className="w-10 h-10" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Ingen skjulte kostnader</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {t('private.whyChoose.noHiddenCosts')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section py-20 w-full bg-white">
        <div className="w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('private.faq.title')}
            </h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
          </div>
          <div className="space-y-6">
            {t('private.faq.questions', { returnObjects: true }).map((faq, index) => (
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
                {t('private.finalCta.title')}
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                {t('private.finalCta.description')}
              </p>
              <Link 
                to="/guidance" 
                className="group inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-12 py-6 rounded-2xl font-semibold text-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                {t('private.finalCta.button')}
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
            {t('private.footer')}
          </div>
        </div>
      </footer>
      </div>
    </div>
  )
}