import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import landingPage from '../assets/Landingpage.png'
import alarm from '../assets/alarm.png'
import blodtrykk from '../assets/blodtrykk.png'
import fallsensor from '../assets/fallsensor.png'
import mann from '../assets/mann.png'
import hus from '../assets/hus.png'
import blokker from '../assets/blokker.png'
import zeroKr from '../assets/0kr.png'
import phoneLowres from '../assets/Phone_lowres.png'

export default function PrivatePage1() {
  const { t } = useTranslation()
  
  return (
    <div className="private-page min-h-screen w-full">
      <div className="w-full">
      {/* Top Menu Cards */}
      <section className="py-4 bg-gray-50 w-full border-b border-gray-200">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/fallalarm" className="bg-white border border-gray-200 px-6 py-2.5 rounded-full hover:bg-teal-50 hover:border-teal-500 transition-all duration-200 shadow-sm hover:shadow">
              <span className="text-sm font-medium text-gray-900">Fallsensorer</span>
            </Link>
            <Link to="/alarm-buttons" className="bg-white border border-gray-200 px-6 py-2.5 rounded-full hover:bg-teal-50 hover:border-teal-500 transition-all duration-200 shadow-sm hover:shadow">
              <span className="text-sm font-medium text-gray-900">Alarmknapper</span>
            </Link>
            <Link to="/medical-followup1" className="bg-white border border-gray-200 px-6 py-2.5 rounded-full hover:bg-teal-50 hover:border-teal-500 transition-all duration-200 shadow-sm hover:shadow">
              <span className="text-sm font-medium text-gray-900">Medisinsk oppfølging</span>
            </Link>
            <Link to="/easeblink1" className="bg-white border border-gray-200 px-6 py-2.5 rounded-full hover:bg-teal-50 hover:border-teal-500 transition-all duration-200 shadow-sm hover:shadow">
              <span className="text-sm font-medium text-gray-900">Videokontakt</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-12 md:py-16 w-full relative overflow-hidden bg-white">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Ta vare på dine nærmeste hjemme - trygt og enkelt
              </h1>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Er du pårørende til noen som trenger oppfølging i hjemmet og skulle ønske at dine kjære ble ivaretatt på en verdig måte?
                </p>
                <p>
                  Våre unike sensorer oppdager uregelmessigheter knyttet til trygghet og sikkerhet og varsler deg eller helsetjenesten automatisk.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-sm lg:max-w-md xl:max-w-lg">
                <img 
                  src={landingPage} 
                  alt="Eldre par som tar vare på hverandre" 
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Våre løsninger Section */}
      <section className="py-20 w-full bg-white">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Våre løsninger
            </h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16 px-4 sm:px-6 lg:px-8 rounded-lg">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900">
                Bekymret for dine kjære?
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* For at de ikke får sagt fra */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 flex flex-col">
              <div className="text-center flex-1 flex flex-col">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <img src={alarm} alt="Alarm og kommunikasjon" className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  For at de ikke får sagt fra?
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed flex-1">
                  Løsninger for alarm og kommunikasjon inkluderer varsling ved plutselig sykdom, tovejs kommunikasjon med din kjære, funksjoner som gir deg trygghet når kjære eller hjemme eller ute.
                </p>
              </div>
              <div className="text-center mt-auto">
                <Link 
                  to="/alarm-communication1" 
                  className="group inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Alarmknapper og rask varsling
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* For fall i hjemmet */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 flex flex-col">
              <div className="text-center flex-1 flex flex-col">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <img src={fallsensor} alt="Trygghet" className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  For fall i hjemmet?
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed flex-1">
                  Bekymring for fall på badet, i trappen eller på soverommet? Våre diskrete fallsensorer oppdager automatisk fall og sender umiddelbar varsling til deg eller helsepersonell.
                </p>
              </div>
              <div className="text-center mt-auto">
                <Link 
                  to="/safety-solutions1" 
                  className="group inline-flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Gå til trygghet og fallsikring
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* For akutt sykdom */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 flex flex-col">
              <div className="text-center flex-1 flex flex-col">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <img src={blodtrykk} alt="Medisinsk oppfølging" className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  For akutt sykdom?
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed flex-1">
                  Overvåkning for hjerteproblemer, diabetes og regelmessige målinger av pust, blodtrykk, spm, blodskker, kroppstemperatur og oksygenmetning. Automatisk varsling ved avvik.
                </p>
              </div>
              <div className="text-center mt-auto">
                <Link 
                  to="/medical-followup1" 
                  className="group inline-flex items-center justify-center bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Medisinsk oppfølging
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* For isolasjon */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 flex flex-col">
              <div className="text-center flex-1 flex flex-col">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <img src={phoneLowres} alt="Video contact" className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  For isolasjon?
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed flex-1">
                  Vår videoløsning easeBlink mulligør kontakt med familie og venner, se ansiktene deres og høre stemmene deres i samtid. Med EaseBlink kan dere dele bilder med minner, feiringer og hverdagsøyeblikk.
                </p>
              </div>
              <div className="text-center mt-auto">
                <Link 
                  to="/easeblink1" 
                  className="group inline-flex items-center justify-center bg-gray-800 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-900 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Videokontakt og bildedeling
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Produkter og priser Section */}
      <section className="py-20 w-full bg-white border-t border-gray-200">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="flex-1">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Produkter og priser
              </h2>
              <div className="space-y-2 text-lg text-gray-700">
                <p>Vi leverer løsninger fra kr 99 per måned.</p>
                <p>Se oversikt over alle våre produker og priser og bestill i dag</p>
              </div>
            </div>
            <div>
              <Link 
                to="/products" 
                className="inline-block bg-gray-800 text-white px-12 py-4 rounded-lg font-semibold hover:bg-gray-900 transition-all duration-300 text-lg"
              >
                Bestill
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hvorfor velge oss Section */}
      <section className="py-20 w-full flex justify-center">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-teal-50 py-20 rounded-lg">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Hvorfor velge oss?
            </h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Enkel installasjon */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <img src={mann} alt="Enkel installasjon" className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Enkel installasjon</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Du trenger ikke være teknisk. Har du klart å henge opp et bilde, klarer du å sette opp dette.
                  </p>
                </div>
              </div>
            </div>

            {/* Sikkerhet */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <img src={hus} alt="Sikkerhet" className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Sikkerhet</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Våre løsninger er laget for norske og internasjonale regler og følger strenge krav til personvern og datasikkerhet.
                  </p>
                </div>
              </div>
            </div>

            {/* Modulær løsning */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <img src={blokker} alt="Modulær løsning" className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Modulær løsning</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Du kan starte enkelt og bygge ut senere hvis behovet endrer seg.
                  </p>
                </div>
              </div>
            </div>

            {/* Ingen skjulte kostnader */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <img src={zeroKr} alt="Ingen skjulte kostnader" className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Ingen skjulte kostnader</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Alt er uten binding og skjulte oppstartskostnader.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lurer du på noe Section */}
      <section className="py-20 w-full bg-white">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Lurer du på noe?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Ofte stilte spørsmål */}
            <div className="bg-white p-8 rounded-3xl border-4 border-dashed border-orange-400 hover:border-orange-500 transition-all duration-300 flex flex-col">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Ofte stilte spørsmål</h3>
                <p className="text-gray-700 leading-relaxed mb-6">.....</p>
              </div>
              <div className="mt-auto">
                <Link 
                  to="/faq"
                  state={{ from: '/private' }}
                  className="inline-block bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all duration-300 w-full text-center"
                >
                  Ofte stilte spørsmål
                </Link>
              </div>
            </div>

            {/* Hvordan andre bruker løsningene */}
            <div className="bg-white p-8 rounded-3xl border-4 border-dashed border-orange-400 hover:border-orange-500 transition-all duration-300 flex flex-col">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hvordan andre bruker løsningene</h3>
                <p className="text-gray-700 leading-relaxed mb-6">Erferinger..</p>
              </div>
              <div className="mt-auto">
                <Link 
                  to="/experiences" 
                  className="inline-block bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all duration-300 w-full text-center"
                >
                  Referanser Erfaringer
                </Link>
              </div>
            </div>

            {/* Kontakt oss */}
            <div className="bg-white p-8 rounded-3xl border-4 border-dashed border-orange-400 hover:border-orange-500 transition-all duration-300 flex flex-col">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Kontakt oss</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Vi er her for å svare på spørsmål og hjelpe deg med å velge rett løsning for dine kjære.
                </p>
              </div>
              <div className="mt-auto">
                <Link 
                  to="/documents" 
                  className="inline-block bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all duration-300 w-full text-center"
                >
                  Kontakt oss i dag
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

