import { useTranslation } from 'react-i18next'

export default function HelpCards() {
  const { t } = useTranslation()
  const items = t('help.items', { returnObjects: true })
  return (
    <section className="py-10 border-y">
      <h2 className="text-center text-xl font-semibold">{t('help.heading')}</h2>
      <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map(({ title, text }) => (
          <div key={title} className="rounded-lg border p-6 shadow-sm bg-white">
            <div className="h-12 w-12 rounded bg-teal-600/10 ring-1 ring-teal-200" />
            <h3 className="mt-4 font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-slate-600">{text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

