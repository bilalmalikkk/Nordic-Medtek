import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

export default function FAQ() {
  const { t } = useTranslation()
  const location = useLocation()
  const fromPage = location.state?.from || '/'
  
  const [openSection, setOpenSection] = useState(null)
  
  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section)
  }
  
  return (
    <div className="faq-page min-h-screen w-full">
      <div className="w-full">
        {/* Back Button */}
        <div className="w-full bg-gray-50 border-b border-gray-200">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link 
              to={fromPage}
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
              <span className="font-medium">{t('faq.backButton')}</span>
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 md:py-24 w-full bg-gradient-to-br from-teal-50 via-white to-blue-50">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {t('faq.title')}
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-6 max-w-3xl mx-auto leading-relaxed">
                {t('faq.description')}
              </p>
              <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                {t('faq.contactPrompt')}
              </p>
              
              {/* CTA Button */}
              <div className="flex justify-center">
                <Link 
                  to="/support"
                  className="inline-flex items-center bg-teal-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-teal-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {t('faq.contactButton')}
                </Link>
              </div>
            </div>
            
          </div>
        </section>

        {/* FAQ Accordion Section */}
        <section className="py-16 w-full bg-white">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Generelt Section */}
            <div className="mb-6">
              <button
                onClick={() => toggleSection('general')}
                className="w-full flex items-center justify-between p-6 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors duration-200 border-2 border-gray-200"
              >
                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                  <svg 
                    className={`w-6 h-6 mr-3 transform transition-transform duration-300 ${openSection === 'general' ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  {t('faq.categories.general')}
                </h2>
              </button>
              
              {openSection === 'general' && (
                <div className="mt-4 space-y-4 animate-fadeIn">
                  <div className="bg-white border-l-4 border-teal-500 p-6 rounded-r-xl shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-2">{t('faq.accordion.general.q1')}</h3>
                    <p className="text-gray-700">{t('faq.accordion.general.a1')}</p>
                  </div>
                  <div className="bg-white border-l-4 border-teal-500 p-6 rounded-r-xl shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-2">{t('faq.accordion.general.q2')}</h3>
                    <p className="text-gray-700">{t('faq.accordion.general.a2')}</p>
                  </div>
                  <div className="bg-white border-l-4 border-teal-500 p-6 rounded-r-xl shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-2">{t('faq.accordion.general.q3')}</h3>
                    <p className="text-gray-700">{t('faq.accordion.general.a3')}</p>
                  </div>
                  <div className="bg-white border-l-4 border-teal-500 p-6 rounded-r-xl shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-2">{t('faq.accordion.general.q4')}</h3>
                    <p className="text-gray-700">{t('faq.accordion.general.a4')}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Kostnader Section */}
            <div className="mb-6">
              <button
                onClick={() => toggleSection('costs')}
                className="w-full flex items-center justify-between p-6 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors duration-200 border-2 border-gray-200"
              >
                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                  <svg 
                    className={`w-6 h-6 mr-3 transform transition-transform duration-300 ${openSection === 'costs' ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  {t('faq.categories.costs')}
                </h2>
              </button>
              
              {openSection === 'costs' && (
                <div className="mt-4 space-y-4 animate-fadeIn">
                  <div className="bg-white border-l-4 border-blue-500 p-6 rounded-r-xl shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-2">{t('faq.accordion.costs.q1')}</h3>
                    <p className="text-gray-700 whitespace-pre-line">{t('faq.accordion.costs.a1')}</p>
                  </div>
                  <div className="bg-white border-l-4 border-blue-500 p-6 rounded-r-xl shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-2">{t('faq.accordion.costs.q2')}</h3>
                    <p className="text-gray-700 whitespace-pre-line">{t('faq.accordion.costs.a2')}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Sikkerhet og personvern Section */}
            <div className="mb-6">
              <button
                onClick={() => toggleSection('security')}
                className="w-full flex items-center justify-between p-6 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors duration-200 border-2 border-gray-200"
              >
                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                  <svg 
                    className={`w-6 h-6 mr-3 transform transition-transform duration-300 ${openSection === 'security' ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  {t('faq.categories.securityPrivacy')}
                </h2>
              </button>
              
              {openSection === 'security' && (
                <div className="mt-4 space-y-4 animate-fadeIn">
                  <div className="bg-white border-l-4 border-purple-500 p-6 rounded-r-xl shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-2">{t('faq.accordion.security.q1')}</h3>
                    <p className="text-gray-700">{t('faq.accordion.security.a1')}</p>
                  </div>
                  <div className="bg-white border-l-4 border-purple-500 p-6 rounded-r-xl shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-2">{t('faq.accordion.security.q2')}</h3>
                    <p className="text-gray-700">{t('faq.accordion.security.a2')}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Fallsensorer Section */}
            <div className="mb-6">
              <button
                onClick={() => toggleSection('fallSensors')}
                className="w-full flex items-center justify-between p-6 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors duration-200 border-2 border-gray-200"
              >
                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                  <svg 
                    className={`w-6 h-6 mr-3 transform transition-transform duration-300 ${openSection === 'fallSensors' ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  {t('faq.accordion.fallSensors.title')}
                </h2>
              </button>
              
              {openSection === 'fallSensors' && (
                <div className="mt-4 space-y-4 animate-fadeIn">
                  <div className="bg-white border-l-4 border-teal-500 p-6 rounded-r-xl shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-2">{t('faq.accordion.fallSensors.q1')}</h3>
                    <p className="text-gray-700">{t('faq.accordion.fallSensors.a1')}</p>
                  </div>
                  <div className="bg-white border-l-4 border-teal-500 p-6 rounded-r-xl shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-2">{t('faq.accordion.fallSensors.q2')}</h3>
                    <p className="text-gray-700">{t('faq.accordion.fallSensors.a2')}</p>
                  </div>
                  <div className="bg-white border-l-4 border-teal-500 p-6 rounded-r-xl shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-2">{t('faq.accordion.fallSensors.q3')}</h3>
                    <p className="text-gray-700">{t('faq.accordion.fallSensors.a3')}</p>
                  </div>
                  <div className="bg-white border-l-4 border-teal-500 p-6 rounded-r-xl shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-2">{t('faq.accordion.fallSensors.q4')}</h3>
                    <p className="text-gray-700">{t('faq.accordion.fallSensors.a4')}</p>
                  </div>
                  <div className="bg-white border-l-4 border-teal-500 p-6 rounded-r-xl shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-2">{t('faq.accordion.fallSensors.q5')}</h3>
                    <p className="text-gray-700 whitespace-pre-line">{t('faq.accordion.fallSensors.a5')}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Alarmknapper Section */}
            <div className="mb-6">
              <button
                onClick={() => toggleSection('alarmButtons')}
                className="w-full flex items-center justify-between p-6 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors duration-200 border-2 border-gray-200"
              >
                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                  <svg 
                    className={`w-6 h-6 mr-3 transform transition-transform duration-300 ${openSection === 'alarmButtons' ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  {t('faq.accordion.alarmButtons.title')}
                </h2>
              </button>
              
              {openSection === 'alarmButtons' && (
                <div className="mt-4 space-y-4 animate-fadeIn">
                  <div className="bg-white border-l-4 border-blue-500 p-6 rounded-r-xl shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-2">{t('faq.accordion.alarmButtons.q1')}</h3>
                    <p className="text-gray-700">{t('faq.accordion.alarmButtons.a1')}</p>
                  </div>
                  <div className="bg-white border-l-4 border-blue-500 p-6 rounded-r-xl shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-2">{t('faq.accordion.alarmButtons.q2')}</h3>
                    <p className="text-gray-700">{t('faq.accordion.alarmButtons.a2')}</p>
                  </div>
                  <div className="bg-white border-l-4 border-blue-500 p-6 rounded-r-xl shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-2">{t('faq.accordion.alarmButtons.q3')}</h3>
                    <p className="text-gray-700">{t('faq.accordion.alarmButtons.a3')}</p>
                  </div>
                  <div className="bg-white border-l-4 border-blue-500 p-6 rounded-r-xl shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-2">{t('faq.accordion.alarmButtons.q4')}</h3>
                    <p className="text-gray-700">{t('faq.accordion.alarmButtons.a4')}</p>
                  </div>
                  <div className="bg-white border-l-4 border-blue-500 p-6 rounded-r-xl shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-2">{t('faq.accordion.alarmButtons.q5')}</h3>
                    <p className="text-gray-700 whitespace-pre-line">{t('faq.accordion.alarmButtons.a5')}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Medisinske sensorer Section */}
            <div className="mb-6">
              <button
                onClick={() => toggleSection('medicalSensors')}
                className="w-full flex items-center justify-between p-6 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors duration-200 border-2 border-gray-200"
              >
                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                  <svg 
                    className={`w-6 h-6 mr-3 transform transition-transform duration-300 ${openSection === 'medicalSensors' ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  {t('faq.accordion.medicalSensors.title')}
                </h2>
              </button>
              
              {openSection === 'medicalSensors' && (
                <div className="mt-4 space-y-4 animate-fadeIn">
                  <div className="bg-white border-l-4 border-green-500 p-6 rounded-r-xl shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-2">{t('faq.accordion.medicalSensors.q1')}</h3>
                    <p className="text-gray-700">{t('faq.accordion.medicalSensors.a1')}</p>
                  </div>
                  <div className="bg-white border-l-4 border-green-500 p-6 rounded-r-xl shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-2">{t('faq.accordion.medicalSensors.q2')}</h3>
                    <p className="text-gray-700">{t('faq.accordion.medicalSensors.a2')}</p>
                  </div>
                  <div className="bg-white border-l-4 border-green-500 p-6 rounded-r-xl shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-2">{t('faq.accordion.medicalSensors.q3')}</h3>
                    <p className="text-gray-700">{t('faq.accordion.medicalSensors.a3')}</p>
                  </div>
                  <div className="bg-white border-l-4 border-green-500 p-6 rounded-r-xl shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-2">{t('faq.accordion.medicalSensors.q4')}</h3>
                    <p className="text-gray-700 whitespace-pre-line">{t('faq.accordion.medicalSensors.a4')}</p>
                  </div>
                </div>
              )}
            </div>

            {/* EaseBlink Section */}
            <div className="mb-6">
              <button
                onClick={() => toggleSection('easeBlink')}
                className="w-full flex items-center justify-between p-6 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors duration-200 border-2 border-gray-200"
              >
                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                  <svg 
                    className={`w-6 h-6 mr-3 transform transition-transform duration-300 ${openSection === 'easeBlink' ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  {t('faq.accordion.easeBlink.title')}
                </h2>
              </button>
              
              {openSection === 'easeBlink' && (
                <div className="mt-4 space-y-4 animate-fadeIn">
                  <div className="bg-white border-l-4 border-purple-500 p-6 rounded-r-xl shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-2">{t('faq.accordion.easeBlink.q1')}</h3>
                    <p className="text-gray-700">{t('faq.accordion.easeBlink.a1')}</p>
                  </div>
                </div>
              )}
            </div>

           </div>
         </section>

         {/* Bottom CTA Section */}
         <section className="py-16 px-4 sm:px-6 lg:px-8">
           <div className="w-full max-w-[1600px] mx-auto text-center">
             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
               {t('faq.bottomCta.title')}
             </h2>
             
             <div className="bg-white border-2 border-dashed border-orange-300 rounded-2xl p-8 md:p-12 shadow-lg max-w-3xl mx-auto">
               <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                 <div className="flex-1">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4">
                     {t('faq.bottomCta.heading')}
                   </h3>
                   <p className="text-gray-700 text-lg">
                     {t('faq.bottomCta.description')}
                   </p>
                 </div>
                 <div className="flex-shrink-0">
                   <Link
                     to="/support"
                     className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg"
                   >
                     {t('faq.bottomCta.button')}
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

