import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'
import trendsNoBackgroundImage from '../assets/trends_no_background.png'
import fallOnPhoneImage from '../assets/fall_on_phone.png'
import sykepleierPaVaktrommetImage from '../assets/sykepleier_på_vaktrommet.png'

export default function VaktrommetKommune() {
  const { t } = useTranslation()
  const location = useLocation()
  const from = location.state?.from || '/kommune1'
  
  return (
    <div className="vaktrommet-page min-h-screen w-full">
      {/* Breadcrumb */}
      <section className="py-4 w-full bg-gray-50">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to={from} 
            className="inline-flex items-center text-gray-600 hover:text-teal-600 transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-medium">Tilbake</span>
          </Link>
        </div>
      </section>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="pt-2 pb-12 md:pt-2 md:pb-16 w-full bg-white">
          <div className="w-full">
            <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
              <div className="md:w-1/2 space-y-6">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                  {t('vaktrommet.hero.title')}
                </h1>
                <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                  {t('vaktrommet.hero.description')}
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <img 
                  src={trendsNoBackgroundImage} 
                  alt="Vaktrommet" 
                  className="w-full max-w-lg h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Service Options Section */}
        <section className="py-16 w-full bg-white">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                {t('vaktrommet.serviceOptions.title')}
              </h2>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                {t('vaktrommet.serviceOptions.subtitle')}
              </h3>
            </div>
            
            <div className="border-2 border-gray-900 rounded-lg p-8">
              <div className="grid md:grid-cols-3 gap-8 md:items-stretch">
                {/* Vaktrommet Privat Card */}
                <div className="flex flex-col space-y-6">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900">
                    {t('vaktrommet.serviceOptions.card1.title')}
                  </h3>
                  <p className="text-base text-gray-700 leading-relaxed">
                    {t('vaktrommet.serviceOptions.card1.description')}
                  </p>
                </div>

                {/* Alarmsentral Card */}
                <div className="flex flex-col space-y-6">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900">
                    {t('vaktrommet.serviceOptions.card2.title')}
                  </h3>
                  <p className="text-base text-gray-700 leading-relaxed">
                    {t('vaktrommet.serviceOptions.card2.description')}
                  </p>
                </div>

                {/* Profesjonell oppfølging Card */}
                <div className="flex flex-col space-y-6">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900">
                    {t('vaktrommet.serviceOptions.card3.title')}
                  </h3>
                  <p className="text-base text-gray-700 leading-relaxed">
                    {t('vaktrommet.serviceOptions.card3.description')}
                  </p>
                  <div className="mt-auto">
                    <a 
                      href="https://salubi.no" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all duration-300 w-full text-center"
                    >
                      {t('vaktrommet.serviceOptions.card3.button')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile and PC Monitoring Section */}
        <section className="py-16 w-full bg-gray-50">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-2 border-dashed border-blue-300 p-8 rounded-lg">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Mobile Monitoring */}
                <div className="space-y-6">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                    {t('vaktrommet.monitoring.mobile.title')}
                  </h3>
                  <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                    {t('vaktrommet.monitoring.mobile.description')}
                  </p>
                  <div className="flex justify-center">
                    <img 
                      src={fallOnPhoneImage} 
                      alt="Mobil varsling ved fall" 
                      className="w-full max-w-xs h-64 object-contain rounded-lg"
                    />
                  </div>
                </div>

                {/* PC Control */}
                <div className="space-y-6">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                    {t('vaktrommet.monitoring.pc.title')}
                  </h3>
                  <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                    {t('vaktrommet.monitoring.pc.description')}
                  </p>
                  <div className="flex justify-center">
                    <img 
                      src={sykepleierPaVaktrommetImage} 
                      alt="Full kontroll fra PC" 
                      className="w-full max-w-md h-64 object-contain rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sensors Section */}
        <section className="py-16 w-full bg-blue-50">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
              {t('vaktrommet.sensors.title')}
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Fall Sensors Card */}
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 flex flex-col">
                <div className="flex-1">
                  <p className="text-base text-gray-700 leading-relaxed mb-6">
                    {t('vaktrommet.sensors.card1.description')}
                  </p>
                </div>
                <Link 
                  to="/safety-solutions1" 
                  state={{ from: '/vaktrommet-kommune' }}
                  className="inline-flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 w-full group"
                >
                  {t('vaktrommet.sensors.card1.button')}
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Alarm and Communication Card */}
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 flex flex-col">
                <div className="flex-1">
                  <p className="text-base text-gray-700 leading-relaxed mb-6">
                    {t('vaktrommet.sensors.card2.description')}
                  </p>
                </div>
                <Link 
                  to="/alarm-communication1" 
                  state={{ from: '/vaktrommet-kommune' }}
                  className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 w-full group"
                >
                  {t('vaktrommet.sensors.card2.button')}
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Medical Monitoring Card */}
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 flex flex-col">
                <div className="flex-1">
                  <p className="text-base text-gray-700 leading-relaxed mb-6">
                    {t('vaktrommet.sensors.card3.description')}
                  </p>
                </div>
                <Link 
                  to="/medical-followup1" 
                  state={{ from: '/vaktrommet-kommune' }}
                  className="inline-flex items-center justify-center bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 w-full group"
                >
                  {t('vaktrommet.sensors.card3.button')}
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Questions Section */}
        <section className="py-16 w-full bg-white">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {t('vaktrommet.questions.title')}
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-3xl border-4 border-dashed border-orange-400 hover:border-orange-500 transition-all duration-300 flex flex-col">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{t('vaktrommet.questions.faq.title')}</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">{t('vaktrommet.questions.faq.description')}</p>
                </div>
                <div className="mt-auto">
                  <Link 
                    to="/guidance" 
                    className="inline-block bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all duration-300 w-full text-center"
                  >
                    {t('vaktrommet.questions.faq.button')}
                  </Link>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl border-4 border-dashed border-orange-400 hover:border-orange-500 transition-all duration-300 flex flex-col">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{t('vaktrommet.questions.experiences.title')}</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">{t('vaktrommet.questions.experiences.description')}</p>
                </div>
                <div className="mt-auto">
                  <Link 
                    to="/experiences" 
                    className="inline-block bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all duration-300 w-full text-center"
                  >
                    {t('vaktrommet.questions.experiences.button')}
                  </Link>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl border-4 border-dashed border-orange-400 hover:border-orange-500 transition-all duration-300 flex flex-col">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{t('vaktrommet.questions.contact.title')}</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {t('vaktrommet.questions.contact.description')}
                  </p>
                </div>
                <div className="mt-auto">
                  <Link 
                    to="/documents" 
                    className="inline-block bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all duration-300 w-full text-center"
                  >
                    {t('vaktrommet.questions.contact.button')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
