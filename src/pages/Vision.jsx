import { useTranslation } from 'react-i18next'
import desertImage from '../assets/wolfgang-hasselmann-1ICIhK-ElJs-unsplash-edited.avif'
import storyBg from '../assets/varme_hender_1920x1080.jpg'
import leadershipImg from '../assets/Gemini_Generated_Image_p4saa8p4saa8p4sa.jpg'

export default function Vision() {
  const { t } = useTranslation()
  
  return (
    <div className="w-full">
      <section className="py-12 md:py-16 w-full relative overflow-hidden mb-8 md:mb-12 lg:mb-16">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${desertImage})`
          }}
        />
        
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
            <div className="flex items-start justify-start min-h-[65vh]">
             <div className="w-full px-8 sm:px-12 lg:px-16 xl:px-20 pt-6 sm:pt-8 lg:pt-10">
              <div className="max-w-4xl">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight drop-shadow-lg">
                  {t('vision.title')}
                </h1>
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-gray-800 leading-relaxed drop-shadow-lg">
                  <p className="mb-2">{t('vision.subtitle1')}</p>
                  <p className="mb-2">{t('vision.subtitle2')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Story section */}
      <section className="relative py-12 md:py-16 bg-white overflow-hidden rounded-xl">
        <div
          className="absolute inset-0 md:left-1/2 md:w-1/2 bg-cover bg-center rounded-xl overflow-hidden"
          style={{ backgroundImage: `url(${storyBg})` }}
        />
        <div className="relative w-full px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="bg-white/95 p-6 sm:p-8 rounded-xl shadow-sm">
              <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900">{t('visionPage.story.title')}</h2>
              <p className="mt-3 text-xl sm:text-2xl text-gray-700">{t('visionPage.story.subtitle')}</p>
              <p className="mt-6 text-lg text-gray-800 leading-8">{t('visionPage.story.body')}</p>
            </div>
            <div className="hidden md:block" />
          </div>
        </div>
      </section>
      {/* Leadership section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="relative w-full rounded-xl overflow-hidden ring-1 ring-slate-200 bg-white">
              <img src={leadershipImg} alt="Visjonært lederskap" className="w-full h-auto object-cover" />
            </div>
            <div className="text-center bg-white rounded-xl ring-1 ring-slate-200 p-6 sm:p-8">
              <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900">{t('visionPage.leadership.title')}</h2>
              <p className="mt-3 text-xl sm:text-2xl text-gray-700">{t('visionPage.leadership.subtitle')}</p>
              <p className="mt-6 text-lg text-gray-800 leading-8 max-w-2xl mx-auto">{t('visionPage.leadership.body')}</p>
              <p className="mt-6 text-lg italic text-gray-700 max-w-2xl mx-auto">{t('visionPage.leadership.cta')}</p>
            </div>
          </div>
        </div>
      </section>
      {/* Closing quote / commas line */}
      <section className="py-12 md:py-16 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <blockquote className="text-center max-w-5xl mx-auto text-pink-600 italic leading-relaxed">
            <p className="text-3xl sm:text-4xl md:text-5xl font-medium">{t('visionPage.quote.title')}</p>
            <p className="mt-6 text-2xl sm:text-3xl md:text-4xl">{t('visionPage.quote.body')}</p>
          </blockquote>
        </div>
      </section>
  {/* Solutions and audiences section (moved to bottom) */}
  <section className="py-12 md:py-16 bg-white">
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-8 text-gray-800 leading-8 text-lg">
        <p>{t('visionPage.solutions.intro1')}</p>
        <p>{t('visionPage.solutions.intro2')}</p>

        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">{t('visionPage.solutions.medical.title')}</h3>
          <p>{t('visionPage.solutions.medical.body')}</p>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">{t('visionPage.solutions.home.title')}</h3>
          <p>{t('visionPage.solutions.home.intro')}</p>
          <ul className="list-disc pl-6 space-y-2">
            {t('visionPage.solutions.home.points', { returnObjects: true }).map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">{t('visionPage.solutions.audience.title')}</h3>
          <p>{t('visionPage.solutions.audience.intro')}</p>
          <ul className="list-disc pl-6 space-y-2">
            {t('visionPage.solutions.audience.items', { returnObjects: true }).map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}
