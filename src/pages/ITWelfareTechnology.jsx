import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
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
import conformityImage from '../assets/image (22).png'
import productSheetImage from '../assets/image (23).png'
import certificatesImage from '../assets/image (24).png'
import safetyDocsImage from '../assets/image (25).png'

export default function ITWelfareTechnology() {
  const { t } = useTranslation()
  const location = useLocation()

  // Scroll to hash on page load
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash)
      if (element) {
        // Use a longer timeout to ensure page is fully rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 300)
      }
    }
  }, [location.hash])
  
  return (
    <div className="it-welfare-tech-page min-h-screen w-full">
      {/* Back Button */}
      <section className="py-4 w-full bg-gray-50">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/kommune1" 
            className="inline-flex items-center text-gray-600 hover:text-teal-600 transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-medium">Tilbake</span>
          </Link>
        </div>
      </section>

        {/* Hero Section */}
      <section className="w-full bg-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-8">
          <div className="grid lg:grid-cols-2 gap-4 lg:gap-6 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight italic mb-3">
                    {t('itWelfareTech.hero.title')}
                  </h1>
              <div className="w-16 h-1 bg-teal-600 rounded-full mb-4"></div>
              <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed bg-white p-4 rounded-xl shadow-sm border-l-4 border-teal-500">
                  {t('itWelfareTech.hero.description')}
                </p>
                </div>
            <div className="flex justify-center mt-4 lg:mt-0">
              <img 
                src={puzzleImage} 
                alt="Integration and connectivity illustration" 
                className="w-full max-w-[280px] h-auto"
              />
            </div>
            </div>
          </div>
        </section>

        {/* Data Security Section */}
      <section id="data-security" className="w-full bg-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {t('itWelfareTech.security.mainTitle')}
            </h2>
            <div className="border-2 border-dashed border-blue-400 rounded-xl p-8 bg-gray-50">
              <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                {t('itWelfareTech.security.title')}
              </h3>
              <p className="text-lg text-gray-700 mb-8 text-center">
                {t('itWelfareTech.security.subtitle')}
              </p>
            
            {/* Security Features Grid - 4 cards in single row, no colored backgrounds */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Encryption */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <img 
                  src={encryptionImage} 
                  alt="Data encryption" 
                  className="w-32 h-32 mx-auto mb-6"
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
                  className="w-32 h-32 mx-auto mb-6"
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
                  className="w-32 h-32 mx-auto mb-6"
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
                  className="w-32 h-32 mx-auto mb-6"
                />
                <p className="text-gray-600 leading-relaxed text-center">
                  {t('itWelfareTech.security.iso.description')}
                </p>
              </div>
              </div>
            </div>
          </div>
        </section>

        {/* System Architecture Section */}
      <section className="w-full bg-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-20">
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
                  className="w-32 h-32 mx-auto mb-6"
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
                  className="w-32 h-32 mx-auto mb-6"
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
                  className="w-32 h-32 mx-auto mb-6"
                />
                <p className="text-gray-600 leading-relaxed text-center">
                  {t('itWelfareTech.architecture.scalability.description')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Integration and Standards Section */}
      <section id="integration-standards" className="w-full bg-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-20">
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
      <section className="w-full bg-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-20">
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
                  className="w-32 h-32 mx-auto mb-6"
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
                  className="w-32 h-32 mx-auto mb-6"
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
                  className="w-32 h-32 mx-auto mb-6"
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
                  className="w-32 h-32 mx-auto mb-6"
                />
                <p className="text-gray-600 leading-relaxed text-center">
                  {t('itWelfareTech.dataSecurity.developmentPlan2.description')}
                </p>
              </div>
            </div>
          </div>
        </section>

      {/* Downloadable Documents Section */}
      <section className="w-full bg-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {t('itWelfareTech.downloadableDocuments.title')}
              </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Conformity Declaration */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center">
                <img 
                  src={conformityImage} 
                  alt="Declaration of conformity" 
                  className="w-32 h-32 mb-6"
                />
                <button className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors">
                  {t('itWelfareTech.downloadableDocuments.documents.conformity')}
                </button>
              </div>

              {/* Product Sheet */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center">
                <img 
                  src={productSheetImage} 
                  alt="Product sheet" 
                  className="w-32 h-32 mb-6"
                />
                <button className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors">
                  {t('itWelfareTech.downloadableDocuments.documents.productSheet')}
                </button>
              </div>

              {/* Certificates */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center">
                <img 
                  src={certificatesImage} 
                  alt="Certificates" 
                  className="w-32 h-32 mb-6"
                />
                <button className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors">
                  {t('itWelfareTech.downloadableDocuments.documents.certificates')}
                </button>
              </div>

              {/* Safety Documentation */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center">
                <img 
                  src={safetyDocsImage} 
                  alt="Safety documentation" 
                  className="w-32 h-32 mb-6"
                />
                <button className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors">
                  {t('itWelfareTech.downloadableDocuments.documents.safetyDocs')}
                </button>
              </div>
            </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full bg-gray-50">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            {t('itWelfareTech.finalCta.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Demo Column */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center">
                <p className="text-gray-700 mb-6">
                  {t('itWelfareTech.finalCta.columns.demo.description')}
                </p>
                <Link
                  to="/demo"
                  className="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors"
                >
                  {t('itWelfareTech.finalCta.columns.demo.button')}
                </Link>
            </div>
            
              {/* Presentation Column */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center">
                <p className="text-gray-700 mb-6">
                  {t('itWelfareTech.finalCta.columns.presentation.description')}
                </p>
                <Link
                  to="/guidance"
                  className="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors"
                >
                  {t('itWelfareTech.finalCta.columns.presentation.button')}
                </Link>
              </div>

              {/* Pilot Column */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center">
                <p className="text-gray-700 mb-6">
                  {t('itWelfareTech.finalCta.columns.pilot.description')}
                </p>
                <Link
                  to="/documents"
                  className="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors"
                >
                  {t('itWelfareTech.finalCta.columns.pilot.button')}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-200 py-8 w-full">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
            <div className="text-center text-slate-600">
              {t('itWelfareTech.footer')}
            </div>
          </div>
        </footer>
    </div>
  )
}
