import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import heroImage from '../assets/Landingpage.png'

export default function Home() {
  const { t } = useTranslation()
  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <section className="py-16 md:py-20 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
    <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                {t('hero.title1')}
              </h1>
              <p className="text-lg text-gray-700 italic mb-8">
                {t('hero.lead')}
              </p>
              <Link 
                to="/guidance" 
                className="inline-block bg-gray-800 text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-900 transition-colors"
              >
                {t('hero.button')}
              </Link>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-lg">
                <img 
                  src={heroImage} 
                  alt="Elderly woman and caregiver holding hands" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hvem er du Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-yellow-100 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('home.whoAreYou')}</h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
            <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
              <div className="w-6 h-6 bg-teal-600 rounded-full"></div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{t('home.targetAudiences.municipalities.title')}</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {t('home.targetAudiences.municipalities.description')}
            </p>
            <Link 
              to="/municipality" 
              className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium transition-colors group"
            >
              {t('home.targetAudiences.municipalities.link')}
              <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{t('home.targetAudiences.healthcare.title')}</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {t('home.targetAudiences.healthcare.description')}
            </p>
            <Link 
              to="/company" 
              className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium transition-colors group"
            >
              {t('home.targetAudiences.healthcare.link')}
              <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
              <div className="w-6 h-6 bg-green-600 rounded-full"></div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{t('home.targetAudiences.relatives.title')}</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {t('home.targetAudiences.relatives.description')}
            </p>
            <Link 
              to="/private" 
              className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium transition-colors group"
            >
              {t('home.targetAudiences.relatives.link')}
              <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
              <div className="w-6 h-6 bg-purple-600 rounded-full"></div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{t('home.targetAudiences.partners.title')}</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {t('home.targetAudiences.partners.description')}
            </p>
            <Link 
              to="/partners" 
              className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium transition-colors group"
            >
              {t('home.targetAudiences.partners.link')}
              <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          </div>
        </div>
      </section>

      {/* Hvorfor - vårt formål Section */}
      <section className="py-16 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('home.why.title')}</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {t('home.why.description')}
          </p>
        </div>
      </section>

      {/* Hvordan - vår tilnærming Section */}
      <section className="py-16 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('home.how.title')}</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {t('home.how.description')}
          </p>
        </div>
      </section>

      {/* Hva - våre løsninger Section */}
      <section className="py-16 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('home.what.title')}</h2>
          <ul className="space-y-4 text-lg text-gray-700">
            {(t('home.what.solutions', { returnObjects: true }) || []).map((solution, index) => (
              <li key={index} className="flex items-start">
                <span className="text-teal-600 font-bold mr-3">•</span>
                <span>{solution}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Fordeler Section */}
      <section className="py-16 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('home.benefits.title')}</h2>
          <ul className="space-y-4 text-lg text-gray-700">
            {(t('home.benefits.items', { returnObjects: true }) || []).map((benefit, index) => (
              <li key={index} className="flex items-start">
                <span className="text-teal-600 font-bold mr-3">•</span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* First CTA Section */}
      <section className="py-16 bg-gray-100 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('home.cta1.title')}</h2>
          <Link 
            to="/guidance" 
            className="inline-block bg-gray-800 text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-900 transition-colors"
          >
            {t('home.cta1.button')}
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">{t('home.faq.title')}</h2>
          <div className="space-y-8">
            {(t('home.faq.questions', { returnObjects: true }) || []).map((faq, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center border-2 border-dashed border-orange-300 rounded-lg p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('home.cta2.title')}</h2>
            <p className="text-lg text-gray-700 mb-8">
              {t('home.cta2.description')}
            </p>
            <Link 
              to="/guidance" 
              className="inline-block bg-gray-800 text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-900 transition-colors"
            >
              {t('home.cta2.button')}
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-200 py-8 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">{t('home.footer')}</p>
        </div>
      </footer>
    </div>
  )
}


