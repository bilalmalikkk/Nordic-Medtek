import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import kHelsepersonell from '../assets/k-helsepersonell.png'
import bigChecklist from '../assets/big checklist.png'
import sensor from '../assets/sensor.png'
import receivesPing from '../assets/recieves ping.png'
import sensorsData from '../assets/sensors data.png'
import easeOfInstallation from '../assets/ease of installationm.png'
import notification from '../assets/notification.png'
import workLifeBalance from '../assets/what a work life balance waw.png'
import hospital from '../assets/hospital.png'
import calmShift from '../assets/calm shift.png'
import sensorDetect from '../assets/sensor detecty.png'
import stonks from '../assets/stonks.png'
import videoCall from '../assets/video call.png'

export default function HealthPersonnel() {
  const { t } = useTranslation()
  
  return (
    <div className="health-personnel-page min-h-screen w-full relative">
      {/* Alphabet Label */}
      <div className="absolute top-4 left-4 z-10">
        <div className="w-8 h-8 bg-orange-300 rounded-full flex items-center justify-center text-white font-bold text-lg">
          O
        </div>
      </div>
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="hero-section min-h-[calc(100vh-100px)] flex items-center w-full bg-gradient-to-br from-gray-50 to-white">
          <div className="w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    Enklere arbeidshverdag, tryggere pasienter.
                  </h1>
                  <div className="w-20 h-1 bg-teal-600 rounded-full"></div>
                </div>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Som sykepleier eller hjemmehjelper vet du at mye kan skje mellom besøkene. Våre sensorer oppdager fall og endringer i pust eller puls automatisk, og varsler deg eller vaktsentral automatisk. Du får beskjed når det er kritisk, slik at du kan være der pasienten trenger deg mest, uten ekstra rutiner.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link 
                    to="/guidance" 
                    className="inline-flex items-center justify-center bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-900 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Bestill gratis veiledning
                  </Link>
                  <Link 
                    to="/demo" 
                    className="inline-flex items-center justify-center bg-yellow-400 text-gray-800 px-8 py-4 rounded-xl font-semibold hover:bg-yellow-500 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Se hvordan det fungerer i praksis
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className="absolute -inset-4 bg-gradient-to-r from-teal-400 to-blue-500 rounded-2xl blur opacity-20"></div>
                  <div className="relative bg-white p-4 rounded-2xl shadow-2xl">
                    <img 
                      src={kHelsepersonell} 
                      alt="Helsepersonell som bruker teknologi for trygg omsorg" 
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="challenges-section py-12 w-full bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="w-full">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Hverdagen i hjemmetjenesten</h2>
              <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-xl text-gray-700 leading-relaxed">
                  Du har mange pasienter på listen og lite tid til hver enkelt. Mellom besøkene kan det skje fall, pustestans eller forvirring som ingen oppdager før det er for sent. Det gir stress, dårlig samvittighet og risiko for pasientene.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-lg">
                  <div className="absolute -inset-4 bg-gradient-to-r from-teal-400 to-blue-500 rounded-2xl blur opacity-20"></div>
                  <div className="relative bg-white p-4 rounded-2xl shadow-2xl">
                    <img 
                      src={bigChecklist} 
                      alt="Helsepersonell med utfordringer i hjemmetjenesten" 
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution in Practice Section */}
        <section className="solution-section py-20 w-full bg-white">
          <div className="w-full">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Løsningen i praksis</h2>
              <p className="text-xl text-gray-700">Slik støtter systemet deg i hverdagen:</p>
              <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full mt-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {/* Fall Sensors */}
              <div className="bg-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center">
                <div className="w-64 h-64 mb-6 flex items-center justify-center">
                  <img 
                    src={sensor} 
                    alt="Fallsensor som oppdager fall automatisk" 
                    className="w-full h-full object-contain rounded-xl"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Fallsensorer</h3>
                <p className="text-gray-700 leading-relaxed">
                  oppdager fall automatisk, også når brukeren ikke klarer å trykke på alarmknappen.
                </p>
              </div>

              {/* Health Sensors */}
              <div className="bg-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center">
                <div className="w-64 h-64 mb-6 flex items-center justify-center">
                  <img 
                    src={receivesPing} 
                    alt="Helsepersonell som mottar varsel på mobil" 
                    className="w-full h-full object-contain rounded-xl"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Helsesensorer</h3>
                <p className="text-gray-700 leading-relaxed">
                  følger med på pust, puls og aktivitet uten at brukeren merker det.
                </p>
              </div>

              {/* Central Overview */}
              <div className="bg-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center">
                <div className="w-64 h-64 mb-6 flex items-center justify-center">
                  <img 
                    src={sensorsData} 
                    alt="Sentral oversikt med sanntidsdata" 
                    className="w-full h-full object-contain rounded-xl"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Sentral oversikt</h3>
                <p className="text-gray-700 leading-relaxed">
                  kommunens vaktsentral får sanntidsvarsler og kan prioritere ressursene riktig.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits for You and Colleagues Section */}
        <section className="benefits-section py-20 w-full bg-gradient-to-br from-gray-50 to-white">
          <div className="w-full">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Fordeler for deg og kollegene dine</h2>
              <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="max-w-7xl mx-auto">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <ul className="space-y-6 text-lg text-gray-700 mb-8">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>Mindre bekymring for hva som skjer mellom besøkene.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>Varsler gjør det enklere å prioritere riktig når det haster.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>Pasientene får hjelp raskere – det gir trygghet både for deg og dem.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>Pårørende kan være mer rolige fordi de vet dere varsles automatisk.</span>
                  </li>
                </ul>
                
                <div className="bg-teal-50 p-6 rounded-xl border-l-4 border-teal-500">
                  <blockquote className="text-lg italic text-gray-700 mb-2">
                    "Vi slipper å lure på hva som skjer mellom besøkene. Nå får vi beskjed med en gang, og kan rykke ut raskt."
                  </blockquote>
                  <cite className="text-sm text-gray-600 font-medium">
                    - Sykepleier, pilotkommune
                  </cite>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What You Get Section */}
        <section className="what-you-get-section py-20 w-full bg-white">
          <div className="w-full">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Hva du får</h2>
              <p className="text-xl text-gray-700">Slik gjør vi hverdagen enklere:</p>
              <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full mt-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {/* Easy Installation */}
              <div className="bg-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center">
                <div className="w-64 h-64 mb-6 flex items-center justify-center">
                  <img 
                    src={easeOfInstallation} 
                    alt="Enkel installasjon av sensorer" 
                    className="w-full h-full object-contain rounded-xl"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enkel installasjon</h3>
                <p className="text-gray-700 leading-relaxed">
                  Våre sensorer er enkle å installere og krever minimalt med vedlikehold.
                </p>
              </div>

              {/* Direct Notification */}
              <div className="bg-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center">
                <div className="w-64 h-64 mb-6 flex items-center justify-center">
                  <img 
                    src={notification} 
                    alt="Direkte varsling på mobil" 
                    className="w-full h-full object-contain rounded-xl"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Direkte varsling</h3>
                <p className="text-gray-700 leading-relaxed">
                  Få umiddelbare varsler på din mobil eller nettbrett når noe kritisk skjer.
                </p>
              </div>

              {/* Better Work-Life Balance */}
              <div className="bg-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center">
                <div className="w-64 h-64 mb-6 flex items-center justify-center">
                  <img 
                    src={workLifeBalance} 
                    alt="Bedre arbeidsmiljø og balanse" 
                    className="w-full h-full object-contain rounded-xl"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Bedre arbeidsmiljø</h3>
                <p className="text-gray-700 leading-relaxed">
                  Reduser stress og få en bedre balanse mellom jobb og fritid med tryggere pasienter.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps Section */}
        <section className="next-steps-section py-20 w-full bg-gradient-to-br from-gray-50 to-white">
          <div className="w-full">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Hva er neste steg?</h2>
              <p className="text-xl text-gray-700">Vil du se hva dette kan bety for din kommune?</p>
              <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full mt-4"></div>
            </div>

            <div className="flex justify-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center max-w-4xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Se en kort demo som viser systemet i praksis.
                </h3>
                <Link 
                  to="/demo" 
                  className="inline-flex items-center justify-center bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-900 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Se demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
