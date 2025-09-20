import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import ContactForm from '../components/ContactForm'
import indreRo3 from '../assets/indre ro3.png'
import alertFlowchart from '../assets/image.png'
import returImage from '../assets/retur.png'
import collaborateImage from '../assets/collaborate.png'
import hvordanVirker from '../assets/hvordan virker.png'
import varsleHelsepersonell from '../assets/varsle helsepersonell.png'
import bad3 from '../assets/bad3.png'
import soverom from '../assets/soverom.png'
import trapp from '../assets/trapp.png'
import image1 from '../assets/image (1).png'

export default function SafetySolutions() {
  const { t } = useTranslation()
  
  return (
    <div className="safety-solutions-page min-h-screen w-full">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="hero-section min-h-[calc(100vh-100px)] flex items-center w-full bg-white">
          <div className="w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    {t('safetySolutions.hero.title')}
                  </h1>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    {t('safetySolutions.hero.subtitle')}
                  </p>
                </div>
                <div className="pt-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      to="/fallalarm" 
                      className="group inline-flex items-center justify-center bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-900 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      {t('safetySolutions.hero.button1')}
                      <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                    <Link 
                      to="/experiences" 
                      className="group inline-flex items-center justify-center bg-yellow-400 text-gray-800 px-8 py-4 rounded-xl font-semibold hover:bg-yellow-500 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      {t('safetySolutions.hero.button2')}
                      <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className="bg-white p-4 rounded-2xl shadow-2xl">
                    <img 
                      src={indreRo3} 
                      alt="Fallsensorer og trygghet hjemme" 
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Secondary Section */}
        <section className="py-20 w-full bg-white">
          <div className="w-full">
            <div className="w-full px-8">
              <div className="space-y-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  {t('safetySolutions.hero.secondaryTitle')}
                </h2>
                <div className="space-y-6">
                  <p className="text-xl text-gray-700 leading-relaxed">
                    {t('safetySolutions.hero.description1')}
                  </p>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    {t('safetySolutions.hero.description2')}
                  </p>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    {t('safetySolutions.hero.description3')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* How Fall Sensors Work Section */}
        <section className="py-20 w-full bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="w-full">
            <div className="w-full px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  {t('safetySolutions.howFallSensorsWork.title')}
                </h2>
                <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
              </div>
              
              <div className="space-y-16">
                {/* First Content Block */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <p className="text-xl text-gray-700 leading-relaxed">
                      {t('safetySolutions.howFallSensorsWork.text1')}
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <div className="bg-white p-3 rounded-2xl shadow-lg border border-gray-100 max-w-xs">
                      <img 
                        src={hvordanVirker} 
                        alt={t('safetySolutions.howFallSensorsWork.imageAlt1')} 
                        className="w-full h-auto rounded-xl"
                      />
                    </div>
                  </div>
                </div>

                {/* Second Content Block */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-2xl font-semibold text-gray-900">
                        {t('safetySolutions.howFallSensorsWork.subtitle')}
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-teal-600 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                          <span className="text-lg text-gray-700">{t('safetySolutions.howFallSensorsWork.benefit1')}</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-teal-600 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                          <span className="text-lg text-gray-700">{t('safetySolutions.howFallSensorsWork.benefit2')}</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-teal-600 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                          <span className="text-lg text-gray-700">{t('safetySolutions.howFallSensorsWork.benefit3')}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="bg-white p-3 rounded-2xl shadow-lg border border-gray-100 max-w-xs">
                      <img 
                        src={varsleHelsepersonell} 
                        alt={t('safetySolutions.howFallSensorsWork.imageAlt2')} 
                        className="w-full h-auto rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Where Does This Fit Best Section */}
        <section className="py-20 w-full bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="w-full">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {t('safetySolutions.whereDoesThisFitBest.title')}
              </h2>
              <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="text-center mb-6">
                  <img 
                    src={bad3} 
                    alt={t('safetySolutions.whereDoesThisFitBest.useCase1.alt')} 
                    className="w-full h-48 object-cover rounded-xl mx-auto"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {t('safetySolutions.whereDoesThisFitBest.useCase1.title')}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('safetySolutions.whereDoesThisFitBest.useCase1.description')}
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="text-center mb-6">
                  <img 
                    src={soverom} 
                    alt={t('safetySolutions.whereDoesThisFitBest.useCase2.alt')} 
                    className="w-full h-48 object-cover rounded-xl mx-auto"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {t('safetySolutions.whereDoesThisFitBest.useCase2.title')}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('safetySolutions.whereDoesThisFitBest.useCase2.description')}
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="text-center mb-6">
                  <img 
                    src={trapp} 
                    alt={t('safetySolutions.whereDoesThisFitBest.useCase3.alt')} 
                    className="w-full h-48 object-cover rounded-xl mx-auto"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {t('safetySolutions.whereDoesThisFitBest.useCase3.title')}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('safetySolutions.whereDoesThisFitBest.useCase3.description')}
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto mb-8">
                {t('safetySolutions.whereDoesThisFitBest.generalBenefit')}
              </p>
              
              <div className="text-center mt-16">
                <Link 
                  to="/fallalarm" 
                  className="group inline-flex items-center justify-center bg-gray-800 text-white px-12 py-6 rounded-2xl font-semibold text-lg hover:bg-gray-900 transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-xl"
                >
                  Bestill fallsensor
                  <svg className="w-6 h-6 ml-3 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Our Fall Sensors Section */}
        <section className="py-20 w-full bg-white">
          <div className="w-full">
            <div className="w-full px-8">
              <div className="space-y-16">
                {/* Why Choose Our Fall Sensors Section */}
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    {t('safetySolutions.whyChooseOurFallSensors.title')}
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-xl text-gray-700">{t('safetySolutions.whyChooseOurFallSensors.points.0')}</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-xl text-gray-700">{t('safetySolutions.whyChooseOurFallSensors.points.1')}</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-xl text-gray-700">{t('safetySolutions.whyChooseOurFallSensors.points.2')}</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-xl text-gray-700">{t('safetySolutions.whyChooseOurFallSensors.points.3')}</span>
                    </div>
                  </div>
                </div>

                {/* Family Contact Security Section */}
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    {t('safetySolutions.familyContactSecurity.title')}
                  </h2>
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                      <p className="text-xl text-gray-700 leading-relaxed">
                        {t('safetySolutions.familyContactSecurity.description')}
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100 max-w-sm">
                        <img 
                          src={image1} 
                          alt={t('safetySolutions.familyContactSecurity.imageAlt')} 
                          className="w-full h-auto rounded-xl"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* What Distinguishes This from Alarm Button Section */}
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    {t('safetySolutions.whatDistinguishesFromAlarmButton.title')}
                  </h2>
                  <div className="space-y-6">
                    <p className="text-xl text-gray-700 leading-relaxed">
                      {t('safetySolutions.whatDistinguishesFromAlarmButton.description')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How Safety Alerting Works Section */}
        <section className="py-20 w-full bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="w-full">
            <div className="w-full px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Flowchart Image */}
                <div className="flex justify-center lg:pt-16">
                  <div className="bg-white p-6 rounded-2xl">
                    <img 
                      src={alertFlowchart} 
                      alt="Slik virker trygghetsvarsling - prosessdiagram" 
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                </div>

                {/* Text Content */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    {t('safetySolutions.howSafetyAlertingWorks.title')}
                  </h2>
                  <div className="space-y-5">
                    <div className="flex items-start">
                      <div className="w-7 h-7 bg-teal-600 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <span className="text-white font-bold text-xs">1</span>
            </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{t('safetySolutions.howSafetyAlertingWorks.steps.0.title')}</h3>
                        <p className="text-base text-gray-700 leading-relaxed">
                          {t('safetySolutions.howSafetyAlertingWorks.steps.0.text')}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-7 h-7 bg-teal-600 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <span className="text-white font-bold text-xs">2</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{t('safetySolutions.howSafetyAlertingWorks.steps.1.title')}</h3>
                        <p className="text-base text-gray-700 leading-relaxed">
                          {t('safetySolutions.howSafetyAlertingWorks.steps.1.text')}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-7 h-7 bg-teal-600 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <span className="text-white font-bold text-xs">3</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{t('safetySolutions.howSafetyAlertingWorks.steps.2.title')}</h3>
                        <p className="text-base text-gray-700 leading-relaxed">
                          {t('safetySolutions.howSafetyAlertingWorks.steps.2.text')}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-7 h-7 bg-teal-600 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <span className="text-white font-bold text-xs">4</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{t('safetySolutions.howSafetyAlertingWorks.steps.3.title')}</h3>
                        <p className="text-base text-gray-700 leading-relaxed">
                          {t('safetySolutions.howSafetyAlertingWorks.steps.3.text')}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-7 h-7 bg-teal-600 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <span className="text-white font-bold text-xs">5</span>
                  </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{t('safetySolutions.howSafetyAlertingWorks.steps.4.title')}</h3>
                        <p className="text-base text-gray-700 leading-relaxed">
                          {t('safetySolutions.howSafetyAlertingWorks.steps.4.text')}
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
                  {t('safetySolutions.typicalPrice.title')}
                </h2>
                
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  {t('safetySolutions.typicalPrice.text')}
                </p>
                
                <p className="text-lg text-red-600 mb-8">
                  * {t('safetySolutions.typicalPrice.disclaimer')}
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-4 px-8 rounded-xl transition-colors duration-200 w-full sm:w-auto">
                    {t('safetySolutions.typicalPrice.button1')}
                  </button>
                  
                  <span className="text-gray-700 font-medium">eller</span>
                  
                  <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-4 px-8 rounded-xl transition-colors duration-200 w-full sm:w-auto">
                    {t('safetySolutions.typicalPrice.button2')}
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
                    {t('safetySolutions.whyRentInstead.title')}
                  </h2>
                  
              <div className="space-y-6">
                    <p className="text-xl text-gray-700 leading-relaxed">
                      {t('safetySolutions.whyRentInstead.intro')}
                    </p>
                    
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      {t('safetySolutions.whyRentInstead.subtitle')}
                    </h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">{t('safetySolutions.whyRentInstead.flexibility.title')}</h4>
                        <p className="text-lg text-gray-700 leading-relaxed">
                          {t('safetySolutions.whyRentInstead.flexibility.text')}
                        </p>
                    </div>
                      
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">{t('safetySolutions.whyRentInstead.simplerLife.title')}</h4>
                        <p className="text-lg text-gray-700 leading-relaxed">
                          {t('safetySolutions.whyRentInstead.simplerLife.text')}
                        </p>
              </div>
                      
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">{t('safetySolutions.whyRentInstead.financialSecurity.title')}</h4>
                        <p className="text-lg text-gray-700 leading-relaxed">
                          {t('safetySolutions.whyRentInstead.financialSecurity.text')}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-xl text-gray-700 leading-relaxed">
                      {t('safetySolutions.whyRentInstead.conclusion')}
                    </p>
                  </div>
                </div>

                {/* Image */}
                <div className="flex justify-center">
                  <div className="bg-white p-6 rounded-2xl">
                    <img 
                      src={returImage} 
                      alt="Leie i stedet for kjøp - trygghetsløsninger" 
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
                      {t('safetySolutions.whatDoIDoNow.title')}
                    </h2>
                    <p className="text-xl text-gray-700 leading-relaxed mb-8">
                      {t('safetySolutions.whatDoIDoNow.text')}
                    </p>
                    <Link 
                      to="/guidance" 
                      className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-4 px-8 rounded-xl transition-colors duration-200 inline-block"
                    >
                      {t('safetySolutions.whatDoIDoNow.button')}
                    </Link>
              </div>

                  {/* Still Unsure */}
              <div className="text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                      {t('safetySolutions.stillUnsure.title')}
                    </h2>
                    <p className="text-xl text-gray-700 leading-relaxed mb-8">
                      {t('safetySolutions.stillUnsure.text')}
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                      <Link 
                        to="/guidance" 
                        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-4 px-8 rounded-xl transition-colors duration-200 w-full sm:w-auto inline-block text-center"
                      >
                        {t('safetySolutions.stillUnsure.button1')}
                      </Link>
                      <Link 
                        to="/guidance" 
                        className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-4 px-8 rounded-xl transition-colors duration-200 w-full sm:w-auto inline-block text-center"
                      >
                        {t('safetySolutions.stillUnsure.button2')}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 w-full bg-white">
          <div className="w-full">
            <div className="w-full px-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
                {t('safetySolutions.faq.title')}
              </h2>
              
              <div className="space-y-8">
                {/* FAQ Item 1 */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {t('safetySolutions.faq.items.0.question')}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {t('safetySolutions.faq.items.0.answer')}
                  </p>
                </div>

                {/* FAQ Item 2 */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {t('safetySolutions.faq.items.1.question')}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {t('safetySolutions.faq.items.1.answer')}
                  </p>
                </div>

                {/* FAQ Item 3 */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {t('safetySolutions.faq.items.2.question')}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {t('safetySolutions.faq.items.2.answer')}
                  </p>
                </div>

                {/* FAQ Item 4 */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {t('safetySolutions.faq.items.3.question')}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {t('safetySolutions.faq.items.3.answer')}
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
                    {t('safetySolutions.readyForQuickHelp.title')}
                  </h2>
                  
                  <p className="text-xl text-gray-700 leading-relaxed mb-8">
                    {t('safetySolutions.readyForQuickHelp.text')}
                  </p>
                  
                  <div className="space-y-4">
                    <p className="text-xl text-gray-700">
                      [{t('safetySolutions.readyForQuickHelp.button1')}]
                    </p>
                    <p className="text-xl text-gray-700">
                      [{t('safetySolutions.readyForQuickHelp.button2')}]
                    </p>
                  </div>
                </div>

                {/* Image */}
                <div className="flex justify-center">
                  <div className="bg-white p-6 rounded-2xl">
                    <img 
                      src={collaborateImage} 
                      alt="Klar for rask hjelp - trygghetsløsninger" 
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
                  {t('safetySolutions.nextSteps.title')}
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  {t('safetySolutions.nextSteps.text')}
                </p>
                <Link 
                  to="/guidance" 
                  className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-4 px-8 rounded-xl transition-colors duration-200 inline-block"
                >
                  {t('safetySolutions.nextSteps.button')}
                </Link>
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
                  {t('safetySolutions.moreTechnical.title')}
                </h2>
                <div className="space-y-6 mb-8">
                  <p className="text-xl text-gray-700 leading-relaxed">
                    {t('safetySolutions.moreTechnical.text1')}
                  </p>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    {t('safetySolutions.moreTechnical.text2')}
                  </p>
                </div>
                <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-4 px-8 rounded-xl transition-colors duration-200">
                  {t('safetySolutions.moreTechnical.button')}
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
