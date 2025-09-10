import { useTranslation } from 'react-i18next'

export default function Partners() {
  const { t } = useTranslation()
  return (
    <div className="container-page">
      <section className="py-10 grid gap-4">
        <h1 className="text-2xl font-semibold">{t('pages.partners.title')}</h1>
        <p className="text-slate-600 max-w-prose">{t('pages.partners.p')}</p>
      </section>
    </div>
  )
}


