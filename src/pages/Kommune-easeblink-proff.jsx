import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'
import eConsultationImage from '../assets/e-consultation.png'
import eqaeblinkImage from '../assets/eqaeblink_lowres.jpg'
import medicalHomeImage from '../assets/medical@home.png'

export default function EConsultation() {
  const { t } = useTranslation()
  const location = useLocation()
  const from = location.state?.from || '/private'
  
  return (
    <div className="e-consultation-page min-h-screen w-full">
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
        <section className="py-12 md:py-16 w-full bg-white">
          <div className="w-full">
            <div className="flex flex-col md:flex-row md:items-center gap-0 md:gap-16">
              <div className="md:w-1/2">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-4">
                  {t('kommuneEaseblinkProff.hero.title')}
                </h1>
                <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-6">
                  {t('kommuneEaseblinkProff.hero.description')}
                </p>
                <Link 
                  to="/products" 
                  className="group inline-flex items-center justify-center bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-900 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Se produkter
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
              <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
                <img 
                  src={eConsultationImage} 
                  alt="E-konsultasjon" 
                  className="w-full max-w-lg h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Healthcare Worker's Helper Section */}
        <section className="py-16 w-full bg-gray-50">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-l-4 border-dashed border-blue-300 pl-8 space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                {t('kommuneEaseblinkProff.healthcareHelper.title')}
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                {t('kommuneEaseblinkProff.healthcareHelper.description1')}
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                {t('kommuneEaseblinkProff.healthcareHelper.description2')}
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                {t('kommuneEaseblinkProff.healthcareHelper.description3')}
              </p>
            </div>
          </div>
        </section>

        {/* E-Consultation to New Level Section */}
        <section className="py-16 w-full bg-white">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
              <div className="md:w-1/2 flex justify-center">
                <img 
                  src={eqaeblinkImage} 
                  alt="E-konsultasjon tatt til et nytt nivå" 
                  className="w-3/4 h-auto rounded-lg shadow-xl"
                />
              </div>
              <div className="md:w-1/2 space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  {t('kommuneEaseblinkProff.eConsultation.title')}
                </h2>
                <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                  {t('kommuneEaseblinkProff.eConsultation.description1')}
                </p>
                <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                  {t('kommuneEaseblinkProff.eConsultation.description2')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Medical@Home Section */}
        <section className="py-16 w-full bg-gray-50">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-2 border-dashed border-blue-300 p-8 rounded-lg">
              <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
                <div className="md:w-1/2 space-y-6">
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                    {t('kommuneEaseblinkProff.medicalHome.title')}
                  </h2>
                  <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                    {t('kommuneEaseblinkProff.medicalHome.description1')}
                  </p>
                  <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                    {t('kommuneEaseblinkProff.medicalHome.description2')}
                  </p>
                  <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                    {t('kommuneEaseblinkProff.medicalHome.description3')}
                  </p>
                </div>
                <div className="md:w-1/2 flex justify-center">
                  <img 
                    src={medicalHomeImage} 
                    alt="medical@home" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Combine with More Solutions Section */}
        <section className="py-16 w-full bg-blue-50">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
              {t('kommuneEaseblinkProff.combineSolutions.title')}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Fall Sensors Card */}
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 flex flex-col">
                <div className="flex-1">
                  <p className="text-base text-gray-700 leading-relaxed mb-6">
                    {t('kommuneEaseblinkProff.combineSolutions.card1.description')}
                  </p>
                </div>
                <Link 
                  to="/safety-solutions1" 
                  state={{ from: '/kommune-easeblink-proff' }}
                  className="inline-flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 w-full group"
                >
                  {t('kommuneEaseblinkProff.combineSolutions.card1.button')}
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Alarm and Communication Card */}
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 flex flex-col">
                <div className="flex-1">
                  <p className="text-base text-gray-700 leading-relaxed mb-6">
                    {t('kommuneEaseblinkProff.combineSolutions.card2.description')}
                  </p>
                </div>
                <Link 
                  to="/alarm-communication1" 
                  state={{ from: '/kommune-easeblink-proff' }}
                  className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 w-full group"
                >
                  {t('kommuneEaseblinkProff.combineSolutions.card2.button')}
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Medical Follow-up Card */}
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 flex flex-col">
                <div className="flex-1">
                  <p className="text-base text-gray-700 leading-relaxed mb-6">
                    {t('kommuneEaseblinkProff.combineSolutions.card3.description')}
                  </p>
                </div>
                <Link 
                  to="/medical-followup1" 
                  state={{ from: '/kommune-easeblink-proff' }}
                  className="inline-flex items-center justify-center bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 w-full group"
                >
                  {t('kommuneEaseblinkProff.combineSolutions.card3.button')}
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
                {t('kommuneEaseblinkProff.questions.title')}
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-3xl border-4 border-dashed border-orange-400 hover:border-orange-500 transition-all duration-300 flex flex-col">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{t('kommuneEaseblinkProff.questions.faq.title')}</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">{t('kommuneEaseblinkProff.questions.faq.description')}</p>
                </div>
                <div className="mt-auto">
                  <Link 
                    to="/guidance" 
                    className="inline-block bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all duration-300 w-full text-center"
                  >
                    {t('kommuneEaseblinkProff.questions.faq.button')}
                  </Link>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl border-4 border-dashed border-orange-400 hover:border-orange-500 transition-all duration-300 flex flex-col">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{t('kommuneEaseblinkProff.questions.experiences.title')}</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">{t('kommuneEaseblinkProff.questions.experiences.description')}</p>
                </div>
                <div className="mt-auto">
                  <Link 
                    to="/experiences" 
                    className="inline-block bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all duration-300 w-full text-center"
                  >
                    {t('kommuneEaseblinkProff.questions.experiences.button')}
                  </Link>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl border-4 border-dashed border-orange-400 hover:border-orange-500 transition-all duration-300 flex flex-col">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{t('kommuneEaseblinkProff.questions.contact.title')}</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {t('kommuneEaseblinkProff.questions.contact.description')}
                  </p>
                </div>
                <div className="mt-auto">
                  <Link 
                    to="/documents" 
                    className="inline-block bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all duration-300 w-full text-center"
                  >
                    {t('kommuneEaseblinkProff.questions.contact.button')}
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

