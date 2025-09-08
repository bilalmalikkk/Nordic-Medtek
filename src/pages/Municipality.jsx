import { useTranslation } from 'react-i18next'

export default function Municipality() {
  const { t } = useTranslation()
  return (
    <section className="py-10 grid gap-4">
      <h1 className="text-2xl font-semibold">{t('pages.municipality.title')}</h1>
      <p className="text-slate-600 max-w-prose">{t('pages.municipality.p')}</p>
    </section>
  )
}


