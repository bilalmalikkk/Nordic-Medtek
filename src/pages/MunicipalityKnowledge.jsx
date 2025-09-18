import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import k3 from '../assets/k3.png'
import imageUtfordringene from '../assets/image-unfordringene.png'
import sensor from '../assets/sensor.png'
import receivesPing from '../assets/recieves ping.png'
import sensorsData from '../assets/sensors data.png'
import support1Traced from '../assets/support 1 (Traced).png'
import ceMdr1 from '../assets/ce-mdr 1.png'
import image17034851816471 from '../assets/1703485181647 1.png'

export default function MunicipalityKnowledge() {
  const { t } = useTranslation()
  
  return (
    <div className="municipality-knowledge-page min-h-screen w-full">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="hero-section min-h-[calc(100vh-100px)] flex items-center w-full bg-gradient-to-br from-gray-50 to-white">
          <div className="w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    {t('municipalityKnowledge.hero.title')}
                  </h1>
                  <div className="w-20 h-1 bg-teal-600 rounded-full"></div>
                </div>
                <div className="space-y-4">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {t('municipalityKnowledge.hero.description1')}
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {t('municipalityKnowledge.hero.description2')}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link 
                    to="/guidance" 
                    className="group inline-flex items-center justify-center bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-900 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    {t('municipalityKnowledge.hero.button1')}
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                  <Link 
                    to="/municipality" 
                    className="group inline-flex items-center justify-center bg-yellow-400 text-gray-800 px-8 py-4 rounded-xl font-semibold hover:bg-yellow-500 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    {t('municipalityKnowledge.hero.button2')}
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className="absolute -inset-4 bg-gradient-to-r from-teal-400 to-blue-500 rounded-2xl blur opacity-20"></div>
                  <div className="relative bg-white p-4 rounded-2xl shadow-2xl">
                    <img 
                      src={k3} 
                      alt="Kunnskapsgrunnlag og beslutningsstøtte" 
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="challenges-section py-20 w-full bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="w-full">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {t('municipalityKnowledge.challenges.title')}
              </h2>
              <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-xl text-gray-700 leading-relaxed">
                  {t('municipalityKnowledge.challenges.intro')}
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {t('municipalityKnowledge.challenges.challenge1')}
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {t('municipalityKnowledge.challenges.challenge2')}
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {t('municipalityKnowledge.challenges.challenge3')}
                    </p>
                  </li>
                </ul>
                <p className="text-xl text-gray-700 leading-relaxed">
                  {t('municipalityKnowledge.challenges.conclusion')}
                </p>
              </div>
              
              <div className="flex justify-center">
                <div className="relative w-full max-w-lg">
                  <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-2xl blur opacity-20"></div>
                  <div className="relative bg-white p-4 rounded-2xl shadow-2xl">
                    <img 
                      src={imageUtfordringene} 
                      alt="Utfordringene kommunen står i" 
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Overview Section */}
        <section className="solution-overview-section py-20 w-full bg-white">
          <div className="w-full">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {t('municipalityKnowledge.solution.title')}
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                {t('municipalityKnowledge.solution.subtitle')}
              </p>
              <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Fallsensorer */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="mb-6">
                  <img 
                    src={sensor} 
                    alt="Fallsensorer" 
                    className="w-full h-64 object-cover rounded-xl"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {t('municipalityKnowledge.solution.fallSensors.title')}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('municipalityKnowledge.solution.fallSensors.description')}
                </p>
              </div>

              {/* Helsesensorer */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="mb-6">
                  <img 
                    src={receivesPing} 
                    alt="Helsesensorer" 
                    className="w-full h-64 object-cover rounded-xl"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {t('municipalityKnowledge.solution.healthSensors.title')}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('municipalityKnowledge.solution.healthSensors.description')}
                </p>
              </div>

              {/* Sentral oversikt */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="mb-6">
                  <img 
                    src={sensorsData} 
                    alt="Sentral oversikt" 
                    className="w-full h-64 object-cover rounded-xl"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {t('municipalityKnowledge.solution.centralOverview.title')}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('municipalityKnowledge.solution.centralOverview.description')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="benefits-section py-20 w-full bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="w-full">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {t('municipalityKnowledge.benefits.title')}
              </h2>
              <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {t('municipalityKnowledge.benefits.benefit1')}
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {t('municipalityKnowledge.benefits.benefit2')}
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {t('municipalityKnowledge.benefits.benefit3')}
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {t('municipalityKnowledge.benefits.benefit4')}
                    </p>
                  </li>
                </ul>

                <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-teal-500">
                  <blockquote className="text-lg text-gray-700 italic leading-relaxed mb-4">
                    "{t('municipalityKnowledge.benefits.quote')}"
                  </blockquote>
                  <cite className="text-gray-600 font-medium">
                    {t('municipalityKnowledge.benefits.attribution')}
                  </cite>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className="absolute -inset-4 bg-gradient-to-r from-teal-400 to-blue-500 rounded-2xl blur opacity-20"></div>
                  <div className="relative bg-white p-4 rounded-2xl shadow-2xl">
                    <img 
                      src={receivesPing} 
                      alt="Helsepersonell i diskusjon" 
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Documentation and Security Section */}
        <section className="documentation-section py-20 w-full bg-white">
          <div className="w-full">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {t('municipalityKnowledge.documentation.title')}
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                {t('municipalityKnowledge.documentation.subtitle')}
              </p>
              <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* CE Marking */}
              <div className="text-center">
                <div className="w-48 h-48 mx-auto mb-6 flex items-center justify-center bg-gray-100 rounded-2xl">
                  <img 
                    src={ceMdr1} 
                    alt="CE Marking" 
                    className="w-40 h-40 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {t('municipalityKnowledge.documentation.ceMarked.title')}
                </h3>
              </div>

              {/* GDPR */}
              <div className="text-center">
                <div className="w-48 h-48 mx-auto mb-6 flex items-center justify-center bg-blue-100 rounded-2xl">
                  <img 
                    src={image17034851816471} 
                    alt="GDPR Compliance" 
                    className="w-40 h-40 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {t('municipalityKnowledge.documentation.gdpr.title')}
                </h3>
              </div>

              {/* Support */}
              <div className="text-center">
                <div className="w-48 h-48 mx-auto mb-6 flex items-center justify-center bg-gray-100 rounded-2xl">
                  <img 
                    src={support1Traced} 
                    alt="Professional Support" 
                    className="w-40 h-40 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {t('municipalityKnowledge.documentation.support.title')}
                </h3>
              </div>
            </div>

            <div className="text-center">
              <Link 
                to="/documents" 
                className="group inline-flex items-center justify-center bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-900 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {t('municipalityKnowledge.documentation.button')}
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="case-studies-section py-20 w-full bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="w-full">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {t('municipalityKnowledge.cases.title')}
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                {t('municipalityKnowledge.cases.subtitle')}
              </p>
              <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <ul className="space-y-6 mb-12">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    {t('municipalityKnowledge.cases.result1')}
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    {t('municipalityKnowledge.cases.result2')}
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    {t('municipalityKnowledge.cases.result3')}
                  </p>
                </li>
              </ul>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-teal-500">
                <blockquote className="text-lg text-gray-700 italic leading-relaxed mb-4">
                  "{t('municipalityKnowledge.cases.quote')}"
                </blockquote>
                <cite className="text-gray-600 font-medium">
                  {t('municipalityKnowledge.cases.attribution')}
                </cite>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps Section */}
        <section className="next-steps-section py-20 w-full bg-white">
          <div className="w-full">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {t('municipalityKnowledge.nextSteps.title')}
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                {t('municipalityKnowledge.nextSteps.subtitle')}
              </p>
              <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Management Presentation Card */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-blue-200">
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {t('municipalityKnowledge.nextSteps.presentation.title')}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {t('municipalityKnowledge.nextSteps.presentation.description')}
                  </p>
                  <Link
                    to="/guidance"
                    className="group inline-flex items-center justify-center bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-900 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    {t('municipalityKnowledge.nextSteps.presentation.button')}
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Pilot Project Card */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-green-200">
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {t('municipalityKnowledge.nextSteps.pilot.title')}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {t('municipalityKnowledge.nextSteps.pilot.description')}
                  </p>
                  <Link
                    to="/guidance"
                    className="group inline-flex items-center justify-center bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-900 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    {t('municipalityKnowledge.nextSteps.pilot.button')}
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-200 py-8 w-full">
          <div className="w-full">
            <div className="text-center text-slate-600">
              <Link to="/municipality" className="hover:text-teal-600 transition-colors">
                {t('municipalityKnowledge.footer')}
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
