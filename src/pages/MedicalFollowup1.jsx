import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'
import ContactForm from '../components/ContactForm'
import indreRo3 from '../assets/indre ro3.png'
import systemOverview from '../assets/system overvie.png'
import sensorsAndPlacements from '../assets/sensors and placements.png'
import whereDoesThisFitBest from '../assets/Where does this fit best.png'
import sensorSeng2 from '../assets/sensor seng2.png'
import btrykk from '../assets/btrykk.png'
import notMdrStamp from '../assets/notMDRred.png'

export default function MedicalFollowup1() {
  const { t } = useTranslation()
  const location = useLocation()
  const fromPage = location.state?.from || '/'
  
  return (
    <div className="medical-followup-page min-h-screen w-full">
      {/* Breadcrumb */}
      <section className="py-4 w-full bg-gray-50">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to={fromPage} 
            className="inline-flex items-center text-gray-600 hover:text-teal-600 transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-medium">{t('medicalFollowup1.breadcrumb')}</span>
          </Link>
        </div>
      </section>

      <section className="py-4 w-full border-b border-gray-200">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-full px-4 py-3">
            <div className="flex flex-wrap justify-center gap-3">
            <a href="#utfordringer" className="bg-white border border-gray-200 px-6 py-2.5 rounded-full hover:bg-teal-50 hover:border-teal-500 transition-all duration-200 shadow-sm hover:shadow">
              <span className="text-sm font-medium text-gray-900">{t('medicalFollowup1.submenu.challenges')}</span>
            </a>
            <a href="#hvordan-virker" className="bg-white border border-gray-200 px-6 py-2.5 rounded-full hover:bg-teal-50 hover:border-teal-500 transition-all duration-200 shadow-sm hover:shadow">
              <span className="text-sm font-medium text-gray-900">{t('medicalFollowup1.submenu.howItWorks')}</span>
            </a>
            <a href="#hvor-passer" className="bg-white border border-gray-200 px-6 py-2.5 rounded-full hover:bg-teal-50 hover:border-teal-500 transition-all duration-200 shadow-sm hover:shadow">
              <span className="text-sm font-medium text-gray-900">{t('medicalFollowup1.submenu.whereFits')}</span>
            </a>
            <a href="#pris" className="bg-white border border-gray-200 px-6 py-2.5 rounded-full hover:bg-teal-50 hover:border-teal-500 transition-all duration-200 shadow-sm hover:shadow">
              <span className="text-sm font-medium text-gray-900">{t('medicalFollowup1.submenu.price')}</span>
            </a>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="py-12 md:py-16 w-full bg-white">
          <div className="w-full">
            <div className="flex flex-col md:flex-row md:items-center gap-0 md:gap-16">
              <div className="md:w-1/2">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-4">
                  {t('medicalFollowup1.hero.title')}
                  </h1>
                <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-6">
                  {t('medicalFollowup1.hero.subtitle')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    to="/products" 
                    className="group inline-flex items-center justify-center bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-900 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    {t('medicalFollowup1.hero.button')}
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2 mt-6 md:mt-0">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mt-2.5 flex-shrink-0"></div>
                  <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                    {t('medicalFollowup1.hero.bullet1')}
                  </p>
                </div>
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mt-2.5 flex-shrink-0"></div>
                  <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                    {t('medicalFollowup1.hero.bullet2')}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mt-2.5 flex-shrink-0"></div>
                  <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                    {t('medicalFollowup1.hero.bullet3')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="utfordringer" className="py-16 w-full bg-white">
          <div className="w-full">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                {t('medicalFollowup1.challenges.title')}
                </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('medicalFollowup1.challenges.text1')}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('medicalFollowup1.challenges.text2')}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('medicalFollowup1.challenges.text3')}
              </p>
            </div>
          </div>
        </section>

        {/* Legal Usage Section */}
        <section className="py-16 w-full bg-white">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-left">
              <div className="prose prose-lg max-w-none text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Lovlig og korrekt bruksområde (før MDR-sertifisering)
                </h3>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Frem til CE-merking som medisinsk utstyr er fullført, markedsføres og brukes sensorene for velvære- og treningsformål (wellness/fitness). Det betyr at dataene kan benyttes til egenmonitorering, coaching, restitusjonsoppfølging og generell helseforbedring, men ikke som grunnlag for diagnose, prognose, behandling eller overvåking av sykdom.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Dette følger av MDRs definisjon av «medisinsk utstyr» og prinsippet om <strong>tiltenkt formål (intended purpose)</strong>: det er tiltenkt medisinsk formål som avgjør om produktet er et medisinsk utstyr, og som dermed utløser MDR-kravene.
                </p>

                <ul className="space-y-3 text-gray-700 mb-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    EUR-Lex: MDR (EU) 2017/745 konsolidert tekst
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    European Commission: Medical Device Regulation
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    EUMDR.com: MDR oversikt og veiledning
                  </li>
                </ul>
                
                <div className="mt-6">
                  <Link 
                    to="/mdr-info" 
                    className="group inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Les mer om MDR
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="hvordan-virker" className="py-16 w-full bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  {t('medicalFollowup.howMedicalMonitoring.title')}
                </h2>
                <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
              </div>
              
              <div className="space-y-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <p className="text-xl text-gray-700 leading-relaxed">
                      {t('medicalFollowup.howMedicalMonitoring.text1')}
                    </p>
                    <div className="space-y-4">
                      <h3 className="text-2xl font-semibold text-gray-900">
                        {t('medicalFollowup.howMedicalMonitoring.subtitle')}
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-teal-600 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                          <span className="text-lg text-gray-700">{t('medicalFollowup.howMedicalMonitoring.measurement1')}</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-teal-600 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                          <span className="text-lg text-gray-700">{t('medicalFollowup.howMedicalMonitoring.measurement2')}</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-teal-600 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                          <span className="text-lg text-gray-700">{t('medicalFollowup.howMedicalMonitoring.measurement3')}</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-teal-600 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                          <span className="text-lg text-gray-700">{t('medicalFollowup.howMedicalMonitoring.measurement4')}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100 max-w-sm">
                      <img 
                        src={systemOverview} 
                        alt={t('medicalFollowup.howMedicalMonitoring.imageAlt2')} 
                        className="w-full h-auto rounded-xl"
                      />
                    </div>
                  </div>
                </div>

                {/* Second Content Block */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="flex justify-center order-2 lg:order-1">
                    <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100 max-w-sm">
                      <img 
                        src={sensorsAndPlacements} 
                        alt={t('medicalFollowup.howMedicalMonitoring.imageAlt1')} 
                        className="w-full h-auto rounded-xl"
                      />
                    </div>
                  </div>
                  <div className="space-y-6 order-1 lg:order-2">
                    <p className="text-xl text-gray-700 leading-relaxed">
                      {t('medicalFollowup.howMedicalMonitoring.text2')}
                    </p>
                  </div>
                </div>
              </div>
          </div>
        </section>

        <section id="hvor-passer" className="py-16 w-full bg-white">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  {t('medicalFollowup.whereDoesThisFitBest.title')}
                </h2>
                <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {/* First Use Case */}
                <div className="text-center">
                  <div className="mb-6">
                    <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100 inline-block">
                      <img 
                        src={whereDoesThisFitBest} 
                        alt={t('medicalFollowup.whereDoesThisFitBest.useCase1.alt')} 
                        className="w-48 h-48 object-cover rounded-xl"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {t('medicalFollowup.whereDoesThisFitBest.useCase1.title')}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {t('medicalFollowup.whereDoesThisFitBest.useCase1.description')}
                  </p>
                </div>

                {/* Second Use Case */}
                <div className="text-center">
                  <div className="mb-6">
                    <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100 inline-block">
                      <img 
                        src={sensorSeng2} 
                        alt={t('medicalFollowup.whereDoesThisFitBest.useCase2.alt')} 
                        className="w-48 h-48 object-cover rounded-xl"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {t('medicalFollowup.whereDoesThisFitBest.useCase2.title')}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {t('medicalFollowup.whereDoesThisFitBest.useCase2.description')}
                  </p>
                </div>

                {/* Third Use Case */}
                <div className="text-center">
                  <div className="mb-6">
                    <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100 inline-block">
                      <img 
                        src={btrykk} 
                        alt={t('medicalFollowup.whereDoesThisFitBest.useCase3.alt')} 
                        className="w-48 h-48 object-cover rounded-xl"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {t('medicalFollowup.whereDoesThisFitBest.useCase3.title')}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {t('medicalFollowup.whereDoesThisFitBest.useCase3.description')}
                  </p>
                </div>
              </div>

              <div className="text-center">
                <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                  {t('medicalFollowup.whereDoesThisFitBest.generalBenefit')}
                </p>
              </div>
          </div>
        </section>

        {/* Produkter og priser Section */}
        <section className="py-20 w-full bg-white border-t border-gray-200">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              <div className="flex-1">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Produkter og priser
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Vi skal være best på pris! Vår fleksible leie-ordning gir en lav terskel for å ta i bruk en moderne og effektiv løsning. Vi har som mål å være ledende på både pris og funksjonalitet, og derfor gjennomfører vi nå en grundig evaluering av markedet. Dette sikrer at vår løsning blir riktig priset og strategisk plassert - til fordel for deg som kunde. Prisene er derfor ikke lansert ennå, men vil bli tilgjengelige så snart vi har kvalitets-sikret at de gjenspeiler den verdien vi ønsker å tilby. Vi har som mål å tilby prisgaranti.
                </p>
              </div>
              <div>
                <Link 
                  to="/products" 
                  className="inline-block bg-gray-800 text-white px-12 py-4 rounded-lg font-semibold hover:bg-gray-900 transition-all duration-300 text-lg"
                >
                  Produktliste
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 w-full bg-blue-50">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-12 text-center">
              {t('medicalFollowup1.combine.title')}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col">
                <p className="text-gray-700 leading-relaxed mb-6 flex-1">
                  {t('medicalFollowup1.combine.fallSensors')}
                </p>
                <Link 
                  to="/safety-solutions1" 
                  className="group inline-flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl w-full"
                >
                  {t('medicalFollowup1.combine.fallSensorsButton')}
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col">
                <p className="text-gray-700 leading-relaxed mb-6 flex-1">
                  {t('medicalFollowup1.combine.alarmButtons')}
                </p>
                <Link 
                  to="/alarm-communication1" 
                  className="group inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl w-full"
                >
                  {t('medicalFollowup1.combine.alarmButtonsButton')}
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col">
                <p className="text-gray-700 leading-relaxed mb-6 flex-1">
                  {t('medicalFollowup1.combine.videoAndContact')}
                </p>
                <Link 
                  to="/easeblink1" 
                  className="group inline-flex items-center justify-center bg-gray-800 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-900 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl w-full"
                >
                  {t('medicalFollowup1.combine.videoAndContactButton')}
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 w-full bg-white">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-12 text-center">
              {t('medicalFollowup1.questions.title')}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl border-2 border-dashed border-orange-300 flex flex-col">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {t('medicalFollowup1.questions.faq.title')}
                  </h3>
                </div>
                <Link 
                  to="/guidance" 
                  className="inline-flex items-center justify-center bg-gray-800 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-900 transition-all duration-300 w-full mt-4"
                >
                  {t('medicalFollowup1.questions.faq.button')}
                </Link>
              </div>

              <div className="bg-white p-8 rounded-2xl border-2 border-dashed border-orange-300 flex flex-col">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {t('medicalFollowup1.questions.experiences.title')}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {t('medicalFollowup1.questions.experiences.subtitle')}
                  </p>
                </div>
                <Link 
                  to="/experiences" 
                  className="inline-flex items-center justify-center bg-gray-800 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-900 transition-all duration-300 w-full mt-4"
                >
                  {t('medicalFollowup1.questions.experiences.button')}
                </Link>
              </div>

              <div className="bg-white p-8 rounded-2xl border-2 border-dashed border-orange-300 flex flex-col">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {t('medicalFollowup1.questions.contact.title')}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {t('medicalFollowup1.questions.contact.description')}
                  </p>
                </div>
                <Link 
                  to="/documents" 
                  className="inline-flex items-center justify-center bg-gray-800 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-900 transition-all duration-300 w-full mt-4"
                >
                  {t('medicalFollowup1.questions.contact.button')}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* NOT MDR APPROVED Stamp */}
        <section className="py-12 w-full bg-white">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center items-center">
              <img 
                src={notMdrStamp} 
                alt="NOT MDR APPROVED" 
                className="max-w-xs h-auto transform rotate-2"
                style={{ filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.2))' }}
              />
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
