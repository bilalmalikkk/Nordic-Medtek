import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import mdrLogo from '../assets/MDR-certified-Logo-1-1536x538.png'

export default function MDRInfo() {
  const { t } = useTranslation()
  const navigate = useNavigate()

  return (
    <div className="min-h-screen w-full bg-gray-50">
      <div className="w-full">
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

        {/* Hero Section with Two Column Layout */}
        <section className="py-12 w-full bg-white">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left Column - Text Content */}
              <div className="text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  {t('mdrInfo.title')}
                </h1>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t('mdrInfo.heroDescription')}
                </p>
              </div>
              
              {/* Right Column - MDR Logo */}
              <div className="flex justify-center lg:justify-end">
                <img 
                  src={mdrLogo} 
                  alt="EU MDR Certified" 
                  className="w-full max-w-lg h-auto rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* MDR Content Section */}
        <section className="py-12 w-full bg-white">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-left">
              <div className="prose prose-lg max-w-none text-left">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  MDR - Et kvalitetsstempel for medisinsk utstyr
                </h2>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  For produkter som skal brukes på sykehus eller andre livskritiske sammenhenger, er det avgjørende at de oppfyller kravene i EUs medisintekniske forordning (MDR 2017/745). Denne forordningen stiller strenge krav til sikkerhet, ytelse og dokumentasjon for alt medisinsk utstyr som skal CE-merkes og selges i EU.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Selv om de fleste av våre medisinske sensorer allerede har medisinsk godkjenning, er det kun en løsning som helhet som kan betraktes som medisinsk godkjent hvis <strong>alle komponenter</strong> (inkludert sensorer, programvare og tilhørende systemer) oppfyller MDR-kravene. Det er ikke nok at enkeltkomponenter er godkjent – hele kjeden må gjennomgå en konformitetsvurdering og dokumenteres i henhold til MDR tekniske og kliniske krav.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  NordicRVM sensorer for puls og pust
                </h3>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Våre sensorer er utviklet for å gi <strong>pålitelig puls- og respirasjonsdata</strong> i sanntid, med lavt strømforbruk og robust design for både hverdagsbruk og krevende miljøer. De gir brukere <strong>handlingsbar innsikt</strong> for velvære, restitusjon og ytelse — og er designet med samme ingeniørstandarder vi senere tar inn i MDR-sertifiseringsløpet. (MDR- prosessen er igangsatt.)
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Lovlig og korrekt bruksområde (før MDR-sertifisering)
                </h3>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Frem til CE-merking som medisinsk utstyr er fullført, markedsføres og brukes sensorene for velvære- og treningsformål (wellness/fitness). Det betyr at dataene kan benyttes til egenmonitorering, coaching, restitusjonsoppfølging og generell helseforbedring, men ikke som grunnlag for diagnose, prognose, behandling eller overvåking av sykdom.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Dette følger av MDRs definisjon av «medisinsk utstyr» og prinsippet om <strong>tiltenkt formål (intended purpose)</strong>: det er tiltenkt medisinsk formål som avgjør om produktet er et medisinsk utstyr, og som dermed utløser MDR-kravene.
                </p>

                <ul className="space-y-3 text-gray-700 mb-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    EUR-Lex: MDR (EU) 2017/745 konsolidert tekst
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    European Commission: Medical Device Regulation
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    EUMDR.com: MDR oversikt og veiledning
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

