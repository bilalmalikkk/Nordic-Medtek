import { useTranslation } from 'react-i18next'
import ContactForm from '../components/ContactForm'
import heroImg from '../assets/demo pilot.png'

export default function Demo() {
  const { t } = useTranslation()
  const typeOptions = [
    { value: 'demo', label: 'Demo' },
    { value: 'leder', label: 'Lederpresentasjon' },
    { value: 'pilot', label: 'Pilot' },
  ]
  return (
    <div className="container-page">
      <div className="grid gap-10">
        <section className="py-12 md:py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight text-gray-800">Se hvordan det fungerer i praksis</h1>
            <p className="mt-4 text-slate-600 max-w-prose">Få en demonstrasjon eller start en pilot i hjemmetjenesten. Vi tilpasser presentasjonen til ditt behov</p>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-xl rounded-xl overflow-hidden ring-1 ring-slate-200 bg-white">
              <img src={heroImg} alt="Demo" className="w-full h-auto object-cover" />
            </div>
          </div>
        </section>

        <section className="border-2 border-dashed border-gray-300 rounded-xl p-6 md:p-8 bg-white">
          <h2 className="text-center text-xl font-bold text-gray-800 mb-6">Hva du kan bestille</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-gray-800">Demo/presentasjon</h3>
              <p className="mt-1 text-slate-600">Kort, enkel, digital eller fysisk, hvor teknologien demonstreres.</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-800">Lederpresentasjon</h3>
              <p className="mt-1 text-slate-600">Skreddersydd gjennomgang for kommunestyrelse eller beslutningstagere.</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-800">Pilot</h3>
              <p className="mt-1 text-slate-600">Praktisk utprøving i hjemmetjenesten eller på en mindre pasientgruppe.</p>
            </div>
          </div>
        </section>

        <ContactForm
          title="Bestill demo eller pilot"
          desc="Fyll ut skjemaet under, så tar vi kontakt. Du forplikter deg ikke til noe ved å sende inn skjemaet."
          typeOptions={typeOptions}
          footerNote="Alle presentasjoner og piloter gjennomføres uforpliktende. Du kan enkelt avslutte eller gå videre til neste steg etter dine behov."
        />
      </div>
    </div>
  )
}


