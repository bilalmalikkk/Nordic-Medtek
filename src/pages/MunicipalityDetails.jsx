import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import runningThroughHouses from '../assets/running through houses.png'
import imageMunicipality from '../assets/image-municipality.png'
import emptyNightSign from '../assets/empty night sign.png'
import receivesPing from '../assets/recieves ping.png'
import sensor from '../assets/sensor.png'
import sensorsData from '../assets/sensors data.png'
import discussion from '../assets/discussion.png'
import imageFolderer from '../assets/image-folderer.png'

export default function MunicipalityDetails() {
  const { t } = useTranslation()
  
  return (
    <div className="municipality-details-page min-h-screen w-full">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="hero-section min-h-[calc(100vh-100px)] flex items-center w-full bg-gradient-to-br from-gray-50 to-white">
          <div className="w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h1 className="text-4xl lg:text-6xl font-bold italic text-gray-900 leading-tight">
                    {t('municipalityDetails.hero.title')}
                  </h1>
                  <div className="w-20 h-1 bg-teal-600 rounded-full"></div>
                </div>
                <p className="text-xl text-gray-700 leading-relaxed">
                  {t('municipalityDetails.hero.description')}
                </p>
                <div className="pt-4 flex flex-col sm:flex-row gap-4">
                  <Link 
                    to="/guidance" 
                    className="group inline-flex items-center justify-center bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-900 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    {t('municipalityDetails.hero.button1')}
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                  <Link 
                    to="/demo" 
                    className="group inline-flex items-center justify-center bg-yellow-400 text-gray-800 px-8 py-4 rounded-xl font-semibold hover:bg-yellow-500 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    {t('municipalityDetails.hero.button2')}
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-lg">
                  <div className="absolute -inset-4 bg-gradient-to-r from-teal-400 to-blue-500 rounded-2xl blur opacity-20"></div>
                  <div className="relative bg-white p-4 rounded-2xl shadow-2xl">
                    <img 
                      src={imageMunicipality} 
                      alt="Hjemmetjeneste illustrasjon" 
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
                {t('municipalityDetails.challenges.title')}
              </h2>
              <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Challenge 1 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="mb-6">
                  <img 
                    src={emptyNightSign} 
                    alt="Nattlig scene med usikkerhet" 
                    className="w-full h-64 object-cover rounded-xl"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {t('municipalityDetails.challenges.uncertainty.title')}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('municipalityDetails.challenges.uncertainty.description')}
                </p>
              </div>

              {/* Challenge 2 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="mb-6">
                  <img 
                    src={runningThroughHouses} 
                    alt="Presset arbeidshverdag" 
                    className="w-full h-64 object-cover rounded-xl"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {t('municipalityDetails.challenges.pressure.title')}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('municipalityDetails.challenges.pressure.description')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Overview Section */}
        <section className="solution-overview-section py-20 w-full bg-white">
          <div className="w-full">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {t('municipalityDetails.solution.title')}
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                {t('municipalityDetails.solution.subtitle')}
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
                  {t('municipalityDetails.solution.fallSensors.title')}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('municipalityDetails.solution.fallSensors.description')}
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
                  {t('municipalityDetails.solution.healthSensors.title')}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('municipalityDetails.solution.healthSensors.description')}
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
                  {t('municipalityDetails.solution.centralOverview.title')}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('municipalityDetails.solution.centralOverview.description')}
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
                {t('municipalityDetails.benefits.title')}
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
                      {t('municipalityDetails.benefits.benefit1')}
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {t('municipalityDetails.benefits.benefit2')}
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {t('municipalityDetails.benefits.benefit3')}
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {t('municipalityDetails.benefits.benefit4')}
                    </p>
                  </li>
                </ul>
                
                <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-teal-500">
                  <blockquote className="text-lg text-gray-700 italic leading-relaxed mb-4">
                    "{t('municipalityDetails.benefits.quote')}"
                  </blockquote>
                  <cite className="text-gray-600 font-medium">
                    {t('municipalityDetails.benefits.attribution')}
                  </cite>
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className="absolute -inset-4 bg-gradient-to-r from-teal-400 to-blue-500 rounded-2xl blur opacity-20"></div>
                  <div className="relative bg-white p-4 rounded-2xl shadow-2xl">
                    <img 
                      src={discussion} 
                      alt="Helsepersonell i diskusjon" 
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section with Image */}
        <section className="cta-image-section py-20 w-full bg-gradient-to-br from-orange-50 to-yellow-50">
          <div className="w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <div className="relative w-full max-w-lg">
                  <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-2xl blur opacity-20"></div>
                  <div className="relative bg-white p-4 rounded-2xl shadow-2xl">
                    <img 
                      src={imageFolderer} 
                      alt="Fordeler og tjenester" 
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                  {t('municipalityDetails.cta.title')}
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {t('municipalityDetails.cta.benefit1')}
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {t('municipalityDetails.cta.benefit2')}
                    </p>
                  </li>
                </ul>
                <div className="pt-4">
                  <Link 
                    to="/guidance" 
                    className="group inline-flex items-center justify-center bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-900 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    {t('municipalityDetails.cta.button')}
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
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
                {t('municipalityDetails.nextSteps.title')}
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                {t('municipalityDetails.nextSteps.subtitle')}
              </p>
              <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Demo Card */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-blue-200">
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {t('municipalityDetails.nextSteps.demo.title')}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {t('municipalityDetails.nextSteps.demo.description')}
                  </p>
                  <Link 
                    to="/demo" 
                    className="group inline-flex items-center justify-center bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-900 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    {t('municipalityDetails.nextSteps.demo.button')}
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
                    {t('municipalityDetails.nextSteps.pilot.title')}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {t('municipalityDetails.nextSteps.pilot.description')}
                  </p>
                  <Link 
                    to="/guidance" 
                    className="group inline-flex items-center justify-center bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-900 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    {t('municipalityDetails.nextSteps.pilot.button')}
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
                {t('municipalityDetails.footer')}
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
