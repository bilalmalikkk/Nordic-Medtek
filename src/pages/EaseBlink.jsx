import { useTranslation } from 'react-i18next'
import tabletImage from '../assets/Can_you_make_a_picture_that_illu-0.jpg'
import eldreDameStol from '../assets/eldre dame i stol.jpg'
import eldreMannHjemme from '../assets/eldremanntrykthjemme.jpg'
import group16 from '../assets/Group 16.jpg'
import group17 from '../assets/Group 17.jpg'
import tabletCalling from '../assets/tablet_calling.jpg'
import contactsScreenshot from '../assets/Screenshot 2024-11-13 201249.png'
import maintenanceScreenshot from '../assets/Screenshot 2025-01-03 202354.png'
import videoConsultImage from '../assets/eqaeblink_lowres.jpg'

export default function EaseBlink() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen w-full bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gray-100 w-full">
        <div className="w-full px-8 sm:px-12 lg:px-16 xl:px-20">
          <div className="text-center max-w-6xl mx-auto">
            <h1 className="text-7xl sm:text-8xl font-normal text-gray-900 mb-8">
              easyBlink
            </h1>
            <p className="text-5xl sm:text-6xl font-normal text-gray-900 mb-20">
              enklere kontakt, tryggere hverdag
            </p>
            <p className="text-4xl font-normal text-gray-900 mb-0 max-w-6xl mx-auto">
              Sosial kontakt er viktig – også når man blir eldre.
            </p>
            <p className="text-2xl font-normal text-gray-900 max-w-6xl mx-auto">
              Med easeBlink kan eldre enkelt holde kontakt med familie og helsepersonell, og få en tryggere og mer meningsfull hverdag hjemme.
            </p>
          </div>
        </div>
      </section>

      <div className="w-full">

        {/* What is easeBlink Section */}
        <section className="py-20 bg-white w-full">
          <div className="w-full px-8 sm:px-12 lg:px-16 xl:px-20">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              {/* Image */}
              <div className="relative">
                <img 
                  src={tabletImage} 
                  alt="Person holding tablet with video call showing family members" 
                  className="w-full max-w-2xl h-auto md:h-[460px] object-cover"
                />
              </div>
              
              {/* Text Content */}
              <div className="space-y-8 pt-8">
                <h2 className="text-5xl sm:text-6xl font-normal text-gray-900">
                  Hva er easeBlink
                </h2>
                <p className="text-2xl text-gray-900">
                  Trygghetsskapende teknologi
                </p>
                <p className="text-2xl text-gray-900 leading-relaxed max-w-xl">
                  En brukervennlig skjerm som viser bilder, meldinger og videosamtaler fra inviterte pårørende og ansatte i helsetjenesten. Alt er kryptert og trygt.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why easeBlink Section */}
        <section className="py-20 bg-white w-full">
          <div className="w-full px-8 sm:px-12 lg:px-16 xl:px-20">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              {/* Text Content */}
              <div className="space-y-8">
                <h2 className="text-5xl sm:text-6xl font-normal text-gray-900">
                  Hvorfor easeBlink
                </h2>
                <p className="text-2xl text-gray-900">Trygghetsskapende teknologi</p>
                <ul className="list-disc pl-6 space-y-4 text-2xl text-gray-900">
                  <li>Reduserer ensomhet</li>
                  <li>Styrker relasjonen til pårørende</li>
                  <li>Forenkler kommunikasjon med hjemmetjenesten</li>
                  <li>Bidrar til tryggere overganger mellom hjem og helsehus</li>
                </ul>
              </div>

              {/* Image */}
              <div className="relative">
                <img
                  src={eldreDameStol}
                  alt="Eldre dame sitter i stol og bruker nettbrett"
                  className="w-full max-w-2xl h-auto md:h-[460px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* How to get easeBlink Section */}
        <section className="py-20 bg-white w-full">
          <div className="w-full px-8 sm:px-12 lg:px-16 xl:px-20">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              {/* Image */}
              <div className="relative">
                <img
                  src={eldreMannHjemme}
                  alt="Eldre mann hjemme med sensorer"
                  className="w-full max-w-2xl h-auto md:h-[460px] object-cover"
                />
              </div>

              {/* Text Content */}
              <div className="space-y-8 pt-8 md:pt-0">
                <h2 className="text-5xl sm:text-6xl font-normal text-gray-900">
                  Hvordan få easeBlink
                </h2>
                <p className="text-2xl text-gray-900">Trygghetsskapende teknologi</p>
                <p className="text-2xl text-gray-900 leading-relaxed max-w-3xl">
                  easeBlink leveres som en del av vår sensorpakke hvor man enkelt kan legge til
                  fritt antall sensorer for sikring mot fall, alarmknapp og medisinske sensorer.
                  Det går fint å sette opp en løsning med kun easeBlink. Om du senere vil legge
                  til mer sikkerhet og sensorer gjør du dette enkelt selv fra din portal, eller
                  sender oss en melding.
                </p>
                <p className="text-2xl italic text-gray-900">les mer her</p>
              </div>
            </div>
          </div>
        </section>

        {/* Share photos and moments Section */}
        <section className="py-20 bg-white w-full">
          <div className="w-full px-8 sm:px-12 lg:px-16 xl:px-20">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              {/* Text Content */}
              <div className="space-y-8 pt-8 md:pt-0">
                <h2 className="text-5xl sm:text-6xl font-normal text-gray-900">
                  Del bilder og opplevelser
                </h2>
                <p className="text-2xl text-gray-900">Trygghetsskapende teknologi</p>
                <p className="text-2xl text-gray-900 leading-relaxed max-w-3xl">
                  Del minner og hilsener direkte til easeBlink. Enkelt for familie og venner å
                  bidra med bilder, korte meldinger og små øyeblikk i hverdagen – som gir nærhet
                  og tilhørighet, selv på avstand.
                </p>
              </div>

              {/* Image */}
              <div className="relative w-full max-w-2xl md:h-[460px] h-auto">
                <img
                  src={group16}
                  alt="Skjerm som viser delte bilder og meldinger"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Photo carousel Section */}
        <section className="py-20 bg-white w-full">
          <div className="w-full px-8 sm:px-12 lg:px-16 xl:px-20">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              {/* Image */}
              <div className="relative w-full max-w-2xl md:h-[460px] h-auto">
                <img
                  src={group17}
                  alt="Moments view med bildekort i et rutenett"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Content */}
              <div className="space-y-8 pt-8 md:pt-0">
                <h2 className="text-5xl sm:text-6xl font-normal text-gray-900">
                  Bilde karusell
                </h2>
                <p className="text-2xl text-gray-900">Ny bilder roteres på skjermen</p>
                <p className="text-2xl text-gray-900 leading-relaxed max-w-3xl">
                  Når skjermen ikke er i bruk til samtale med familien, viser easeBlink en karusell
                  av de nyeste bildene som er delt av familien. Nye bilder legges til direkte fra
                  mobilen og dukker automatisk opp på skjermen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Receive call is easy Section */}
        <section className="py-20 bg-white w-full">
          <div className="w-full px-8 sm:px-12 lg:px-16 xl:px-20">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              {/* Text Content */}
              <div className="space-y-8 pt-8 md:pt-0">
                <h2 className="text-5xl sm:text-6xl font-normal text-gray-900">
                  Motta samtale er enkelt
                </h2>
                <p className="text-2xl text-gray-900">Trygghetsskapende teknologi</p>
                <p className="text-2xl text-gray-900 leading-relaxed max-w-3xl">
                  To store knapper gjør det enkelt å svare eller avvise en samtale. Systemet kan
                  settes opp med autosvar for utvalgte brukere når situasjonen krever det, slik at
                  viktige samtaler ikke blir oversett.
                </p>
              </div>

              {/* Image */}
              <div className="relative w-full max-w-2xl md:h-[460px] h-auto">
                <img
                  src={tabletCalling}
                  alt="Skjerm med store knapper for å svare eller avvise samtale"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Start a call Section */}
        <section className="py-20 bg-white w-full">
          <div className="w-full px-8 sm:px-12 lg:px-16 xl:px-20">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              {/* Image */}
              <div className="relative w-full max-w-2xl md:h-[460px] h-auto">
                <img
                  src={contactsScreenshot}
                  alt="Kontaktliste for å starte samtale"
                  className="w-full h-full object-contain object-center"
                />
              </div>

              {/* Text Content */}
              <div className="space-y-8 pt-8 md:pt-0">
                <h2 className="text-5xl sm:text-6xl font-normal text-gray-900">
                  Opprett samtale
                </h2>
                <p className="text-2xl text-gray-900">Enkelt fra en kontaktliste</p>
                <p className="text-2xl text-gray-900 leading-relaxed max-w-3xl">
                  Velg personen du ønsker å ringe fra en tydelig og stor kontaktliste. Det er
                  enkelt å søke, og kontakter kan administreres av pårørende slik at det alltid er
                  riktig personer tilgjengelig.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Easy maintenance Section */}
        <section className="py-20 bg-white w-full">
          <div className="w-full px-8 sm:px-12 lg:px-16 xl:px-20">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              {/* Text Content */}
              <div className="space-y-8 pt-8 md:pt-0">
                <h2 className="text-5xl sm:text-6xl font-normal text-gray-900">
                  Enkelt vedlikehold
                </h2>
                <p className="text-2xl text-gray-900">Sky-basert oppsett av systemet</p>
                <p className="text-2xl text-gray-900 leading-relaxed max-w-3xl">
                  Legg til nye brukere, oppdater kontaktlister og gjør endringer fra en enkel
                  administrasjonsportal. Oppsett, roller og tilganger kan håndteres trygt på nett
                  uten fysisk oppmøte.
                </p>
              </div>

              {/* Image */}
              <div className="relative w-full max-w-2xl md:h-[460px] h-auto">
                <img
                  src={maintenanceScreenshot}
                  alt="Administrasjonsportal for brukere og roller"
                  className="w-full h-full object-contain object-center"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Video consultation Section */}
        <section className="py-20 bg-white w-full">
          <div className="w-full px-8 sm:px-12 lg:px-16 xl:px-20">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              {/* Image */}
              <div className="relative w-full max-w-2xl md:h-[460px] h-auto">
                <img
                  src={videoConsultImage}
                  alt="Videokonsultasjon mellom lege og pasient"
                  className="w-full h-full object-contain object-center"
                />
              </div>

              {/* Text Content */}
              <div className="space-y-8 pt-8 md:pt-0">
                <h2 className="text-5xl sm:text-6xl font-normal text-gray-900">
                  Video konsultasjon
                </h2>
                <p className="text-2xl text-gray-900">med din fastlege</p>
                <p className="text-2xl text-gray-900 leading-relaxed max-w-3xl">
                  Denne funksjonen blir ekstra verdifull om brukeren også har sensorer i bruk. For
                  eksempel med en sengesensor kan legen enkelt se utvikling i hjertefrekvens,
                  blodmengde og pust over tid. Har man andre sensorer som blodtrykk tilgjengelig,
                  vil legen få enda mer nyttig informasjon – direkte under konsultasjonen.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
