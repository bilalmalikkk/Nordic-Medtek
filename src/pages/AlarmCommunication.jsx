import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import ContactForm from '../components/ContactForm'
import indreRo3 from '../assets/indre ro3.png'
import whenEverySecondCounts from '../assets/When every second counts.png'
import howDoAlarmButtonsWork from '../assets/How do alarm buttons work.png'
import whereIsThisBestSuited from '../assets/Where is this best suited.png'
import whatAboutFalls from '../assets/What about falls or if they can\'t press it.png'
import whyChooseOurAlarms from '../assets/Why choose our alarms.png'
import alertFlowchart from '../assets/image.png'
import returImage from '../assets/retur.png'
import collaborateImage from '../assets/collaborate.png'

export default function AlarmCommunication() {
  const { t } = useTranslation()
  
  return (
    <div className="alarm-communication-page min-h-screen w-full">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="hero-section min-h-[calc(100vh-100px)] flex items-center w-full bg-gradient-to-br from-gray-50 to-white">
          <div className="w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    {t('alarmCommunication.hero.title')}
                  </h1>
                  <div className="w-20 h-1 bg-teal-600 rounded-full"></div>
                </div>
                <p className="text-xl text-gray-700 leading-relaxed">
                  {t('alarmCommunication.hero.subtitle')}
                </p>
                <div className="pt-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      to="/guidance" 
                      className="group inline-flex items-center justify-center bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-900 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      {t('alarmCommunication.hero.button1')}
                      <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                    <Link 
                      to="/products" 
                      className="group inline-flex items-center justify-center bg-yellow-400 text-gray-800 px-8 py-4 rounded-xl font-semibold hover:bg-yellow-500 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      {t('alarmCommunication.hero.button2')}
                      <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className="absolute -inset-4 bg-gradient-to-r from-teal-400 to-blue-500 rounded-2xl blur opacity-20"></div>
                  <div className="relative bg-white p-4 rounded-2xl shadow-2xl">
                    <img 
                      src={indreRo3} 
                      alt="Mann som tenker på trygghet for eldre par" 
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* When Every Second Counts Section */}
        <section className="py-20 w-full bg-white">
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
        <section className="py-20 w-full bg-gradient-to-br from-gray-50 to-blue-50">
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
            <div className="text-center mt-16">
              <Link 
                to="/products" 
                className="group inline-flex items-center justify-center bg-gray-800 text-white px-12 py-6 rounded-2xl font-semibold text-lg hover:bg-gray-900 transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-xl"
              >
                Bestill alarmknapp
                <svg className="w-6 h-6 ml-3 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Where Does This Fit Best Section */}
        <section className="py-20 w-full bg-gradient-to-br from-blue-50 to-indigo-50">
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

        {/* What About Falls and Why Choose Our Alarms Section */}
        <section className="py-20 w-full bg-white">
          <div className="w-full">
            <div className="w-full px-8">
              <div className="space-y-16">
                {/* What About Falls Section */}
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    {t('alarmCommunication.whatAboutFalls.title')}
              </h2>
                <div className="space-y-6">
                  <p className="text-xl text-gray-700 leading-relaxed">
                      {t('alarmCommunication.whatAboutFalls.text1')}
                  </p>
                  <p className="text-xl text-gray-700 leading-relaxed">
                      {t('alarmCommunication.whatAboutFalls.text2')}
                  </p>
                </div>
              </div>

        {/* Why Choose Our Alarms Section */}
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    {t('alarmCommunication.whyChooseOurAlarms.title')}
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start">
                    <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                      <span className="text-xl text-gray-700">{t('alarmCommunication.whyChooseOurAlarms.points.0')}</span>
                    </div>
                    <div className="flex items-start">
                    <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                      <span className="text-xl text-gray-700">{t('alarmCommunication.whyChooseOurAlarms.points.1')}</span>
                    </div>
                    <div className="flex items-start">
                    <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                      <span className="text-xl text-gray-700">{t('alarmCommunication.whyChooseOurAlarms.points.2')}</span>
                    </div>
                    <div className="flex items-start">
                    <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                      <span className="text-xl text-gray-700">{t('alarmCommunication.whyChooseOurAlarms.points.3')}</span>
                    </div>
                    <div className="flex items-start">
                    <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                      <span className="text-xl text-gray-700">{t('alarmCommunication.whyChooseOurAlarms.points.4')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How Alerting Works Section */}
        <section className="py-20 w-full bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="w-full">
            <div className="w-full px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Flowchart Image */}
                <div className="flex justify-center lg:pt-16">
                  <div className="bg-white p-6 rounded-2xl">
                    <img 
                      src={alertFlowchart} 
                      alt="Slik virker varslingen - prosessdiagram" 
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                </div>

                {/* Text Content */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    {t('alarmCommunication.howAlertingWorks.title')}
                  </h2>
                  <div className="space-y-5">
                    <div className="flex items-start">
                      <div className="w-7 h-7 bg-teal-600 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <span className="text-white font-bold text-xs">1</span>
            </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{t('alarmCommunication.howAlertingWorks.steps.0.title')}</h3>
                        <p className="text-base text-gray-700 leading-relaxed">
                          {t('alarmCommunication.howAlertingWorks.steps.0.text')}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-7 h-7 bg-teal-600 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <span className="text-white font-bold text-xs">2</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{t('alarmCommunication.howAlertingWorks.steps.1.title')}</h3>
                        <p className="text-base text-gray-700 leading-relaxed">
                          {t('alarmCommunication.howAlertingWorks.steps.1.text')}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-7 h-7 bg-teal-600 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <span className="text-white font-bold text-xs">3</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{t('alarmCommunication.howAlertingWorks.steps.2.title')}</h3>
                        <p className="text-base text-gray-700 leading-relaxed">
                          {t('alarmCommunication.howAlertingWorks.steps.2.text')}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-7 h-7 bg-teal-600 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <span className="text-white font-bold text-xs">4</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{t('alarmCommunication.howAlertingWorks.steps.3.title')}</h3>
                        <p className="text-base text-gray-700 leading-relaxed">
                          {t('alarmCommunication.howAlertingWorks.steps.3.text')}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-7 h-7 bg-teal-600 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <span className="text-white font-bold text-xs">5</span>
                  </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{t('alarmCommunication.howAlertingWorks.steps.4.title')}</h3>
                        <p className="text-base text-gray-700 leading-relaxed">
                          {t('alarmCommunication.howAlertingWorks.steps.4.text')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Typical Price Section */}
        <section className="py-20 w-full bg-white">
          <div className="w-full">
            <div className="max-w-4xl mx-auto px-8">
              <div className="bg-white border-2 border-dashed border-blue-300 rounded-2xl p-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  {t('alarmCommunication.typicalPrice.title')}
                </h2>
                
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  {t('alarmCommunication.typicalPrice.text')}
                </p>
                
                <p className="text-lg text-red-600 mb-8">
                  * {t('alarmCommunication.typicalPrice.disclaimer')}
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-4 px-8 rounded-xl transition-colors duration-200 w-full sm:w-auto">
                    {t('alarmCommunication.typicalPrice.button1')}
                  </button>
                  
                  <span className="text-gray-700 font-medium">eller</span>
                  
                  <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-4 px-8 rounded-xl transition-colors duration-200 w-full sm:w-auto">
                    {t('alarmCommunication.typicalPrice.button2')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Rent Instead of Buy Section */}
        <section className="py-20 w-full bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="w-full">
            <div className="w-full px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    {t('alarmCommunication.whyRentInstead.title')}
                  </h2>
                  
              <div className="space-y-6">
                    <p className="text-xl text-gray-700 leading-relaxed">
                      {t('alarmCommunication.whyRentInstead.intro')}
                    </p>
                    
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      {t('alarmCommunication.whyRentInstead.subtitle')}
                    </h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">{t('alarmCommunication.whyRentInstead.flexibility.title')}</h4>
                        <p className="text-lg text-gray-700 leading-relaxed">
                          {t('alarmCommunication.whyRentInstead.flexibility.text')}
                        </p>
                    </div>
                      
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">{t('alarmCommunication.whyRentInstead.simplerLife.title')}</h4>
                        <p className="text-lg text-gray-700 leading-relaxed">
                          {t('alarmCommunication.whyRentInstead.simplerLife.text')}
                        </p>
              </div>
                      
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">{t('alarmCommunication.whyRentInstead.financialSecurity.title')}</h4>
                        <p className="text-lg text-gray-700 leading-relaxed">
                          {t('alarmCommunication.whyRentInstead.financialSecurity.text')}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-xl text-gray-700 leading-relaxed">
                      {t('alarmCommunication.whyRentInstead.conclusion')}
                    </p>
                  </div>
                </div>

                {/* Image */}
                <div className="flex justify-center">
                  <div className="bg-white p-6 rounded-2xl">
                    <img 
                      src={returImage} 
                      alt="Leie i stedet for kjøp - illustrasjon" 
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Do I Do Now Section */}
        <section className="py-20 w-full bg-white">
          <div className="w-full">
            <div className="max-w-4xl mx-auto px-8">
              <div className="bg-white border-2 border-dashed border-blue-300 rounded-2xl p-8">
                <div className="space-y-12">
                  {/* What Do I Do Now */}
                  <div className="text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                      {t('alarmCommunication.whatDoIDoNow.title')}
                    </h2>
                    <p className="text-xl text-gray-700 leading-relaxed mb-8">
                      {t('alarmCommunication.whatDoIDoNow.text')}
                    </p>
                    <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-4 px-8 rounded-xl transition-colors duration-200">
                      {t('alarmCommunication.whatDoIDoNow.button')}
                    </button>
              </div>

                  {/* Still Unsure */}
              <div className="text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                      {t('alarmCommunication.stillUnsure.title')}
                    </h2>
                    <p className="text-xl text-gray-700 leading-relaxed mb-8">
                      {t('alarmCommunication.stillUnsure.text')}
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                      <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-4 px-8 rounded-xl transition-colors duration-200 w-full sm:w-auto">
                        {t('alarmCommunication.stillUnsure.button1')}
                      </button>
                      <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-4 px-8 rounded-xl transition-colors duration-200 w-full sm:w-auto">
                        {t('alarmCommunication.stillUnsure.button2')}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 w-full bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="w-full">
            <div className="w-full px-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
                {t('alarmCommunication.faq.title')}
              </h2>
              
              <div className="space-y-8">
                {/* FAQ Item 1 */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {t('alarmCommunication.faq.items.0.question')}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {t('alarmCommunication.faq.items.0.answer')}
                  </p>
              </div>

                {/* FAQ Item 2 */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {t('alarmCommunication.faq.items.1.question')}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {t('alarmCommunication.faq.items.1.answer')}
                  </p>
              </div>

                {/* FAQ Item 3 */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {t('alarmCommunication.faq.items.2.question')}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {t('alarmCommunication.faq.items.2.answer')}
                  </p>
              </div>

                {/* FAQ Item 4 */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {t('alarmCommunication.faq.items.3.question')}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {t('alarmCommunication.faq.items.3.answer')}
                  </p>
              </div>

                {/* FAQ Item 5 */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {t('alarmCommunication.faq.items.4.question')}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {t('alarmCommunication.faq.items.4.answer')}
                  </p>
              </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ready for Quick Help Section */}
        <section className="py-20 w-full bg-white">
          <div className="w-full">
            <div className="w-full px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    {t('alarmCommunication.readyForQuickHelp.title')}
                  </h2>
                  
                  <p className="text-xl text-gray-700 leading-relaxed mb-8">
                    {t('alarmCommunication.readyForQuickHelp.text')}
                  </p>
                  
                  <div className="space-y-4">
                    <p className="text-xl text-gray-700">
                      [{t('alarmCommunication.readyForQuickHelp.button1')}]
                    </p>
                    <p className="text-xl text-gray-700">
                      [{t('alarmCommunication.readyForQuickHelp.button2')}]
                    </p>
                  </div>
                </div>

                {/* Image */}
                <div className="flex justify-center">
                  <div className="bg-white p-6 rounded-2xl">
                    <img 
                      src={collaborateImage} 
                      alt="Klar for rask hjelp - illustrasjon" 
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps Section */}
        <section className="py-20 w-full bg-white">
          <div className="w-full">
            <div className="w-full px-8">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  {t('alarmCommunication.nextSteps.title')}
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  {t('alarmCommunication.nextSteps.text')}
                </p>
                <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-4 px-8 rounded-xl transition-colors duration-200">
                  {t('alarmCommunication.nextSteps.button')}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* More Technical Information Section */}
        <section className="py-20 w-full bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="w-full">
            <div className="w-full px-8">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  {t('alarmCommunication.moreTechnical.title')}
                </h2>
                <div className="space-y-6 mb-8">
                  <p className="text-xl text-gray-700 leading-relaxed">
                    {t('alarmCommunication.moreTechnical.text1')}
                  </p>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    {t('alarmCommunication.moreTechnical.text2')}
                  </p>
                </div>
                <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-4 px-8 rounded-xl transition-colors duration-200">
                  {t('alarmCommunication.moreTechnical.button')}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Placeholder */}
        <section className="py-8 w-full bg-white">
          <div className="w-full">
            <div className="w-full px-8 text-center">
              <p className="text-gray-500 text-lg">[Footer]</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
