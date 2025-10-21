import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'
import whenEverySecondCounts from '../assets/When every second counts.png'
import howDoAlarmButtonsWork from '../assets/How do alarm buttons work.png'
import whereIsThisBestSuited from '../assets/Where is this best suited.png'
import whatAboutFalls from '../assets/What about falls or if they can\'t press it.png'
import whyChooseOurAlarms from '../assets/Why choose our alarms.png'

export default function AlarmCommunication1() {
  const { t } = useTranslation()
  const location = useLocation()
  const fromPage = location.state?.from || '/'
  
  return (
    <div className="alarm-communication-page min-h-screen w-full">
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
            <span className="font-medium">{t('alarmCommunication1.breadcrumb')}</span>
          </Link>
        </div>
      </section>

      {/* Submenu */}
      <section className="py-4 w-full border-b border-gray-200">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-full px-4 py-3">
            <div className="flex flex-wrap justify-center gap-3">
              <a href="#utfordringer" className="bg-white border border-gray-200 px-6 py-2.5 rounded-full hover:bg-teal-50 hover:border-teal-500 transition-all duration-200 shadow-sm hover:shadow">
                <span className="text-sm font-medium text-gray-900">{t('alarmCommunication1.submenu.challenges')}</span>
              </a>
              <a href="#hvordan-virker" className="bg-white border border-gray-200 px-6 py-2.5 rounded-full hover:bg-teal-50 hover:border-teal-500 transition-all duration-200 shadow-sm hover:shadow">
                <span className="text-sm font-medium text-gray-900">{t('alarmCommunication1.submenu.howItWorks')}</span>
              </a>
              <a href="#hvor-passer" className="bg-white border border-gray-200 px-6 py-2.5 rounded-full hover:bg-teal-50 hover:border-teal-500 transition-all duration-200 shadow-sm hover:shadow">
                <span className="text-sm font-medium text-gray-900">{t('alarmCommunication1.submenu.whereItFits')}</span>
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
                  {t('alarmCommunication1.hero.title')}
                </h1>
                <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-6">
                  {t('alarmCommunication1.hero.subtitle')}
                </p>
                <Link 
                  to="/products" 
                  className="group inline-flex items-center justify-center bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-900 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  {t('alarmCommunication1.hero.button')}
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
              <div className="md:w-1/2 mt-6 md:mt-0">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mt-2.5 flex-shrink-0"></div>
                  <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                    {t('alarmCommunication1.hero.bullet1')}
                  </p>
                </div>
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mt-2.5 flex-shrink-0"></div>
                  <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                    {t('alarmCommunication1.hero.bullet2')}
                  </p>
                </div>
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mt-2.5 flex-shrink-0"></div>
                  <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                    {t('alarmCommunication1.hero.bullet3')}
                  </p>
                </div>
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mt-2.5 flex-shrink-0"></div>
                  <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                    {t('alarmCommunication1.hero.bullet4')}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mt-2.5 flex-shrink-0"></div>
                  <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                    {t('alarmCommunication1.hero.bullet5')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* When Every Second Counts Section */}
        <section id="utfordringer" className="py-20 w-full bg-white">
          <div className="w-full">
            <div className="w-full px-8">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  {t('alarmCommunication.whenEverySecond.title')}
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed">
                  {t('alarmCommunication.whenEverySecond.text1')}
                </p>
                <p className="text-xl text-gray-700 leading-relaxed">
                  {t('alarmCommunication.whenEverySecond.text2')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How Alarm Buttons Work Section */}
        <section id="hvordan-virker" className="py-20 w-full bg-white">
          <div className="w-full">
            <div className="w-full px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  {t('alarmCommunication.howAlarmButtonsWork.title')}
                </h2>
                <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
              </div>
              <div className="space-y-12">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-xl text-gray-700 leading-relaxed">
                      {t('alarmCommunication.howAlarmButtonsWork.text1')}
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <div className="relative w-full max-w-xs">
                      <div className="bg-white p-3 rounded-2xl shadow-lg border border-gray-100">
                        <img 
                          src={howDoAlarmButtonsWork} 
                          alt="Hvordan virker alarmknappene - illustrasjon 1" 
                          className="w-full h-auto rounded-xl"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-xl text-gray-700 leading-relaxed">
                      {t('alarmCommunication.howAlarmButtonsWork.text2')}
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <div className="relative w-full max-w-xs">
                      <div className="bg-white p-3 rounded-2xl shadow-lg border border-gray-100">
                        <img 
                          src={whenEverySecondCounts} 
                          alt="Hvordan virker alarmknappene - illustrasjon 2" 
                          className="w-full h-auto rounded-xl"
                        />
                </div>
              </div>
                  </div>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-xl text-gray-700 leading-relaxed">
                      {t('alarmCommunication.howAlarmButtonsWork.text3')}
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <div className="relative w-full max-w-xs">
                      <div className="bg-white p-3 rounded-2xl shadow-lg border border-gray-100">
                        <img 
                          src={whereIsThisBestSuited} 
                          alt="Hvordan virker alarmknappene - illustrasjon 3" 
                          className="w-full h-auto rounded-xl"
                        />
                </div>
              </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Where Does This Fit Best Section */}
        <section id="hvor-passer" className="py-20 w-full bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="w-full">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {t('alarmCommunication.whereDoesThisFit.title')}
              </h2>
              <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
            </div>
            <div className="w-full px-8">
            <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="mb-6">
                    <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100 inline-block">
                      <img 
                        src={whyChooseOurAlarms} 
                        alt="Ute bruk - eldre som går tur eller handler" 
                        className="w-48 h-48 object-cover rounded-xl"
                      />
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {t('alarmCommunication.whereDoesThisFit.outdoor')}
                  </p>
              </div>

                <div className="text-center">
                  <div className="mb-6">
                    <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100 inline-block">
                      <img 
                        src={whatAboutFalls} 
                        alt="Hjemme bruk - trygghet på kjøkkenet, i stua eller på badet" 
                        className="w-48 h-48 object-cover rounded-xl"
                      />
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {t('alarmCommunication.whereDoesThisFit.home')}
                  </p>
              </div>

                <div className="text-center">
                  <div className="mb-6">
                    <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100 inline-block">
                      <div className="w-48 h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                          </div>
                          <p className="text-gray-600 text-sm">Demens & hukommelse</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {t('alarmCommunication.whereDoesThisFit.dementia')}
                  </p>
                </div>
              </div>
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

        {/* Combine Solutions Section */}
        <section className="py-16 w-full">
          <div className="w-full">
            <div className="w-full px-8">
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-12">
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    {t('alarmCommunication1.combine.title')}
                  </h2>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col">
                    <p className="text-gray-700 leading-relaxed mb-6 flex-1">
                      {t('alarmCommunication1.combine.fallSensors')}
                    </p>
                    <Link 
                      to="/safety-solutions1" 
                      className="group inline-flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl w-full"
                    >
                      {t('alarmCommunication1.combine.fallSensorsButton')}
                      <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>

                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col">
                    <p className="text-gray-700 leading-relaxed mb-6 flex-1">
                      {t('alarmCommunication1.combine.medical')}
                    </p>
              <Link 
                to="/medical-followup1" 
                className="group inline-flex items-center justify-center bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl w-full"
              >
                      {t('alarmCommunication1.combine.medicalButton')}
                      <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>

                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col">
                    <p className="text-gray-700 leading-relaxed mb-6 flex-1">
                      {t('alarmCommunication1.combine.easeblink')}
                    </p>
                    <Link 
                      to="/easeblink1" 
                      className="group inline-flex items-center justify-center bg-gray-800 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-900 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl w-full"
                    >
                      {t('alarmCommunication1.combine.easeblinkButton')}
                      <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Questions Section */}
        <section className="py-16 w-full">
          <div className="w-full">
            <div className="w-full px-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  {t('alarmCommunication1.questions.title')}
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-3xl border-4 border-dashed border-orange-400 hover:border-orange-500 transition-all duration-300 flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{t('alarmCommunication1.questions.faq.title')}</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">{t('alarmCommunication1.questions.faq.description')}</p>
                  </div>
                  <div className="mt-auto">
                    <Link 
                      to="/guidance" 
                      className="inline-block bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all duration-300 w-full text-center"
                    >
                      {t('alarmCommunication1.questions.faq.button')}
                    </Link>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-3xl border-4 border-dashed border-orange-400 hover:border-orange-500 transition-all duration-300 flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{t('alarmCommunication1.questions.experiences.title')}</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">{t('alarmCommunication1.questions.experiences.description')}</p>
                  </div>
                  <div className="mt-auto">
                    <Link 
                      to="/experiences" 
                      className="inline-block bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all duration-300 w-full text-center"
                    >
                      {t('alarmCommunication1.questions.experiences.button')}
                    </Link>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-3xl border-4 border-dashed border-orange-400 hover:border-orange-500 transition-all duration-300 flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{t('alarmCommunication1.questions.contact.title')}</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {t('alarmCommunication1.questions.contact.description')}
                    </p>
                  </div>
                  <div className="mt-auto">
                    <Link 
                      to="/documents" 
                      className="inline-block bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all duration-300 w-full text-center"
                    >
                      {t('alarmCommunication1.questions.contact.button')}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
