import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import videoCallImage from '../assets/video call.png'
import easeBlinkScreen from '../assets/image (13).png'
import phoneLowres from '../assets/Phone_lowres.png'

export default function EaseBlink1() {
  const { t } = useTranslation()
  
  return (
    <div className="easeblink1-page min-h-screen w-full">
      <div className="w-full">
        {/* Back Button */}
        <div className="w-full bg-gray-50 border-b border-gray-200">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link 
              to="/private"
              className="inline-flex items-center text-gray-700 hover:text-teal-600 transition-colors group"
            >
              <svg 
                className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="font-medium">Tilbake</span>
            </Link>
          </div>
        </div>

        {/* Top Menu Cards */}
        <section className="py-4 bg-gray-50 w-full border-b border-gray-200">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-3">
              <a href="#what-is" className="bg-white border border-gray-200 px-6 py-2.5 rounded-full hover:bg-teal-50 hover:border-teal-500 transition-all duration-200 shadow-sm hover:shadow">
                <span className="text-sm font-medium text-gray-900">Hva er easeBlink</span>
              </a>
              <a href="#why" className="bg-white border border-gray-200 px-6 py-2.5 rounded-full hover:bg-teal-50 hover:border-teal-500 transition-all duration-200 shadow-sm hover:shadow">
                <span className="text-sm font-medium text-gray-900">Hvorfor easeBlink</span>
              </a>
              <a href="#how-to-get" className="bg-white border border-gray-200 px-6 py-2.5 rounded-full hover:bg-teal-50 hover:border-teal-500 transition-all duration-200 shadow-sm hover:shadow">
                <span className="text-sm font-medium text-gray-900">Hvordan få easeBlink</span>
              </a>
              <Link to="/pricing" className="bg-white border border-gray-200 px-6 py-2.5 rounded-full hover:bg-teal-50 hover:border-teal-500 transition-all duration-200 shadow-sm hover:shadow">
                <span className="text-sm font-medium text-gray-900">Pris</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section id="what-is" className="py-16 md:py-24 w-full bg-white">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Kontakt med familien
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                EaseBlink muligjør kontakt med familie og venner med video, og dere kan dele bilder med minner, feiringer og hverdagsøyeblikk.
              </p>
            </div>
          </div>
        </section>

        {/* Avoid Isolation Section */}
        <section className="py-16 w-full bg-gray-50">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Unngå isolasjon
              </h2>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Mange eldre, spesielt de med begrenset mobilitet, opplever isolasjon.
                </p>
                
                <p>
                  Vår videoløsning easeBlink lar dem opprettholde kontakt med familie og venner, se ansiktene deres og høre stemmene deres i sanntid. Dette skaper en følelse av tilstedeværelse og fellesskap som tradisjonelle telefoner og tekstmeldinger ikke kan erstatte.
                </p>
                
                <p>
                  EaseBlink har også bildedeling i form av en digital karusell gjør det mulig å dele minner, feiringer og hverdagsøyeblikk. Dette bringer glede og gir samtaleemner.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How easeBlink Works Section */}
        <section className="py-16 w-full bg-white">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              {/* Left side - Text content */}
              <div className="lg:w-1/2 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Hvordan virker easeBlink?
                </h2>
                
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    En skjerm med store brukervennlige knapper som gjør at mor eller far kan motta bilder og meldinger fra familien, og enkelt ha videosamtaler.
                  </p>
                  
                  <p>
                    Løsningen har et svært enkelt brukergrensesnitt, noe som gjør den tilgjengelig for eldre med varierende grader av kognitiv svekelse.
                  </p>
                </div>
              </div>
              
              {/* Right side - Images */}
              <div className="lg:w-1/2 flex justify-center lg:justify-end">
                <div className="relative pr-16 md:pr-20">
                  {/* Larger screen - positioned in background, higher */}
                  <img 
                    src={easeBlinkScreen} 
                    alt="EaseBlink screen interface showing contacts and photo carousel" 
                    className="w-full max-w-sm h-auto rounded-lg shadow-xl"
                  />
                  
                  {/* Phone - overlapping on the right, positioned lower */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 mt-8 z-10">
                    <img 
                      src={phoneLowres} 
                      alt="Phone showing video call interface" 
                      className="w-32 md:w-40 h-auto drop-shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 w-full bg-gray-50">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Hva koster det?
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Vi tilbyr både kjøp og leie ....
              </p>
              
              <Link 
                to="/pricing"
                className="inline-block bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Bestill leie eller kjøp
              </Link>
            </div>
          </div>
        </section>

        {/* Combine Solutions Section */}
        <section className="py-16 w-full bg-blue-50">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Kombiner med flere av våre løsninger
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Safety and Fall Prevention Card */}
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
                <p className="text-sm text-gray-700 leading-relaxed mb-6 flex-grow">
                  Bekymring for fall i ditt hjem. Trådløse eller trådbaserte fallsensorer eller trykksensorer kombinert registrerer fravær. Når sensorer registrerer varslig bli du varslet på din mobilapp.
                </p>
                <Link 
                  to="/safety-solutions1"
                  className="inline-block w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 text-center mt-auto"
                >
                  Se til trygghet og fallsikring
                </Link>
              </div>

              {/* Alarm Buttons Card */}
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
                <p className="text-sm text-gray-700 leading-relaxed mb-6 flex-grow">
                  I pludskelige for alarm eller kommunikasjon (inkluderer varsling ved plutselig sykdom, tovels kommunikasjon med dine kjære, sos knapp på natt trygghet når hjemme eller ute med Laserens Alarm sammen med GPSsite
                </p>
                <Link 
                  to="/alarm-communication1"
                  className="inline-block w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 text-center mt-auto"
                >
                  Alarmknapper og rask varsling
                </Link>
              </div>

              {/* Medical Follow-up Card */}
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
                <p className="text-sm text-gray-700 leading-relaxed mb-6 flex-grow">
                  Overvåkning for hjerteproblemer, diabetes og regelmessige målinger av pust, blodtrykk, oksygenmetning. Kombinerte løsning for sikkerhet med automatisk varling til deg som pårørende. Dette kan brukes alene eller sammen med andre løsninger.
                </p>
                <Link 
                  to="/medical-followup1"
                  className="inline-block w-full bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 text-center mt-auto"
                >
                  Medisinsk oppfølging
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Questions Section */}
        <section className="py-16 w-full bg-white">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Lurer du på noe?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* FAQ Card */}
              <div className="bg-white p-8 rounded-3xl border-4 border-dashed border-orange-400 hover:border-orange-500 transition-all duration-300 flex flex-col">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Ofte stilte spørsmål</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">.....</p>
                </div>
                <div className="mt-auto">
                  <Link 
                    to="/faq"
                    state={{ from: '/easeblink1' }}
                    className="inline-block bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all duration-300 w-full text-center"
                  >
                    Ofte stilte spørsmål
                  </Link>
                </div>
              </div>

              {/* Experiences Card */}
              <div className="bg-white p-8 rounded-3xl border-4 border-dashed border-orange-400 hover:border-orange-500 transition-all duration-300 flex flex-col">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Hvordan andre bruker løsningene</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">Erfaringer..</p>
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

              {/* Contact Card */}
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
