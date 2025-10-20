import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import heroImage from '../assets/Landingpage.png'
import varmeHenderImage from '../assets/varme_hender.jpg'
import varmeHenderImageFallback from '../assets/varme_hender.jpg'
import eldreMannImage from '../assets/eldremanntrykthjemme.jpg'
import fallSensorImage from '../assets/A futuristic compact radar-based fall sensor mounted on a wall shown in use. The scene is rendered.jpeg'
import elderlySensorsImage from '../assets/eldre dame med sensorer.jpg'
import phoneImage from '../assets/Phone_lowres.png'
import madeInNorwayImage from '../assets/image-Norway.png'
import digitaltTilsynImage from '../assets/Digitalt tilsyn.jpg'
import n1Image from '../assets/n1.png'
import n3Image from '../assets/n3.png'
import n5Image from '../assets/n5.png'
import sensor from '../assets/sensor.png'
import receivesPing from '../assets/recieves ping.png'
import sensorsData from '../assets/sensors data.png'
import notification from '../assets/notification.png'

export default function HomePage1() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen w-full">
      <div className="w-full">
      {/* Top separator */}
      <div className="h-1 bg-white"></div>
      {/* Hero Section */}
      <section className="w-full flex justify-center bg-white">
        <div className="relative overflow-hidden min-h-[600px] flex items-end max-w-[1600px] w-full" style={{backgroundImage: `url(${varmeHenderImage})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
          {/* Dark overlay for better text visibility */}
          <div className="absolute inset-0 bg-black/40"></div>
          
          {/* Content */}
          <div className="relative z-10 w-full mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 pb-12 pt-32">
            <div className="max-w-4xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
                {t('homePage1.hero.title')}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white leading-relaxed">
                {t('homePage1.hero.subtitle')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vår løsning Section */}
      <section className="py-20 bg-white w-full">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('homePage1.ourSolution.title')}</h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              <p>
                {t('homePage1.ourSolution.description1')}
              </p>
              <p>
                {t('homePage1.ourSolution.description2')}
              </p>
            </div>
            <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Fallsensorer Card */}
            <div className="bg-gray-50 p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-48 h-48 mb-6 flex items-center justify-center">
                <img 
                  src={sensor} 
                  alt="Fallsensor som oppdager fall automatisk" 
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('homePage1.ourSolution.cards.fallSensors.title')}</h3>
              <p className="text-gray-700 leading-relaxed">
                {t('homePage1.ourSolution.cards.fallSensors.description')}
              </p>
            </div>

            {/* Helsesensorer Card */}
            <div className="bg-gray-50 p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-48 h-48 mb-6 flex items-center justify-center">
                <img 
                  src={receivesPing} 
                  alt="Helsepersonell som mottar varsel på mobil" 
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('homePage1.ourSolution.cards.healthSensors.title')}</h3>
              <p className="text-gray-700 leading-relaxed">
                {t('homePage1.ourSolution.cards.healthSensors.description')}
              </p>
            </div>

            {/* Sentral oversikt Card */}
            <div className="bg-gray-50 p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-48 h-48 mb-6 flex items-center justify-center">
                <img 
                  src={sensorsData} 
                  alt="Sentral oversikt med sanntidsdata" 
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('homePage1.ourSolution.cards.centralOverview.title')}</h3>
              <p className="text-gray-700 leading-relaxed">
                {t('homePage1.ourSolution.cards.centralOverview.description')}
              </p>
            </div>

            {/* Direkte varsling Card */}
            <div className="bg-gray-50 p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-48 h-48 mb-6 flex items-center justify-center">
                <img 
                  src={notification} 
                  alt="Direkte varsling på mobil" 
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('homePage1.ourSolution.cards.directAlert.title')}</h3>
              <p className="text-gray-700 leading-relaxed">
                {t('homePage1.ourSolution.cards.directAlert.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 bg-white w-full">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Privat Column */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">{t('homePage1.targetAudience.private.title')}</h3>
              <p className="text-gray-700 leading-relaxed mb-8 flex-grow">
                {t('homePage1.targetAudience.private.description')}
              </p>
              <Link 
                to="/private" 
                className="inline-flex items-center justify-center bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors"
              >
                {t('homePage1.targetAudience.private.link')}
              </Link>
            </div>

            {/* Kommune Column */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">{t('homePage1.targetAudience.municipality.title')}</h3>
              <p className="text-gray-700 leading-relaxed mb-8 flex-grow">
                {t('homePage1.targetAudience.municipality.description')}
              </p>
              <Link 
                to="/kommune1" 
                className="inline-flex items-center justify-center bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors"
              >
                {t('homePage1.targetAudience.municipality.link')}
              </Link>
            </div>

            {/* Bedrift Column */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">{t('homePage1.targetAudience.company.title')}</h3>
              <p className="text-gray-700 leading-relaxed mb-8 flex-grow">
                {t('homePage1.targetAudience.company.description')}
              </p>
              <Link 
                to="/company" 
                className="inline-flex items-center justify-center bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors"
              >
                {t('homePage1.targetAudience.company.link')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hvorfor velge oss Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white w-full">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('homePage1.whyChooseUs.title')}</h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: Easy to use */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('homePage1.whyChooseUs.cards.easyToUse.title')}</h3>
              <p className="text-gray-600 text-sm mb-6 flex-grow">
                {t('homePage1.whyChooseUs.cards.easyToUse.description')}
              </p>
              <Link 
                to="/easy-installation"
                state={{ from: '/' }}
                className="text-teal-600 hover:text-teal-700 font-semibold underline transition-colors text-sm"
              >
                {t('homePage1.whyChooseUs.cards.easyToUse.link')}
              </Link>
            </div>

            {/* Card 2: Efficient alarm center */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('homePage1.whyChooseUs.cards.efficientAlarm.title')}</h3>
              <p className="text-gray-600 text-sm mb-6 flex-grow">
                {t('homePage1.whyChooseUs.cards.efficientAlarm.description')}
              </p>
              <div className="flex flex-col gap-2">
                <Link 
                  to="/vaktrommet"
                  state={{ from: '/' }}
                  className="text-teal-600 hover:text-teal-700 font-semibold underline transition-colors text-sm"
                >
                  {t('homePage1.whyChooseUs.cards.efficientAlarm.link1')}
                </Link>
                <Link 
                  to="/vaktrommet-kommune"
                  state={{ from: '/' }}
                  className="text-teal-600 hover:text-teal-700 font-semibold underline transition-colors text-sm"
                >
                  {t('homePage1.whyChooseUs.cards.efficientAlarm.link2')}
                </Link>
              </div>
            </div>

            {/* Card 3: Easy to install */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('homePage1.whyChooseUs.cards.easyToInstall.title')}</h3>
              <p className="text-gray-600 text-sm mb-6 flex-grow">
                {t('homePage1.whyChooseUs.cards.easyToInstall.description')}
              </p>
              <Link 
                to="/info/easyToInstall"
                className="text-teal-600 hover:text-teal-700 font-semibold underline transition-colors text-sm"
              >
                {t('homePage1.whyChooseUs.cards.easyToInstall.link')}
              </Link>
            </div>

            {/* Card 4: Best price */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('homePage1.whyChooseUs.cards.bestPrice.title')}</h3>
              <p className="text-gray-600 text-sm mb-6 flex-grow">
                {t('homePage1.whyChooseUs.cards.bestPrice.description')}
              </p>
              <Link 
                to="/info/bestPrice"
                className="text-teal-600 hover:text-teal-700 font-semibold underline transition-colors text-sm"
              >
                {t('homePage1.whyChooseUs.cards.bestPrice.link')}
              </Link>
            </div>

            {/* Card 5: Open and integrable solution */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('homePage1.whyChooseUs.cards.openSolution.title')}</h3>
              <p className="text-gray-600 text-sm mb-6 flex-grow">
                {t('homePage1.whyChooseUs.cards.openSolution.description')}
              </p>
              <Link 
                to="/it-welfare-technology#integration-standards"
                state={{ from: '/' }}
                className="text-teal-600 hover:text-teal-700 font-semibold underline transition-colors text-sm"
              >
                {t('homePage1.whyChooseUs.cards.openSolution.link')}
              </Link>
            </div>

            {/* Card 6: Data security */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('homePage1.whyChooseUs.cards.dataSecurity.title')}</h3>
              <p className="text-gray-600 text-sm mb-6 flex-grow">
                {t('homePage1.whyChooseUs.cards.dataSecurity.description')}
              </p>
              <Link 
                to="/it-welfare-technology#data-security"
                state={{ from: '/' }}
                className="text-teal-600 hover:text-teal-700 font-semibold underline transition-colors text-sm"
              >
                {t('homePage1.whyChooseUs.cards.dataSecurity.link')}
              </Link>
            </div>

            {/* Card 7: Most complete solution */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('homePage1.whyChooseUs.cards.completeSolution.title')}</h3>
              <p className="text-gray-600 text-sm mb-6 flex-grow">
                {t('homePage1.whyChooseUs.cards.completeSolution.description')}
              </p>
              <Link 
                to="/products" 
                className="text-teal-600 hover:text-teal-700 font-semibold underline transition-colors text-sm"
              >
                {t('homePage1.whyChooseUs.cards.completeSolution.link')}
              </Link>
            </div>

            {/* Card 8: Made in Norway */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('homePage1.whyChooseUs.cards.madeInNorway.title')}</h3>
              <p className="text-gray-600 text-sm mb-6 flex-grow">
                {t('homePage1.whyChooseUs.cards.madeInNorway.description')}
              </p>
              <Link 
                to="/vision" 
                className="text-teal-600 hover:text-teal-700 font-semibold underline transition-colors text-sm"
              >
                {t('homePage1.whyChooseUs.cards.madeInNorway.link')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lurer du på noe Section */}
      <section className="py-20 bg-white w-full">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('homePage1.faq.title')}</h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1: Ofte stilte spørsmål */}
            <div className="bg-white p-8 rounded-3xl border-4 border-dashed border-orange-400 flex flex-col items-center text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('homePage1.faq.cards.faq.title')}</h3>
              <p className="text-gray-600 text-sm mb-8 flex-grow">
                {t('homePage1.faq.cards.faq.description')}
              </p>
              <Link 
                to="/faq"
                state={{ from: '/' }}
                className="inline-flex items-center justify-center bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors"
              >
                {t('homePage1.faq.cards.faq.link')}
              </Link>
            </div>

            {/* Card 2: Hvordan andre bruker løsningene */}
            <div className="bg-white p-8 rounded-3xl border-4 border-dashed border-orange-400 flex flex-col items-center text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('homePage1.faq.cards.experiences.title')}</h3>
              <p className="text-gray-600 text-sm mb-8 flex-grow">
                {t('homePage1.faq.cards.experiences.description')}
              </p>
              <Link 
                to="/experiences" 
                className="inline-flex items-center justify-center bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors"
              >
                {t('homePage1.faq.cards.experiences.link')}
              </Link>
            </div>

            {/* Card 3: Kontakt oss */}
            <div className="bg-white p-8 rounded-3xl border-4 border-dashed border-orange-400 flex flex-col items-center text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('homePage1.faq.cards.contact.title')}</h3>
              <p className="text-gray-600 text-sm mb-8 flex-grow">
                {t('homePage1.faq.cards.contact.description')}
              </p>
              <Link 
                to="/documents" 
                className="inline-flex items-center justify-center bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors"
              >
                {t('homePage1.faq.cards.contact.link')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      </div>
    </div>
  )
}
