import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import videoCollaboration from '../assets/image (21).png'
import familyTablet from '../assets/easeblink_private.png'
import bildeKarusell from '../assets/bilde_karusell.png'

export default function EaseBlink2() {
  const { t } = useTranslation()
  
  return (
    <div className="easeblink2-page min-h-screen w-full">
      <div className="w-full">
        {/* Back Button */}
        <div className="w-full bg-gray-50 border-b border-gray-200">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
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
              <span className="font-medium">{t('easeblink2.backButton')}</span>
            </Link>
          </div>
        </div>

        {/* First Section - Utfordringer vi ønsker løser */}
        <section className="py-16 md:py-24 w-full bg-white">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              {/* Left side - Text content */}
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  {t('easeblink2.section1.title')}
                </h1>
                
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  {t('easeblink2.section1.description1')}
                </p>
                
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  {t('easeblink2.section1.description2')}
                </p>
              </div>
              
              {/* Right side - Image */}
              <div className="flex justify-center lg:justify-end">
                <img 
                  src={familyTablet} 
                  alt="Family video call on tablet" 
                  className="w-full max-w-lg h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Second Section - Samhørighet */}
        <section className="py-16 w-full bg-white">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              {/* Left side - Image */}
              <div className="flex justify-center lg:justify-start">
                <img 
                  src={videoCollaboration} 
                  alt="Video collaboration showing family connection" 
                  className="w-full max-w-md h-auto rounded-lg"
                />
              </div>
              
              {/* Right side - Text content */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {t('easeblink2.section2.title')}
                </h2>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t('easeblink2.section2.description')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Third Section - Glede i hverdagen */}
        <section className="py-16 w-full bg-gray-50">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              {/* Left side - Text content */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {t('easeblink2.section3.title')}
                </h2>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t('easeblink2.section3.description')}
                </p>
              </div>
              
              {/* Right side - Image */}
              <div className="flex justify-center lg:justify-end">
                <img 
                  src={bildeKarusell} 
                  alt="Elderly woman holding tablet showing family photo carousel" 
                  className="w-full max-w-sm h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Combine Solutions Section */}
        <section className="py-16 w-full bg-blue-50">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              {t('easeblink2.combineSolutions.title')}
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Safety and Fall Prevention Card */}
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
                <p className="text-sm text-gray-700 leading-relaxed mb-6 flex-grow">
                  {t('easeblink2.combineSolutions.card1.description')}
                </p>
                <Link 
                  to="/safety-solutions1"
                  className="inline-block w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 text-center"
                >
                  {t('easeblink2.combineSolutions.card1.button')}
                </Link>
              </div>

              {/* Alarm Buttons Card */}
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
                <p className="text-sm text-gray-700 leading-relaxed mb-6 flex-grow">
                  {t('easeblink2.combineSolutions.card2.description')}
                </p>
                <Link 
                  to="/alarm-communication1"
                  className="inline-block w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 text-center"
                >
                  {t('easeblink2.combineSolutions.card2.button')}
                </Link>
              </div>

              {/* Medical Follow-up Card */}
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
                <p className="text-sm text-gray-700 leading-relaxed mb-6 flex-grow">
                  {t('easeblink2.combineSolutions.card3.description')}
                </p>
                <Link 
                  to="/medical-followup1"
                  className="inline-block w-full bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 text-center"
                >
                  {t('easeblink2.combineSolutions.card3.button')}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Questions Section */}
        <section className="py-16 w-full bg-white">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              {t('easeblink2.questions.title')}
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* FAQ Card */}
              <div className="bg-white p-8 rounded-3xl border-4 border-dashed border-orange-400 hover:border-orange-500 transition-all duration-300 flex flex-col">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{t('easeblink2.questions.faq.title')}</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">{t('easeblink2.questions.faq.description')}</p>
                </div>
                <div className="mt-auto">
                  <Link 
                    to="/faq"
                    state={{ from: '/easeblink2' }}
                    className="inline-block bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all duration-300 w-full text-center"
                  >
                    {t('easeblink2.questions.faq.button')}
                  </Link>
                </div>
              </div>

              {/* Experiences Card */}
              <div className="bg-white p-8 rounded-3xl border-4 border-dashed border-orange-400 hover:border-orange-500 transition-all duration-300 flex flex-col">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{t('easeblink2.questions.experiences.title')}</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">{t('easeblink2.questions.experiences.description')}</p>
                </div>
                <div className="mt-auto">
                  <Link 
                    to="/experiences" 
                    className="inline-block bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all duration-300 w-full text-center"
                  >
                    {t('easeblink2.questions.experiences.button')}
                  </Link>
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-white p-8 rounded-3xl border-4 border-dashed border-orange-400 hover:border-orange-500 transition-all duration-300 flex flex-col">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{t('easeblink2.questions.contact.title')}</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {t('easeblink2.questions.contact.description')}
                  </p>
                </div>
                <div className="mt-auto">
                  <Link 
                    to="/documents" 
                    className="inline-block bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all duration-300 w-full text-center"
                  >
                    {t('easeblink2.questions.contact.button')}
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

