import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import puzzleImage from '../assets/puzzle.png'
import accessControlImage from '../assets/image-tilgangs.png'
import isoImage from '../assets/image -ISO.png'
import encryptionImage from '../assets/data-encryption-512.png'
import systemOverviewImage from '../assets/1703485181647 1.png'
import cloudArchitectureImage from '../assets/image-skybasert.png'
import monitoringImage from '../assets/image-overvaking.png'
import scalabilityImage from '../assets/flexibility-scalability-icon.png'
import plan1Image from '../assets/image-Plan1.png'
import planImage from '../assets/image-Plan.png'
import technicalImage from '../assets/image-Teknisk.png'
import documentationImage from '../assets/image-Dokumentasjon.png'
import apiImage from '../assets/image-API.png'
import fhirImage from '../assets/image-FHIR.png'
import groupImage from '../assets/Group 10566.png'
import technicalSupportImage from '../assets/technical-support.png'

export default function ITWelfareTechnology() {
  const { t } = useTranslation()
  
  return (
    <div className="it-welfare-tech-page min-h-screen w-full relative">
      {/* Alphabet Label */}
      <div className="absolute top-4 left-4 z-10">
        <div className="w-8 h-8 bg-orange-300 rounded-full flex items-center justify-center text-white font-bold text-lg">
          T
        </div>
      </div>
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="hero-section min-h-[calc(100vh-100px)] flex items-center w-full bg-gradient-to-br from-gray-50 to-white">
          <div className="w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight italic">
                    {t('itWelfareTech.hero.title')}
                  </h1>
                  <div className="w-20 h-1 bg-teal-600 rounded-full"></div>
                </div>
                <p className="text-xl text-gray-700 leading-relaxed bg-white p-6 rounded-xl shadow-sm border-l-4 border-teal-500">
                  {t('itWelfareTech.hero.description')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link 
                    to="/guidance" 
                    className="group inline-flex items-center justify-center bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-900 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    {t('itWelfareTech.hero.button1')}
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                  <Link 
                    to="/products" 
                    className="group inline-flex items-center justify-center bg-teal-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-teal-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    {t('itWelfareTech.hero.button3')}
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-full max-w-md">
                  <img 
                    src={puzzleImage} 
                    alt="Integration and connectivity illustration" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Data Security Section */}
        <section className="data-security-section py-20 w-full bg-white">
          <div className="w-full">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {t('itWelfareTech.security.title')}
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                {t('itWelfareTech.security.subtitle')}
              </p>
            </div>
            
            {/* Security Features Grid - 4 cards in single row, no colored backgrounds */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Encryption */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <img 
                  src={encryptionImage} 
                  alt="Data encryption" 
                  className="w-24 h-24 mx-auto mb-6"
                />
                <p className="text-gray-600 leading-relaxed text-center">
                  {t('itWelfareTech.security.encryption.description')}
                </p>
              </div>

              {/* Access Control */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <img 
                  src={accessControlImage} 
                  alt="Access control" 
                  className="w-24 h-24 mx-auto mb-6"
                />
                <p className="text-gray-600 leading-relaxed text-center">
                  {t('itWelfareTech.security.accessControl.description')}
                </p>
              </div>

              {/* GDPR Compliance - Using the GDPR image */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <img 
                  src={systemOverviewImage} 
                  alt="GDPR compliance" 
                  className="w-24 h-24 mx-auto mb-6"
                />
                <p className="text-gray-600 leading-relaxed text-center">
                  {t('itWelfareTech.security.gdpr.description')}
                </p>
              </div>

              {/* ISO 27001 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <img 
                  src={isoImage} 
                  alt="ISO 27001" 
                  className="w-24 h-24 mx-auto mb-6"
                />
                <p className="text-gray-600 leading-relaxed text-center">
                  {t('itWelfareTech.security.iso.description')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* System Architecture Section */}
        <section className="system-architecture-section py-20 w-full bg-white">
          <div className="w-full">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {t('itWelfareTech.architecture.title')}
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                {t('itWelfareTech.architecture.subtitle')}
              </p>
            </div>
            
            {/* Architecture Features Grid - 3 cards in single row, no colored backgrounds */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Cloud Architecture */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <img 
                  src={cloudArchitectureImage} 
                  alt="Cloud architecture" 
                  className="w-24 h-24 mx-auto mb-6"
                />
                <p className="text-gray-600 leading-relaxed text-center">
                  {t('itWelfareTech.architecture.cloud.description')}
                </p>
              </div>

              {/* 24/7 Monitoring */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <img 
                  src={monitoringImage} 
                  alt="24/7 monitoring" 
                  className="w-24 h-24 mx-auto mb-6"
                />
                <p className="text-gray-600 leading-relaxed text-center">
                  {t('itWelfareTech.architecture.monitoring.description')}
                </p>
              </div>

              {/* Scalability */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <img 
                  src={scalabilityImage} 
                  alt="Scalability" 
                  className="w-24 h-24 mx-auto mb-6"
                />
                <p className="text-gray-600 leading-relaxed text-center">
                  {t('itWelfareTech.architecture.scalability.description')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Integration and Standards Section */}
        <section className="integration-standards-section py-20 w-full bg-white">
          <div className="w-full">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {t('itWelfareTech.integration.title')}
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                {t('itWelfareTech.integration.subtitle')}
              </p>
            </div>
            
            {/* Integration Features Grid - 4 cards in single row, no colored backgrounds */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* FHIR Standards */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <img 
                  src={fhirImage} 
                  alt="FHIR standards" 
                  className="w-24 h-24 mx-auto mb-6"
                />
                <p className="text-gray-600 leading-relaxed text-center">
                  {t('itWelfareTech.integration.fhir.description')}
                </p>
              </div>

              {/* Open APIs */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <img 
                  src={apiImage} 
                  alt="Open APIs" 
                  className="w-24 h-24 mx-auto mb-6"
                />
                <p className="text-gray-600 leading-relaxed text-center">
                  {t('itWelfareTech.integration.api.description')}
                </p>
              </div>

              {/* Security Testing */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <img 
                  src={groupImage} 
                  alt="Security testing" 
                  className="w-24 h-24 mx-auto mb-6"
                />
                <p className="text-gray-600 leading-relaxed text-center">
                  {t('itWelfareTech.integration.security.description')}
                </p>
              </div>

              {/* Technical Documentation */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <img 
                  src={documentationImage} 
                  alt="Technical documentation" 
                  className="w-24 h-24 mx-auto mb-6"
                />
                <p className="text-gray-600 leading-relaxed text-center">
                  {t('itWelfareTech.integration.documentation.description')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Data Security and Privacy Section */}
        <section className="data-security-privacy-section py-20 w-full bg-white">
          <div className="w-full">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {t('itWelfareTech.dataSecurity.title')}
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                {t('itWelfareTech.dataSecurity.subtitle')}
              </p>
            </div>
            
            {/* Security Features Grid - 4 cards in single row, no colored backgrounds */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Card 1: Plan for videreutvikling */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <img 
                  src={planImage} 
                  alt="Plan for videreutvikling" 
                  className="w-24 h-24 mx-auto mb-6"
                />
                <p className="text-gray-600 leading-relaxed text-center">
                  {t('itWelfareTech.dataSecurity.developmentPlan.description')}
                </p>
              </div>

              {/* Card 2: Teknisk support */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <img 
                  src={technicalSupportImage} 
                  alt="Teknisk support" 
                  className="w-24 h-24 mx-auto mb-6"
                />
                <p className="text-gray-600 leading-relaxed text-center">
                  {t('itWelfareTech.dataSecurity.technicalSupport.description')}
                </p>
              </div>

              {/* Card 3: Kontinuerlige sikkerhetstester */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <img 
                  src={technicalImage} 
                  alt="Kontinuerlige sikkerhetstester" 
                  className="w-24 h-24 mx-auto mb-6"
                />
                <p className="text-gray-600 leading-relaxed text-center">
                  {t('itWelfareTech.dataSecurity.continuousSecurity.description')}
                </p>
              </div>

              {/* Card 4: Plan for videreutvikling (again) */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <img 
                  src={plan1Image} 
                  alt="Plan for videreutvikling" 
                  className="w-24 h-24 mx-auto mb-6"
                />
                <p className="text-gray-600 leading-relaxed text-center">
                  {t('itWelfareTech.dataSecurity.developmentPlan2.description')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="cta-section py-20 w-full bg-white">
          <div className="w-full">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {t('itWelfareTech.cta.title')}
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                {t('itWelfareTech.cta.subtitle')}
              </p>
            </div>
            
            {/* CTA Options Grid - Only Meeting Card */}
            <div className="flex justify-center max-w-4xl mx-auto">
              {/* Schedule Technical Meeting */}
              <div className="text-center">
                <p className="text-gray-700 mb-6">
                  {t('itWelfareTech.cta.meeting.description')}
                </p>
                <Link
                  to="/guidance"
                  className="inline-block bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300"
                >
                  {t('itWelfareTech.cta.meeting.button')}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-200 py-8 w-full">
          <div className="w-full">
            <div className="text-center text-slate-600">
              {t('itWelfareTech.footer')}
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
