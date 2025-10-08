import buttonImg from '../assets/image (5).png'
import hubImg from '../assets/image (7).png'
import uiImg from '../assets/image (8).png'
import button2Img from '../assets/button 2.png'
import illustrationImg from '../assets/image (5).png'
import button1Img from '../assets/button1.png'
import wifiImg from '../assets/wifi.png'
import image7Img from '../assets/image (7).png'
import image10Img from '../assets/image (10).png'
import image11Img from '../assets/image (11).png'
import image12Img from '../assets/image (12).png'
import puzzle1Img from '../assets/puzzle (1).png'
import image13Img from '../assets/image (13).png'
import image14Img from '../assets/image (14).png'
import image15Img from '../assets/image (15).png'
import easeeblinkImg from '../assets/easeeblink.png'
import easeeImg from '../assets/easee.png'
import fallsensorImg from '../assets/fallsensor.png'
import sengImg from '../assets/seng.png'
import uteImg from '../assets/ute.png'
import homeImg from '../assets/home.png'
import buttonOgLockImg from '../assets/button og lock.png'
import klarForTrygghetImg from '../assets/klar for å finne trygghet.png'
import NewContactForm from '../components/NewContactForm'
import { useTranslation } from 'react-i18next'

export default function AlarmButtons() {
  const { t } = useTranslation()
  return (
    <div className="min-h-screen w-full bg-gray-50">
      <div className="w-full">
        {/* Hero Section */}
        <section className="py-20 w-full relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
          <div className="w-full max-w-8xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">{t('alarmButtons.hero.title')}</h1>
                <p className="text-xl text-gray-600 max-w-prose">
                  {t('alarmButtons.hero.subtitle')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="/documents" className="btn-primary">{t('alarmButtons.hero.button1')}</a>
                  <a href="/experiences" className="rounded-md bg-yellow-300 px-4 py-2 text-slate-900 hover:bg-yellow-400">{t('alarmButtons.hero.button2')}</a>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <img src={buttonImg} alt="Alarmknapp" className="w-full max-w-md h-auto rounded-lg shadow-lg border border-gray-200" />
              </div>
            </div>
          </div>
        </section>

        {/* Products Overview Section */}
        <section className="py-20 w-full bg-white">
          <div className="w-full max-w-8xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('alarmButtons.products.title')}</h2>
              <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <img src={buttonImg} alt="Alarmknapp" className="w-full h-48 object-cover rounded-lg shadow mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('alarmButtons.products.alarmButton.title')}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('alarmButtons.products.alarmButton.description')}
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <img src={hubImg} alt="Sentralenhet" className="w-full h-48 object-cover rounded-lg shadow mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('alarmButtons.products.centralUnit.title')}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('alarmButtons.products.centralUnit.description')}
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <img src={uiImg} alt="EaseBlink" className="w-full h-48 object-cover rounded-lg shadow mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('alarmButtons.products.easeBlink.title')}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('alarmButtons.products.easeBlink.description')}
                </p>
              </div>
            </div>
            <div className="mt-12 text-center">
              <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                {t('alarmButtons.products.conclusion')}
              </p>
            </div>
          </div>
        </section>

        {/* Solution Building Section */}
        <section className="py-20 w-full bg-gradient-to-br from-blue-50 to-cyan-50">
          <div className="w-full max-w-8xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Slik bygges en komplett løsning</h2>
              <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">1. Alarmknapp</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Dette er en liten enhet som bæres rundt halsen eller legges i lommen. Med ett trykk kobles de rett til deg eller til vårt system som varsler deg og eventuelt helsepersonell.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-gray-700 font-semibold">Call button med 4G og GPS:</p>
                      <p className="text-gray-600">Virker hjemme og ute. Har innebygd mobilnett, GPS og ofte to-veis tale. Du kan snakke med mor eller far direkte gjennom alarmen og se hvor de er.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-gray-700 font-semibold">Call button lokal:</p>
                      <p className="text-gray-600">Koblet til sensorhjemmesentralen, gir rask varsling innenfor hjemmet.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center lg:justify-end">
                <img src={button2Img} alt="Alarmknapp produkt" className="w-full max-w-md h-auto rounded-lg shadow-lg border border-gray-200" />
              </div>
            </div>
          </div>
        </section>

        {/* Step 2 Section */}
        <section className="py-20 w-full bg-white">
          <div className="w-full max-w-8xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">2. Sentral eller direkte til mobilnett</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Noen alarmknapper kobles direkte til mobilnettet (4G) og trenger ikke noe ekstra utstyr i hjemmet. Andre kobles via en liten boks hjemme (som CoreHub eller sensorCentral) som sender alarmen videre.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Vi hjelper deg med å finne ut hva som passer best ut fra hvordan hjemmet er og hvordan dekningen er hos dere.
                </p>
              </div>
              
              <div className="flex justify-center lg:justify-end">
                <div className="grid grid-cols-2 gap-4 max-w-md">
                  <img src={wifiImg} alt="Koblingsmetoder" className="w-full h-auto rounded-lg shadow-lg border border-gray-200" />
                  <img src={button1Img} alt="Sentral enhet" className="w-full h-auto rounded-lg shadow-lg border border-gray-200" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step 3 Section */}
        <section className="py-20 w-full bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="w-full max-w-8xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">3. Kan kombineres med fallsensorer eller helseovervåkning</h3>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <img src={image10Img} alt="GuardianSense veggmontert" className="w-full h-32 object-cover rounded-lg shadow-lg border border-gray-200" />
                  <img src={image11Img} alt="GuardianSense takmontert" className="w-full h-32 object-cover rounded-lg shadow-lg border border-gray-200" />
                  <img src={image12Img} alt="Sengsensor" className="w-full h-32 object-cover rounded-lg shadow-lg border border-gray-200" />
                </div>
                
                <p className="text-lg text-gray-700 mb-4">
                  Mange velger også å kombinere alarmknapp med:
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-gray-700 font-semibold">Fallsensorer</p>
                      <p className="text-gray-600">som oppdager fall automatisk hvis de ikke får trykket selv.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-gray-700 font-semibold">Puls- og pustemåling</p>
                      <p className="text-gray-600">som kan varsle før et fall eller et illebefinnende skjer.</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-lg text-gray-700 mt-4">
                  Dette gir en dobbel eller trippel trygghet.
                </p>
              </div>
              
              <div className="flex justify-center lg:justify-end">
                <img src={puzzle1Img} alt="Integrert system" className="w-full max-w-md h-auto rounded-lg shadow-lg border border-gray-200" />
              </div>
            </div>
          </div>
        </section>

        {/* Step 4 Section */}
        <section className="py-20 w-full bg-white">
          <div className="w-full max-w-8xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">4. Kombinert med easeBlink for videosamtaler og meldinger</h3>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <img src={image13Img} alt="CareBlink interface" className="w-full h-32 object-cover rounded-lg shadow-lg border border-gray-200" />
                  <img src={image14Img} alt="CareBlink moments" className="w-full h-32 object-cover rounded-lg shadow-lg border border-gray-200" />
                  <img src={image15Img} alt="Innkommende samtale" className="w-full h-32 object-cover rounded-lg shadow-lg border border-gray-200" />
                </div>
                
                <p className="text-lg text-gray-700 mb-4">
                  Flere velger å kombinere alarmknappene med easeBlink — en skjerm som gjør det enda tryggere å bo hjemme.
                </p>
                
                <h4 className="text-xl font-semibold text-gray-800 mb-3">Da kan mor eller far:</h4>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">
                      Motta bilder og meldinger fra familien, og få følelsen av å ha dem nær selv når dere bor langt unna.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">
                      Ha videosamtaler med deg eller med fastlegen, som samtidig kan se målinger fra eventuelle sensorer hjemme.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">
                      Bruke store knapper eller autosvar, som gjør det mulig også for dem med dårlig syn eller kognitiv svikt å få kontakt.
                    </p>
                  </div>
                </div>
                
                <p className="text-lg text-gray-700 mt-4">
                  Dette gir en mer komplett trygghet, både for fysisk sikkerhet og for sosial kontakt.
                </p>
                
                <div className="mt-6">
                  <a href="/documents" className="inline-block bg-slate-800 text-white px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors font-semibold">
                    Bestill fallsensor
                  </a>
                </div>
              </div>
              
              <div className="flex justify-center lg:justify-end">
                <img src={easeeblinkImg} alt="EaseBlink i bruk" className="w-full max-w-md h-auto rounded-lg shadow-lg border border-gray-200" />
              </div>
            </div>
          </div>
        </section>

        {/* Typical Setups Section */}
        <section className="py-20 w-full bg-gradient-to-br from-yellow-50 to-yellow-100">
          <div className="w-full max-w-8xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Typiske oppsett hjemme</h2>
              <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 text-center">
                <img src={homeImg} alt="Bare hjemme" className="w-full max-w-48 h-32 object-cover rounded-lg shadow mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Bare hjemme</h3>
                <p className="text-gray-600 leading-relaxed">
                  Alarmknapp som kobles til hjemmesentralen, varsler deg direkte hvis noe skjer.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 text-center">
                <div className="flex gap-2 justify-center max-w-64 mx-auto mb-4">
                  <img src={homeImg} alt="Hjemme" className="w-full h-32 object-cover rounded-lg shadow" />
                  <img src={uteImg} alt="Ute" className="w-full h-32 object-cover rounded-lg shadow" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Hjemme og ute</h3>
                <p className="text-gray-600 leading-relaxed">
                  Alarmknapp med 4G og GPS, så de kan gå tur eller handle uten at du må bekymre deg.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 text-center">
                <div className="grid grid-cols-2 gap-2 max-w-64 mx-auto mb-4">
                  <img src={fallsensorImg} alt="Fallsensor" className="w-full h-32 object-cover rounded-lg shadow" />
                  <img src={sengImg} alt="Sengsensor" className="w-full h-32 object-cover rounded-lg shadow" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Med fall og helse</h3>
                <p className="text-gray-600 leading-relaxed">
                  Kombinasjon av alarmknapp, fallsensorer og pust/pulsmåling, for full trygghet.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 text-center">
                <img src={easeeImg} alt="Med easeBlink" className="w-full max-w-48 h-32 object-cover rounded-lg shadow mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Med easeBlink</h3>
                <p className="text-gray-600 leading-relaxed">
                  Gir dem mulighet til å snakke med deg eller helsepersonell, se bilder og føle at noen er nær, også når de trykker på alarmen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Easy to Use Section */}
        <section className="py-20 w-full bg-white">
          <div className="w-full max-w-8xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Er dette vanskelig å bruke?</h2>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Nei. Alarmknappen er laget for å være enkel nok til at hvem som helst klarer det – ett trykk, og hjelpen er i gang. Har den tale, kan de snakke direkte med deg gjennom knappen.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  All data lagres trygt i Norge, og alt følger strenge regler for personvern.
                </p>
                
                <div className="mt-6">
                  <a href="/documents" className="inline-block bg-slate-800 text-white px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors font-semibold">
                    Bestill fallsensor
                  </a>
                </div>
              </div>
              
              <div className="flex justify-center lg:justify-end">
                <img src={buttonOgLockImg} alt="Enkel bruk og sikkerhet" className="w-full max-w-md h-auto rounded-lg shadow-lg border border-gray-200" />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 w-full bg-gray-50">
          <div className="w-full max-w-8xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ofte stilte spørsmål</h2>
              <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  Fungerer dette ute på tur eller på butikken?
                </h3>
                <p className="text-gray-700 leading-relaxed ml-12">
                  Ja. Med alarmknapp som har 4G og GPS virker det akkurat som en liten mobiltelefon. Du ser hvor de er, og de kan varsle deg uansett hvor de er.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  Hva hvis de ikke rekker å trykke?
                </h3>
                <p className="text-gray-700 leading-relaxed ml-12">
                  Derfor velger mange å kombinere med fallsensor, som automatisk oppdager hvis noe skjer.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  Kan flere pårørende varsles samtidig?
                </h3>
                <p className="text-gray-700 leading-relaxed ml-12">
                  Ja. Alarmen kan settes opp til å ringe deg først, og deretter andre i familien hvis du ikke svarer.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 w-full bg-gradient-to-br from-orange-50 to-yellow-50">
          <div className="w-full max-w-8xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
            <div className="bg-white rounded-3xl shadow-2xl p-12 border-2 border-orange-200">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-gray-900">Klar for å finne tryggheten hjemme?</h2>
                  
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Vi er her for å svare på spørsmål og hjelpe deg med å velge rett løsning for dine kjære.
                  </p>
                  
                  <div className="mt-6">
                    <a href="/contact" className="inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl">
                      Kontakt oss i dag
                      <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </a>
                  </div>
                </div>
                
                <div className="flex justify-center lg:justify-end">
                  <img src={klarForTrygghetImg} alt="Kontakt og veiledning" className="w-full max-w-md h-auto rounded-lg shadow-lg border border-gray-200" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 w-full bg-white">
          <div className="w-full max-w-8xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
            <div className="bg-white rounded-2xl shadow-lg p-12">
              <NewContactForm />
            </div>
          </div>
        </section>

        {/* Technical Information Section */}
        <section className="py-20 w-full bg-gray-50">
          <div className="w-full max-w-8xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Vil du se teknisk informasjon?</h2>
              
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Er du interessert i detaljer om alarmknappene, hvordan de kobles opp, og hvordan tale og GPS virker?
              </p>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Her finner du en teknisk oversikt.
              </p>
              
              <a href="/documents" className="inline-block bg-slate-800 text-white px-8 py-4 rounded-lg hover:bg-slate-700 transition-colors shadow-lg font-semibold text-lg">
                Se teknisk produktoversikt
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}