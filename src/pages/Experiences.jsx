import { useTranslation } from 'react-i18next'
import { Link, useNavigate } from 'react-router-dom'
import ContactForm from '../components/ContactForm'
import erfaringerImage from '../assets/erfaringer.png'
import image33 from '../assets/image (33).png'
import image34 from '../assets/image (34).png'
import image35 from '../assets/image (35).png'

export default function Experiences() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  
  return (
    <div className="experiences-page min-h-screen w-full">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <section className="py-4 w-full bg-gray-50">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <button 
              onClick={() => navigate(-1)}
              className="inline-flex items-center text-gray-600 hover:text-teal-600 transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="font-medium">Tilbake</span>
            </button>
          </div>
        </section>

        {/* Hero Section */}
        <section className="hero-section min-h-[calc(100vh-100px)] flex items-center w-full bg-white">
          <div className="w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    {t('experiences.hero.title')}
                  </h1>
                  <div className="w-20 h-1 bg-teal-600 rounded-full"></div>
                </div>
                <p className="text-xl text-gray-700 leading-relaxed">
                  {t('experiences.hero.subtitle')}
                </p>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-lg">
                  <div className="absolute -inset-4 bg-gradient-to-r from-teal-400 to-blue-500 rounded-2xl blur opacity-20"></div>
                  <div className="relative bg-white p-4 rounded-2xl shadow-2xl">
                    <img 
                      src={erfaringerImage} 
                      alt="Business meeting presentation showing data and insights" 
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Testimonials Section */}
        <section className="py-20 w-full bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Kundehistorier fra kommuner og hjemmetjenester
              </h2>
              <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Oslo universitetssykehus */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="text-center mb-6">
                  <img 
                    src={image33} 
                    alt="Oslo universitetssykehus logo" 
                    className="w-40 h-40 mx-auto mb-4 object-contain"
                  />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Hjemmemonitorering av Covid-19 pasienter
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 text-center">
                  "Vi har fått svært positiv tilbakemelding fra pasientene som har brukt hjemmemonitorering. De opplever økt trygghet og bedre forståelse av sin sykdom. Det gir dem en følelse av kontroll og trygghet i eget hjem. Monitorering er også verdifull for tidlig oppdagelse av forverring for å unngå sykehusinnleggelse."
                </p>
                <div className="text-center">
                  <p className="text-sm font-semibold text-gray-900">
                    Johannes Nordsteien Svensøy
                  </p>
                  <p className="text-sm text-gray-600">
                    Lege, MSc.EMDM (Katastrofemedisin)
                  </p>
                </div>
              </div>

              {/* Farsund Kommune */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="text-center mb-6">
                  <img 
                    src={image34} 
                    alt="Farsund Kommune logo" 
                    className="w-40 h-40 mx-auto mb-4 object-contain"
                  />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Farsund Kommune
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 text-center">
                  "Vi har en tjenestemottaker som trenger tett oppfølging, spesielt om natten. NMT's sengesensor er den eneste løsningen som dekker dette behovet. Sensorene gir verdifull data om tilstedeværelse i seng, puls og respirasjonsfrekvens. Dette gir tjenestemottakeren uforstyrret søvn, som alle parter setter pris på. Vi bruker også terskelverdifunksjoner for automatiske alarmer. Takk for løsningen!"
                </p>
                <div className="text-center">
                  <p className="text-sm font-semibold text-gray-900">
                    Håkon Edland
                  </p>
                  <p className="text-sm text-gray-600">
                    Velferdsteknologi, Forebygging og koordinering
                  </p>
                </div>
              </div>

              {/* Nordanstigs Kommun */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="text-center mb-6">
                  <img 
                    src={image35} 
                    alt="Nordanstigs Kommun logo" 
                    className="w-40 h-40 mx-auto mb-4 object-contain"
                  />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Nordanstigs Kommun
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 text-center">
                  "NMT's overvåkingskameraer har spart mange mil og minutter for nattepersonalet i Nordanstigs kommun. Det beste er at kundene får sin uforstyrrede nattsøvn. En sømløs og god løsning."
                </p>
                <div className="text-center">
                  <p className="text-sm font-semibold text-gray-900">
                    Sonia Sydh
                  </p>
                  <p className="text-sm text-gray-600">
                    Hemtjänstens servicegrupp Samordningsenheten, Nordanstigs kommun
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brief for Politicians Section */}
        <section className="brief-section py-20 w-full bg-white">
          <div className="w-full">
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-3xl shadow-2xl p-12 border-2 border-orange-200">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  {t('experiences.brief.title')}
                </h2>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  {t('experiences.brief.description')}
                </p>
                <div className="max-w-md mx-auto">
                  <div className="flex gap-4">
                    <input 
                      type="email" 
                      placeholder="test@gmail.com" 
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                      {t('experiences.brief.button')}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="contact-form-section py-20 w-full bg-white">
          <div className="w-full">
            <ContactForm 
              title={t('experiences.contactForm.title')}
              desc={t('experiences.contactForm.description')}
              footerNote={t('experiences.contactForm.footerNote')}
            />
          </div>
        </section>

        {/* Bottom Section */}
        <section className="bottom-section py-20 w-full bg-white">
          <div className="w-full">
            <div className="text-center">
              <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                {t('experiences.bottom.description')}
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-200 py-8 w-full">
          <div className="w-full">
            <div className="text-center text-slate-600">
              {t('experiences.footer')}
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}