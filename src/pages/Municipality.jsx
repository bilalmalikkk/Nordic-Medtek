import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function Municipality() {
  const { t } = useTranslation()
  
  return (
    <div className="municipality-page min-h-screen w-full">
      {/* Hero Section */}
      <section className="hero-section bg-white h-[calc(100vh-100px)] flex items-center w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 leading-tight mb-6">
              {t('municipality.hero.title')}
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              {t('municipality.hero.description')}
            </p>
            <Link 
              to="/demo" 
              className="inline-block bg-yellow-400 text-slate-800 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
            >
              {t('municipality.hero.button')}
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section bg-white py-16 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Dashed line separator */}
            <div className="border-t-2 border-dashed border-slate-300 mb-12"></div>
            
            {/* 6-card grid layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Row 1 */}
              <div className="bg-white p-6 rounded-lg border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">
                  {t('municipality.benefits.safeCare.title')}
                </h3>
                <p className="text-sm text-slate-600">
                  {t('municipality.benefits.safeCare.link')}
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">
                  {t('municipality.benefits.moreTime.title')}
                </h3>
                <p className="text-sm text-slate-600">
                  {t('municipality.benefits.moreTime.link')}
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">
                  {t('municipality.benefits.knowledgeBase.title')}
                </h3>
                <p className="text-sm text-slate-600">
                  {t('municipality.benefits.knowledgeBase.link')}
                </p>
              </div>

              {/* Row 2 */}
              <div className="bg-white p-6 rounded-lg border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">
                  {t('municipality.benefits.economic.title')}
                </h3>
                <p className="text-sm text-slate-600">
                  {t('municipality.benefits.economic.link')}
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">
                  {t('municipality.benefits.secureData.title')}
                </h3>
                <p className="text-sm text-slate-600">
                  {t('municipality.benefits.secureData.link')}
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">
                  {t('municipality.benefits.partnership.title')}
                </h3>
                <p className="text-sm text-slate-600">
                  {t('municipality.benefits.partnership.link')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section bg-white py-16 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-slate-800 mb-8">
              {t('municipality.cta.title')}
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/guidance" 
                className="inline-block bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-slate-800 transition-colors"
              >
                {t('municipality.cta.contact')}
              </Link>
              <Link 
                to="/demo" 
                className="inline-block bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-slate-800 transition-colors"
              >
                {t('municipality.cta.demo')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section bg-white py-16 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">
            {t('municipality.faq.title')}
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {t('municipality.faq.questions', { returnObjects: true }).map((faq, index) => (
              <div key={index} className="border-b border-slate-200 pb-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  {faq.question}
                </h3>
                <p className="text-slate-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta-section bg-white py-16 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="border-2 border-dashed border-orange-400 bg-orange-50 p-8 rounded-lg text-center">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                {t('municipality.finalCta.title')}
              </h2>
              <p className="text-slate-600 mb-8 text-lg">
                {t('municipality.finalCta.description')}
              </p>
              <Link 
                to="/guidance" 
                className="inline-block bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-slate-800 transition-colors"
              >
                {t('municipality.finalCta.button')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-200 py-8 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center text-slate-600">
            {t('municipality.footer')}
          </div>
        </div>
      </footer>
    </div>
  )
}