import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslation } from 'react-i18next'

const schema = z.object({
  type: z.enum(['gratis', 'mote', 'generell']),
  name: z.string().min(2),
  phone: z.string().min(6),
  email: z.string().email(),
  confirmEmail: z.string().email(),
  description: z.string().min(5),
  newsletters: z.array(z.enum(['produkter', 'nyheter', 'marked'])).optional(),
}).refine((d) => d.email === d.confirmEmail, {
  path: ['confirmEmail'],
  message: 'E-postene matcher ikke',
})

export default function ContactForm() {
  const { t } = useTranslation()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(schema), defaultValues: { type: 'gratis' } })

  function onSubmit(values) {
    console.log('submit', values)
    alert('Henvendelse sendt!')
    reset()
  }

  return (
    <section className="form-section">
      <h2 className="form-heading">{t('form.title')}</h2>
      <p className="form-subheading">{t('form.desc')}</p>

      <form onSubmit={handleSubmit(onSubmit)} className="form-grid">
        <fieldset className="grid gap-3">
          <legend className="font-medium">{t('form.type.legend')}</legend>
          <div className="grid sm:grid-cols-3 gap-4">
            <label className="form-radio">
              <input type="radio" value="gratis" {...register('type')} />
              <span>{t('form.type.free')}</span>
            </label>
            <label className="form-radio">
              <input type="radio" value="mote" {...register('type')} />
              <span>{t('form.type.meeting')}</span>
            </label>
            <label className="form-radio">
              <input type="radio" value="generell" {...register('type')} />
              <span>{t('form.type.general')}</span>
            </label>
          </div>
        </fieldset>

        <div className="form-field-grid">
          <input className="form-input" placeholder={t('form.name')} {...register('name')} />
          {errors.name && <p className="form-error">{errors.name.message}</p>}

          <input className="form-input" placeholder={t('form.phone')} {...register('phone')} />
          {errors.phone && <p className="form-error">{errors.phone.message}</p>}

          <input className="form-input" placeholder={t('form.email')} {...register('email')} />
          {errors.email && <p className="form-error">{errors.email.message}</p>}

          <input className="form-input" placeholder={t('form.confirm')} {...register('confirmEmail')} />
          {errors.confirmEmail && <p className="form-error">{errors.confirmEmail.message}</p>}

          <div className="md:col-span-2">
            <label className="form-label">{t('form.description.label')}</label>
            <textarea className="form-textarea" placeholder={t('form.description.ph')} {...register('description')} />
          </div>
          {errors.description && <p className="form-error">{errors.description.message}</p>}
        </div>

        <fieldset className="grid gap-2">
          <legend className="font-medium">{t('form.news.legend')}</legend>
          <label className="form-checkbox">
            <input type="checkbox" value="produkter" {...register('newsletters')} /> {t('form.news.p')}
          </label>
          <label className="form-checkbox">
            <input type="checkbox" value="nyheter" {...register('newsletters')} /> {t('form.news.n')}
          </label>
          <label className="form-checkbox">
            <input type="checkbox" value="marked" {...register('newsletters')} /> {t('form.news.m')}
          </label>
        </fieldset>

        <p className="form-subcopy">{t('form.note')}</p>

        <button type="submit" className="btn-primary w-max">{t('form.submit')}</button>
      </form>
    </section>
  )
}

