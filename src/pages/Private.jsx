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

export default function Private() {
  const { t } = useTranslation()
  
  return (
    <div className="private-page min-h-screen w-full">
      {/* Hero Section */}
      <section className="hero-section bg-white h-[calc(100vh-100px)] flex items-center w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 leading-tight mb-6">
                Ta vare på dine nærmeste - trygt, enkelt, og hjemme
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                For deg som pårørende som trenger oppfølging av dine kjære hjemme. 
                Våre unike sensorer oppdager automatisk uregelmessigheter knyttet til 
                trygghet og sikkerhet, slik at du kan få varsling når det trengs.
              </p>
              <Link 
                to="/guidance" 
                className="inline-block bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-slate-800 transition-colors"
              >
                Bestill gratis veiledning
              </Link>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-lg">
                <img 
                  src={landingPage} 
                  alt="Eldre par som tar vare på hverandre" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Concerns Section */}
      <section className="concerns-section bg-slate-100 py-16 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">
            Bekymret for dine kjære?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Alarm and Communication */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-center mb-6">
                <img src={alarm} alt="Alarm og kommunikasjon" className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  For at de ikke får sagt fra?
                </h3>
                <p className="text-slate-600 mb-6">
                  Løsninger for alarm og kommunikasjon inkluderer varsling ved plutselig sykdom, 
                  toveis kommunikasjon med video, og geofence-funksjoner som gir deg trygghet 
                  når dine kjære er hjemme eller ute.
                </p>
                <Link 
                  to="/products" 
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Løsninger for alarm og kommunikasjon
                </Link>
              </div>
            </div>

            {/* Medical Follow-up */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-center mb-6">
                <img src={blodtrykk} alt="Medisinsk oppfølging" className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  For akutt sykdom?
                </h3>
                <p className="text-slate-600 mb-6">
                  Overvåkning for hjerteproblemer, diabetes og regelmessige målinger av 
                  pust, blodtrykk, søvn, blodsukker, kroppstemperatur og oksygenmetning. 
                  Automatisk varsling ved avvik.
                </p>
                <Link 
                  to="/products" 
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Løsninger for medisinsk oppfølging
                </Link>
              </div>
            </div>

            {/* Safety */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-center mb-6">
                <img src={fallsensor} alt="Trygghet" className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  For fall i hjemmet?
                </h3>
                <p className="text-slate-600 mb-6">
                  Bekymring for fall på badet, i trappen eller på soverommet? Våre diskrete 
                  fallsensorer oppdager automatisk fall og sender umiddelbar varsling til 
                  deg eller helsepersonell.
                </p>
                <Link 
                  to="/products" 
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Løsninger for trygghet
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guidance Section */}
      <section className="guidance-section bg-white py-16 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="border-2 border-dashed border-orange-400 bg-orange-50 p-8 rounded-lg text-center">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                Ikke sikker på hva dere trenger?
              </h2>
              <p className="text-slate-600 mb-8 text-lg">
                Fortell oss om hverdagen hjemme med dine kjære, så får du et uforpliktende 
                forslag til løsninger som passer akkurat for dere.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/guidance" 
                  className="inline-block bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-slate-800 transition-colors"
                >
                  Bestill gratis veiledning
                </Link>
                <Link 
                  to="/experiences" 
                  className="inline-block bg-yellow-400 text-slate-800 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
                >
                  Hvordan andre bruker det
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section bg-green-50 py-16 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">
            Hvorfor velge oss?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Easy Setup - Image Left, Text Right */}
            <div className="flex items-center gap-6">
              <div className="flex-shrink-0">
                <img src={mann} alt="Enkel installasjon" className="w-16 h-16" />
              </div>
              <div className="flex-1">
                <p className="text-slate-700 text-base leading-relaxed">
                  Du trenger ikke være teknisk. Har du klart å henge opp et bilde, 
                  klarer du å sette opp dette.
                </p>
              </div>
            </div>

            {/* Security - Image Left, Text Right */}
            <div className="flex items-center gap-6">
              <div className="flex-shrink-0">
                <img src={hus} alt="Sikkerhet" className="w-16 h-16" />
              </div>
              <div className="flex-1">
                <p className="text-slate-700 text-base leading-relaxed">
                  Våre løsninger er laget for norske hjem og følger strenge krav til 
                  personvern og datasikkerhet.
                </p>
              </div>
            </div>

            {/* Modular - Image Left, Text Right */}
            <div className="flex items-center gap-6">
              <div className="flex-shrink-0">
                <img src={blokker} alt="Modulær løsning" className="w-16 h-16" />
              </div>
              <div className="flex-1">
                <p className="text-slate-700 text-base leading-relaxed">
                  Du kan starte enkelt og bygge ut senere hvis behovet endrer seg.
                </p>
              </div>
            </div>

            {/* No Hidden Costs - Image Left, Text Right */}
            <div className="flex items-center gap-6">
              <div className="flex-shrink-0">
                <img src={zeroKr} alt="Ingen skjulte kostnader" className="w-16 h-16" />
              </div>
              <div className="flex-1">
                <p className="text-slate-700 text-base leading-relaxed">
                  Alt er uten binding og skjulte oppstartskostnader.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section bg-white py-16 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">
            Ofte stilte spørsmål
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="border-b border-slate-200 pb-6">
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Er det vanskelig å installere?
              </h3>
              <p className="text-slate-600">
                Nei, det er like enkelt som å henge opp et bilde. Vi gir deg all nødvendig 
                veiledning og støtte under installasjonen.
              </p>
            </div>
            <div className="border-b border-slate-200 pb-6">
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Hva koster det?
              </h3>
              <p className="text-slate-600">
                Løsninger starter fra ca. 299 kroner per måned, avhengig av hvilke 
                sensorer og tjenester du velger.
              </p>
            </div>
            <div className="border-b border-slate-200 pb-6">
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Må vi ha internett?
              </h3>
              <p className="text-slate-600">
                Ja, internett er nødvendig for at systemene skal kunne sende varsler og 
                dele data. Vi kan hjelpe med forslag hvis internett ikke er tilgjengelig.
              </p>
            </div>
            <div className="pb-6">
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Er dataene trygge?
              </h3>
              <p className="text-slate-600">
                Ja, alle data lagres på servere i Norge og følger strenge personvernkrav 
                (GDPR og DPIA).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta-section bg-white py-16 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="border-2 border-dashed border-orange-400 bg-orange-50 p-8 rounded-lg text-center">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                Klar for å finne tryggheten hjemme?
              </h2>
              <p className="text-slate-600 mb-8 text-lg">
                Vi er her for å svare på spørsmål og hjelpe deg med å velge rett løsning 
                for dine kjære.
              </p>
              <Link 
                to="/guidance" 
                className="inline-block bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-slate-800 transition-colors"
              >
                Kontakt oss i dag
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-200 py-8 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center text-slate-600">
            [Footer]
          </div>
        </div>
      </footer>
    </div>
  )
}