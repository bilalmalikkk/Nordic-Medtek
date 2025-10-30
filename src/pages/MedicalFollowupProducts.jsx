import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import bloodPressureMonitor from '../assets/image (16).png'
import pulseOximeter from '../assets/image (13).png'
import bloodPressureMonitor2 from '../assets/image (7).png'
import glucoseMeter from '../assets/image (17).png'
import sensorMat from '../assets/image (18).png'
import centralUnit from '../assets/image (19).png'
import readyForSafety from '../assets/klar for å finne trygghet.png'

export default function MedicalFollowupProducts() {
  const { t } = useTranslation()
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    whoFor: [],
    concerns: '',
    description: '',
    newsletters: []
  })

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: checked 
          ? [...prev[name], value]
          : prev[name].filter(item => item !== value)
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Henvendelse sendt! Vi kontakter deg vanligvis samme eller neste virkedag.')
    setFormData({
      name: '',
      phone: '',
      email: '',
      whoFor: [],
      concerns: '',
      description: '',
      newsletters: []
    })
  }
  
  return (
    <div className="min-h-screen w-full bg-gray-50">
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
            <span className="font-medium">{t('medicalFollowupProducts.breadcrumb')}</span>
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 w-full">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  {t('medicalFollowupProducts.hero.title')}
                </h1>
                <div className="space-y-4">
                  <p className="text-xl text-gray-700 leading-relaxed">
                    {t('medicalFollowupProducts.hero.subtitle1')}
                  </p>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    {t('medicalFollowupProducts.hero.subtitle2')}
                  </p>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    {t('medicalFollowupProducts.hero.subtitle3')}
                  </p>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200">
                  {t('medicalFollowupProducts.hero.button1')}
                </button>
                <button className="bg-yellow-300 hover:bg-yellow-400 text-gray-800 font-semibold px-8 py-4 rounded-lg transition-colors duration-200">
                  {t('medicalFollowupProducts.hero.button2')}
                </button>
              </div>
            </div>

            {/* Right Content - Blood Pressure Monitor Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                <div className="bg-white p-6 rounded-2xl shadow-2xl">
                  <img 
                    src={bloodPressureMonitor} 
                    alt="Blodtrykksmåler for medisinsk oppfølging hjemme" 
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 w-full">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-12">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t('medicalFollowupProducts.products.title')}
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              {t('medicalFollowupProducts.products.subtitle')}
            </p>
          </div>

          {/* Three Product Sections */}
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            {/* Sensors Section */}
            <div className="text-center">
              <div className="mb-8">
                <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
                  <div className="bg-white p-4 rounded-xl shadow-md">
                    <img 
                      src={glucoseMeter} 
                      alt="Glukosemåler" 
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-md">
                    <img 
                      src={bloodPressureMonitor} 
                      alt="Blodtrykksmåler" 
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-md">
                    <img 
                      src={sensorMat} 
                      alt="Sensormatte" 
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-md">
                    <img 
                      src={centralUnit} 
                      alt="Sentralenhet" 
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
              </div>
              <div className="text-left">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  {t('medicalFollowupProducts.products.sensors.title')}
                </p>
                <p className="text-lg text-gray-700">
                  {t('medicalFollowupProducts.products.sensors.subtitle')}
                </p>
              </div>
            </div>

            {/* Central Unit Section */}
            <div className="text-center">
              <div className="mb-8">
                <div className="bg-white p-6 rounded-xl shadow-md max-w-sm mx-auto">
                  <img 
                    src={bloodPressureMonitor2} 
                    alt="Sentralenhet" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
              <div className="text-left">
                <p className="text-lg text-gray-700">
                  {t('medicalFollowupProducts.products.centralUnit.description')}
                </p>
              </div>
            </div>

            {/* easeBlink Screen Section */}
            <div className="text-center">
              <div className="mb-8">
                <div className="bg-white p-4 rounded-xl shadow-md max-w-sm mx-auto">
                  <img 
                    src={pulseOximeter} 
                    alt="easeBlink skjerm" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
              <div className="text-left">
                <p className="text-lg text-gray-700">
                  {t('medicalFollowupProducts.products.easeBlink.description')}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="text-center">
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              {t('medicalFollowupProducts.products.conclusion')}
            </p>
          </div>
        </div>
      </div>
      </section>

      {/* How Solution is Built Section */}
      <section className="py-20 w-full">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-12">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t('medicalFollowupProducts.howBuilt.title')}
            </h2>
          </div>

          {/* Three Steps */}
          <div className="space-y-16">
            {/* Step 1: Sensors */}
            <div className="space-y-6">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  {t('medicalFollowupProducts.howBuilt.step1.title')}
                </h3>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed">
                {t('medicalFollowupProducts.howBuilt.step1.description')}
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <span className="text-lg font-semibold text-gray-900">Sensor under madrassen eller i stolen</span>
                    <span className="text-lg text-gray-700"> måler pust, puls og søvn helt automatisk. Ingen knapper eller manuelle målinger.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <span className="text-lg text-gray-700">VitalSense Pad og VitalTrack plasseres under madrassen eller stolen.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <span className="text-lg text-gray-700">Blodtrykksmåler, oksygenmåler og termometer brukes enkelt i noen sekunder for å hente spesifikke verdier.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <span className="text-lg text-gray-700">Blodtrykk, SPO (oksygen), temperatur og vekt kobles automatisk til systemet.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <span className="text-lg text-gray-700">Blodsukker kan også kobles til for de som trenger det.</span>
                  </div>
                </li>
              </ul>
              <p className="text-xl text-gray-700 leading-relaxed">
                Alt samles i samme system, og målingene kan deles med deg eller legen.
              </p>
            </div>

            {/* Step 2: Central Unit */}
            <div className="space-y-6">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  Sentralenhet som samler data
                </h3>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed">
                Sensorene kobles til en liten boks i huset. CoreHub eller sensorCentral sørger for at alt sendes trygt til skyen. Dette er nødvendig for at alt skal fungere sammen.
              </p>
            </div>

            {/* Step 3: Video Consultation */}
            <div className="space-y-6">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  Kan kombineres med easeBlink for videokonsultasjon
                </h3>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed">
                Mange velger å inkludere "easeBlink", en skjerm som gjør at mor eller far kan ha videokonsultasjoner med legen, som samtidig ser målingene i sanntid.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Dette betyr at legen kan si "alt ser bra ut" eller "vi bør justere medisinen" direkte, uten ekstra turer til legekontoret.
              </p>
            </div>
          </div>
        </div>
      </div>
      </section>

      {/* Typical Setups at Home Section */}
        <section className="py-20 w-full">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-50 rounded-2xl p-12">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Typiske oppsett hjemme
            </h2>
          </div>

          {/* Three Setup Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Card 1: With easeBlink */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="mb-6">
                <div className="w-full h-48 bg-white border-2 border-gray-200 rounded-xl flex items-center justify-center">
                  <div className="text-gray-400 text-lg">[Image Placeholder]</div>
                </div>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Med easeBlink:
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Gir mulighet for legen å se verdiene direkte i videosamtalen, og samtidig snakke med mor eller far på en trygg og enkel måte.
                </p>
              </div>
            </div>

            {/* Card 2: After hospital or operation */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="mb-6">
                <div className="w-full h-48 bg-white border-2 border-gray-200 rounded-xl flex items-center justify-center">
                  <div className="text-gray-400 text-lg">[Image Placeholder]</div>
                </div>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Etter sykehus eller operasjon:
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Flere målinger for å følge med på puls, pust og temperatur daglig.
                </p>
              </div>
            </div>

            {/* Card 3: For elderly with heart or respiratory disease */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="mb-6">
                <div className="w-full h-48 bg-white border-2 border-gray-200 rounded-xl flex items-center justify-center">
                  <div className="text-gray-400 text-lg">[Image Placeholder]</div>
                </div>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  For eldre med hjerte- eller pustesykdom:
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Sensor under madrassen pluss blodtrykksmåler og oksygenmåler.
                </p>
              </div>
            </div>
          </div>

          {/* Concluding Paragraph */}
          <div className="text-center">
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Dette kan tilpasses akkurat deres situasjon. Mange starter med kun pust og puls, og legger til blodtrykk eller blodsukker hvis behovet endrer seg.
            </p>
          </div>
        </div>
      </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 w-full">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-12">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* FAQ Item 1 */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">
                Hva koster dette?
              </h3>
              <p className="text-xl text-gray-700 leading-relaxed">
                Fra cirka 399 kroner i måneden, avhengig av hvor mange typer målinger dere trenger. Alt er uten binding og skjulte kostnader, og kan bygges ut senere hvis helsa endrer seg.
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Er dette vanskelig å bruke hjemme?
              </h3>
              <p className="text-xl text-gray-700 leading-relaxed">
                Nei. Dette er laget for helt vanlige hjem.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <span className="text-xl text-gray-700">Sensor under madrassen legges bare på plass.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <span className="text-xl text-gray-700">Blodtrykksmåler og oksygenmåler brukes akkurat som på legekontoret, bare hold den på armen eller fingeren et par sekunder.</span>
                </li>
              </ul>
              <p className="text-xl text-gray-700 leading-relaxed">
                All data lagres trygt i Norge og følger strenge regler for personvern.
              </p>
            </div>
          </div>
        </div>
      </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section className="py-20 w-full">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-12">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Ofte stilte spørsmål
              </h2>
            </div>

            {/* FAQ Items */}
            <div className="space-y-12">
              {/* FAQ Item 1 */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  Må vi måle dette manuelt hver dag?
                </h3>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Nei. Pust og puls går automatisk. Blodtrykk eller oksygen kan dere velge å måle f.eks. én gang daglig eller når legen ønsker det.
                </p>
              </div>

              {/* FAQ Item 2 */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  Kan fastlegen virkelig følge med hjemmefra?
                </h3>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Ja. Hvis dere vil, setter vi det opp slik at legen kan se målingene, og kalle inn til kontroll hvis noe bør sjekkes nærmere.
                </p>
              </div>

              {/* FAQ Item 3 */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  Er dette trygt for personvernet?
                </h3>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Ja. Ingenting lagres utenfor Norge, og data deles kun med dem dere selv velger.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>

      {/* Ready for Safety Section */}
      <section className="py-20 w-full">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Klar for å finne tryggheten hjemme?
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                Vi er her for å svare på spørsmål og hjelpe deg med å velge rett løsning for dine kjære.
              </p>
              <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200">
                Kontakt oss i dag
              </button>
            </div>

            {/* Right Content - Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                <div className="bg-yellow-50 p-6 rounded-2xl shadow-lg">
                  <img 
                    src={readyForSafety} 
                    alt="Klar for å finne tryggheten hjemme - to kvinner som snakker sammen" 
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 w-full">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-12">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                {t('medicalFollowupProducts.contactForm.title')}
              </h2>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t('medicalFollowupProducts.contactForm.subtitle')}
              </h3>
              <p className="text-xl text-gray-700 leading-relaxed">
                {t('medicalFollowupProducts.contactForm.description')}
              </p>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-lg font-medium text-gray-900 mb-2">Navn</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Ditt navn"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-lg font-medium text-gray-900 mb-2">Telefon</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+47 xx xx xx xx"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-lg font-medium text-gray-900 mb-2">Epost</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="test@gmail.com"
                    className="w-full px-4 py-3 border border-orange-400 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
              </div>

              {/* Who is this for */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Hvem gjelder dette for</h3>
                <div className="space-y-3">
                  {['Far', 'Mor', 'Begge'].map((option) => (
                    <label key={option} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="whoFor"
                        value={option.toLowerCase()}
                        checked={formData.whoFor.includes(option.toLowerCase())}
                        onChange={handleInputChange}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-lg text-gray-900">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* What are you most concerned about */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Hva er du mest bekymret for?</h3>
                <div className="space-y-3">
                  {[
                    'Fall i hjemmet',
                    'At de ikke får varslet hvis noe skjer',
                    'Hjerte, pust eller andre helseverdier',
                    'Alt over'
                  ].map((option) => (
                    <label key={option} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name="concerns"
                        value={option}
                        checked={formData.concerns === option}
                        onChange={handleInputChange}
                        className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <span className="text-lg text-gray-900">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-lg text-gray-900 mb-3">Beskrivelse av situasjon</h3>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Din melding"
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Newsletter options */}
              <div>
                <h3 className="text-lg text-gray-900 mb-4">Ja, send meg gjerne</h3>
                <div className="space-y-3">
                  {[
                    'E-post om produkter',
                    'E-post med nyheter og oppdateringer',
                    'E-post med Markedsføring'
                  ].map((option) => (
                    <label key={option} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="newsletters"
                        value={option.toLowerCase().replace(/[^a-z]/g, '')}
                        checked={formData.newsletters.includes(option.toLowerCase().replace(/[^a-z]/g, ''))}
                        onChange={handleInputChange}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-lg text-gray-900">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gray-800 hover:bg-gray-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200"
                >
                  Send inn skjema
                </button>
                <p className="mt-4 text-lg text-gray-700">
                  Vi kontakter deg vanligvis samme eller neste virkedag.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      </section>

      {/* Technical Information Section */}
        <section className="py-20 w-full">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-50 rounded-2xl p-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t('medicalFollowupProducts.technicalInfo.title')}
            </h2>
            
            <p className="text-xl text-gray-700 mb-4 leading-relaxed">
              {t('medicalFollowupProducts.technicalInfo.description1')}
            </p>
            
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              {t('medicalFollowupProducts.technicalInfo.description2')}
            </p>
            
            <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200">
              {t('medicalFollowupProducts.technicalInfo.button')}
            </button>
          </div>
        </div>
      </div>
      </section>
    </div>
  )
}
