import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import landingPage from '../assets/Landingpage.png'

export default function Municipality() {
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
      {/* Hero Section */}
      <section className="py-12 w-full relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                  {t('municipality.hero.title')}
                </h1>
                <div className="w-20 h-1 bg-teal-600 rounded-full"></div>
              </div>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed bg-white p-4 sm:p-6 rounded-xl shadow-sm border-l-4 border-teal-500">
                {t('municipality.hero.description')}
              </p>
              <div className="pt-4">
                <Link 
                  to="/demo" 
                  className="group inline-flex items-center justify-center bg-yellow-400 text-gray-800 px-8 py-4 rounded-xl font-semibold hover:bg-yellow-500 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  {t('municipality.hero.button')}
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

      {/* Benefits Section */}
      <section className="benefits-section py-24 w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
        
        <div className="w-full relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-teal-800 to-blue-800 bg-clip-text text-transparent mb-6">{t('municipality.benefits.title')}</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto rounded-full"></div>
          </div>
            
            {/* 6-card grid layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Row 1 */}
              <div className="block w-full relative h-full group" ref={cardRef}>
                <div 
                  onClick={() => setShowHealthButtons(!showHealthButtons)}
                  className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-white/20 cursor-pointer h-full flex flex-col relative overflow-hidden"
                >
                  {/* Card background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-emerald-50/30 rounded-3xl"></div>
                  
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-3xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors duration-300">
                      {t('municipality.benefits.safeCare.title')}
                    </h3>
                    <p className="text-gray-600 leading-relaxed flex-grow text-lg">
                      {t('municipality.benefits.safeCare.link')}
                    </p>
                  </div>
                </div>
                
                {/* Modern dropdown buttons */}
                {showHealthButtons && (
                  <div className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/30 p-3 min-w-[220px] animate-in slide-in-from-top-2 duration-300">
                    <div className="flex flex-col gap-2">
                      <Link
                        to="/health-personnel?role=personnel"
                        className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-3 rounded-xl text-sm font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 text-center shadow-lg hover:shadow-xl hover:scale-105"
                      >
                        {t('municipality.benefits.safeCare.healthPersonnel')}
                      </Link>
                      <Link
                        to="/municipality-details"
                        className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-4 py-3 rounded-xl text-sm font-semibold hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 text-center shadow-lg hover:shadow-xl hover:scale-105"
                      >
                        {t('municipality.benefits.safeCare.homeCareLeader')}
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <div className="block w-full relative h-full group" ref={moreTimeCardRef}>
                <div 
                  onClick={() => setShowMoreTimeButtons(!showMoreTimeButtons)}
                  className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-white/20 cursor-pointer h-full flex flex-col relative overflow-hidden"
                >
                  {/* Card background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-cyan-50/30 rounded-3xl"></div>
                  
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-3xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                      {t('municipality.benefits.moreTime.title')}
                    </h3>
                    <p className="text-gray-600 leading-relaxed flex-grow text-lg">
                      {t('municipality.benefits.moreTime.link')}
                    </p>
                  </div>
                </div>
                
                {/* Modern dropdown buttons */}
                {showMoreTimeButtons && (
                  <div className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/30 p-3 min-w-[220px] animate-in slide-in-from-top-2 duration-300">
                    <div className="flex flex-col gap-2">
                      <Link
                        to="/municipality-details"
                        className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-4 py-3 rounded-xl text-sm font-semibold hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 text-center shadow-lg hover:shadow-xl hover:scale-105"
                      >
                        {t('municipality.benefits.moreTime.homeCareLeader')}
                      </Link>
                      <Link
                        to="/municipality-knowledge"
                        className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-3 rounded-xl text-sm font-semibold hover:from-amber-600 hover:to-orange-700 transition-all duration-300 text-center shadow-lg hover:shadow-xl hover:scale-105"
                      >
                        {t('municipality.benefits.moreTime.municipalChief')}
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <div className="block w-full relative h-full group" ref={knowledgeCardRef}>
                <div 
                  onClick={() => setShowKnowledgeButtons(!showKnowledgeButtons)}
                  className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-white/20 cursor-pointer h-full flex flex-col relative overflow-hidden"
                >
                  {/* Card background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-violet-50/30 rounded-3xl"></div>
                  
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-violet-500 rounded-3xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-700 transition-colors duration-300">
                      {t('municipality.benefits.knowledgeBase.title')}
                    </h3>
                    <p className="text-gray-600 leading-relaxed flex-grow text-lg">
                      {t('municipality.benefits.knowledgeBase.link')}
                    </p>
                  </div>
                </div>
                
                {/* Modern dropdown buttons */}
                {showKnowledgeButtons && (
                  <div className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/30 p-3 min-w-[220px] animate-in slide-in-from-top-2 duration-300">
                    <div className="flex flex-col gap-2">
                      <Link
                        to="/municipality-knowledge"
                        className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-3 rounded-xl text-sm font-semibold hover:from-amber-600 hover:to-orange-700 transition-all duration-300 text-center shadow-lg hover:shadow-xl hover:scale-105"
                      >
                        {t('municipality.benefits.knowledgeBase.healthPersonnel')}
                      </Link>
                      <Link
                        to="/politicians"
                        className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-3 rounded-xl text-sm font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 text-center shadow-lg hover:shadow-xl hover:scale-105"
                      >
                        {t('municipality.benefits.knowledgeBase.politicians')}
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Row 2 */}
              <div className="block w-full relative h-full group" ref={economicCardRef}>
                <div 
                  onClick={() => setShowEconomicButtons(!showEconomicButtons)}
                  className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-white/20 cursor-pointer h-full flex flex-col relative overflow-hidden"
                >
                  {/* Card background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/50 to-amber-50/30 rounded-3xl"></div>
                  
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-3xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-yellow-700 transition-colors duration-300">
                      {t('municipality.benefits.economic.title')}
                    </h3>
                    <p className="text-gray-600 leading-relaxed flex-grow text-lg">
                      {t('municipality.benefits.economic.link')}
                    </p>
                  </div>
                </div>
                
                {/* Modern dropdown buttons */}
                {showEconomicButtons && (
                  <div className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/30 p-3 min-w-[220px] animate-in slide-in-from-top-2 duration-300">
                    <div className="flex flex-col gap-2">
                      <Link
                        to="/procurement-manager"
                        className="bg-gradient-to-r from-yellow-500 to-amber-600 text-white px-4 py-3 rounded-xl text-sm font-semibold hover:from-yellow-600 hover:to-amber-700 transition-all duration-300 text-center shadow-lg hover:shadow-xl hover:scale-105"
                      >
                        {t('municipality.benefits.economic.procurementManager')}
                      </Link>
                      <Link
                        to="/politicians"
                        className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-3 rounded-xl text-sm font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 text-center shadow-lg hover:shadow-xl hover:scale-105"
                      >
                        {t('municipality.benefits.economic.politicians')}
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <div className="block w-full relative h-full group" ref={secureDataCardRef}>
                <div 
                  onClick={() => setShowSecureDataButtons(!showSecureDataButtons)}
                  className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-white/20 cursor-pointer h-full flex flex-col relative overflow-hidden"
                >
                  {/* Card background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-rose-50/30 rounded-3xl"></div>
                  
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-red-400 to-rose-500 rounded-3xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-700 transition-colors duration-300">
                      {t('municipality.benefits.secureData.title')}
                    </h3>
                    <p className="text-gray-600 leading-relaxed flex-grow text-lg">
                      {t('municipality.benefits.secureData.link')}
                    </p>
                  </div>
                </div>
                
                {/* Modern dropdown buttons */}
                {showSecureDataButtons && (
                  <div className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/30 p-3 min-w-[220px] animate-in slide-in-from-top-2 duration-300">
                    <div className="flex flex-col gap-2">
                      <Link
                        to="/it-welfare-technology"
                        className="bg-gradient-to-r from-red-500 to-rose-600 text-white px-4 py-3 rounded-xl text-sm font-semibold hover:from-red-600 hover:to-rose-700 transition-all duration-300 text-center shadow-lg hover:shadow-xl hover:scale-105"
                      >
                        {t('municipality.benefits.secureData.itWelfareTechnology')}
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <div className="block w-full relative h-full group" ref={partnershipCardRef}>
                <div 
                  onClick={() => setShowPartnershipButtons(!showPartnershipButtons)}
                  className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-white/20 cursor-pointer h-full flex flex-col relative overflow-hidden"
                >
                  {/* Card background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 to-cyan-50/30 rounded-3xl"></div>
                  
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-3xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-teal-700 transition-colors duration-300">
                      {t('municipality.benefits.partnership.title')}
                    </h3>
                    <p className="text-gray-600 leading-relaxed flex-grow text-lg">
                      {t('municipality.benefits.partnership.link')}
                    </p>
                  </div>
                </div>
                
                {/* Modern dropdown buttons */}
                {showPartnershipButtons && (
                  <div className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/30 p-3 min-w-[220px] animate-in slide-in-from-top-2 duration-300">
                    <div className="flex flex-col gap-2">
                      <Link
                        to="/municipality-knowledge"
                        className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-3 rounded-xl text-sm font-semibold hover:from-amber-600 hover:to-orange-700 transition-all duration-300 text-center shadow-lg hover:shadow-xl hover:scale-105"
                      >
                        {t('municipality.benefits.partnership.municipalChief')}
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 w-full bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="w-full max-w-8xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            {t('municipality.cta.title')}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/guidance" 
              className="group inline-flex items-center justify-center bg-teal-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-teal-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {t('municipality.cta.contact')}
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link 
              to="/demo" 
              className="group inline-flex items-center justify-center bg-yellow-500 text-gray-800 px-8 py-4 rounded-xl font-semibold hover:bg-yellow-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {t('municipality.cta.demo')}
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 w-full bg-white">
        <div className="w-full max-w-8xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('municipality.faq.title')}
            </h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
          </div>
          <div className="space-y-6">
            {t('municipality.faq.questions', { returnObjects: true }).map((faq, index) => (
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
                {t('municipality.finalCta.title')}
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                {t('municipality.finalCta.description')}
              </p>
              <Link 
                to="/guidance" 
                className="group inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-12 py-6 rounded-2xl font-semibold text-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                {t('municipality.finalCta.button')}
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
            {t('municipality.footer')}
          </div>
        </div>
      </footer>
      </div>
    </div>
  )
}