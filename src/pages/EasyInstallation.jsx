import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import plugPlayImage from '../assets/plug_play_general.png'

export default function EasyInstallation() {
  const { t } = useTranslation()
  
  return (
    <div className="min-h-screen w-full bg-white">
      {/* Back Button */}
      <section className="py-4 w-full bg-gray-50">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/kommune1" 
            className="inline-flex items-center text-gray-600 hover:text-teal-600 transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-medium">Tilbake</span>
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full bg-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {t('easyInstallation.title')}
              </h1>
              <div className="w-16 h-1 bg-teal-600 rounded-full"></div>
              <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
                {t('easyInstallation.description')}
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src={plugPlayImage} 
                alt="Plug & Play instant setup" 
                className="w-full max-w-[400px] h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How Will You Take Care Section */}
      <section className="w-full bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t('easyInstallation.howToCare.title')}
            </h2>
            <p className="text-xl text-gray-700 font-semibold">
              {t('easyInstallation.howToCare.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Gateway Installation Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {t('easyInstallation.howToCare.gateway.title')}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6 flex-grow">
                {t('easyInstallation.howToCare.gateway.description')}
              </p>
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center">
                {t('easyInstallation.howToCare.gateway.button')}
              </button>
            </div>

            {/* Fall Sensor Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {t('easyInstallation.howToCare.fallSensor.title')}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6 flex-grow">
                {t('easyInstallation.howToCare.fallSensor.description')}
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center">
                {t('easyInstallation.howToCare.fallSensor.button')}
              </button>
            </div>

            {/* Blood Pressure Monitor Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {t('easyInstallation.howToCare.bloodPressure.title')}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6 flex-grow">
                {t('easyInstallation.howToCare.bloodPressure.description')}
              </p>
              <button className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors text-center">
                {t('easyInstallation.howToCare.bloodPressure.button')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sensors You Can Install Section */}
      <section className="w-full bg-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
            {t('easyInstallation.sensors.title')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg border border-gray-200 flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {t('easyInstallation.sensors.card1.title')}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6 flex-grow">
                {t('easyInstallation.sensors.card1.description')}
              </p>
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center flex items-center justify-center gap-2">
                {t('easyInstallation.sensors.card1.button')}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg border border-gray-200 flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {t('easyInstallation.sensors.card2.title')}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6 flex-grow">
                {t('easyInstallation.sensors.card2.description')}
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center flex items-center justify-center gap-2">
                {t('easyInstallation.sensors.card2.button')}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg border border-gray-200 flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {t('easyInstallation.sensors.card3.title')}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6 flex-grow">
                {t('easyInstallation.sensors.card3.description')}
              </p>
              <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors text-center flex items-center justify-center gap-2">
                {t('easyInstallation.sensors.card3.button')}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Wondering About Something Section */}
      <section className="w-full bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
            {t('easyInstallation.wondering.title')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: FAQ */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-dashed border-orange-400 flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {t('easyInstallation.wondering.faq.title')}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6 flex-grow">
                {t('easyInstallation.wondering.faq.description')}
              </p>
              <button className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors text-center">
                {t('easyInstallation.wondering.faq.button')}
              </button>
            </div>

            {/* Card 2: Experiences */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-dashed border-orange-400 flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {t('easyInstallation.wondering.experiences.title')}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6 flex-grow">
                {t('easyInstallation.wondering.experiences.description')}
              </p>
              <button className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors text-center">
                {t('easyInstallation.wondering.experiences.button')}
              </button>
            </div>

            {/* Card 3: Contact */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-dashed border-orange-400 flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {t('easyInstallation.wondering.contact.title')}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6 flex-grow">
                {t('easyInstallation.wondering.contact.description')}
              </p>
              <button className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors text-center">
                {t('easyInstallation.wondering.contact.button')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-200 py-8 w-full">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="text-center text-slate-600">
            {t('easyInstallation.footer')}
          </div>
        </div>
      </footer>
    </div>
  )
}

