import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import sensors1Image from '../assets/sensors-1.png'
import presentation2Image from '../assets/presentation 2.png'
import sensorImage from '../assets/sensor.png'
import recievesPingImage from '../assets/recieves ping.png'
import sensorsDataImage from '../assets/sensors data.png'
import notificationImage from '../assets/notification.png'
import connectedSystemImage from '../assets/connected system.png'
import easeOfInstallationImage from '../assets/ease of installationm (1).png'
import sensorDetectyImage from '../assets/sensor detecty.png'
import stonksImage from '../assets/stonks.png'
import calmShiftImage from '../assets/calm shift (2).png'
import videoCallImage from '../assets/video call.png'

export default function Kommune1() {
  const { t } = useTranslation()
  const [showHealthButtons, setShowHealthButtons] = useState(false)
  const [showMoreTimeButtons, setShowMoreTimeButtons] = useState(false)
  const [showKnowledgeButtons, setShowKnowledgeButtons] = useState(false)
  const [showEconomicButtons, setShowEconomicButtons] = useState(false)
  const [showSecureDataButtons, setShowSecureDataButtons] = useState(false)
  const [showPartnershipButtons, setShowPartnershipButtons] = useState(false)
  const cardRef = useRef(null)
  const moreTimeCardRef = useRef(null)
  const knowledgeCardRef = useRef(null)
  const economicCardRef = useRef(null)
  const secureDataCardRef = useRef(null)
  const partnershipCardRef = useRef(null)

  // Close buttons when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setShowHealthButtons(false)
      }
      if (moreTimeCardRef.current && !moreTimeCardRef.current.contains(event.target)) {
        setShowMoreTimeButtons(false)
      }
      if (knowledgeCardRef.current && !knowledgeCardRef.current.contains(event.target)) {
        setShowKnowledgeButtons(false)
      }
      if (economicCardRef.current && !economicCardRef.current.contains(event.target)) {
        setShowEconomicButtons(false)
      }
      if (secureDataCardRef.current && !secureDataCardRef.current.contains(event.target)) {
        setShowSecureDataButtons(false)
      }
      if (partnershipCardRef.current && !partnershipCardRef.current.contains(event.target)) {
        setShowPartnershipButtons(false)
      }
    }

    if (showHealthButtons || showMoreTimeButtons || showKnowledgeButtons || showEconomicButtons || showSecureDataButtons || showPartnershipButtons) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showHealthButtons, showMoreTimeButtons, showKnowledgeButtons, showEconomicButtons, showSecureDataButtons, showPartnershipButtons])
  
  return (
    <div className="municipality-page min-h-screen w-full">
      <div className="w-full">
      {/* Top Menu Cards */}
      <section className="py-3 bg-gray-50 w-full border-b border-gray-200">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/products" className="bg-white border border-gray-200 px-6 py-2.5 rounded-full hover:bg-teal-50 hover:border-teal-500 transition-all duration-200 shadow-sm hover:shadow">
              <span className="text-sm font-medium text-gray-900">Produkter</span>
            </Link>
            <Link to="/pricing" className="bg-white border border-gray-200 px-6 py-2.5 rounded-full hover:bg-teal-50 hover:border-teal-500 transition-all duration-200 shadow-sm hover:shadow">
              <span className="text-sm font-medium text-gray-900">Priser og avtaler</span>
            </Link>
            <Link to="/it-welfare-technology" className="bg-white border border-gray-200 px-6 py-2.5 rounded-full hover:bg-teal-50 hover:border-teal-500 transition-all duration-200 shadow-sm hover:shadow">
              <span className="text-sm font-medium text-gray-900">IT-arkitektur</span>
            </Link>
            <Link to="/documents" className="bg-white border border-gray-200 px-6 py-2.5 rounded-full hover:bg-teal-50 hover:border-teal-500 transition-all duration-200 shadow-sm hover:shadow">
              <span className="text-sm font-medium text-gray-900">Dokumentasjon</span>
            </Link>
            <Link to="/experiences" className="bg-white border border-gray-200 px-6 py-2.5 rounded-full hover:bg-teal-50 hover:border-teal-500 transition-all duration-200 shadow-sm hover:shadow">
              <span className="text-sm font-medium text-gray-900">Referanser</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Hero Section - Updated for Kommune1 */}
      <section className="py-12 w-full relative overflow-hidden bg-white">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left Side - Main Content */}
            <div className="space-y-5">
              <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                En tryggere og mer bærekraftig omsorg i kommunen.
              </h1>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Vår velferds-teknologiske løsning reduserer arbeidspresset på helsepersonell, øker tryggheten for brukerne og effektiviserer driften - alt i én fleksibel og skalerbar plattform.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                Teknologi som gjør det mulig for eldre å bo hjemme lenger, samtidig som ressursene brukes smartere.
              </p>
              <p className="text-base sm:text-lg font-semibold text-teal-700">
                En investering i bærekraftig omsorg og smartere ressursbruk
              </p>
            </div>

            {/* Right Side - Benefits List */}
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl shadow-lg p-8 md:p-10 border border-teal-100 min-h-[320px] flex items-center">
              <ul className="space-y-5 w-full">
                <li className="flex items-start">
                  <div className="w-5 h-5 bg-teal-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                    Mindre stress og bekymring for hva som skjer mellom besøkene.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 bg-teal-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                    Bedre oversikt gjør det enklere å prioritere riktig.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 bg-teal-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                    Økt trygghet både for ansatte og pårørende.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 bg-teal-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                    Mulighet til å jobbe mer forebyggende i stedet for å håndtere kriser.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Options Section */}
      <section className="py-16 w-full bg-white">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Klar til å se hvordan våre løsninger kan fungere i din kommune?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Demo Card */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 text-center hover:border-teal-500 hover:shadow-xl transition-all duration-300">
              <p className="text-base text-gray-700 leading-relaxed mb-8 min-h-[80px] flex items-center justify-center">
                Vi tilbyr demoen tilpasset hjemmetjenesten.
              </p>
              <Link 
                to="/demo"
                className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Bestill demo
              </Link>
            </div>

            {/* Data Presentation Card */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 text-center hover:border-teal-500 hover:shadow-xl transition-all duration-300">
              <p className="text-base text-gray-700 leading-relaxed mb-8 min-h-[80px] flex items-center justify-center">
                Vi tilbyr korte digitale møter for ledere med gjennomgang av gevinstene.
              </p>
              <Link 
                to="/guidance"
                className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Bestill en datapresentasjon
              </Link>
            </div>

            {/* Pilot Project Card */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 text-center hover:border-teal-500 hover:shadow-xl transition-all duration-300">
              <p className="text-base text-gray-700 leading-relaxed mb-8 min-h-[80px] flex items-center justify-center">
                Vi kan starte med et pilotprosjekt for en liten pasientgruppe.
              </p>
              <Link 
                to="/documents"
                className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Kontakt oss for mer informasjon
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Explanation Section */}
      <section className="py-20 w-full bg-gray-50">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Løsningen kort forklart
            </h2>
            <p className="text-lg text-gray-600">
              Slik støtter systemet helsetjenesten i hverdagen:
            </p>
          </div>
          
          {/* Top Row - 2 large cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-8 mt-12">
            {/* Smart Sensors Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex justify-center mb-6">
                <img 
                  src={sensors1Image} 
                  alt="Smarte sensorer" 
                  className="w-full h-64 object-contain rounded-xl"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                Smarte sensorer oppdager problemer i sanntid
              </h3>
              <p className="text-base text-gray-600 leading-relaxed text-center">
                Bevegelse-, fall- og helsesensorer overvåker hjemmemiljøet i stillhet. De gjenkjenner uregelmessigheter som fall, mangel på bevegelse eller unormale vitale tegn, uten behov for manuelle innsjekklinger.
              </p>
            </div>

            {/* Control Room Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex justify-center mb-6">
                <img 
                  src={presentation2Image} 
                  alt="Kontrollrommet" 
                  className="w-full h-64 object-contain rounded-xl"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                Kontrollrommet gir full oversikt
              </h3>
              <p className="text-base text-gray-600 leading-relaxed text-center">
                Alle hendelser samles i Vaktrommet, et digitalt dashbord som gir de ansatte en klar oversikt. Hvis noe skjer, varsles riktig person umiddelbart, noe som sikrer rask og målrettet respons.
              </p>
            </div>
          </div>

          {/* Bottom Row - 4 small cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Fall Sensors */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center">
              <div className="flex justify-center mb-4">
                <img 
                  src={sensorImage} 
                  alt="Fallsensorer" 
                  className="w-32 h-32 object-contain"
                />
              </div>
              <h4 className="text-base font-bold text-gray-900 mb-2">
                Fallsensorer
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                oppdager fall automatisk, også når ingen klarer å trykke på alarmknappen.
              </p>
            </div>

            {/* Health Sensors */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center">
              <div className="flex justify-center mb-4">
                <img 
                  src={recievesPingImage} 
                  alt="Helsesensorer" 
                  className="w-32 h-32 object-contain"
                />
              </div>
              <h4 className="text-base font-bold text-gray-900 mb-2">
                Helsesensorer
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                følger med på puls, puls og aktivitet uten at brukeren merker det.
              </p>
            </div>

            {/* Central Overview */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center">
              <div className="flex justify-center mb-4">
                <img 
                  src={sensorsDataImage} 
                  alt="Sentral oversikt" 
                  className="w-32 h-32 object-contain"
                />
              </div>
              <h4 className="text-base font-bold text-gray-900 mb-2">
                Sentral oversikt
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Kommunen <span className="underline">varselstyrer</span> for samordisurser og kan prioritere ressurser riktig.
              </p>
            </div>

            {/* Direct Notification */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center">
              <div className="flex justify-center mb-4">
                <img 
                  src={notificationImage} 
                  alt="Direkte varsel" 
                  className="w-32 h-32 object-contain"
                />
              </div>
              <h4 className="text-base font-bold text-gray-900 mb-2">
                Direkte varsel
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Varsler til helsepersonellets vakttelefoner er tydelige og enkle å forstå.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Solve This Section */}
      <section className="py-20 w-full bg-white">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hvordan løser vi dette?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            {/* Seamless Integration Card */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100">
              <div className="flex justify-center mb-6">
                <img 
                  src={connectedSystemImage} 
                  alt="Sømløs integrasjon" 
                  className="w-full max-w-md h-64 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Sømløs integrasjon med eksisterende systemer
              </h3>
              <p className="text-base text-gray-700 leading-relaxed text-center mb-4">
                Løsningen kobles til API og etablerte kommunale arbeidsflytter. Dette betyr at dataflytter er sikker, at ansatte ikke trenger å lære nye verktøy.
              </p>
              <div className="text-center">
                <Link 
                  to="/it-welfare-technology"
                  className="inline-flex items-center text-teal-600 hover:text-teal-700 font-semibold transition-colors group"
                >
                  IT-arkitektur
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Easy Installation Card */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100">
              <div className="flex justify-center mb-6">
                <img 
                  src={easeOfInstallationImage} 
                  alt="Sensorene installeres enkelt" 
                  className="w-full max-w-md h-64 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Sensorene installeres enkelt
              </h3>
              <p className="text-base text-gray-700 leading-relaxed text-center mb-4">
                Sensorene leverer ferdigm til å montere rask. De installeres enkelt og krever ikke sikve fra deg.
              </p>
              <div className="text-center">
                <Link 
                  to="/products"
                  className="inline-flex items-center text-teal-600 hover:text-teal-700 font-semibold transition-colors group"
                >
                  Produkter
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies and References Section */}
      <section className="py-20 w-full bg-gradient-to-br from-gray-50 to-white">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Case og referanser
            </h2>
            <p className="text-lg text-red-600 font-medium mb-6">
              Vår erfaring fra utførte tester og pilioter, samt veileder fra helsedirektoratet (2025):
            </p>
          </div>

          {/* Benefits List */}
          <div className="mb-10">
            <ul className="space-y-3 max-w-3xl mx-auto">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-base text-gray-800 font-semibold">
                  Færre akutte sykehusinnleggelser
                </p>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-base text-gray-800 font-semibold">
                  Økt trygghet for ansatte og pårørende
                </p>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-base text-gray-800 font-semibold">
                  Bedre ressursutnyttelse - mer tid friggjort til planlagte besøk
                </p>
              </li>
            </ul>
          </div>

          {/* Pilot Municipality Cards */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <Link 
              to="/experiences"
              className="bg-white border-2 border-gray-300 px-8 py-4 rounded-xl hover:border-teal-500 hover:shadow-lg transition-all duration-300 font-semibold text-gray-900"
            >
              Pilotkommune X
            </Link>
            <Link 
              to="/experiences"
              className="bg-white border-2 border-gray-300 px-8 py-4 rounded-xl hover:border-teal-500 hover:shadow-lg transition-all duration-300 font-semibold text-gray-900"
            >
              Hjemmetjeneste Y
            </Link>
          </div>

          {/* Testimonials */}
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-teal-500">
              <p className="text-gray-700 italic mb-3 leading-relaxed">
                "Vi får rask beskjed når noe skjer, og kan handle med en gang. Det gir trygghet både for pasientene og for oss som ansatte."
              </p>
              <p className="text-sm text-gray-600 font-medium">
                – Avdelingssykepleier, pilotkommune
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-teal-500">
              <p className="text-gray-700 italic mb-3 leading-relaxed">
                "Vi slipper å løpe på lav som skjer mellom besøkene. Nå får vi beskjed med en gang, og kan rekke ut rask."
              </p>
              <p className="text-sm text-gray-600 font-medium">
                – Sykepleier, pilotkommune
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Benefits Section */}
      <section className="py-20 w-full bg-white">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Samfunnsgevinsten
            </h2>
            <p className="text-lg text-gray-700">
              Vår løsning gir målbare resultater:
            </p>
          </div>
          
          {/* Four benefit cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Fewer Hospital Admissions */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100">
              <div className="flex justify-center mb-6">
                <img 
                  src={sensorDetectyImage} 
                  alt="Færre sykehusinnleggelser" 
                  className="w-full max-w-xs h-48 object-contain rounded-xl"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                Færre sykehusinnleggelser
              </h3>
              <p className="text-base text-gray-700 leading-relaxed text-center">
                Sensoren oppdager kritiske hendelser tidlig.
              </p>
            </div>

            {/* Lower Costs */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100">
              <div className="flex justify-center mb-6">
                <img 
                  src={stonksImage} 
                  alt="Lavere kostnader" 
                  className="w-full max-w-xs h-48 object-contain rounded-xl"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                Lavere kostnader
              </h3>
              <p className="text-base text-gray-700 leading-relaxed text-center">
                Kommunen sparer betydelige summer på forebygging.
              </p>
            </div>

            {/* Better Working Conditions */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100">
              <div className="flex justify-center mb-6">
                <img 
                  src={calmShiftImage} 
                  alt="Bedre arbeidsvilkår" 
                  className="w-full max-w-xs h-48 object-contain rounded-xl"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                Bedre arbeidsvilkår
              </h3>
              <p className="text-base text-gray-700 leading-relaxed text-center">
                Ansatte får en mer forutsigbar arbeidshverdag.
              </p>
            </div>

            {/* Safety and Dignity */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100">
              <div className="flex justify-center mb-6">
                <img 
                  src={videoCallImage} 
                  alt="Trygghet og verdighet" 
                  className="w-full max-w-xs h-48 object-contain rounded-xl"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                Trygghet og verdighet
              </h3>
              <p className="text-base text-gray-700 leading-relaxed text-center">
                eldre får bo hjemme lenger, med økt sikkerhet.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <p className="text-base text-gray-700 mb-6">
              Vi tilbyr korte digitale møter for ledere med gjennomgang av gevinstene.
            </p>
            <Link 
              to="/guidance"
              className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Bestill en lederpresentasjon
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Lurer du på noe? */}
      <section className="py-20 w-full bg-white">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lurer du på noe?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* FAQ Card */}
            <div className="bg-white border-2 border-dashed border-orange-300 rounded-2xl p-8 text-center hover:border-orange-400 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Ofte stilte spørsmål
              </h3>
              <p className="text-sm text-gray-600 mb-8 min-h-[60px]">
                {/* Spacer */}
              </p>
              <Link 
                to="/support"
                className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Ofte stilte spørsmål
              </Link>
            </div>

            {/* References Card */}
            <div className="bg-white border-2 border-dashed border-orange-300 rounded-2xl p-8 text-center hover:border-orange-400 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Hvordan andre bruker løsningene
              </h3>
              <p className="text-sm text-gray-600 mb-8 min-h-[60px]">
                Erfaringer
              </p>
              <Link 
                to="/experiences"
                className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Referanser/Erfaringer
              </Link>
            </div>

            {/* Contact Card */}
            <div className="bg-white border-2 border-dashed border-orange-300 rounded-2xl p-8 text-center hover:border-orange-400 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Kontakt oss
              </h3>
              <p className="text-sm text-gray-600 mb-8 min-h-[60px]">
                Vi er her for å svare på spørsmål og følge deg med å velge rett løsning for dine kjære
              </p>
              <Link 
                to="/guidance"
                className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Kontakt oss i dag
              </Link>
            </div>
          </div>
        </div>
      </section>

      </div>
    </div>
  )
}
