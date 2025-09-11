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
      {/* Hero Section */}
      <section className="hero-section bg-white h-[calc(100vh-100px)] flex items-center w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 leading-tight mb-6">
                {t('private.hero.title')}
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {t('private.hero.description')}
              </p>
              <Link 
                to="/guidance" 
                className="inline-block bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-slate-800 transition-colors"
              >
                {t('private.hero.button')}
              </Link>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-lg">
                <img 
                  src={landingPage} 
                  alt="Eldre par som tar vare på hverandre" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Concerns Section */}
      <section className="concerns-section bg-slate-100 py-16 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">
            {t('private.concerns.title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Alarm and Communication */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-center mb-6">
                <img src={alarm} alt="Alarm og kommunikasjon" className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  {t('private.concerns.alarm.title')}
                </h3>
                <p className="text-slate-600 mb-6">
                  {t('private.concerns.alarm.description')}
                </p>
                <Link 
                  to="/products" 
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  {t('private.concerns.alarm.button')}
                </Link>
              </div>
            </div>

            {/* Medical Follow-up */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-center mb-6">
                <img src={blodtrykk} alt="Medisinsk oppfølging" className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  {t('private.concerns.medical.title')}
                </h3>
                <p className="text-slate-600 mb-6">
                  {t('private.concerns.medical.description')}
                </p>
                <Link 
                  to="/products" 
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  {t('private.concerns.medical.button')}
                </Link>
              </div>
            </div>

            {/* Safety */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-center mb-6">
                <img src={fallsensor} alt="Trygghet" className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  {t('private.concerns.safety.title')}
                </h3>
                <p className="text-slate-600 mb-6">
                  {t('private.concerns.safety.description')}
                </p>
                <Link 
                  to="/products" 
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  {t('private.concerns.safety.button')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guidance Section */}
      <section className="guidance-section bg-white py-16 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="border-2 border-dashed border-orange-400 bg-orange-50 p-8 rounded-lg text-center">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                {t('private.guidance.title')}
              </h2>
              <p className="text-slate-600 mb-8 text-lg">
                {t('private.guidance.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/guidance" 
                  className="inline-block bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-slate-800 transition-colors"
                >
                  {t('private.guidance.button1')}
                </Link>
                <Link 
                  to="/experiences" 
                  className="inline-block bg-yellow-400 text-slate-800 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
                >
                  {t('private.guidance.button2')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section bg-green-50 py-16 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">
            {t('private.whyChoose.title')}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Easy Setup - Image Left, Text Right */}
            <div className="flex items-center gap-6">
              <div className="flex-shrink-0">
                <img src={mann} alt="Enkel installasjon" className="w-16 h-16" />
              </div>
              <div className="flex-1">
                <p className="text-slate-700 text-base leading-relaxed">
                  {t('private.whyChoose.easySetup')}
                </p>
              </div>
            </div>

            {/* Security - Image Left, Text Right */}
            <div className="flex items-center gap-6">
              <div className="flex-shrink-0">
                <img src={hus} alt="Sikkerhet" className="w-16 h-16" />
              </div>
              <div className="flex-1">
                <p className="text-slate-700 text-base leading-relaxed">
                  {t('private.whyChoose.security')}
                </p>
              </div>
            </div>

            {/* Modular - Image Left, Text Right */}
            <div className="flex items-center gap-6">
              <div className="flex-shrink-0">
                <img src={blokker} alt="Modulær løsning" className="w-16 h-16" />
              </div>
              <div className="flex-1">
                <p className="text-slate-700 text-base leading-relaxed">
                  {t('private.whyChoose.modular')}
                </p>
              </div>
            </div>

            {/* No Hidden Costs - Image Left, Text Right */}
            <div className="flex items-center gap-6">
              <div className="flex-shrink-0">
                <img src={zeroKr} alt="Ingen skjulte kostnader" className="w-16 h-16" />
              </div>
              <div className="flex-1">
                <p className="text-slate-700 text-base leading-relaxed">
                  {t('private.whyChoose.noHiddenCosts')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section bg-white py-16 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">
            {t('private.faq.title')}
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {t('private.faq.questions', { returnObjects: true }).map((faq, index) => (
              <div key={index} className={index < 3 ? "border-b border-slate-200 pb-6" : "pb-6"}>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  {faq.question}
                </h3>
                <p className="text-slate-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta-section bg-white py-16 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="border-2 border-dashed border-orange-400 bg-orange-50 p-8 rounded-lg text-center">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                {t('private.finalCta.title')}
              </h2>
              <p className="text-slate-600 mb-8 text-lg">
                {t('private.finalCta.description')}
              </p>
              <Link 
                to="/guidance" 
                className="inline-block bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-slate-800 transition-colors"
              >
                {t('private.finalCta.button')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-200 py-8 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center text-slate-600">
            {t('private.footer')}
          </div>
        </div>
      </footer>
    </div>
  )
}