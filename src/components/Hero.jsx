import { useTranslation } from 'react-i18next'
import heroImg from '../assets/veiledning.png'

export default function Hero() {
  const { t } = useTranslation()
  return (
    <section className="py-12 md:py-16 grid md:grid-cols-2 gap-10 items-center">
      <div className="animate-fade-in-left">
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
          {t('hero.title1')}<br /> {t('hero.title2')}
        </h1>
        <p className="mt-4 text-slate-600 max-w-prose animate-fade-in-up animate-delay-200">{t('hero.lead')}</p>
      </div>
      <div className="flex justify-center animate-fade-in-right animate-delay-300">
        <div className="relative w-full max-w-xl rounded-xl overflow-hidden ring-1 ring-slate-200 bg-white hover-lift animate-float">
          <img src={heroImg} alt="Illustration" className="w-full h-auto object-cover" />
        </div>
      </div>
    </section>
  )
}

