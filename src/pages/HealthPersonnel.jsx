import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import kPolitikere from '../assets/k-politikere.png'
import hospital from '../assets/hospital.png'
import calmShift from '../assets/calm shift.png'
import sensorDetect from '../assets/sensor detecty.png'
import stonks from '../assets/stonks.png'
import videoCall from '../assets/video call.png'

export default function HealthPersonnel() {
  const { t } = useTranslation()
  
  return (
    <div className="health-personnel-page min-h-screen w-full">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="hero-section min-h-[calc(100vh-100px)] flex items-center w-full bg-gradient-to-br from-gray-50 to-white">
          <div className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    {t('healthPersonnel.hero.title')}
                  </h1>
                  <div className="w-20 h-1 bg-teal-600 rounded-full"></div>
                </div>
                <p className="text-xl text-gray-700 leading-relaxed">
                  {t('healthPersonnel.hero.description')}
                </p>
                <div className="pt-4">
                  <Link 
                    to="/demo" 
                    className="group inline-flex items-center justify-center bg-yellow-400 text-gray-800 px-8 py-4 rounded-xl font-semibold hover:bg-yellow-500 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    {t('healthPersonnel.hero.button')}
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <img 
                  src={kPolitikere} 
                  alt="Politiker som snakker om trygghet" 
                  className="max-w-md h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="challenges-section py-20 w-full bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="w-full px-8 sm:px-12 lg:px-16">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('healthPersonnel.challenges.title')}</h2>
              <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">{t('healthPersonnel.challenges.subtitle')}</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    </div>
                    <span>{t('healthPersonnel.challenges.challenge1')}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    </div>
                    <span>{t('healthPersonnel.challenges.challenge2')}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    </div>
                    <span>{t('healthPersonnel.challenges.challenge3')}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    </div>
                    <span>{t('healthPersonnel.challenges.challenge4')}</span>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <img 
                  src={hospital} 
                  alt="Sykehus og helsepersonell" 
                  className="max-w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Societal Benefits Section */}
        <section className="societal-benefits-section py-20 w-full bg-white">
          <div className="w-full">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('healthPersonnel.societalBenefits.title')}</h2>
              <p className="text-xl text-gray-600 mb-8">{t('healthPersonnel.societalBenefits.subtitle')}</p>
              <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-red-200">
                <div className="flex items-start mb-6">
                  <img 
                    src={sensorDetect} 
                    alt="Sensor som oppdager krise" 
                    className="w-48 h-48 rounded-xl mr-6 flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{t('healthPersonnel.societalBenefits.benefit1.title')}</h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {t('healthPersonnel.societalBenefits.benefit1.description')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-green-200">
                <div className="flex items-start mb-6">
                  <img 
                    src={stonks} 
                    alt="Økonomiske gevinster" 
                    className="w-48 h-48 rounded-xl mr-6 flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{t('healthPersonnel.societalBenefits.benefit2.title')}</h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {t('healthPersonnel.societalBenefits.benefit2.description')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-blue-200">
                <div className="flex items-start mb-6">
                  <img 
                    src={calmShift} 
                    alt="Bedre arbeidsvilkår" 
                    className="w-48 h-48 rounded-xl mr-6 flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{t('healthPersonnel.societalBenefits.benefit3.title')}</h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {t('healthPersonnel.societalBenefits.benefit3.description')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-purple-200">
                <div className="flex items-start mb-6">
                  <img 
                    src={videoCall} 
                    alt="Trygghet og verdighet" 
                    className="w-48 h-48 rounded-xl mr-6 flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{t('healthPersonnel.societalBenefits.benefit4.title')}</h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {t('healthPersonnel.societalBenefits.benefit4.description')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Documentation and Legitimacy Section */}
        <section className="documentation-section py-20 w-full bg-gray-50">
          <div className="w-full">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('healthPersonnel.documentation.title')}</h2>
              <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('healthPersonnel.documentation.ceMarked.title')}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('healthPersonnel.documentation.ceMarked.description')}
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('healthPersonnel.documentation.dataSecurity.title')}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('healthPersonnel.documentation.dataSecurity.description')}
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('healthPersonnel.documentation.tested.title')}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('healthPersonnel.documentation.tested.description')}
                </p>
              </div>
            </div>

            <div className="text-center">
              <button className="bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl">
                {t('healthPersonnel.documentation.downloadButton')}
              </button>
            </div>
          </div>
        </section>

        {/* Cases and Stories Section */}
        <section className="cases-section py-20 w-full bg-white">
          <div className="w-full">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('healthPersonnel.cases.title')}</h2>
              <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('healthPersonnel.cases.pilotResults')}</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{t('healthPersonnel.cases.result1')}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{t('healthPersonnel.cases.result2')}</span>
                  </li>
                </ul>
                <blockquote className="text-gray-600 italic border-l-4 border-teal-600 pl-4">
                  "{t('healthPersonnel.cases.quote')}"
                </blockquote>
                <p className="text-sm text-gray-500 mt-4">{t('healthPersonnel.cases.attribution')}</p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('healthPersonnel.cases.pilotResults')}</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{t('healthPersonnel.cases.result1')}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{t('healthPersonnel.cases.result2')}</span>
                  </li>
                </ul>
                <blockquote className="text-gray-600 italic border-l-4 border-teal-600 pl-4">
                  "{t('healthPersonnel.cases.quote')}"
                </blockquote>
                <p className="text-sm text-gray-500 mt-4">{t('healthPersonnel.cases.attribution')}</p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('healthPersonnel.cases.pilotResults')}</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{t('healthPersonnel.cases.result1')}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{t('healthPersonnel.cases.result2')}</span>
                  </li>
                </ul>
                <blockquote className="text-gray-600 italic border-l-4 border-teal-600 pl-4">
                  "{t('healthPersonnel.cases.quote')}"
                </blockquote>
                <p className="text-sm text-gray-500 mt-4">{t('healthPersonnel.cases.attribution')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps Section */}
        <section className="next-steps-section py-20 w-full bg-gray-50">
          <div className="w-full">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('healthPersonnel.nextSteps.title')}</h2>
              <p className="text-xl text-gray-600 mb-8">{t('healthPersonnel.nextSteps.subtitle')}</p>
              <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('healthPersonnel.nextSteps.brief.title')}</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {t('healthPersonnel.nextSteps.brief.description')}
                </p>
                <button className="bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl">
                  {t('healthPersonnel.nextSteps.brief.button')}
                </button>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('healthPersonnel.nextSteps.presentation.title')}</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {t('healthPersonnel.nextSteps.presentation.description')}
                </p>
                <button className="bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl">
                  {t('healthPersonnel.nextSteps.presentation.button')}
                </button>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
