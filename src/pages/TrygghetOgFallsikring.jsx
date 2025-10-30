import { Link } from 'react-router-dom'
import image4 from '../assets/image (4).png'
import howImage from '../assets/how.png'
import chairImage from '../assets/chair.png'
import routerImage from '../assets/router.png'
import soveromImage from '../assets/soverom.png'
import bad3Image from '../assets/bad3.png'
import trappImage from '../assets/trapp.png'
import klarTrygghet from '../assets/klar for å finne trygghet.png'
import NewContactForm from '../components/NewContactForm'
import { useTranslation } from 'react-i18next'

export default function TrygghetOgFallsikring() {
  const { t } = useTranslation()
  return (
    <div className="min-h-screen w-full bg-white">
      <div className="w-full">
        {/* Back Button */}
        <section className="py-4 w-full bg-gray-50">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <Link 
              to="/products" 
              className="inline-flex items-center text-gray-600 hover:text-teal-600 transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="font-medium">{t('trygghetOgFallsikring.breadcrumb')}</span>
            </Link>
          </div>
        </section>

        <section className="py-20 w-full">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-4">
                  <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                    {t('trygghetOgFallsikring.hero.title')}
                  </h1>
                  <p className="text-lg text-gray-700">
                    {t('trygghetOgFallsikring.hero.subtitle')}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mt-10 md:mt-12">
                  <Link to="/guidance" className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition">
                    {t('trygghetOgFallsikring.hero.button1')}
                  </Link>
                  <Link to="/experiences" className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg hover:bg-yellow-500 transition">
                    {t('trygghetOgFallsikring.hero.button2')}
                  </Link>
                </div>
              </div>

              <div className="flex justify-center lg:justify-end">
                <img src={image4} alt="Fallsensor i tak" className="w-full max-w-sm rounded-xl shadow" />
              </div>
            </div>
          </div>
        </section>


        <section className="py-20 w-full">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">{t('trygghetOgFallsikring.products.title')}</h2>
            <p className="text-gray-700">
              {t('trygghetOgFallsikring.products.description')}
            </p>
            <ul className="list-disc ml-6 text-gray-700 mt-4 space-y-2">
              <li>
                {t('trygghetOgFallsikring.products.fallSensors')}
              </li>
              <li>
                {t('trygghetOgFallsikring.products.centralUnit')}
              </li>
              <li>
                {t('trygghetOgFallsikring.products.alarmButton')}
              </li>
            </ul>
            <p className="text-gray-700 mt-6">
              {t('trygghetOgFallsikring.products.conclusion')}
            </p>
          </div>
        </section>
        
        {/* Slik bygges en komplett løsning - moved to end */}
        <section className="py-20 w-full">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-50 border border-dashed border-blue-200 rounded-2xl p-6 sm:p-8">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-6">{t('trygghetOgFallsikring.solutionBuilding.title')}</h2>

              {/* 1 */}
              <div className="grid lg:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">{t('trygghetOgFallsikring.solutionBuilding.step1.title')}</h3>
              <p className="text-gray-700 mb-3">
                {t('trygghetOgFallsikring.solutionBuilding.step1.description')}
              </p>
              <ul className="list-disc ml-6 text-gray-700 space-y-1">
                {t('trygghetOgFallsikring.solutionBuilding.step1.products', { returnObjects: true }).map((product, index) => (
                  <li key={index}>{product}</li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              <img src={howImage} alt="Illustrasjon av fallsensorer" className="w-48 h-auto rounded-xl shadow" />
            </div>
              </div>

              {/* 2 */}
              <div className="grid lg:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">2. Sensorer som måler pust og puls</h3>
              <p className="text-gray-700 mb-3">
                For ekstra trygghet kan det være en sensor under madrassen eller i stolen. Den måler pust og puls helt uten at mor eller far merker det, og kan varsle hvis verdiene plutselig endrer seg.
              </p>
              <ul className="list-disc ml-6 text-gray-700 space-y-1">
                <li>VitalSense Pad og VitalTrack legges under madrassen eller i stolen.</li>
              </ul>
            </div>
            <div className="flex justify-center">
              <img src={chairImage} alt="Illustrasjon av pust- og pulssensor i stol" className="w-48 h-auto rounded-xl shadow" />
            </div>
              </div>

              {/* 3 */}
              <div className="grid lg:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">3. Sentralenhet som kobler alt sammen</h3>
              <p className="text-gray-700 mb-3">
                For at sensorene skal kunne sende fra seg data, trenger de en liten boks hjemme.
              </p>
              <ul className="list-disc ml-6 text-gray-700 space-y-1">
                <li>CoreHub eller sensorCentral samler data fra alle sensorene og sender den til skyen. Dette er nødvendig for at alt skal virke.</li>
              </ul>
            </div>
            <div className="flex justify-center">
              <img src={routerImage} alt="Illustrasjon av sentralenhet til skyen" className="w-48 h-auto rounded-xl shadow" />
            </div>
              </div>

              {/* 4 */}
              <div className="mb-8">
            <h3 className="font-semibold text-gray-900 mb-2">4. Kan kombineres med alarmknapp</h3>
            <p className="text-gray-700 mb-3">
              Selv om sensorene oppdager fall automatisk, velger mange å legge til en alarmknapp som bæres rundt halsen eller i lommen. Den kan mor eller far trykke på få hjelp med en gang hvis de kjenner at noe er galt.
            </p>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li>Call button med 4G og GPS – virker hjemme og ute.</li>
              <li>Call button lokal – koblet direkte til sensorhjemmesentralen.</li>
            </ul>
              </div>

              <div>
                <Link to="/fallalarm" className="inline-flex items-center bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition">
                  Bestill fallsensor
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Typiske oppsett hjemme - moved to very end */}
        <section className="py-20 w-full">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Typiske oppsett hjemme</h2>
            <div>
              <ul className="space-y-6 list-disc ml-5 text-gray-700 max-w-2xl">
                <li className="grid grid-cols-[1fr_auto] items-center gap-2">
                  <div>
                    <span className="font-semibold text-gray-900">Bad og stue:</span> Fallsensorer i tak eller på vegg.
                  </div>
                  <img src={bad3Image} alt="Bad med fallsensor" className="w-20 h-20 rounded-lg shadow object-cover" />
                </li>
                <li className="grid grid-cols-[1fr_auto] items-center gap-2">
                  <div>
                    <span className="font-semibold text-gray-900">Soverom:</span> Eventuelt sensor under madrassen som måler puls og pust.
                  </div>
                  <img src={soveromImage} alt="Soverom med sensor" className="w-20 h-20 rounded-lg shadow object-cover" />
                </li>
                <li className="grid grid-cols-[1fr_auto] items-center gap-2">
                  <div>
                    <span className="font-semibold text-gray-900">Stue eller trapp:</span> Ekstra fallsensor for å dekke risikoområder.
                  </div>
                  <img src={trappImage} alt="Trapp med sensor" className="w-20 h-20 rounded-lg shadow object-cover" />
                </li>
                <li className="grid grid-cols-[1fr_auto] items-center gap-2">
                  <div>
                    <span className="font-semibold text-gray-900">Alarmknapp:</span> Gir trygghet både ute og inne, hvis de vil be om hjelp før noe skjer.
                  </div>
                  <div className="w-20 h-20"></div>
                </li>
              </ul>
              <p className="text-gray-700 mt-6">
                Dette kan settes sammen akkurat slik dere ønsker det. Mange starter enkelt og utvider etter hvert.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing + FAQ */}
        <section className="py-20 w-full">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-50 border border-dashed border-blue-200 rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Hva koster dette?</h2>
            <p className="text-gray-700 mb-2">
              Fra cirka 299 kroner i måneden for en enkel løsning med sensor i bad og stue. Prisen øker med flere sensorer, alarmknapp eller hvis dere ønsker måling av pust og puls.
            </p>
            <p className="text-gray-700 mb-6">Alt uten binding og skjulte kostnader.</p>
            <Link to="/fallalarm" className="inline-flex items-center bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition">
              Bestill fallsensor
            </Link>
            </div>

            <div className="mt-12">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-6">Ofte stilte spørsmål</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Hva trenger vi egentlig?</h3>
                  <p className="text-gray-700">Fortell oss litt om hvordan situasjonen er hjemme hos mor eller far, så setter vi sammen et forslag for dere. Det er helt uforpliktende.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Kan vi starte enkelt og bygge ut senere?</h3>
                  <p className="text-gray-700">Ja. Mange starter med sensorer i bad og stue og legger til alarmknapp eller medisinske målinger hvis behovet endrer seg.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Er dette trygt for personvernet?</h3>
                  <p className="text-gray-700">Ja. Det registreres kun bevegelser eller helsedata – ikke bilder eller lyd. Alt lagres på servere i Norge.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Er dette trygt og enkelt å få på plass hjemme?</h3>
                  <p className="text-gray-700">Ja. Har du klart å henge opp et bilde, klarer du dette. Sensorene monteres med enkle fester. Sensor under madrassen legges bare på plass.</p>
                </div>
                <p className="text-gray-700">All data lagres trygt i Norge og følger strenge regler for personvern.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA: Klar for å finne tryggheten hjemme? */}
        <section className="py-20 w-full">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Klar for å finne tryggheten hjemme?</h2>
                <p className="text-lg text-gray-700">Vi er her for å svare på spørsmål og hjelpe</p>
                <p className="text-lg text-gray-700 mb-6">deg med å velge rett løsning for dine kjære.</p>
                <Link to="/support" className="inline-flex items-center bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition">
                  Kontakt oss i dag
                </Link>
              </div>
              <div className="flex justify-center lg:justify-end">
                <img src={klarTrygghet} alt="Samtale om trygghet hjemme" className="w-full max-w-sm rounded-2xl shadow" />
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Klar for å bestille eller få et forslag?</h3>
              <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">Bestillingsskjema</h4>
              <p className="text-gray-700">Fyll ut skjemaet under, så tar vi kontakt for å sette opp en løsning som passer akkurat for dere. Du forplikter deg ikke til noe ved å sende inn skjemaet.</p>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 w-full">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-lg p-12">
              <NewContactForm />
            </div>
          </div>
        </section>

        {/* Technical info CTA */}
        <section className="py-20 w-full">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Vil du se teknisk informasjon?</h3>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Er du interessert i detaljer om alarmknappene, hvordan de kobles opp, og hvordan tale og GPS virker?
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Her finner du en teknisk oversikt.
              </p>
              <Link to="/products" className="inline-block bg-slate-800 text-white px-8 py-4 rounded-lg hover:bg-slate-700 transition-colors shadow-lg font-semibold text-lg">
                Se teknisk produktoversikt
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}


