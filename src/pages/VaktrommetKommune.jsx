import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'
import trendsNoBackgroundImage from '../assets/trends_no_background.png'
import fallOnPhoneImage from '../assets/fall_on_phone.png'
import sykepleierPaVaktrommetImage from '../assets/sykepleier_på_vaktrommet.png'
import eqaeblinkImage from '../assets/eqaeblink_lowres.jpg'
import newsImage from '../assets/NEWS.png'
import trendsImage from '../assets/trends).png'

export default function VaktrommetKommune() {
  const { t } = useTranslation()
  const location = useLocation()
  const from = location.state?.from || '/kommune1'
  
  return (
    <div className="vaktrommet-page min-h-screen w-full">
      {/* Breadcrumb */}
      <section className="py-4 w-full bg-gray-50">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to={from} 
            className="inline-flex items-center text-gray-600 hover:text-teal-600 transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-medium">Tilbake</span>
          </Link>
        </div>
      </section>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="pt-2 pb-12 md:pt-2 md:pb-16 w-full bg-white">
          <div className="w-full">
            <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
              <div className="md:w-1/2 space-y-6">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                  Vaktrommet - en fleksibel og trygg skyløsning
                </h1>
                <div className="space-y-4">
                  <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                    Vår skyløsning, Vaktrommet, er utviklet for å fungere som et digitalt vaktrom - med mulighet for kontinuerlig oppfølging av brukere.
                  </p>
                  <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                    Kommunen kan velge mellom ulike driftsmodeller: enten med tilknytning til en profesjonell vaktsentral bemannet av sykepleiere og leger, eller som en løsning der kommunens egne ansatte overvåker brukerne. De ulike alternativene beskrives nærmere nedenfor.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <img 
                  src={trendsNoBackgroundImage} 
                  alt="Vaktrommet" 
                  className="w-full max-w-lg h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Service Options Section */}
        <section className="py-16 w-full bg-white">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                {t('vaktrommet.serviceOptions.title')}
              </h2>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                {t('vaktrommet.serviceOptions.subtitle')}
              </h3>
            </div>
            
            <div className="border-2 border-gray-900 rounded-lg p-8">
              <div className="grid md:grid-cols-3 gap-8 md:items-stretch">
                {/* Vaktrommet Privat Card */}
                <div className="flex flex-col space-y-6">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900">
                    {t('vaktrommet.serviceOptions.card1.title')}
                  </h3>
                  <p className="text-base text-gray-700 leading-relaxed">
                    {t('vaktrommet.serviceOptions.card1.description')}
                  </p>
                </div>

                {/* Alarmsentral Card */}
                <div className="flex flex-col space-y-6">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900">
                    {t('vaktrommet.serviceOptions.card2.title')}
                  </h3>
                  <p className="text-base text-gray-700 leading-relaxed">
                    {t('vaktrommet.serviceOptions.card2.description')}
                  </p>
                </div>

                {/* Profesjonell oppfølging Card */}
                <div className="flex flex-col space-y-6">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900">
                    {t('vaktrommet.serviceOptions.card3.title')}
                  </h3>
                  <p className="text-base text-gray-700 leading-relaxed">
                    {t('vaktrommet.serviceOptions.card3.description')}
                  </p>
                  <div className="mt-auto">
                    <a 
                      href="https://salubi.no" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all duration-300 w-full text-center"
                    >
                      {t('vaktrommet.serviceOptions.card3.button')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile and PC Monitoring Section */}
        <section className="py-16 w-full bg-gray-50">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-2 border-dashed border-blue-300 p-8 rounded-lg">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Mobile Monitoring */}
                <div className="space-y-6">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                    {t('vaktrommet.monitoring.mobile.title')}
                  </h3>
                  <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                    {t('vaktrommet.monitoring.mobile.description')}
                  </p>
                  <div className="flex justify-center">
                    <img 
                      src={fallOnPhoneImage} 
                      alt="Mobil varsling ved fall" 
                      className="w-full max-w-xs h-64 object-contain rounded-lg"
                    />
                  </div>
                </div>

                {/* PC Control */}
                <div className="space-y-6">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                    {t('vaktrommet.monitoring.pc.title')}
                  </h3>
                  <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                    {t('vaktrommet.monitoring.pc.description')}
                  </p>
                  <div className="flex justify-center">
                    <img 
                      src={sykepleierPaVaktrommetImage} 
                      alt="Full kontroll fra PC" 
                      className="w-full max-w-md h-64 object-contain rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* E-consultation Section */}
        <section className="py-16 w-full bg-white">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center order-2 lg:order-1">
                <div className="relative w-full max-w-lg">
                  <div className="absolute -inset-4 bg-gradient-to-r from-teal-400 to-blue-500 rounded-2xl blur opacity-20"></div>
                  <div className="relative bg-white p-4 rounded-2xl shadow-2xl">
                    <img 
                      src={eqaeblinkImage} 
                      alt="E-konsultasjon med innsikt" 
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  E-konsultasjon med innsikt - trygg og effektiv oppfølging i hjemmetjenesten
                </h2>
                <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                  Vår videobaserte e-konsultasjonsløsning er integrert med sanntids- og historiske målinger fra pasientens sensorer. Når lege kontaktes ved akutt behov eller rutinemessig oppfølging, får han umiddelbar tilgang til relevante helsedata - som hjertefrekvens, pust, temperatur og variasjoner over tid. Dette gir sykepleiere i hjemmetjenesten et kraftig verktøy for å sikre rask, presis og medisinsk fundert oppfølging - direkte fra pasientens hjem. Løsningen er under MDR sertifisering med mål om godkjenning innen utgangen av 2026.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Automatic NEWS Section */}
        <section className="py-16 w-full bg-gray-50">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  Automatisk NEWS – smartere oppfølging med Vaktrommet
                </h2>
                <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                  Vår skyløsning Vaktrommet bruker sensorer til å beregne National Early Warning Score (NEWS) automatisk uten manuell registrering. Systemet samler inn sanntidsdata om pustefrekvens, hjertefrekvens, temperatur og oksygenmetning, og gir helsepersonell et klart bilde av pasientens tilstand.
                </p>
                <div className="space-y-3">
                  <p className="text-base lg:text-lg font-semibold text-gray-900">
                    Dette gir hjemmetjenesten:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-base text-gray-700">Tidlig varsling ved endringer i helsetilstand</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-base text-gray-700">Effektiv prioritering av innsats</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-base text-gray-700">Redusert behov for manuell dokumentasjon</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-base text-gray-700">Bedre pasientsikkerhet og faglig støtte</span>
                    </li>
                  </ul>
                </div>
                <p className="text-base lg:text-lg text-gray-700 leading-relaxed font-medium">
                  Vaktrommet gir både oversikt og trygghet – og frigjør tid til omsorg.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-lg">
                  <div className="absolute -inset-4 bg-gradient-to-r from-teal-400 to-blue-500 rounded-2xl blur opacity-20"></div>
                  <div className="relative bg-white p-4 rounded-2xl shadow-2xl">
                    <img 
                      src={newsImage} 
                      alt="Automatisk NEWS system" 
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Proactive Health Follow-up Section */}
        <section className="py-16 w-full bg-white">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center order-2 lg:order-1">
                <div className="relative w-full max-w-lg">
                  <div className="absolute -inset-4 bg-gradient-to-r from-teal-400 to-blue-500 rounded-2xl blur opacity-20"></div>
                  <div className="relative bg-white p-4 rounded-2xl shadow-2xl">
                    <img 
                      src={trendsImage} 
                      alt="Proaktiv helseoppfølging med automatisk datainnsamling" 
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  Proaktiv helseoppfølging – med automatisk datainnsamling og trendanalyse
                </h2>
                <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                  Med riktig utvalg av sensorer kan vår løsning automatisk overvåke og lagre vitale måleverdier som hjertefrekvens, pustefrekvens, temperatur og oksygenmetning – alle nøkkeldata som inngår i beregningen av NEWS (National Early Warning Score). Disse dataene samles kontinuerlig og lagres sikkert i vår skyløsning, Vaktrommet. Over tid bygges det opp en medisinsk trend som gir verdifull innsikt i pasientens utvikling. Denne innsikten gjør det mulig å handle proaktivt – før tilstanden forverres – og gir helsepersonell et kraftig verktøy for tidlig intervensjon og bedre ressursbruk. Resultatet? Økt trygghet for brukeren, bedre beslutningsgrunnlag for helsepersonell, og en mer effektiv helsetjeneste.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vaktrommet Overview Section */}
        <section className="py-16 w-full bg-gray-50">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6">
                  Vaktrommet – full oversikt, effektiv oppfølging
                </h2>
                <p className="text-base lg:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                  Vaktrommet er utviklet for å gi helsepersonell en kraftig og brukervennlig plattform for overvåkning og oppfølging av mange brukere samtidig. Systemet inneholder et bredt utvalg funksjoner og visuelle skjermbilder som gjør arbeidet enklere, mer effektivt og tryggere.
                </p>
              </div>

              <div className="border-2 border-dashed border-blue-300 rounded-lg p-8 bg-white">
                <p className="text-base lg:text-lg font-semibold text-gray-900 mb-6">
                  Med Vaktrommet får du:
                </p>
                <div className="space-y-4 text-base lg:text-lg text-gray-700">
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">📊</span>
                    <span>Oversiktlige dashboards med sanntidsvisning av vitale måledata</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">🚨</span>
                    <span>Automatisk utsortering av brukere som trenger ekstra tilsyn</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">📈</span>
                    <span>Trendanalyse basert på historiske helsedata</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">🔔</span>
                    <span>Varslinger og beslutningsstøtte direkte i systemet</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">🧩</span>
                    <span>Skalerbar løsning som passer både små og store tjenesteområder</span>
                  </div>
                </div>
              </div>

              <p className="text-base lg:text-lg text-gray-700 leading-relaxed text-center">
                Vaktrommet gir kommunen full kontroll, bedre ressursutnyttelse og økt trygghet for både ansatte og brukere.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  to="/vaktrommet" 
                  className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Sjekk ut oversikt-side
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link 
                  to="/vaktrommet" 
                  className="inline-flex items-center justify-center bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Sjekk ut pasient-side
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Questions Section */}
        <section className="py-16 w-full bg-white">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {t('vaktrommet.questions.title')}
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-3xl border-4 border-dashed border-orange-400 hover:border-orange-500 transition-all duration-300 flex flex-col">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{t('vaktrommet.questions.faq.title')}</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">{t('vaktrommet.questions.faq.description')}</p>
                </div>
                <div className="mt-auto">
                  <Link 
                    to="/guidance" 
                    className="inline-block bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all duration-300 w-full text-center"
                  >
                    {t('vaktrommet.questions.faq.button')}
                  </Link>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl border-4 border-dashed border-orange-400 hover:border-orange-500 transition-all duration-300 flex flex-col">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{t('vaktrommet.questions.experiences.title')}</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">{t('vaktrommet.questions.experiences.description')}</p>
                </div>
                <div className="mt-auto">
                  <Link 
                    to="/experiences" 
                    className="inline-block bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all duration-300 w-full text-center"
                  >
                    {t('vaktrommet.questions.experiences.button')}
                  </Link>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl border-4 border-dashed border-orange-400 hover:border-orange-500 transition-all duration-300 flex flex-col">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{t('vaktrommet.questions.contact.title')}</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {t('vaktrommet.questions.contact.description')}
                  </p>
                </div>
                <div className="mt-auto">
                  <Link 
                    to="/documents" 
                    className="inline-block bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all duration-300 w-full text-center"
                  >
                    {t('vaktrommet.questions.contact.button')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
