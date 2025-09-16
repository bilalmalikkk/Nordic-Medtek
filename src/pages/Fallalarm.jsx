import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import fallalarmImage from '../assets/image (2).png'
import howImage from '../assets/how.png'
import chairImage from '../assets/chair.png'
import routerImage from '../assets/router.png'

export default function Fallalarm() {
  const { t } = useTranslation()
  
  return (
    <div className="fallalarm-page min-h-screen w-full">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="hero-section min-h-[calc(100vh-100px)] flex items-center w-full bg-white">
          <div className="w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    {t('fallalarm.hero.title')}
                  </h1>
                  <div className="w-20 h-1 bg-teal-600 rounded-full"></div>
                </div>
                <p className="text-xl text-gray-700 leading-relaxed">
                  {t('fallalarm.hero.description')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    to="/products" 
                    className="group inline-flex items-center justify-center bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-900 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    {t('fallalarm.hero.button1')}
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                  <Link 
                    to="/demo" 
                    className="group inline-flex items-center justify-center bg-yellow-400 text-gray-800 px-8 py-4 rounded-xl font-semibold hover:bg-yellow-500 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    {t('fallalarm.hero.button2')}
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
                      src={fallalarmImage} 
                      alt="Eldre person som sover rolig i en seng, mens en liten sensor på veggen overvåker rommet diskret" 
                      className="w-full h-auto rounded-xl"
                    />
                    <p className="text-sm text-gray-600 mt-4 text-center">
                      {t('fallalarm.hero.imageCaption')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Guardian Series Section */}
        <section className="why-guardian-section py-20 w-full bg-gray-50">
          <div className="w-full">
            <div className="text-center mb-16">
              <div className="inline-block">
                <span className="text-blue-500 text-sm font-medium border-b-2 border-dotted border-blue-300 pb-1">
                  {t('fallalarm.whyGuardian.sectionTitle')}
                </span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mt-6 mb-4">
                {t('fallalarm.whyGuardian.title')}
              </h2>
              <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
            </div>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                {t('fallalarm.whyGuardian.description')}
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {t('fallalarm.whyGuardian.feature1.title')}
                    </h3>
                    <p className="text-gray-600">
                      {t('fallalarm.whyGuardian.feature1.description')}
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {t('fallalarm.whyGuardian.feature2.title')}
                    </h3>
                    <p className="text-gray-600">
                      {t('fallalarm.whyGuardian.feature2.description')}
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {t('fallalarm.whyGuardian.feature3.title')}
                    </h3>
                    <p className="text-gray-600">
                      {t('fallalarm.whyGuardian.feature3.description')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products in Series Section */}
        <section className="products-section py-20 w-full bg-white">
          <div className="w-full">
            <div className="text-center mb-16">
              <div className="inline-block">
                <span className="text-green-500 text-sm font-medium border-b-2 border-dotted border-green-300 pb-1">
                  {t('fallalarm.products.sectionTitle')}
                </span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mt-6 mb-4">
                {t('fallalarm.products.title')}
              </h2>
              <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
            </div>
            <div className="max-w-6xl mx-auto">
              <div className="space-y-8">
                {/* Guardian Wall */}
                <div className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="grid md:grid-cols-3 gap-8 items-center">
                    <div className="md:col-span-2">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {t('fallalarm.products.guardianWall.title')}
                      </h3>
                      <p className="text-gray-700 mb-4">
                        {t('fallalarm.products.guardianWall.description')}
                      </p>
                      <p className="text-sm text-gray-600 font-medium">
                        {t('fallalarm.products.guardianWall.bestFor')}
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <div className="w-32 h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                        <span className="text-gray-400 text-sm">Image</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Guardian Wall Pro */}
                <div className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="grid md:grid-cols-3 gap-8 items-center">
                    <div className="md:col-span-2">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {t('fallalarm.products.guardianWallPro.title')}
                      </h3>
                      <p className="text-gray-700 mb-4">
                        {t('fallalarm.products.guardianWallPro.description')}
                      </p>
                      <p className="text-sm text-gray-600 font-medium">
                        {t('fallalarm.products.guardianWallPro.bestFor')}
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <div className="w-32 h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                        <span className="text-gray-400 text-sm">Image</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Guardian Ceiling */}
                <div className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="grid md:grid-cols-3 gap-8 items-center">
                    <div className="md:col-span-2">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {t('fallalarm.products.guardianCeiling.title')}
                      </h3>
                      <p className="text-gray-700 mb-4">
                        {t('fallalarm.products.guardianCeiling.description')}
                      </p>
                      <p className="text-sm text-gray-600 font-medium">
                        {t('fallalarm.products.guardianCeiling.bestFor')}
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <div className="w-32 h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                        <span className="text-gray-400 text-sm">Image</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Guardian Ceiling Pro */}
                <div className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="grid md:grid-cols-3 gap-8 items-center">
                    <div className="md:col-span-2">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {t('fallalarm.products.guardianCeilingPro.title')}
                      </h3>
                      <p className="text-gray-700 mb-4">
                        {t('fallalarm.products.guardianCeilingPro.description')}
                      </p>
                      <p className="text-sm text-gray-600 font-medium">
                        {t('fallalarm.products.guardianCeilingPro.bestFor')}
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <div className="w-32 h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                        <span className="text-gray-400 text-sm">Image</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Complete Package Section */}
        <section className="complete-package-section py-20 w-full bg-white">
          <div className="w-full">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {t('fallalarm.completePackage.title')}
              </h2>
              <p className="text-xl text-gray-700 mb-6">
                {t('fallalarm.completePackage.subtitle')}
              </p>
              <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
            </div>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-8 text-center">
                {t('fallalarm.completePackage.description')}
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{t('fallalarm.completePackage.component1.title')}</h3>
                    <p className="text-gray-700">{t('fallalarm.completePackage.component1.description')}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{t('fallalarm.completePackage.component2.title')}</h3>
                    <p className="text-gray-700">{t('fallalarm.completePackage.component2.description')}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{t('fallalarm.completePackage.component3.title')}</h3>
                    <p className="text-gray-700">{t('fallalarm.completePackage.component3.description')}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{t('fallalarm.completePackage.component4.title')}</h3>
                    <p className="text-gray-700">{t('fallalarm.completePackage.component4.description')}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white font-bold text-sm">5</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{t('fallalarm.completePackage.component5.title')}</h3>
                    <p className="text-gray-700">{t('fallalarm.completePackage.component5.description')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who is Vital Series For Section */}
        <section className="who-is-vital-section py-20 w-full bg-yellow-50">
          <div className="w-full">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {t('fallalarm.whoIsVital.title')}
              </h2>
              <p className="text-xl text-gray-700 mb-6">
                {t('fallalarm.whoIsVital.subtitle')}
              </p>
              <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
            </div>
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div className="border-2 border-dotted border-gray-300 rounded-lg p-3 mb-4">
                      <h3 className="text-lg font-bold text-gray-900">
                        {t('fallalarm.whoIsVital.relatives.title')}
                      </h3>
                    </div>
                    <p className="text-gray-600">
                      {t('fallalarm.whoIsVital.relatives.description')}
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div className="border-2 border-dotted border-gray-300 rounded-lg p-3 mb-4">
                      <h3 className="text-lg font-bold text-gray-900">
                        {t('fallalarm.whoIsVital.municipality.title')}
                      </h3>
                    </div>
                    <p className="text-gray-600">
                      {t('fallalarm.whoIsVital.municipality.description')}
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                    </div>
                    <div className="border-2 border-dotted border-gray-300 rounded-lg p-3 mb-4">
                      <h3 className="text-lg font-bold text-gray-900">
                        {t('fallalarm.whoIsVital.partners.title')}
                      </h3>
                    </div>
                    <p className="text-gray-600">
                      {t('fallalarm.whoIsVital.partners.description')}
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                    <div className="border-2 border-dotted border-gray-300 rounded-lg p-3 mb-4">
                      <h3 className="text-lg font-bold text-gray-900">
                        {t('fallalarm.whoIsVital.investors.title')}
                      </h3>
                    </div>
                    <p className="text-gray-600">
                      {t('fallalarm.whoIsVital.investors.description')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How Guardian Works in Practice Section */}
        <section className="how-guardian-works-section py-20 w-full bg-white">
          <div className="w-full">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                {t('fallalarm.howGuardianWorks.title')}
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link 
                  to="/demo" 
                  className="group inline-flex items-center justify-center bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-900 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  {t('fallalarm.howGuardianWorks.button1')}
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link 
                  to="/demo" 
                  className="group inline-flex items-center justify-center bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-900 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  {t('fallalarm.howGuardianWorks.button2')}
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link 
                  to="/guidance" 
                  className="group inline-flex items-center justify-center bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-900 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  {t('fallalarm.howGuardianWorks.button3')}
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {t('fallalarm.howGuardianWorks.subtitle')}
                </h3>
                <p className="text-lg text-gray-700 mb-8">
                  {t('fallalarm.howGuardianWorks.description')}
                </p>
              </div>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white font-bold text-sm">•</span>
                  </div>
                  <p className="text-gray-700 text-lg">
                    {t('fallalarm.howGuardianWorks.component1')}
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white font-bold text-sm">•</span>
                  </div>
                  <p className="text-gray-700 text-lg">
                    {t('fallalarm.howGuardianWorks.component2')}
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white font-bold text-sm">•</span>
                  </div>
                  <p className="text-gray-700 text-lg">
                    {t('fallalarm.howGuardianWorks.component3')}
                  </p>
                </div>
              </div>

              <div className="text-center mb-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t('fallalarm.howGuardianWorks.purpose')}
                </p>
              </div>

              <div className="text-center">
                <h4 className="text-xl font-bold text-gray-900">
                  {t('fallalarm.howGuardianWorks.conclusion')}
                </h4>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works - Four Steps Section */}
        <section className="how-it-works-section py-20 w-full bg-gray-50">
          <div className="w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Step 1 */}
              <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
                {/* Text for Step 1 */}
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mr-6 mt-1 flex-shrink-0">
                      <span className="text-white font-bold text-lg">1</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {t('fallalarm.howItWorks.step1.title')}
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {t('fallalarm.howItWorks.step1.description')}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {t('fallalarm.howItWorks.step1.products')}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Image for Step 1 */}
                <div className="flex justify-center">
                  <div className="bg-white p-4 rounded-xl shadow-md">
                    <img 
                      src={howImage} 
                      alt="Fall detection sensors in different rooms" 
                      className="w-48 h-auto rounded-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
                {/* Text for Step 2 */}
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mr-6 mt-1 flex-shrink-0">
                      <span className="text-white font-bold text-lg">2</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {t('fallalarm.howItWorks.step2.title')}
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {t('fallalarm.howItWorks.step2.description')}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {t('fallalarm.howItWorks.step2.products')}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Image for Step 2 */}
                <div className="flex justify-center">
                  <div className="bg-white p-4 rounded-xl shadow-md">
                    <img 
                      src={chairImage} 
                      alt="Sensor measuring breath and pulse under chair" 
                      className="w-48 h-auto rounded-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
                {/* Text for Step 3 */}
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mr-6 mt-1 flex-shrink-0">
                      <span className="text-white font-bold text-lg">3</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {t('fallalarm.howItWorks.step3.title')}
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {t('fallalarm.howItWorks.step3.description')}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {t('fallalarm.howItWorks.step3.products')}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Image for Step 3 */}
                <div className="flex justify-center">
                  <div className="bg-white p-4 rounded-xl shadow-md">
                    <img 
                      src={routerImage} 
                      alt="Central hub connecting to cloud" 
                      className="w-48 h-auto rounded-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Step 4 - No image provided, so just text for now */}
              <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
                {/* Text for Step 4 */}
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mr-6 mt-1 flex-shrink-0">
                      <span className="text-white font-bold text-lg">4</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {t('fallalarm.howItWorks.step4.title')}
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {t('fallalarm.howItWorks.step4.description')}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {t('fallalarm.howItWorks.step4.products')}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Placeholder for Image for Step 4 if needed later */}
                <div className="flex justify-center">
                  {/* No image for step 4 currently */}
                </div>
              </div>

              {/* Call to Action Button */}
              <div className="text-center pt-8">
                <Link 
                  to="/fallalarm" 
                  className="group inline-flex items-center justify-center bg-gray-800 text-white px-12 py-6 rounded-2xl font-semibold text-lg hover:bg-gray-900 transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-xl"
                >
                  {t('fallalarm.howItWorks.ctaButton')}
                  <svg className="w-6 h-6 ml-3 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              {t('fallalarm.footer')}
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
