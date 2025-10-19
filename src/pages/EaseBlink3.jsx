import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import eldreDame from '../assets/eldre dame i stol.jpg'
import howItWorks from '../assets/how does it works.png'
import tabletCalling from '../assets/tablet_calling.jpg'
import easeBlinkCall from '../assets/ease_blink_call.png'
import designer from '../assets/Designer.png'

export default function EaseBlink3() {
  const { t } = useTranslation()
  
  return (
    <div className="easeblink3-page min-h-screen w-full">
      <div className="w-full">
        {/* Back Button */}
        <div className="w-full bg-gray-50 border-b border-gray-200">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-2">
            <Link 
              to="/easeblink1"
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
              <span className="font-medium">{t('easeblink3.backButton')}</span>
            </Link>
          </div>
        </div>

        {/* First Section - Hvordan virker det */}
        <section className="pt-8 pb-16 md:pt-12 md:pb-24 w-full bg-white">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Left side - Text content */}
              <div className="lg:w-3/5 space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  {t('easeblink3.section1.title')}
                </h1>
                
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  {t('easeblink3.section1.description')}
                </p>
              </div>
              
              {/* Right side - Image */}
              <div className="lg:w-2/5 flex justify-center">
                <img 
                  src={howItWorks} 
                  alt="How it works diagram showing tools and ideas" 
                  className="w-full max-w-md h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Second Section - Hvem kan bruke easeBlink */}
        <section className="py-16 w-full bg-gray-50">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Left side - Image */}
              <div className="lg:w-2/5 flex justify-center">
                <img 
                  src={eldreDame} 
                  alt="Elderly woman using tablet on couch" 
                  className="w-full max-w-md h-auto rounded-lg shadow-lg"
                />
              </div>
              
              {/* Right side - Text content */}
              <div className="lg:w-3/5 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {t('easeblink3.section2.title')}
                </h2>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t('easeblink3.section2.description')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Third Section - Motta samtale er enkelt */}
        <section className="py-16 w-full bg-white">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Left side - Text content */}
              <div className="lg:w-3/5 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {t('easeblink3.section3.title')}
                </h2>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t('easeblink3.section3.description')}
                </p>
              </div>
              
              {/* Right side - Image */}
              <div className="lg:w-2/5 flex justify-center">
                <img 
                  src={tabletCalling} 
                  alt="Tablet showing incoming call with accept and reject buttons" 
                  className="w-full max-w-md h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Fourth Section - Opprett samtale */}
        <section className="py-16 w-full bg-gray-50">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Left side - Image */}
              <div className="lg:w-2/5 flex justify-center">
                <img 
                  src={easeBlinkCall} 
                  alt="Contact list showing family members" 
                  className="w-full max-w-sm h-auto rounded-lg shadow-lg"
                />
              </div>
              
              {/* Right side - Text content */}
              <div className="lg:w-3/5 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {t('easeblink3.section4.title')}
                </h2>
                
                <h3 className="text-xl font-semibold text-gray-800">
                  {t('easeblink3.section4.subtitle')}
                </h3>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t('easeblink3.section4.description')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fifth Section - Oppsett og vedlikehold */}
        <section className="py-16 w-full bg-white">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Left side - Text content */}
              <div className="lg:w-3/5 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {t('easeblink3.section5.title')}
                </h2>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t('easeblink3.section5.description')}
                </p>
              </div>
              
              {/* Right side - Image */}
              <div className="lg:w-2/5 flex justify-center">
                <img 
                  src={designer} 
                  alt="Contact management interface on computer screen" 
                  className="w-full max-w-md h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Combine Solutions Section */}
        <section className="py-16 w-full bg-blue-50">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              {t('easeblink3.combineSolutions.title')}
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Safety and Fall Prevention Card */}
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
                <p className="text-sm text-gray-700 leading-relaxed mb-6 flex-grow">
                  {t('easeblink3.combineSolutions.card1.description')}
                </p>
                <Link 
                  to="/safety-solutions1"
                  className="inline-block w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 text-center"
                >
                  {t('easeblink3.combineSolutions.card1.button')}
                </Link>
              </div>

              {/* Alarm Buttons Card */}
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
                <p className="text-sm text-gray-700 leading-relaxed mb-6 flex-grow">
                  {t('easeblink3.combineSolutions.card2.description')}
                </p>
                <Link 
                  to="/alarm-communication1"
                  className="inline-block w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 text-center"
                >
                  {t('easeblink3.combineSolutions.card2.button')}
                </Link>
              </div>

              {/* Medical Follow-up Card */}
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
                <p className="text-sm text-gray-700 leading-relaxed mb-6 flex-grow">
                  {t('easeblink3.combineSolutions.card3.description')}
                </p>
                <Link 
                  to="/medical-followup1"
                  className="inline-block w-full bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 text-center"
                >
                  {t('easeblink3.combineSolutions.card3.button')}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Questions Section */}
        <section className="py-16 w-full bg-white">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              {t('easeblink3.questions.title')}
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* FAQ Card */}
              <div className="bg-white p-8 rounded-3xl border-4 border-dashed border-orange-400 hover:border-orange-500 transition-all duration-300 flex flex-col">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{t('easeblink3.questions.faq.title')}</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">{t('easeblink3.questions.faq.description')}</p>
                </div>
                <div className="mt-auto">
                  <Link 
                    to="/faq"
                    state={{ from: '/easeblink3' }}
                    className="inline-block bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all duration-300 w-full text-center"
                  >
                    {t('easeblink3.questions.faq.button')}
                  </Link>
                </div>
              </div>

              {/* Experiences Card */}
              <div className="bg-white p-8 rounded-3xl border-4 border-dashed border-orange-400 hover:border-orange-500 transition-all duration-300 flex flex-col">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{t('easeblink3.questions.experiences.title')}</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">{t('easeblink3.questions.experiences.description')}</p>
                </div>
                <div className="mt-auto">
                  <Link 
                    to="/experiences" 
                    className="inline-block bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all duration-300 w-full text-center"
                  >
                    {t('easeblink3.questions.experiences.button')}
                  </Link>
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-white p-8 rounded-3xl border-4 border-dashed border-orange-400 hover:border-orange-500 transition-all duration-300 flex flex-col">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{t('easeblink3.questions.contact.title')}</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {t('easeblink3.questions.contact.description')}
                  </p>
                </div>
                <div className="mt-auto">
                  <Link 
                    to="/documents" 
                    className="inline-block bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all duration-300 w-full text-center"
                  >
                    {t('easeblink3.questions.contact.button')}
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

