import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import ContactForm from '../components/ContactForm'
import indreRo3 from '../assets/indre ro3.png'
import systemOverview from '../assets/system overvie.png'
import sensorsAndPlacements from '../assets/sensors and placements.png'
import combinedWithEasyContact from '../assets/Combined with easy contact with the doctor and family.png'
import whereDoesThisFitBest from '../assets/Where does this fit best.png'
import sensorSeng2 from '../assets/sensor seng2.png'
import btrykk from '../assets/btrykk.png'
import alertFlowchart from '../assets/image.png'
import returImage from '../assets/retur.png'
import collaborateImage from '../assets/collaborate.png'

export default function MedicalFollowup() {
  const { t } = useTranslation()
  
  return (
    <div className="medical-followup-page min-h-screen w-full">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="hero-section min-h-[calc(100vh-100px)] flex items-center w-full bg-white">
          <div className="w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    {t('medicalFollowup.hero.title')}
                  </h1>
                  <div className="space-y-4">
                    <p className="text-xl text-gray-700 leading-relaxed">
                      {t('medicalFollowup.hero.subtitle1')}
                    </p>
                    <p className="text-xl text-gray-700 leading-relaxed">
                      {t('medicalFollowup.hero.subtitle2')}
                    </p>
                  </div>
                </div>
                <div className="pt-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      to="/guidance" 
                      className="group inline-flex items-center justify-center bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-900 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      {t('medicalFollowup.hero.button1')}
                      <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                    <Link 
                      to="/products" 
                      className="group inline-flex items-center justify-center bg-yellow-400 text-gray-800 px-8 py-4 rounded-xl font-semibold hover:bg-yellow-500 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      {t('medicalFollowup.hero.button2')}
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
                      alt="Mann som tenker på medisinsk oppfølging" 
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
                  {t('medicalFollowup.hero.secondaryTitle')}
                </h2>
                <div className="space-y-6">
                  <p className="text-xl text-gray-700 leading-relaxed">
                    {t('medicalFollowup.hero.description1')}
                  </p>
                  <div className="space-y-4">
                    <p className="text-xl text-gray-700 leading-relaxed">
                      {t('medicalFollowup.hero.question1')}
                    </p>
                    <p className="text-xl text-gray-700 leading-relaxed">
                      {t('medicalFollowup.hero.question2')}
                    </p>
                  </div>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    {t('medicalFollowup.hero.description2')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* How Medical Follow-up Works at Home Section */}
        <section className="py-20 w-full bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="w-full">
            <div className="w-full px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  {t('medicalFollowup.howMedicalMonitoring.title')}
                </h2>
                <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
              </div>
              
              <div className="space-y-16">
                {/* First Content Block */}
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
                    <p className="text-xl text-gray-700 leading-relaxed">
                      {t('medicalFollowup.howMedicalMonitoring.text2')}
                    </p>
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
          </div>
        </section>

        {/* Combined with Easy Contact Section */}
        <section className="py-20 w-full bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="w-full">
            <div className="w-full px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  {t('medicalFollowup.combinedWithEasyContact.title')}
                </h2>
                <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <p className="text-xl text-gray-700 leading-relaxed">
                    {t('medicalFollowup.combinedWithEasyContact.text1')}
                  </p>
                  <div className="space-y-4">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-teal-600 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                        <span className="text-lg text-gray-700">{t('medicalFollowup.combinedWithEasyContact.feature1')}</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-teal-600 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                        <span className="text-lg text-gray-700">{t('medicalFollowup.combinedWithEasyContact.feature2')}</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-teal-600 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                        <span className="text-lg text-gray-700">{t('medicalFollowup.combinedWithEasyContact.feature3')}</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-teal-600 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                        <span className="text-lg text-gray-700">{t('medicalFollowup.combinedWithEasyContact.feature4')}</span>
                      </li>
                    </ul>
                  </div>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    {t('medicalFollowup.combinedWithEasyContact.text2')}
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100 max-w-sm">
                    <img 
                      src={combinedWithEasyContact} 
                      alt={t('medicalFollowup.combinedWithEasyContact.imageAlt')} 
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Where Does This Fit Best Section */}
        <section className="py-20 w-full bg-white">
          <div className="w-full">
            <div className="w-full px-8">
              <div className="text-center mb-16">
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

              {/* General Benefit Statement */}
              <div className="text-center mb-16">
                <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                  {t('medicalFollowup.whereDoesThisFitBest.generalBenefit')}
                </p>
              </div>

              {/* Why Choose This Section */}
              <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-8">
                  {t('medicalFollowup.whereDoesThisFitBest.whyChoose.title')}
                </h2>
                <div className="space-y-4 max-w-4xl mx-auto">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-xl text-gray-700">{t('medicalFollowup.whereDoesThisFitBest.whyChoose.point1')}</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-xl text-gray-700">{t('medicalFollowup.whereDoesThisFitBest.whyChoose.point2')}</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-xl text-gray-700">{t('medicalFollowup.whereDoesThisFitBest.whyChoose.point3')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How Medical Alerting Works Section */}
        <section className="py-20 w-full bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="w-full">
            <div className="w-full px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Flowchart Image */}
                <div className="flex justify-center lg:pt-16">
                  <div className="bg-white p-6 rounded-2xl">
                    <img 
                      src={alertFlowchart} 
                      alt="Slik virker medisinsk varsling - prosessdiagram" 
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                </div>

                {/* Text Content */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    {t('medicalFollowup.howMedicalAlertingWorks.title')}
                  </h2>
                  <div className="space-y-5">
                    <div className="flex items-start">
                      <div className="w-7 h-7 bg-teal-600 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <span className="text-white font-bold text-xs">1</span>
            </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{t('medicalFollowup.howMedicalAlertingWorks.steps.0.title')}</h3>
                        <p className="text-base text-gray-700 leading-relaxed">
                          {t('medicalFollowup.howMedicalAlertingWorks.steps.0.text')}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-7 h-7 bg-teal-600 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <span className="text-white font-bold text-xs">2</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{t('medicalFollowup.howMedicalAlertingWorks.steps.1.title')}</h3>
                        <p className="text-base text-gray-700 leading-relaxed">
                          {t('medicalFollowup.howMedicalAlertingWorks.steps.1.text')}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-7 h-7 bg-teal-600 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <span className="text-white font-bold text-xs">3</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{t('medicalFollowup.howMedicalAlertingWorks.steps.2.title')}</h3>
                        <p className="text-base text-gray-700 leading-relaxed">
                          {t('medicalFollowup.howMedicalAlertingWorks.steps.2.text')}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-7 h-7 bg-teal-600 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <span className="text-white font-bold text-xs">4</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{t('medicalFollowup.howMedicalAlertingWorks.steps.3.title')}</h3>
                        <p className="text-base text-gray-700 leading-relaxed">
                          {t('medicalFollowup.howMedicalAlertingWorks.steps.3.text')}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-7 h-7 bg-teal-600 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <span className="text-white font-bold text-xs">5</span>
                  </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{t('medicalFollowup.howMedicalAlertingWorks.steps.4.title')}</h3>
                        <p className="text-base text-gray-700 leading-relaxed">
                          {t('medicalFollowup.howMedicalAlertingWorks.steps.4.text')}
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
                  {t('medicalFollowup.typicalPrice.title')}
                </h2>
                
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  {t('medicalFollowup.typicalPrice.text')}
                </p>
                
                <p className="text-lg text-red-600 mb-8">
                  * {t('medicalFollowup.typicalPrice.disclaimer')}
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-4 px-8 rounded-xl transition-colors duration-200 w-full sm:w-auto">
                    {t('medicalFollowup.typicalPrice.button1')}
                  </button>
                  
                  <span className="text-gray-700 font-medium">eller</span>
                  
                  <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-4 px-8 rounded-xl transition-colors duration-200 w-full sm:w-auto">
                    {t('medicalFollowup.typicalPrice.button2')}
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
                    {t('medicalFollowup.whyRentInstead.title')}
                  </h2>
                  
              <div className="space-y-6">
                    <p className="text-xl text-gray-700 leading-relaxed">
                      {t('medicalFollowup.whyRentInstead.intro')}
                    </p>
                    
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      {t('medicalFollowup.whyRentInstead.subtitle')}
                    </h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">{t('medicalFollowup.whyRentInstead.flexibility.title')}</h4>
                        <p className="text-lg text-gray-700 leading-relaxed">
                          {t('medicalFollowup.whyRentInstead.flexibility.text')}
                        </p>
                    </div>
                      
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">{t('medicalFollowup.whyRentInstead.simplerLife.title')}</h4>
                        <p className="text-lg text-gray-700 leading-relaxed">
                          {t('medicalFollowup.whyRentInstead.simplerLife.text')}
                        </p>
              </div>
                      
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">{t('medicalFollowup.whyRentInstead.financialSecurity.title')}</h4>
                        <p className="text-lg text-gray-700 leading-relaxed">
                          {t('medicalFollowup.whyRentInstead.financialSecurity.text')}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-xl text-gray-700 leading-relaxed">
                      {t('medicalFollowup.whyRentInstead.conclusion')}
                    </p>
                  </div>
                </div>

                {/* Image */}
                <div className="flex justify-center">
                  <div className="bg-white p-6 rounded-2xl">
                    <img 
                      src={returImage} 
                      alt="Leie i stedet for kjøp - medisinsk oppfølging" 
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
                      {t('medicalFollowup.whatDoIDoNow.title')}
                    </h2>
                    <p className="text-xl text-gray-700 leading-relaxed mb-8">
                      {t('medicalFollowup.whatDoIDoNow.text')}
                    </p>
                    <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-4 px-8 rounded-xl transition-colors duration-200">
                      {t('medicalFollowup.whatDoIDoNow.button')}
                    </button>
              </div>

                  {/* Still Unsure */}
              <div className="text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                      {t('medicalFollowup.stillUnsure.title')}
                    </h2>
                    <p className="text-xl text-gray-700 leading-relaxed mb-8">
                      {t('medicalFollowup.stillUnsure.text')}
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                      <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-4 px-8 rounded-xl transition-colors duration-200 w-full sm:w-auto">
                        {t('medicalFollowup.stillUnsure.button1')}
                      </button>
                      <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-4 px-8 rounded-xl transition-colors duration-200 w-full sm:w-auto">
                        {t('medicalFollowup.stillUnsure.button2')}
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
                {t('medicalFollowup.faq.title')}
              </h2>
              
              <div className="space-y-8">
                {/* FAQ Item 1 */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {t('medicalFollowup.faq.items.0.question')}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {t('medicalFollowup.faq.items.0.answer')}
                  </p>
              </div>

                {/* FAQ Item 2 */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {t('medicalFollowup.faq.items.1.question')}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {t('medicalFollowup.faq.items.1.answer')}
                  </p>
              </div>

                {/* FAQ Item 3 */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {t('medicalFollowup.faq.items.2.question')}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {t('medicalFollowup.faq.items.2.answer')}
                  </p>
              </div>

                {/* FAQ Item 4 */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {t('medicalFollowup.faq.items.3.question')}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {t('medicalFollowup.faq.items.3.answer')}
                  </p>
              </div>

                {/* FAQ Item 5 */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {t('medicalFollowup.faq.items.4.question')}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {t('medicalFollowup.faq.items.4.answer')}
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
                    {t('medicalFollowup.readyForQuickHelp.title')}
                  </h2>
                  
                  <p className="text-xl text-gray-700 leading-relaxed mb-8">
                    {t('medicalFollowup.readyForQuickHelp.text')}
                  </p>
                  
                  <div className="space-y-4">
                    <p className="text-xl text-gray-700">
                      [{t('medicalFollowup.readyForQuickHelp.button1')}]
                    </p>
                    <p className="text-xl text-gray-700">
                      [{t('medicalFollowup.readyForQuickHelp.button2')}]
                    </p>
                  </div>
                </div>

                {/* Image */}
                <div className="flex justify-center">
                  <div className="bg-white p-6 rounded-2xl">
                    <img 
                      src={collaborateImage} 
                      alt="Klar for rask hjelp - medisinsk oppfølging" 
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
                  {t('medicalFollowup.nextSteps.title')}
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  {t('medicalFollowup.nextSteps.text')}
                </p>
                <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-4 px-8 rounded-xl transition-colors duration-200">
                  {t('medicalFollowup.nextSteps.button')}
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
                  {t('medicalFollowup.moreTechnical.title')}
                </h2>
                <div className="space-y-6 mb-8">
                  <p className="text-xl text-gray-700 leading-relaxed">
                    {t('medicalFollowup.moreTechnical.text1')}
                  </p>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    {t('medicalFollowup.moreTechnical.text2')}
                  </p>
                </div>
                <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-4 px-8 rounded-xl transition-colors duration-200">
                  {t('medicalFollowup.moreTechnical.button')}
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
