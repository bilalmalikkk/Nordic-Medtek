import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import kPolitikere from '../assets/k-politikere.png'
import hospital from '../assets/hospital.png'
import sensorDetecty from '../assets/sensor detecty.png'
import stonks from '../assets/stonks.png'
import calmShift from '../assets/calm shift.png'
import videoCall from '../assets/video call.png'

export default function Politicians() {
  const { t } = useTranslation()
  
  return (
    <div className="politicians-page min-h-screen w-full relative">
      {/* Alphabet Label */}
      <div className="absolute top-4 left-4 z-10">
        <div className="w-8 h-8 bg-orange-300 rounded-full flex items-center justify-center text-white font-bold text-lg">
          Q
        </div>
      </div>
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="hero-section min-h-[calc(100vh-100px)] flex items-center w-full bg-gradient-to-br from-gray-50 to-white">
          <div className="w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    {t('politicians.hero.title')}
                  </h1>
                  <div className="w-20 h-1 bg-teal-600 rounded-full"></div>
                </div>
                <div className="space-y-4">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {t('politicians.hero.description1')}
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {t('politicians.hero.description2')}
                  </p>
                </div>
                <div className="pt-4">
                  <Link 
                    to="/municipal-benefits" 
                    className="group inline-flex items-center justify-center bg-yellow-400 text-gray-800 px-8 py-4 rounded-xl font-semibold hover:bg-yellow-500 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    {t('politicians.hero.button')}
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className="absolute -inset-3 bg-gradient-to-r from-teal-400 to-blue-500 rounded-2xl blur opacity-20"></div>
                  <div className="relative bg-white p-3 rounded-2xl shadow-2xl">
                    <img 
                      src={kPolitikere} 
                      alt="Politiker ved talerstol" 
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
                {t('politicians.challenges.title')}
              </h2>
              <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {t('politicians.challenges.subtitle')}
                </h3>
                <div className="space-y-4">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {t('politicians.challenges.intro')}
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        {t('politicians.challenges.challenge1')}
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        {t('politicians.challenges.challenge2')}
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        {t('politicians.challenges.challenge3')}
                      </p>
                    </li>
                  </ul>
                  <p className="text-lg text-gray-700 leading-relaxed font-medium">
                    {t('politicians.challenges.conclusion')}
                  </p>
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="relative w-full max-w-lg">
                  <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-2xl blur opacity-20"></div>
                  <div className="relative bg-white p-4 rounded-2xl shadow-2xl">
                    <img 
                      src={hospital} 
                      alt="Utfordringene kommunen står i dag" 
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Societal Benefits Section */}
        <section className="societal-benefits-section py-20 w-full bg-white">
          <div className="w-full">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {t('politicians.societalBenefits.title')}
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                {t('politicians.societalBenefits.subtitle')}
              </p>
              <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Card 1: Færre sykehusinnleggelser */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="mb-6">
                  <img 
                    src={sensorDetecty} 
                    alt="Sensor oppdager kritiske hendelser" 
                    className="w-full h-64 object-cover rounded-xl"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {t('politicians.societalBenefits.benefit1.title')}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('politicians.societalBenefits.benefit1.description')}
                </p>
              </div>

              {/* Card 2: Lavere kostnader */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="mb-6">
                  <img 
                    src={stonks} 
                    alt="Lavere kostnader for kommunen" 
                    className="w-full h-64 object-cover rounded-xl"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {t('politicians.societalBenefits.benefit2.title')}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('politicians.societalBenefits.benefit2.description')}
                </p>
              </div>

              {/* Card 3: Bedre arbeidsvilkår */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="mb-6">
                  <img 
                    src={calmShift} 
                    alt="Bedre arbeidsvilkår for helsepersonell" 
                    className="w-full h-64 object-cover rounded-xl"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {t('politicians.societalBenefits.benefit3.title')}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('politicians.societalBenefits.benefit3.description')}
                </p>
              </div>

              {/* Card 4: Trygghet og verdighet */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="mb-6">
                  <img 
                    src={videoCall} 
                    alt="Trygghet og verdighet for eldre" 
                    className="w-full h-64 object-cover rounded-xl"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {t('politicians.societalBenefits.benefit4.title')}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('politicians.societalBenefits.benefit4.description')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Documentation and Legitimacy Section */}
        <section className="documentation-section py-20 w-full bg-white">
          <div className="w-full">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {t('politicians.documentation.title')}
              </h2>
              <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-8">
              {/* CE Marking */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  {t('politicians.documentation.ceMarking.title')}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t('politicians.documentation.ceMarking.description')}
                </p>
              </div>

              {/* GDPR Compliance */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  {t('politicians.documentation.gdpr.title')}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t('politicians.documentation.gdpr.description')}
                </p>
              </div>

              {/* Tested Technology */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  {t('politicians.documentation.tested.title')}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t('politicians.documentation.tested.description')}
                </p>
              </div>

              {/* Download Button */}
              <div className="pt-8">
                <Link 
                  to="/documents" 
                  className="group inline-flex items-center justify-center bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-900 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  {t('politicians.documentation.downloadButton')}
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Case and Stories Section */}
        <section className="case-stories-section py-20 w-full bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="w-full">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {t('politicians.cases.title')}
              </h2>
              <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Case Card 1 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  {t('politicians.cases.pilotResults')}
                </h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {t('politicians.cases.result1')}
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {t('politicians.cases.result2')}
                    </p>
                  </li>
                </ul>
                <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-teal-500">
                  <blockquote className="text-gray-700 italic leading-relaxed mb-4">
                    "{t('politicians.cases.quote')}"
                  </blockquote>
                  <cite className="text-gray-600 font-medium text-sm">
                    {t('politicians.cases.attribution')}
                  </cite>
                </div>
              </div>

              {/* Case Card 2 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  {t('politicians.cases.pilotResults')}
                </h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {t('politicians.cases.result1')}
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {t('politicians.cases.result2')}
                    </p>
                  </li>
                </ul>
                <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-teal-500">
                  <blockquote className="text-gray-700 italic leading-relaxed mb-4">
                    "{t('politicians.cases.quote')}"
                  </blockquote>
                  <cite className="text-gray-600 font-medium text-sm">
                    {t('politicians.cases.attribution')}
                  </cite>
                </div>
              </div>

              {/* Case Card 3 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  {t('politicians.cases.pilotResults')}
                </h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {t('politicians.cases.result1')}
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {t('politicians.cases.result2')}
                    </p>
                  </li>
                </ul>
                <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-teal-500">
                  <blockquote className="text-gray-700 italic leading-relaxed mb-4">
                    "{t('politicians.cases.quote')}"
                  </blockquote>
                  <cite className="text-gray-600 font-medium text-sm">
                    {t('politicians.cases.attribution')}
                  </cite>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps Section */}
        <section className="next-steps-section py-20 w-full bg-white">
          <div className="w-full">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {t('politicians.nextSteps.title')}
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                {t('politicians.nextSteps.subtitle')}
              </p>
              <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Brief Card */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {t('politicians.nextSteps.brief.title')}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {t('politicians.nextSteps.brief.description')}
                </p>
                <Link 
                  to="/documents" 
                  className="group inline-flex items-center justify-center bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-900 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl w-full"
                >
                  {t('politicians.nextSteps.brief.button')}
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </Link>
              </div>

              {/* Presentation Card */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {t('politicians.nextSteps.presentation.title')}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {t('politicians.nextSteps.presentation.description')}
                </p>
                <Link 
                  to="/guidance" 
                  className="group inline-flex items-center justify-center bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-900 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl w-full"
                >
                  {t('politicians.nextSteps.presentation.button')}
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-200 py-8 w-full">
          <div className="w-full">
            <div className="text-center text-slate-600">
              <Link to="/municipality" className="hover:text-teal-600 transition-colors">
                {t('politicians.footer')}
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
