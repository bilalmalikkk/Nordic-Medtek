import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import rectangleImage from '../assets/Rectangle.png'

export default function Partners() {
  const { t } = useTranslation()
  return (
    <div className="min-h-screen w-full">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="min-h-[calc(100vh-100px)] flex items-center w-full bg-white">
          <div className="w-full">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                    {t('partners.hero.title')}
                  </h1>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    {t('partners.hero.description')}
                  </p>
                </div>
                <Link 
                  to="/guidance" 
                  className="group inline-flex items-center justify-center bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-900 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
{t('partners.hero.button')}
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className="absolute -inset-4 bg-gradient-to-r from-teal-400 to-blue-500 rounded-2xl blur opacity-20"></div>
                  <div className="relative bg-white p-4 rounded-2xl shadow-2xl">
                    <img 
                      src={rectangleImage} 
                      alt="Healthcare professional and elderly patient consultation" 
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Become Partner Section */}
        <section className="py-20 w-full bg-white">
          <div className="w-full">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">{t('partners.whyBecomePartner.title')}</h2>
              <ul className="space-y-4 text-lg text-gray-700">
                {(t('partners.whyBecomePartner.points', { returnObjects: true }) || []).map((point, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* How We Support Partners Section */}
        <section className="py-20 w-full bg-gradient-to-br from-gray-50 to-white">
          <div className="w-full">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">{t('partners.howWeSupport.title')}</h2>
              <ol className="space-y-6 text-lg text-gray-700">
                {(t('partners.howWeSupport.steps', { returnObjects: true }) || []).map((step, index) => (
                  <li key={index} className="flex items-start">
                    <span className="font-bold text-teal-600 mr-4 min-w-[120px]">{step.title}</span>
                    <span>{step.description}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Ready to Become Partner CTA Section */}
        <section className="py-20 w-full bg-white">
          <div className="w-full">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">{t('partners.cta.title')}</h2>
              <Link 
                to="/guidance" 
                className="inline-flex items-center justify-center bg-gray-800 text-white px-12 py-6 rounded-xl font-semibold text-lg hover:bg-gray-900 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
{t('partners.cta.button')}
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-200 py-8 w-full">
          <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-600">{t('partners.footer')}</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
