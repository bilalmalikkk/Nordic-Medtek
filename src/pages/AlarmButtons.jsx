import buttonImg from '../assets/image (5).png'
import hubImg from '../assets/image (7).png'
import uiImg from '../assets/image (8).png'

export default function AlarmButtons() {
  return (
    <div className="container-page py-12">
      <section className="grid lg:grid-cols-2 gap-10 items-start">
        <div className="space-y-6">
          <h1 className="text-3xl font-semibold">Produkter for alarmknapper og rask varsling</h1>
          <p className="text-slate-700 max-w-prose">
            Unngå at et fall endrer alt. Våre sensorer oppdager fall helt automatisk.
          </p>
          <div className="flex gap-4">
            <a href="/documents" className="btn-primary">Bestill gratis veiledning</a>
            <a href="/experiences" className="rounded-md bg-yellow-300 px-4 py-2 text-slate-900 hover:bg-yellow-400">Hvordan andre bruker det</a>
          </div>
        </div>
        <div className="w-full">
          <img src={buttonImg} alt="Alarmknapp" className="w-full h-auto rounded shadow" />
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-xl font-semibold mb-6">Dette er produktene som gir rask hjelp hvis noe skjer</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <img src={buttonImg} alt="Alarmknapp" className="w-full h-auto rounded shadow" />
            <h3 className="font-semibold">Alarmknapp</h3>
            <p className="text-sm text-slate-700">
              Alarmknapp som mor eller far bærer rundt halsen eller i lommen og kan trykke på hvis noe skjer – hjemme eller ute.
            </p>
          </div>
          <div className="space-y-3">
            <img src={hubImg} alt="Sentralenhet" className="w-full h-auto rounded shadow" />
            <h3 className="font-semibold">En sentralenhet eller mobilforbindelse</h3>
            <p className="text-sm text-slate-700">
              Sikrer at alarmen faktisk når fram til deg, pårørende eller helsepersonell – og ikke stopper i huset.
            </p>
          </div>
          <div className="space-y-3">
            <img src={uiImg} alt="EaseBlink" className="w-full h-auto rounded shadow" />
            <h3 className="font-semibold">Valgfri skjermløsning med easeBlink</h3>
            <p className="text-sm text-slate-700">
              Gir enkel tilgang til å snakke med deg eller fastlegen, og gjør oppfølging tryggere og mer personlig.
            </p>
          </div>
        </div>
        <p className="text-sm text-slate-700 mt-8 max-w-4xl">
          Dette gir trygghet i hverdagen og gjør at de kan leve aktivt videre, mens du vet at hjelpen er nær hvis noe skulle skje.
        </p>
      </section>
    </div>
  )
}


