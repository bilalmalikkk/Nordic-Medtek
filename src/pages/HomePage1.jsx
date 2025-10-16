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
      <section className="w-full relative overflow-hidden min-h-[600px] flex items-end" style={{backgroundImage: `url(${varmeHenderImage})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Content */}
        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 pb-12 pt-32">
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
              Vi leverer løsninger som gir <span className="text-blue-400">mennesker</span> trygghet, verdighet og bedre <span className="text-blue-400">livskvalitet</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white leading-relaxed">
              Teknologi som gjør det mulig for eldre å bo hjemme lenger,<br />
              samtidig som ressursene brukes smartere.
            </p>
          </div>
        </div>
      </section>

      {/* Vår løsning Section */}
      <section className="py-20 bg-white w-full">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Vår løsning</h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              <p>
                Vi leverer komplett trygghetsløsninger med et bredt utvalg sensorer i hjemmet, toveiskommunikasjon og varsling til mobiltelefon og vaktsentraler.
              </p>
              <p>
                Løsningen vår er modulær. Du kan starte enkelt og bygge ut senere hvis behovet endrer seg.
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
              <h3 className="text-xl font-bold text-gray-900 mb-4">Fallsensorer</h3>
              <p className="text-gray-700 leading-relaxed">
                Oppdager fall automatisk, også når brukeren ikke klarer å trykke på alarmknappen.
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
              <h3 className="text-xl font-bold text-gray-900 mb-4">Helsesensorer</h3>
              <p className="text-gray-700 leading-relaxed">
                Følger med på pust, puls og aktivitet uten at brukeren merker det.
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
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sentral oversikt</h3>
              <p className="text-gray-700 leading-relaxed">
                Kommunens vaktsentral får sanntidsovervåking og kan prioritere ressursene riktig.
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
              <h3 className="text-xl font-bold text-gray-900 mb-4">Direkte varsling</h3>
              <p className="text-gray-700 leading-relaxed">
                Få umiddelbare varsler på din mobil eller nettbrett når noe kritisk skjer.
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
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Privat</h3>
              <p className="text-gray-700 leading-relaxed mb-8 flex-grow">
                Våre unike sensorer oppdager uregelmessigheter knyttet til trygghet og sikkerhet hos dine eldre som bor hjemme, og varsler deg som pårørende eller helsetjenesten helt automatisk.
              </p>
              <Link 
                to="/private" 
                className="inline-flex items-center justify-center bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors"
              >
                Løsninger for pårørende
              </Link>
            </div>

            {/* Kommune Column */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Kommune</h3>
              <p className="text-gray-700 leading-relaxed mb-8 flex-grow">
                Våre løsninger innen velferdsteknologi øker tryggheten for hjemmeboende brukere, reduserer arbeidspresset på helsepersonell, og effektiviserer driften - alt i én fleksibel og skalerbar plattform.
              </p>
              <Link 
                to="/municipality" 
                className="inline-flex items-center justify-center bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors"
              >
                Løsninger for kommuner
              </Link>
            </div>

            {/* Bedrift Column */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Bedrift</h3>
              <p className="text-gray-700 leading-relaxed mb-8 flex-grow">
                Vi tilbyr våre løsninger til bedriftsmarkedet, enten du er forhandler som ønsker et bredere og pålitelig sortiment, du er leverandør av systemer for vaktrom og teknisk infrastruktur eller du driver private helse- og omsorgstilbud.
              </p>
              <Link 
                to="/company" 
                className="inline-flex items-center justify-center bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors"
              >
                Tilbud til bedrifter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hvorfor velge oss Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white w-full">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Hvorfor velge oss</h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: Easy to use */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Et av markedets enkleste system å bruke</h3>
              <p className="text-gray-600 text-sm mb-6">
                Kan installeres av alle. Oppe og gå på minutter!?
              </p>
              <Link 
                to="/guidance" 
                className="text-teal-600 hover:text-teal-700 font-semibold underline transition-colors text-sm"
              >
                Hvordan bruke løsningene
              </Link>
            </div>

            {/* Card 2: Efficient alarm center */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Effektiv og fleksibel alarmsentral</h3>
              <p className="text-gray-600 text-sm mb-6">
                egen drift / vaktselskap / alarmsentral med medisink oppfølging
              </p>
              <Link 
                to="/vaktrom-integration" 
                className="text-teal-600 hover:text-teal-700 font-semibold underline transition-colors text-sm"
              >
                Vår alarmsentralløsning
              </Link>
            </div>

            {/* Card 3: Easy to install */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Et av markedets enkleste system å installere</h3>
              <p className="text-gray-600 text-sm mb-6">
                Kan installeres av alle. Oppe og gå på minutter!?
              </p>
              <Link 
                to="/guidance" 
                className="text-teal-600 hover:text-teal-700 font-semibold underline transition-colors text-sm"
              >
                Hvordan installere løsningene
              </Link>
            </div>

            {/* Card 4: Best price */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mål om å være best på pris, med lavest totale kostnad</h3>
              <p className="text-gray-600 text-sm mb-6">
                Lei sensorer fra kr. 99,- i måneden.
              </p>
              <Link 
                to="/pricing" 
                className="text-teal-600 hover:text-teal-700 font-semibold underline transition-colors text-sm"
              >
                Se prisliste
              </Link>
            </div>

            {/* Card 5: Most integrated solution */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Et av markedets mest integrerte løsning</h3>
              <p className="text-gray-600 text-sm mb-6">
                Støtter standarder som FHIR og HL7.<br />
                Apne API-er til integrering tar sisnkbare
              </p>
              <Link 
                to="/it-welfare-technology" 
                className="text-teal-600 hover:text-teal-700 font-semibold underline transition-colors text-sm"
              >
                Våre integrasjoner og API-er
              </Link>
            </div>

            {/* Card 6: Data security */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Vi følger strenge krav til datasikkerhet og personvern</h3>
              <p className="text-gray-600 text-sm mb-6">
                All data lagres på på serve I Norge og krypteres både under overføring og lagring. GDPR og DPIA kompatibel behandling av personlige og sensitive data.
              </p>
              <Link 
                to="/privacy" 
                className="text-teal-600 hover:text-teal-700 font-semibold underline transition-colors text-sm"
              >
                Sikkerhetsinforamsjon
              </Link>
            </div>

            {/* Card 7: Most complete solution */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Et av markedets mest komplette løsning</h3>
              <p className="text-gray-600 text-sm mb-6">
                Et komplett system av sensorer, kommunikasjonsenheter og varslingssystem
              </p>
              <Link 
                to="/products" 
                className="text-teal-600 hover:text-teal-700 font-semibold underline transition-colors text-sm"
              >
                Se komplett oversikt
              </Link>
            </div>

            {/* Card 8: Made in Norway */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Utviklet og produsert i Norge</h3>
              <p className="text-gray-600 text-sm mb-6">
                Utviklet i tett samarbeid med helsetjenesten og brukerne.<br />
                Lokal produksjon som sikrer kvalitet og følger strenge miljøkrav og etisk arbeidspraksis.
              </p>
              <Link 
                to="/company" 
                className="text-teal-600 hover:text-teal-700 font-semibold underline transition-colors text-sm"
              >
                Om selskapet
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lurer du på noe Section */}
      <section className="py-20 bg-white w-full">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Lurer du på noe?</h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1: Ofte stilte spørsmål */}
            <div className="bg-white p-8 rounded-3xl border-4 border-dashed border-orange-400 flex flex-col items-center text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Ofte stilte spørsmål</h3>
              <p className="text-gray-600 text-sm mb-8 flex-grow">
                ....
              </p>
              <Link 
                to="/support" 
                className="inline-flex items-center justify-center bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors"
              >
                Ofte stilte spørsmål
              </Link>
            </div>

            {/* Card 2: Hvordan andre bruker løsningene */}
            <div className="bg-white p-8 rounded-3xl border-4 border-dashed border-orange-400 flex flex-col items-center text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hvordan andre bruker løsningene</h3>
              <p className="text-gray-600 text-sm mb-8 flex-grow">
                Erfaringer.
              </p>
              <Link 
                to="/experiences" 
                className="inline-flex items-center justify-center bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors"
              >
                Referanser Erfaringer
              </Link>
            </div>

            {/* Card 3: Kontakt oss */}
            <div className="bg-white p-8 rounded-3xl border-4 border-dashed border-orange-400 flex flex-col items-center text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Kontakt oss</h3>
              <p className="text-gray-600 text-sm mb-8 flex-grow">
                Vi er her for å svare på spørsmål og hjelpe deg med å velge rett løsning for dine kjære.
              </p>
              <Link 
                to="/documents" 
                className="inline-flex items-center justify-center bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors"
              >
                Kontakt oss i dag
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-200 py-8 w-full">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 text-center">
          <p className="text-gray-600">{t('home.footer')}</p>
        </div>
      </footer>
      </div>
    </div>
  )
}
