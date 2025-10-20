import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'
import trendsNoBackgroundImage from '../assets/trends_no_background.png'
import fallOnPhoneImage from '../assets/fall_on_phone.png'
import sykepleierPaVaktrommetImage from '../assets/sykepleier_på_vaktrommet.png'
import eqaeblinkImage from '../assets/eqaeblink_lowres.jpg'
import newsImage from '../assets/NEWS.png'
import trendsImage from '../assets/trends).png'

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

      {/* Hero Section */}
      <section className="pt-2 pb-12 md:pt-2 md:pb-16 w-full bg-white">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                {t('vaktrommet.hero.title')}
              </h1>
              <div className="space-y-4">
                <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                  {t('vaktrommet.hero.description1')}
                </p>
                <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                  {t('vaktrommet.hero.description2')}
                </p>
              </div>
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

      {/* E-consultation Section */}
      <section className="py-16 w-full bg-white">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center order-2 lg:order-1">
              <div className="relative w-full max-w-lg">
                <div className="absolute -inset-4 bg-gradient-to-r from-teal-400 to-blue-500 rounded-2xl blur opacity-20"></div>
                <div className="relative bg-white p-4 rounded-2xl shadow-2xl">
                  <img 
                    src={eqaeblinkImage} 
                    alt="E-konsultasjon med innsikt" 
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                {t('vaktrommet.eConsultation.title')}
              </h2>
              <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                {t('vaktrommet.eConsultation.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Automatic NEWS Section */}
      <section className="py-16 w-full bg-gray-50">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                {t('vaktrommet.automaticNews.title')}
              </h2>
              <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                {t('vaktrommet.automaticNews.description')}
              </p>
              <div className="space-y-3">
                <p className="text-base lg:text-lg font-semibold text-gray-900">
                  {t('vaktrommet.automaticNews.benefits.title')}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-base text-gray-700">{t('vaktrommet.automaticNews.benefits.item1')}</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-base text-gray-700">{t('vaktrommet.automaticNews.benefits.item2')}</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-base text-gray-700">{t('vaktrommet.automaticNews.benefits.item3')}</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-base text-gray-700">{t('vaktrommet.automaticNews.benefits.item4')}</span>
                  </li>
                </ul>
              </div>
              <p className="text-base lg:text-lg text-gray-700 leading-relaxed font-medium">
                {t('vaktrommet.automaticNews.conclusion')}
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-lg">
                <div className="absolute -inset-4 bg-gradient-to-r from-teal-400 to-blue-500 rounded-2xl blur opacity-20"></div>
                <div className="relative bg-white p-4 rounded-2xl shadow-2xl">
                  <img 
                    src={newsImage} 
                    alt="Automatisk NEWS system" 
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proactive Health Follow-up Section */}
      <section className="py-16 w-full bg-white">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center order-2 lg:order-1">
              <div className="relative w-full max-w-lg">
                <div className="absolute -inset-4 bg-gradient-to-r from-teal-400 to-blue-500 rounded-2xl blur opacity-20"></div>
                <div className="relative bg-white p-4 rounded-2xl shadow-2xl">
                  <img 
                    src={trendsImage} 
                    alt="Proaktiv helseoppfølging med automatisk datainnsamling" 
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                {t('vaktrommet.proactiveHealth.title')}
              </h2>
              <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                {t('vaktrommet.proactiveHealth.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vaktrommet Overview Section */}
      <section className="py-16 w-full bg-gray-50">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6">
                {t('vaktrommet.overview.title')}
              </h2>
              <p className="text-base lg:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                {t('vaktrommet.overview.description')}
              </p>
            </div>

            <div className="border-2 border-dashed border-blue-300 rounded-lg p-8 bg-white">
              <p className="text-base lg:text-lg font-semibold text-gray-900 mb-6">
                {t('vaktrommet.overview.features.title')}
              </p>
              <div className="space-y-4 text-base lg:text-lg text-gray-700">
                <div className="flex items-start">
                  <span className="text-2xl mr-3">📊</span>
                  <span>{t('vaktrommet.overview.features.item1')}</span>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-3">🚨</span>
                  <span>{t('vaktrommet.overview.features.item2')}</span>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-3">📈</span>
                  <span>{t('vaktrommet.overview.features.item3')}</span>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-3">🔔</span>
                  <span>{t('vaktrommet.overview.features.item4')}</span>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-3">🧩</span>
                  <span>{t('vaktrommet.overview.features.item5')}</span>
                </div>
              </div>
            </div>

            <p className="text-base lg:text-lg text-gray-700 leading-relaxed text-center">
              {t('vaktrommet.overview.conclusion')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/dashboard/oversikt"
                state={{ from: '/vaktrommet-kommune' }}
                className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {t('vaktrommet.overview.button1')}
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link 
                to="/dashboard/pasient"
                state={{ from: '/vaktrommet-kommune' }}
                className="inline-flex items-center justify-center bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {t('vaktrommet.overview.button2')}
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
  )
}
