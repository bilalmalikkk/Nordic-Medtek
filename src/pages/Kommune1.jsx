import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import sensors1Image from '../assets/sensors-1.png'
import presentation2Image from '../assets/presentation 2.png'
import sensorImage from '../assets/sensor.png'
import recievesPingImage from '../assets/recieves ping.png'
import sensorsDataImage from '../assets/sensors data.png'
import notificationImage from '../assets/notification.png'
import connectedSystemImage from '../assets/connected system.png'
import easeOfInstallationImage from '../assets/ease of installationm (1).png'
import sensorDetectyImage from '../assets/sensor detecty.png'
import stonksImage from '../assets/stonks.png'
import calmShiftImage from '../assets/calm shift (2).png'
import videoCallImage from '../assets/video call.png'
import fallIllustrateImage from '../assets/fall_illustrate.png'
import medicalHomeImage from '../assets/medical@home.png'
import newsImage from '../assets/NEWS.png'
import trendsImage from '../assets/trends).png'
import vaktrommetImage from '../assets/vaktrommet.png'

export default function Kommune1() {
  const { t } = useTranslation()
  const [showHealthButtons, setShowHealthButtons] = useState(false)
  const [showMoreTimeButtons, setShowMoreTimeButtons] = useState(false)
  const [showKnowledgeButtons, setShowKnowledgeButtons] = useState(false)
  const [showEconomicButtons, setShowEconomicButtons] = useState(false)
  const [showSecureDataButtons, setShowSecureDataButtons] = useState(false)
  const [showPartnershipButtons, setShowPartnershipButtons] = useState(false)
  const cardRef = useRef(null)
  const moreTimeCardRef = useRef(null)
  const knowledgeCardRef = useRef(null)
  const economicCardRef = useRef(null)
  const secureDataCardRef = useRef(null)
  const partnershipCardRef = useRef(null)

  // Close buttons when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setShowHealthButtons(false)
      }
      if (moreTimeCardRef.current && !moreTimeCardRef.current.contains(event.target)) {
        setShowMoreTimeButtons(false)
      }
      if (knowledgeCardRef.current && !knowledgeCardRef.current.contains(event.target)) {
        setShowKnowledgeButtons(false)
      }
      if (economicCardRef.current && !economicCardRef.current.contains(event.target)) {
        setShowEconomicButtons(false)
      }
      if (secureDataCardRef.current && !secureDataCardRef.current.contains(event.target)) {
        setShowSecureDataButtons(false)
      }
      if (partnershipCardRef.current && !partnershipCardRef.current.contains(event.target)) {
        setShowPartnershipButtons(false)
      }
    }

    if (showHealthButtons || showMoreTimeButtons || showKnowledgeButtons || showEconomicButtons || showSecureDataButtons || showPartnershipButtons) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showHealthButtons, showMoreTimeButtons, showKnowledgeButtons, showEconomicButtons, showSecureDataButtons, showPartnershipButtons])
  
  return (
    <div className="municipality-page min-h-screen w-full">
      <div className="w-full">
      {/* Top Menu Cards */}
      <section className="py-3 w-full">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 bg-gray-50 rounded-lg">
          <div className="flex flex-wrap justify-center gap-3 py-2">
            <Link to="/products" className="bg-white border border-gray-200 px-6 py-2.5 rounded-full hover:bg-teal-50 hover:border-teal-500 transition-all duration-200 shadow-sm hover:shadow">
              <span className="text-sm font-medium text-gray-900">{t('kommune1.submenu.products')}</span>
            </Link>
            <Link to="/pricing" className="bg-white border border-gray-200 px-6 py-2.5 rounded-full hover:bg-teal-50 hover:border-teal-500 transition-all duration-200 shadow-sm hover:shadow">
              <span className="text-sm font-medium text-gray-900">{t('kommune1.submenu.pricing')}</span>
            </Link>
            <Link to="/it-welfare-technology" className="bg-white border border-gray-200 px-6 py-2.5 rounded-full hover:bg-teal-50 hover:border-teal-500 transition-all duration-200 shadow-sm hover:shadow">
              <span className="text-sm font-medium text-gray-900">{t('kommune1.submenu.itArchitecture')}</span>
            </Link>
            <Link to="/documents" className="bg-white border border-gray-200 px-6 py-2.5 rounded-full hover:bg-teal-50 hover:border-teal-500 transition-all duration-200 shadow-sm hover:shadow">
              <span className="text-sm font-medium text-gray-900">{t('kommune1.submenu.documentation')}</span>
            </Link>
            <Link to="/experiences" className="bg-white border border-gray-200 px-6 py-2.5 rounded-full hover:bg-teal-50 hover:border-teal-500 transition-all duration-200 shadow-sm hover:shadow">
              <span className="text-sm font-medium text-gray-900">{t('kommune1.submenu.references')}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Hero Section - Updated for Kommune1 */}
      <section className="py-12 w-full relative overflow-hidden bg-white">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left Side - Main Content */}
            <div className="space-y-5">
              <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {t('kommune1.hero.title')}
              </h1>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                {t('kommune1.hero.description1')}
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                {t('kommune1.hero.description2')}
              </p>
              <p className="text-base sm:text-lg font-semibold text-teal-700">
                {t('kommune1.hero.description3')}
              </p>
            </div>

            {/* Right Side - Benefits List */}
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl shadow-lg p-8 md:p-10 border border-teal-100 min-h-[320px] flex items-center">
              <ul className="space-y-5 w-full">
                <li className="flex items-start">
                  <div className="w-5 h-5 bg-teal-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                    {t('kommune1.hero.benefit1')}
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 bg-teal-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                    {t('kommune1.hero.benefit2')}
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 bg-teal-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                    {t('kommune1.hero.benefit3')}
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 bg-teal-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                    {t('kommune1.hero.benefit4')}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Options Section */}
      <section className="py-16 w-full bg-white">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            {t('kommune1.ctaOptions.title')}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Demo Card */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 text-center hover:border-teal-500 hover:shadow-xl transition-all duration-300">
              <p className="text-base text-gray-700 leading-relaxed mb-8 min-h-[80px] flex items-center justify-center">
                {t('kommune1.ctaOptions.demo.description')}
              </p>
              <Link 
                to="/demo"
                className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                {t('kommune1.ctaOptions.demo.button')}
              </Link>
            </div>

            {/* Data Presentation Card */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 text-center hover:border-teal-500 hover:shadow-xl transition-all duration-300">
              <p className="text-base text-gray-700 leading-relaxed mb-8 min-h-[80px] flex items-center justify-center">
                {t('kommune1.ctaOptions.dataPresentation.description')}
              </p>
              <Link 
                to="/guidance"
                className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                {t('kommune1.ctaOptions.dataPresentation.button')}
              </Link>
            </div>

            {/* Pilot Project Card */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 text-center hover:border-teal-500 hover:shadow-xl transition-all duration-300">
              <p className="text-base text-gray-700 leading-relaxed mb-8 min-h-[80px] flex items-center justify-center">
                {t('kommune1.ctaOptions.pilotProject.description')}
              </p>
              <Link 
                to="/documents"
                className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                {t('kommune1.ctaOptions.pilotProject.button')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Explanation Section */}
      <section className="py-20 w-full">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 bg-gray-50 rounded-lg">
          <div className="text-center mb-4 pt-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('kommune1.solutionExplanation.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('kommune1.solutionExplanation.subtitle')}
            </p>
          </div>
          
          {/* Two Column Layout with Parent Cards */}
          <div className="grid md:grid-cols-2 gap-8 mt-12 pb-12 items-stretch">
            {/* Left Column - Smart Sensors Parent Card */}
            <div className="bg-gradient-to-br from-yellow-50 to-green-50 rounded-2xl p-8 shadow-lg flex flex-col">
              <div className="flex justify-center mb-6">
                <img 
                  src={sensors1Image} 
                  alt="Smarte sensorer" 
                  className="w-full h-64 object-contain rounded-xl"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                {t('kommune1.solutionExplanation.smartSensors.title')}
              </h3>
              <p className="text-base text-gray-700 leading-relaxed text-center mb-6">
                {t('kommune1.solutionExplanation.smartSensors.description')}
              </p>
              
              {/* Child Cards Grid 2x2 - Bottom Aligned */}
              <div className="grid grid-cols-2 gap-4 mt-auto">
                {/* Fall Sensors */}
                <div className="bg-yellow-50 rounded-xl p-4 shadow-md border border-yellow-100 text-center">
                  <div className="flex justify-center mb-3">
                    <img 
                      src={fallIllustrateImage} 
                      alt="Fallsensorer" 
                      className="w-40 h-40 object-contain"
                    />
                  </div>
                  <h4 className="text-sm font-bold text-gray-900 mb-2">
                    {t('kommune1.solutionExplanation.fallSensors.title')}
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {t('kommune1.solutionExplanation.fallSensors.description')}
                  </p>
                </div>

                {/* Health Sensors */}
                <div className="bg-yellow-50 rounded-xl p-4 shadow-md border border-yellow-100 text-center">
                  <div className="flex justify-center mb-3">
                    <img 
                      src={recievesPingImage} 
                      alt="Helsesensorer" 
                      className="w-40 h-40 object-contain"
                    />
                  </div>
                  <h4 className="text-sm font-bold text-gray-900 mb-2">
                    {t('kommune1.solutionExplanation.healthSensors.title')}
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {t('kommune1.solutionExplanation.healthSensors.description')}
                  </p>
                </div>

                {/* Alarm Button */}
                <div className="bg-yellow-50 rounded-xl p-4 shadow-md border border-yellow-100 text-center">
                  <div className="flex justify-center mb-3">
                    <img 
                      src={sensorImage} 
                      alt="Alarm knapp" 
                      className="w-40 h-40 object-contain"
                    />
                  </div>
                  <h4 className="text-sm font-bold text-gray-900 mb-2">
                    {t('kommune1.solutionExplanation.alarmButton.title')}
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {t('kommune1.solutionExplanation.alarmButton.description')}
                  </p>
                </div>

                {/* EaseBlink Pro */}
                <div className="bg-yellow-50 rounded-xl p-4 shadow-md border border-yellow-100 text-center">
                  <div className="flex justify-center mb-3">
                    <img 
                      src={medicalHomeImage} 
                      alt="easeBlink-proff" 
                      className="w-40 h-40 object-contain"
                    />
                  </div>
                  <h4 className="text-sm font-bold text-gray-900 mb-2">
                    {t('kommune1.solutionExplanation.easeblinkPro.title')}
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {t('kommune1.solutionExplanation.easeblinkPro.description')}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Control Room Parent Card */}
            <div className="bg-gradient-to-br from-yellow-50 to-green-50 rounded-2xl p-8 shadow-lg flex flex-col">
              <div className="flex justify-center mb-6">
                <img 
                  src={presentation2Image} 
                  alt="Kontrollrommet" 
                  className="w-full h-64 object-contain rounded-xl"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                {t('kommune1.solutionExplanation.controlRoom.title')}
              </h3>
              <p className="text-base text-gray-700 leading-relaxed text-center mb-6">
                {t('kommune1.solutionExplanation.controlRoom.description')}
              </p>
              
              {/* Child Cards Grid 2x2 - Bottom Aligned */}
              <div className="grid grid-cols-2 gap-4 mt-auto">
                {/* Central Overview */}
                <div className="bg-yellow-50 rounded-xl p-4 shadow-md border border-yellow-100 text-center">
                  <div className="flex justify-center mb-3">
                    <img 
                      src={sensorsDataImage} 
                      alt="Sentral oversikt" 
                      className="w-40 h-40 object-contain"
                    />
                  </div>
                  <h4 className="text-sm font-bold text-gray-900 mb-2">
                    {t('kommune1.solutionExplanation.centralOverview.title')}
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {t('kommune1.solutionExplanation.centralOverview.description')}
                  </p>
                </div>

                {/* Direct Notification */}
                <div className="bg-yellow-50 rounded-xl p-4 shadow-md border border-yellow-100 text-center">
                  <div className="flex justify-center mb-3">
                    <img 
                      src={notificationImage} 
                      alt="Direkte varsel" 
                      className="w-40 h-40 object-contain"
                    />
                  </div>
                  <h4 className="text-sm font-bold text-gray-900 mb-2">
                    {t('kommune1.solutionExplanation.directNotification.title')}
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {t('kommune1.solutionExplanation.directNotification.description')}
                  </p>
                </div>

                {/* Automatic NEWS */}
                <div className="bg-yellow-50 rounded-xl p-4 shadow-md border border-yellow-100 text-center">
                  <div className="flex justify-center mb-3">
                    <img 
                      src={newsImage} 
                      alt="Automatisk NEWS" 
                      className="w-40 h-40 object-contain"
                    />
                  </div>
                  <h4 className="text-sm font-bold text-gray-900 mb-2">
                    {t('kommune1.solutionExplanation.automaticNews.title')}
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {t('kommune1.solutionExplanation.automaticNews.description')}
                  </p>
                </div>

                {/* Automatic Trend Analysis */}
                <div className="bg-yellow-50 rounded-xl p-4 shadow-md border border-yellow-100 text-center">
                  <div className="flex justify-center mb-3">
                    <img 
                      src={trendsImage} 
                      alt="Automatisk trend analyser" 
                      className="w-40 h-40 object-contain"
                    />
                  </div>
                  <h4 className="text-sm font-bold text-gray-900 mb-2">
                    {t('kommune1.solutionExplanation.automaticTrend.title')}
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {t('kommune1.solutionExplanation.automaticTrend.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Solve This Section */}
      <section className="py-20 w-full bg-white">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('kommune1.howWeSolve.title')}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Easy Installation Card */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100 flex flex-col">
              <div className="flex justify-center mb-6">
                <img 
                  src={easeOfInstallationImage} 
                  alt="Sensorene installeres enkelt" 
                  className="w-full max-w-md h-80 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                {t('kommune1.howWeSolve.easyInstallation.title')}
              </h3>
              <p className="text-base text-gray-700 leading-relaxed text-center mb-4">
                {t('kommune1.howWeSolve.easyInstallation.description')}
              </p>
              <div className="text-center mt-auto">
                <Link 
                  to="/products"
                  className="inline-flex items-center text-teal-600 hover:text-teal-700 font-semibold transition-colors group"
                >
                  {t('kommune1.howWeSolve.easyInstallation.link')}
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Control Center Card */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100 flex flex-col">
              <div className="flex justify-center mb-6">
                <img 
                  src={vaktrommetImage} 
                  alt="Vaktsentralen tar imot data" 
                  className="w-full max-w-md h-80 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Vaktsentralen tar imot data
              </h3>
              <p className="text-base text-gray-700 leading-relaxed text-center mb-4">
                Når en sensor aktiveres, sender den data til vaktsentralen, der den behandles med tidsbesparende funksjoner.
              </p>
              <div className="text-center mt-auto">
                <Link 
                  to="/products"
                  className="inline-flex items-center text-teal-600 hover:text-teal-700 font-semibold transition-colors group"
                >
                  Produkter
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Seamless Integration Card */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100 flex flex-col">
              <div className="flex justify-center mb-6">
                <img 
                  src={connectedSystemImage} 
                  alt="Sømløs integrasjon" 
                  className="w-full max-w-md h-80 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                {t('kommune1.howWeSolve.seamlessIntegration.title')}
              </h3>
              <p className="text-base text-gray-700 leading-relaxed text-center mb-4">
                {t('kommune1.howWeSolve.seamlessIntegration.description')}
              </p>
              <div className="text-center mt-auto">
                <Link 
                  to="/it-welfare-technology"
                  className="inline-flex items-center text-teal-600 hover:text-teal-700 font-semibold transition-colors group"
                >
                  {t('kommune1.howWeSolve.seamlessIntegration.link')}
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies and References Section */}
      <section className="py-20 w-full bg-gradient-to-br from-gray-50 to-white">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('kommune1.caseStudies.title')}
            </h2>
            <p className="text-lg text-red-600 font-medium mb-6">
              {t('kommune1.caseStudies.subtitle')}
            </p>
          </div>

          {/* Benefits List */}
          <div className="mb-10">
            <ul className="space-y-3 max-w-3xl mx-auto">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-base text-gray-800 font-semibold">
                  {t('kommune1.caseStudies.benefit1')}
                </p>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-base text-gray-800 font-semibold">
                  {t('kommune1.caseStudies.benefit2')}
                </p>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-base text-gray-800 font-semibold">
                  {t('kommune1.caseStudies.benefit3')}
                </p>
              </li>
            </ul>
          </div>

          {/* Pilot Municipality Cards */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <Link 
              to="/experiences"
              className="bg-white border-2 border-gray-300 px-8 py-4 rounded-xl hover:border-teal-500 hover:shadow-lg transition-all duration-300 font-semibold text-gray-900"
            >
              {t('kommune1.caseStudies.pilotMunicipality1')}
            </Link>
            <Link 
              to="/experiences"
              className="bg-white border-2 border-gray-300 px-8 py-4 rounded-xl hover:border-teal-500 hover:shadow-lg transition-all duration-300 font-semibold text-gray-900"
            >
              {t('kommune1.caseStudies.pilotMunicipality2')}
            </Link>
          </div>

          {/* Testimonials */}
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-teal-500">
              <p className="text-gray-700 italic mb-3 leading-relaxed">
                "{t('kommune1.caseStudies.testimonial1.quote')}"
              </p>
              <p className="text-sm text-gray-600 font-medium">
                {t('kommune1.caseStudies.testimonial1.author')}
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-teal-500">
              <p className="text-gray-700 italic mb-3 leading-relaxed">
                "{t('kommune1.caseStudies.testimonial2.quote')}"
              </p>
              <p className="text-sm text-gray-600 font-medium">
                {t('kommune1.caseStudies.testimonial2.author')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Benefits Section */}
      <section className="py-20 w-full bg-white">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('kommune1.communityBenefits.title')}
            </h2>
            <p className="text-lg text-gray-700">
              {t('kommune1.communityBenefits.subtitle')}
            </p>
          </div>
          
          {/* Four benefit cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Fewer Hospital Admissions */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100">
              <div className="flex justify-center mb-6">
                <img 
                  src={sensorDetectyImage} 
                  alt="Færre sykehusinnleggelser" 
                  className="w-full max-w-xs h-64 object-contain rounded-xl"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                {t('kommune1.communityBenefits.fewerAdmissions.title')}
              </h3>
              <p className="text-base text-gray-700 leading-relaxed text-center">
                {t('kommune1.communityBenefits.fewerAdmissions.description')}
              </p>
            </div>

            {/* Lower Costs */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100">
              <div className="flex justify-center mb-6">
                <img 
                  src={stonksImage} 
                  alt="Lavere kostnader" 
                  className="w-full max-w-xs h-64 object-contain rounded-xl"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                {t('kommune1.communityBenefits.lowerCosts.title')}
              </h3>
              <p className="text-base text-gray-700 leading-relaxed text-center">
                {t('kommune1.communityBenefits.lowerCosts.description')}
              </p>
            </div>

            {/* Better Working Conditions */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100">
              <div className="flex justify-center mb-6">
                <img 
                  src={calmShiftImage} 
                  alt="Bedre arbeidsvilkår" 
                  className="w-full max-w-xs h-64 object-contain rounded-xl"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                {t('kommune1.communityBenefits.betterWorkingConditions.title')}
              </h3>
              <p className="text-base text-gray-700 leading-relaxed text-center">
                {t('kommune1.communityBenefits.betterWorkingConditions.description')}
              </p>
            </div>

            {/* Safety and Dignity */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100">
              <div className="flex justify-center mb-6">
                <img 
                  src={videoCallImage} 
                  alt="Trygghet og verdighet" 
                  className="w-full max-w-xs h-64 object-contain rounded-xl"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                {t('kommune1.communityBenefits.safetyAndDignity.title')}
              </h3>
              <p className="text-base text-gray-700 leading-relaxed text-center">
                {t('kommune1.communityBenefits.safetyAndDignity.description')}
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <p className="text-base text-gray-700 mb-6">
              {t('kommune1.communityBenefits.ctaDescription')}
            </p>
            <Link 
              to="/guidance"
              className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              {t('kommune1.communityBenefits.ctaButton')}
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Lurer du på noe? */}
      <section className="py-20 w-full bg-white">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lurer du på noe?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* FAQ Card */}
            <div className="bg-white border-2 border-dashed border-orange-300 rounded-2xl p-8 text-center hover:border-orange-400 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Ofte stilte spørsmål
              </h3>
              <p className="text-sm text-gray-600 mb-8 min-h-[60px]">
                {/* Spacer */}
              </p>
              <Link 
                to="/faq"
                state={{ from: '/kommune1' }}
                className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Ofte stilte spørsmål
              </Link>
            </div>

            {/* References Card */}
            <div className="bg-white border-2 border-dashed border-orange-300 rounded-2xl p-8 text-center hover:border-orange-400 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Hvordan andre bruker løsningene
              </h3>
              <p className="text-sm text-gray-600 mb-8 min-h-[60px]">
                Erfaringer
              </p>
              <Link 
                to="/experiences"
                className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Referanser/Erfaringer
              </Link>
            </div>

            {/* Contact Card */}
            <div className="bg-white border-2 border-dashed border-orange-300 rounded-2xl p-8 text-center hover:border-orange-400 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Kontakt oss
              </h3>
              <p className="text-sm text-gray-600 mb-8 min-h-[60px]">
                Vi er her for å svare på spørsmål og følge deg med å velge rett løsning for dine kjære
              </p>
              <Link 
                to="/guidance"
                className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Kontakt oss i dag
              </Link>
            </div>
          </div>
        </div>
      </section>

      </div>
    </div>
  )
}
