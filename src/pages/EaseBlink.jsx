import { useTranslation } from 'react-i18next'
import tabletImage from '../assets/Can_you_make_a_picture_that_illu-0.jpg'

export default function EaseBlink() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen w-full bg-gray-50">
      <div className="w-full">
        {/* Hero Section */}
        <section className="py-24 w-full bg-gray-50">
          <div className="w-full max-w-5xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
            <div className="text-center space-y-12">
              <h1 className="text-6xl sm:text-7xl md:text-8xl font-normal text-gray-900">
                easyBlink
              </h1>
              <p className="text-3xl sm:text-4xl font-normal text-gray-900">
                enklere kontakt, tryggere hverdag
              </p>
              <div className="space-y-6 pt-12">
                <h2 className="text-2xl font-bold text-gray-900">
                  Sosial kontakt er viktig – også når man blir eldre.
                </h2>
                <p className="text-xl text-gray-900 max-w-4xl mx-auto leading-relaxed font-normal">
                  Med easeBlink kan eldre enkelt holde kontakt med familie og helsepersonell, og få en tryggere og mer meningsfull hverdag hjemme.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What is easeBlink Section */}
        <section className="py-20 bg-white w-full">
          <div className="w-full px-8 sm:px-12 lg:px-16 xl:px-20">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              {/* Image */}
              <div className="relative">
                <img 
                  src={tabletImage} 
                  alt="Person holding tablet with video call showing family members" 
                  className="w-full max-w-lg"
                />
              </div>
              
              {/* Text Content */}
              <div className="space-y-8 pt-8">
                <h2 className="text-4xl font-bold text-gray-900">
                  Hva er easeBlink
                </h2>
                <p className="text-xl text-gray-900">
                  Trygghetsskapende teknologi
                </p>
                <p className="text-lg text-gray-900 leading-relaxed max-w-xl">
                  En brukervennlig skjerm som viser bilder, meldinger og videosamtaler fra inviterte pårørende og ansatte i helsetjenesten. Alt er kryptert og trygt.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
