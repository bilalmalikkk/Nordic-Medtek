import { useTranslation } from 'react-i18next'
import ContactForm from '../components/ContactForm'

export default function Support() {
  const { t } = useTranslation()
  return (
    <div className="container-page">
      <section className="py-10 grid gap-6">
        <div className="grid gap-3">
          <h1 className="text-2xl font-semibold">{t('pages.support.title')}</h1>
          <p className="text-slate-600 max-w-prose">{t('pages.support.p')}</p>
        </div>

        <ContactForm />
      </section>
    </div>
  )
}


