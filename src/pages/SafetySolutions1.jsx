import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'
import ContactForm from '../components/ContactForm'
import indreRo3 from '../assets/indre ro3.png'
import alertFlowchart from '../assets/image.png'
import returImage from '../assets/retur.png'
import collaborateImage from '../assets/collaborate.png'
import bad3 from '../assets/bad3.png'
import soverom from '../assets/soverom.png'
import trapp from '../assets/trapp.png'
import image1 from '../assets/image (1).png'
import fallalarmImage from '../assets/image (2).png'

export default function SafetySolutions1() {
  const { t } = useTranslation()
  const location = useLocation()
  const from = location.state?.from || '/private'
  
  return (
    <div className="safety-solutions-page min-h-screen w-full">
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
            <span className="font-medium">{t('safetySolutions1.breadcrumb')}</span>
          </Link>
        </div>
      </section>

      <section className="py-4 w-full border-b border-gray-200">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-full px-4 py-3">
            <div className="flex flex-wrap justify-center gap-3">
            <a href="#utfordringer" className="bg-white border border-gray-200 px-6 py-2.5 rounded-full hover:bg-teal-50 hover:border-teal-500 transition-all duration-200 shadow-sm hover:shadow">
              <span className="text-sm font-medium text-gray-900">{t('safetySolutions1.submenu.challenges')}</span>
            </a>
            <a href="#hvordan-virker" className="bg-white border border-gray-200 px-6 py-2.5 rounded-full hover:bg-teal-50 hover:border-teal-500 transition-all duration-200 shadow-sm hover:shadow">
              <span className="text-sm font-medium text-gray-900">{t('safetySolutions1.submenu.howItWorks')}</span>
            </a>
            <a href="#hvor-passer" className="bg-white border border-gray-200 px-6 py-2.5 rounded-full hover:bg-teal-50 hover:border-teal-500 transition-all duration-200 shadow-sm hover:shadow">
              <span className="text-sm font-medium text-gray-900">{t('safetySolutions1.submenu.whereItFits')}</span>
            </a>
            <a href="#pris" className="bg-white border border-gray-200 px-6 py-2.5 rounded-full hover:bg-teal-50 hover:border-teal-500 transition-all duration-200 shadow-sm hover:shadow">
              <span className="text-sm font-medium text-gray-900">{t('safetySolutions1.submenu.pricing')}</span>
            </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 w-full bg-white">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:gap-16">
            <div className="md:w-1/2">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-4">
                {t('safetySolutions1.hero.title')}
              </h1>
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-6">
                {t('safetySolutions1.hero.subtitle')}
              </p>
              <Link 
                to="/fallalarm" 
                className="group inline-flex items-center justify-center bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-900 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {t('safetySolutions1.hero.button')}
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-2 h-2 bg-gray-900 rounded-full mt-2.5 flex-shrink-0"></div>
                <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                  {t('safetySolutions1.hero.bullet1')}
                </p>
              </div>
              <div className="flex items-start gap-3 mb-4">
                <div className="w-2 h-2 bg-gray-900 rounded-full mt-2.5 flex-shrink-0"></div>
                <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                  {t('safetySolutions1.hero.bullet2')}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-900 rounded-full mt-2.5 flex-shrink-0"></div>
                <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                  {t('safetySolutions1.hero.bullet3')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="utfordringer" className="py-16 w-full bg-white">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {t('safetySolutions1.challenges.title')}
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                {t('safetySolutions1.challenges.text1')}
              </p>
              <p>
                {t('safetySolutions1.challenges.text2')}
              </p>
              <p>
                {t('safetySolutions1.challenges.text3')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="hvordan-virker" className="py-16 w-full">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-3xl px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                {t('safetySolutions1.howItWorks.title')}
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  {t('safetySolutions1.howItWorks.text1')}
                </p>
                <p>
                  {t('safetySolutions1.howItWorks.text2')}
                </p>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img 
                  src={fallalarmImage} 
                  alt={t('safetySolutions1.howItWorks.imageAlt')} 
                  className="w-full max-w-sm h-auto rounded-xl shadow-xl"
                />
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      <section id="hvor-passer" className="py-16 w-full">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {t('safetySolutions1.whereItFits.title')}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              {t('safetySolutions1.whereItFits.intro')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <div className="text-center mb-6">
                <img 
                  src={bad3} 
                  alt={t('safetySolutions1.whereItFits.bathroomAlt')} 
                  className="w-full h-48 object-cover rounded-xl mx-auto"
                />
              </div>
              <p className="text-gray-700 leading-relaxed">
                {t('safetySolutions1.whereItFits.bathroom')}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <div className="text-center mb-6">
                <img 
                  src={soverom} 
                  alt={t('safetySolutions1.whereItFits.bedroomAlt')} 
                  className="w-full h-48 object-cover rounded-xl mx-auto"
                />
              </div>
              <p className="text-gray-700 leading-relaxed">
                {t('safetySolutions1.whereItFits.bedroom')}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <div className="text-center mb-6">
                <img 
                  src={trapp} 
                  alt={t('safetySolutions1.whereItFits.stairsAlt')} 
                  className="w-full h-48 object-cover rounded-xl mx-auto"
                />
              </div>
              <p className="text-gray-700 leading-relaxed">
                {t('safetySolutions1.whereItFits.stairs')}
              </p>
            </div>
          </div>
          </div>
        </div>
      </section>

      <section id="pris" className="py-16 w-full">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {t('safetySolutions1.pricing.title')}
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                {t('safetySolutions1.pricing.text1')}
              </p>
              <p>
                {t('safetySolutions1.pricing.text2')}
              </p>
              <p>
                {t('safetySolutions1.pricing.text3')}
              </p>
            </div>
            <div className="pt-4">
              <Link 
                to="/products" 
                className="group inline-flex items-center justify-center bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-900 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {t('safetySolutions1.pricing.button')}
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 w-full">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {t('safetySolutions1.combine.title')}
              </h2>
            </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <p className="text-gray-700 leading-relaxed mb-6">
                {t('safetySolutions1.combine.alarmComm')}
              </p>
              <Link 
                to="/alarm-communication1" 
                className="group inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl w-full"
              >
                {t('safetySolutions1.combine.alarmButton')}
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <p className="text-gray-700 leading-relaxed mb-6">
                {t('safetySolutions1.combine.medical')}
              </p>
              <Link 
                to="/medical-followup1" 
                className="group inline-flex items-center justify-center bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl w-full"
              >
                {t('safetySolutions1.combine.medicalButton')}
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <p className="text-gray-700 leading-relaxed mb-6">
                {t('safetySolutions1.combine.easeblink')}
              </p>
              <Link 
                to="/easeblink1" 
                className="group inline-flex items-center justify-center bg-gray-800 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-900 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl w-full"
              >
                {t('safetySolutions1.combine.easeblinkButton')}
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
          </div>
        </div>
      </section>

      <section className="py-16 w-full">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {t('safetySolutions1.questions.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border-4 border-dashed border-orange-400 hover:border-orange-500 transition-all duration-300 flex flex-col">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t('safetySolutions1.questions.faq.title')}</h3>
                <p className="text-gray-700 leading-relaxed mb-6">{t('safetySolutions1.questions.faq.description')}</p>
              </div>
              <div className="mt-auto">
                <Link 
                  to="/guidance" 
                  className="inline-block bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all duration-300 w-full text-center"
                >
                  {t('safetySolutions1.questions.faq.button')}
                </Link>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border-4 border-dashed border-orange-400 hover:border-orange-500 transition-all duration-300 flex flex-col">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t('safetySolutions1.questions.experiences.title')}</h3>
                <p className="text-gray-700 leading-relaxed mb-6">{t('safetySolutions1.questions.experiences.description')}</p>
              </div>
              <div className="mt-auto">
                <Link 
                  to="/experiences" 
                  className="inline-block bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all duration-300 w-full text-center"
                >
                  {t('safetySolutions1.questions.experiences.button')}
                </Link>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border-4 border-dashed border-orange-400 hover:border-orange-500 transition-all duration-300 flex flex-col">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t('safetySolutions1.questions.contact.title')}</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {t('safetySolutions1.questions.contact.description')}
                </p>
              </div>
              <div className="mt-auto">
                <Link 
                  to="/documents" 
                  className="inline-block bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all duration-300 w-full text-center"
                >
                  {t('safetySolutions1.questions.contact.button')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
