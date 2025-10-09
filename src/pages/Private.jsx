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
      <section className="py-20 md:py-28 w-full relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
                  {t('private.hero.title')}
                </h1>
                <div className="w-16 h-1 bg-teal-600 rounded-full"></div>
              </div>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed bg-white p-3 sm:p-4 rounded-xl shadow-sm border-l-4 border-teal-500">
                {t('private.hero.description')}
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-sm lg:max-w-md xl:max-w-lg">
                <div className="absolute -inset-2 bg-gradient-to-r from-teal-400 to-blue-500 rounded-2xl blur opacity-20"></div>
                <div className="relative bg-white p-3 rounded-2xl shadow-2xl">
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
      </section>

      {/* Solutions Section */}
      <section className="py-20 w-full bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="w-full max-w-8xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('private.solutions.title')}
            </h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Security Solutions Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Fokus på sikkerhet og egeninnsats
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Om du ønsker en løsning som fokuserer på sikkerhet, mer en medisinsk oppfølging av dine kjære har vi gode løsninger for dette.<br />
                  Les mer under
                </p>
              </div>
            </div>

            {/* Medical Solutions Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Fokus på medisinsk oppfølging
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Ønsker du at en doktor skal overvåke brukeren regelmessig. Vår partner salubi tilbyr digitalt tilsyn som gir en helhetlig oversikt over din tilstand og aktivitet. Helsepersonell følger med på og analyserer måledata for tidlig intervensjon. For mer informasjon gå til <a href="https://salubi.no" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">salubi.no</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Concerns Section */}
      <section className="py-20 w-full bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="w-full max-w-8xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('private.concerns.title')}
            </h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
          </div>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Alarm and Communication */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 flex flex-col">
                <div className="text-center flex-1 flex flex-col">
                  <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <img src={alarm} alt="Alarm og kommunikasjon" className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {t('private.concerns.alarm.title')}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed flex-1">
                    {t('private.concerns.alarm.description')}
                  </p>
                </div>
                <div className="text-center mt-auto">
                  <Link 
                    to="/alarm-communication" 
                    className="group inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Alarmknapper og rask varsling
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Safety */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 flex flex-col">
                <div className="text-center flex-1 flex flex-col">
                  <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <img src={fallsensor} alt="Trygghet" className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {t('private.concerns.safety.title')}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed flex-1">
                    {t('private.concerns.safety.description')}
                  </p>
                </div>
                <div className="text-center mt-auto">
                  <Link 
                    to="/safety-solutions" 
                    className="group inline-flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Gå til trygghet og fallsikring
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Medical Follow-up */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 flex flex-col">
                <div className="text-center flex-1 flex flex-col">
                  <div className="w-20 h-20 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <img src={blodtrykk} alt="Medisinsk oppfølging" className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {t('private.concerns.medical.title')}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed flex-1">
                    {t('private.concerns.medical.description')}
                  </p>
                </div>
                <div className="text-center mt-auto">
                  <Link 
                    to="/medical-followup" 
                    className="group inline-flex items-center justify-center bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Medisinsk oppfølging
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
      <section className="py-20 w-full bg-white">
        <div className="w-full max-w-8xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-3xl shadow-2xl p-12 border-2 border-orange-200">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {t('private.guidance.title')}
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                {t('private.guidance.description')}
              </p>
              <div className="flex justify-center">
                <Link 
                  to="/guidance" 
                  className="group inline-flex items-center justify-center bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-900 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  {t('private.guidance.button1')}
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
      <section className="py-20 w-full bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="w-full max-w-8xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
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
      <section className="py-20 w-full bg-white">
        <div className="w-full max-w-8xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('private.faq.title')}
            </h2>
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
                <p className="text-gray-700 leading-relaxed ml-12">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 w-full bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="w-full max-w-8xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
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
        <div className="w-full max-w-8xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
          <div className="text-center text-slate-600">
            {t('private.footer')}
          </div>
        </div>
      </footer>
      </div>
    </div>
  )
}