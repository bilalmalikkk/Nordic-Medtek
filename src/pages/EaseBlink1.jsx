import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import videoCallImage from '../assets/video call.png'
import easeBlinkScreen from '../assets/image (13).png'
import phoneLowres from '../assets/Phone_lowres.png'
import bildeKarusell from '../assets/bilde_karusell.png'

export default function EaseBlink1() {
  const { t } = useTranslation()
  const [isPricingModalOpen, setIsPricingModalOpen] = useState(false)

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsPricingModalOpen(false)
      }
    }

    if (isPricingModalOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isPricingModalOpen])
  
  return (
    <div className="easeblink1-page min-h-screen w-full">
      <div className="w-full">
        {/* Back Button */}
        <div className="w-full">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 bg-gray-50 rounded-lg">
            <div className="py-2">
              <Link 
                to="/private"
                className="inline-flex items-center text-gray-700 hover:text-teal-600 transition-colors group"
              >
                <svg 
                  className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span className="font-medium">{t('easeblink1.backButton')}</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section id="challenges" className="pt-8 pb-16 md:pt-12 md:pb-24 w-full bg-white">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Left side - Text content */}
              <div className="lg:w-3/5 space-y-6">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                  {t('easeblink1.title')}
                </h1>
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                  {t('easeblink1.description')}
                </p>
              </div>
              
              {/* Right side - Image */}
              <div className="lg:w-2/5 flex justify-center">
                <img 
                  src={bildeKarusell} 
                  alt="Elderly woman using EaseBlink to connect with family through video and photo sharing" 
                  className="w-full max-w-xs h-auto rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Top Menu Cards */}
        <section className="py-4 w-full">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 bg-gray-50 rounded-lg">
            <div className="flex flex-wrap justify-center gap-3 py-2">
              <Link to="/easeblink2" className="bg-white border border-gray-200 px-6 py-2.5 rounded-full hover:bg-teal-50 hover:border-teal-500 transition-all duration-200 shadow-sm hover:shadow">
                <span className="text-sm font-medium text-gray-900">{t('easeblink1.menu.challenges')}</span>
              </Link>
              <Link to="/easeblink3" className="bg-white border border-gray-200 px-6 py-2.5 rounded-full hover:bg-teal-50 hover:border-teal-500 transition-all duration-200 shadow-sm hover:shadow">
                <span className="text-sm font-medium text-gray-900">{t('easeblink1.menu.howItWorks')}</span>
              </Link>
              <button 
                onClick={() => setIsPricingModalOpen(true)}
                className="bg-white border border-gray-200 px-6 py-2.5 rounded-full hover:bg-teal-50 hover:border-teal-500 transition-all duration-200 shadow-sm hover:shadow"
              >
                <span className="text-sm font-medium text-gray-900">{t('easeblink1.menu.pricing')}</span>
              </button>
            </div>
          </div>
        </section>

        {/* Avoid Isolation Section */}
        <section className="py-16 w-full">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 bg-gray-50 rounded-lg">
            <div className="max-w-3xl py-8 px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t('easeblink1.isolationTitle')}
              </h2>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  {t('easeblink1.isolationDescription')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How easeBlink Works Section */}
        <section id="how-it-works" className="py-16 w-full bg-white">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Left side - Text content */}
              <div className="lg:w-3/5 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {t('easeblink1.howItWorksTitle')}
                </h2>
                
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    {t('easeblink1.howItWorksDescription1')}
                  </p>
                  
                  <p>
                    {t('easeblink1.howItWorksDescription2')}
                  </p>
                </div>
              </div>
              
              {/* Right side - Images */}
              <div className="lg:w-2/5 flex justify-center">
                <div className="relative pr-16 md:pr-20">
                  {/* Larger screen - positioned in background, higher */}
                  <img 
                    src={easeBlinkScreen} 
                    alt="EaseBlink screen interface showing contacts and photo carousel" 
                    className="w-full max-w-sm h-auto rounded-lg shadow-xl"
                  />
                  
                  {/* Phone - overlapping on the right, positioned lower */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 mt-8 z-10">
                    <img 
                      src={phoneLowres} 
                      alt="Phone showing video call interface" 
                      className="w-32 md:w-40 h-auto drop-shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 w-full">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 bg-gray-50 rounded-lg">
            <div className="max-w-3xl py-8 px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t('easeblink1.pricingTitle')}
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Vår fleksible leie-ordning gir en lav terskel for å ta i bruk en moderne og effektiv løsning. Vi har som mål å være ledende på både pris og funksjonalitet, og derfor gjennomfører vi nå en grundig evaluering av markedet. Dette sikrer at vår løsning blir riktig priset og strategisk plassert – til fordel for deg som kunde. Prisene er derfor ikke lansert ennå, men vil bli tilgjengelige så snart vi har kvalitets-sikret at de gjenspeiler den verdien vi ønsker å tilby.
              </p>
              
              <Link 
                to="/pricing"
                className="inline-block bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {t('easeblink1.pricingButton')}
              </Link>
            </div>
          </div>
        </section>

        {/* Combine Solutions Section */}
        <section className="py-16 w-full">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 bg-blue-50 rounded-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center pt-8">
              {t('easeblink1.combineSolutionsTitle')}
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Safety and Fall Prevention Card */}
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
                <p className="text-sm text-gray-700 leading-relaxed mb-6 flex-grow">
                  {t('easeblink1.combineSolutions.card1.description')}
                </p>
                <Link 
                  to="/safety-solutions1"
                  className="inline-block w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 text-center mt-auto"
                >
                  {t('easeblink1.combineSolutions.card1.button')}
                </Link>
              </div>

              {/* Alarm Buttons Card */}
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
                <p className="text-sm text-gray-700 leading-relaxed mb-6 flex-grow">
                  {t('easeblink1.combineSolutions.card2.description')}
                </p>
                <Link 
                  to="/alarm-communication1"
                  className="inline-block w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 text-center mt-auto"
                >
                  {t('easeblink1.combineSolutions.card2.button')}
                </Link>
              </div>

              {/* Medical Follow-up Card */}
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
                <p className="text-sm text-gray-700 leading-relaxed mb-6 flex-grow">
                  {t('easeblink1.combineSolutions.card3.description')}
                </p>
                <Link 
                  to="/medical-followup1"
                  className="inline-block w-full bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 text-center mt-auto"
                >
                  {t('easeblink1.combineSolutions.card3.button')}
                </Link>
              </div>
            </div>
            <div className="pb-8"></div>
          </div>
        </section>

        {/* Questions Section */}
        <section className="py-16 w-full">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center pt-8">
              {t('easeblink1.questionsTitle')}
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* FAQ Card */}
              <div className="bg-white p-8 rounded-3xl border-4 border-dashed border-orange-400 hover:border-orange-500 transition-all duration-300 flex flex-col">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{t('easeblink1.questions.faq.title')}</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">{t('easeblink1.questions.faq.description')}</p>
                </div>
                <div className="mt-auto">
                  <Link 
                    to="/faq"
                    state={{ from: '/easeblink1' }}
                    className="inline-block bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all duration-300 w-full text-center"
                  >
                    {t('easeblink1.questions.faq.button')}
                  </Link>
                </div>
              </div>

              {/* Experiences Card */}
              <div className="bg-white p-8 rounded-3xl border-4 border-dashed border-orange-400 hover:border-orange-500 transition-all duration-300 flex flex-col">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{t('easeblink1.questions.experiences.title')}</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">{t('easeblink1.questions.experiences.description')}</p>
                </div>
                <div className="mt-auto">
                  <Link 
                    to="/experiences" 
                    className="inline-block bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all duration-300 w-full text-center"
                  >
                    {t('easeblink1.questions.experiences.button')}
                  </Link>
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-white p-8 rounded-3xl border-4 border-dashed border-orange-400 hover:border-orange-500 transition-all duration-300 flex flex-col">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{t('easeblink1.questions.contact.title')}</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {t('easeblink1.questions.contact.description')}
                  </p>
                </div>
                <div className="mt-auto">
                  <Link 
                    to="/documents" 
                    className="inline-block bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all duration-300 w-full text-center"
                  >
                    {t('easeblink1.questions.contact.button')}
                  </Link>
                </div>
              </div>
            </div>
            <div className="pb-8"></div>
          </div>
        </section>

        {/* Pricing Modal */}
        {isPricingModalOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 z-50"
              onClick={() => setIsPricingModalOpen(false)}
            />
            
            {/* Modal */}
            <div 
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto mx-4"
              style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 9999
              }}
            >
              <button
                onClick={() => setIsPricingModalOpen(false)}
                className="absolute top-4 right-4 z-10 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Modal Content */}
              <div className="p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  {t('easeblink1.pricingModal.title')}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t('easeblink1.pricingModal.description')}
                </p>
                <div className="mt-8 flex justify-end">
                  <button
                    onClick={() => setIsPricingModalOpen(false)}
                    className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    {t('easeblink1.pricingModal.closeButton')}
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
