import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'
import unfordringeneImage from '../assets/image-unfordringene.png'
import kForsteImage from '../assets/k-første.png'
import sensorImage from '../assets/sensor.png'
import receivesPingImage from '../assets/recieves ping.png'
import sensorsDataImage from '../assets/sensors data.png'
import ceMdrImage from '../assets/ce-mdr 1.png'
import gdprImage from '../assets/1703485181647 1.png'
import supportImage from '../assets/support 1 (Traced).png'

export default function MunicipalBenefits() {
  const { t } = useTranslation()
  const location = useLocation()
  const fromPage = location.state?.from || '/'
  
  return (
    <div className="municipal-benefits-page min-h-screen w-full">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
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
        <section className="hero-section min-h-[calc(100vh-100px)] flex items-center w-full bg-gradient-to-br from-gray-50 to-white">
          <div className="w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight italic">
                    {t('municipalBenefits.hero.title')}
                  </h1>
                  <div className="w-16 h-1 bg-teal-600 rounded-full"></div>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed bg-white p-4 rounded-xl shadow-sm border-l-4 border-teal-500">
                  {t('municipalBenefits.hero.description')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link 
                    to="/contact" 
                    className="group inline-flex items-center justify-center bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-900 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    {t('municipalBenefits.hero.button')}
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-sm">
                  <div className="absolute -inset-3 bg-gradient-to-r from-teal-400 to-blue-500 rounded-2xl blur opacity-20"></div>
                  <div className="relative bg-white p-3 rounded-2xl shadow-2xl">
                    <img 
                      src={kForsteImage} 
                      alt="Elderly care monitoring illustration" 
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="challenges-section py-20 w-full bg-gray-50">
          <div className="w-full px-8 flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 flex justify-center mb-12 lg:mb-0">
              <img
                src={unfordringeneImage}
                alt="Elderly people facing challenges"
                className="max-w-sm h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:w-1/2 lg:pl-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {t('municipalBenefits.challenges.title')}
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                {t('municipalBenefits.challenges.subtitle')}
              </p>
              <ul className="list-disc list-inside space-y-4 text-lg text-gray-600 mb-8">
                <li>{t('municipalBenefits.challenges.point1')}</li>
                <li>{t('municipalBenefits.challenges.point2')}</li>
                <li>{t('municipalBenefits.challenges.point3')}</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('municipalBenefits.challenges.conclusion')}
              </p>
            </div>
          </div>
        </section>

        {/* Solution Overview Section */}
        <section className="solution-overview-section py-20 w-full bg-white">
          <div className="w-full">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {t('municipalBenefits.solution.title')}
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                {t('municipalBenefits.solution.subtitle')}
              </p>
              <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
            </div>
            
            {/* Solution Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Fall Sensors */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-full mb-6 mx-auto">
                  <img 
                    src={sensorImage} 
                    alt="Fall sensor" 
                    className="w-full h-64 object-cover rounded-xl"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">
                  {t('municipalBenefits.solution.fallSensors.title')}
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  {t('municipalBenefits.solution.fallSensors.description')}
                </p>
              </div>

              {/* Health Sensors */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-full mb-6 mx-auto">
                  <img 
                    src={receivesPingImage} 
                    alt="Health sensor" 
                    className="w-full h-64 object-cover rounded-xl"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">
                  {t('municipalBenefits.solution.healthSensors.title')}
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  {t('municipalBenefits.solution.healthSensors.description')}
                </p>
              </div>

              {/* Central Overview */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-full mb-6 mx-auto">
                  <img 
                    src={sensorsDataImage} 
                    alt="Central overview" 
                    className="w-full h-64 object-cover rounded-xl"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">
                  {t('municipalBenefits.solution.centralOverview.title')}
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  {t('municipalBenefits.solution.centralOverview.description')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Security and Documentation Section */}
        <section className="security-documentation-section py-20 w-full bg-white">
          <div className="w-full">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {t('municipalBenefits.security.title')}
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                {t('municipalBenefits.security.subtitle')}
              </p>
            </div>
            
            {/* Security Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* CE Marking */}
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 flex items-center justify-center">
                  <img 
                    src={ceMdrImage} 
                    alt="CE Marking" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* GDPR */}
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 flex items-center justify-center">
                  <img 
                    src={gdprImage} 
                    alt="GDPR Compliance" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-gray-600 text-center">
                  {t('municipalBenefits.security.gdprDescription')}
                </p>
              </div>

              {/* Support */}
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 flex items-center justify-center">
                  <img 
                    src={supportImage} 
                    alt="Support" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Download Documentation Button */}
            <div className="text-center">
              <Link 
                to="/documents" 
                className="bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-900 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl inline-block"
              >
                {t('municipalBenefits.security.downloadButton')}
              </Link>
            </div>
          </div>
        </section>


        {/* Role-Based Information Section */}
        <section className="role-information-section py-20 w-full bg-white">
          <div className="w-full px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {t('municipalBenefits.roles.title')}
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                {t('municipalBenefits.roles.subtitle')}
              </p>
            </div>
            
            {/* Role List */}
            <div className="max-w-4xl mx-auto mb-16">
              <ul className="space-y-4 text-left">
                <li className="flex items-start">
                  <span className="font-bold text-gray-900 mr-2">•</span>
                  <div>
                    <span className="font-bold text-gray-900">{t('municipalBenefits.roles.municipalManager.title')}</span>
                    <span className="text-gray-700"> - {t('municipalBenefits.roles.municipalManager.description')}</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-gray-900 mr-2">•</span>
                  <div>
                    <span className="font-bold text-gray-900">{t('municipalBenefits.roles.homeCareLeader.title')}</span>
                    <span className="text-gray-700"> - {t('municipalBenefits.roles.homeCareLeader.description')}</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-gray-900 mr-2">•</span>
                  <div>
                    <span className="font-bold text-gray-900">{t('municipalBenefits.roles.procurementManager.title')}</span>
                    <span className="text-gray-700"> - {t('municipalBenefits.roles.procurementManager.description')}</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-gray-900 mr-2">•</span>
                  <div>
                    <span className="font-bold text-gray-900">{t('municipalBenefits.roles.healthcarePersonnel.title')}</span>
                    <span className="text-gray-700"> - {t('municipalBenefits.roles.healthcarePersonnel.description')}</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-gray-900 mr-2">•</span>
                  <div>
                    <span className="font-bold text-gray-900">{t('municipalBenefits.roles.itWelfare.title')}</span>
                    <span className="text-gray-700"> - {t('municipalBenefits.roles.itWelfare.description')}</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-gray-900 mr-2">•</span>
                  <div>
                    <span className="font-bold text-gray-900">{t('municipalBenefits.roles.politicians.title')}</span>
                    <span className="text-gray-700"> - {t('municipalBenefits.roles.politicians.description')}</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Quote Section */}
            <div className="max-w-4xl mx-auto mb-16">
              <blockquote className="text-left">
                <p className="text-xl italic text-gray-700 mb-4">
                  "{t('municipalBenefits.quote.text')}"
                </p>
                <cite className="text-sm text-gray-500 italic">
                  {t('municipalBenefits.quote.attribution')}
                </cite>
              </blockquote>
            </div>

            {/* Call-to-Action Section */}
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {t('municipalBenefits.cta.title')}
              </h3>
              <p className="text-xl text-gray-700 mb-12">
                {t('municipalBenefits.cta.subtitle')}
              </p>
              
              {/* Two-Column CTA */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* Left Column - Demo */}
                <div className="text-left">
                  <p className="text-gray-700 mb-6">
                    {t('municipalBenefits.cta.demo.description')}
                  </p>
                  <Link 
                    to="/contact" 
                    className="bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-900 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl inline-block"
                  >
                    {t('municipalBenefits.cta.demo.button')}
                  </Link>
                </div>

                {/* Right Column - Pilot Project */}
                <div className="text-left">
                  <p className="text-gray-700 mb-6">
                    {t('municipalBenefits.cta.pilot.description')}
                  </p>
                  <Link 
                    to="/contact" 
                    className="bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-900 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl inline-block"
                  >
                    {t('municipalBenefits.cta.pilot.button')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-200 py-8 w-full">
          <div className="w-full">
            <div className="text-center text-slate-600">
              <Link to="/municipality" className="text-teal-400 hover:text-teal-300 transition-colors duration-300">
                {t('municipalBenefits.footer')}
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
