import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function ContactForm({ title, desc, typeOptions, footerNote }) {
  const { t } = useTranslation()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const computedTypeOptions = typeOptions || [
    { value: 'gratis', label: t('form.type.free') },
    { value: 'mote', label: t('form.type.meeting') },
    { value: 'generell', label: t('form.type.general') },
  ]
  const typeValues = computedTypeOptions.map((o) => o.value)

  const schema = z.object({
    type: z.enum(typeValues),
    name: z.string().min(2),
    phone: z.string().min(6),
    email: z.string().email(),
    description: z.string().min(5),
    newsletters: z.array(z.enum(['produkter', 'nyheter', 'marked'])).optional(),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(schema), defaultValues: { type: typeValues[0] } })

  async function onSubmit(values) {
    setIsSubmitting(true)
    setSubmitMessage('')
    
    try {
      // EmailJS configuration
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id'
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id'
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key'

      // Prepare template parameters
      const templateParams = {
        from_name: values.name,
        from_email: values.email,
        phone: values.phone,
        type: values.type,
        description: values.description,
        newsletters: values.newsletters ? values.newsletters.join(', ') : '',
        to_email: 'bilalmalik746429@gmail.com',
        time: new Date().toLocaleString('no-NO')
      }

      // Send email using EmailJS
      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      )

      if (result.status === 200) {
        setSubmitMessage('Henvendelse sendt! Vi kontakter deg snart.')
        reset()
      } else {
        setSubmitMessage('Det oppstod en feil. Prøv igjen senere.')
      }
    } catch (error) {
      console.error('Contact form error:', error)
      setSubmitMessage('Det oppstod en feil. Prøv igjen senere.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="form-section w-full px-8">
      <div className="text-center mb-16 animate-fade-in-down">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">{title || t('form.title')}</h2>
        <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full mb-6 animate-scale-in animate-delay-200"></div>
        <p className="text-xl text-gray-700 animate-fade-in-up animate-delay-300">{desc || t('form.desc')}</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-2xl shadow-2xl border border-blue-200 animate-fade-in-up animate-delay-400 hover-lift">
        {/* Request Type Selection */}
        <div className="mb-8">
          <label className="block text-lg font-medium text-gray-900 mb-4">{t('form.type.legend')}</label>
          <div className="space-y-3">
            {computedTypeOptions.map((opt) => (
              <label key={opt.value} className="flex items-center space-x-3 cursor-pointer">
                <input 
                  type="radio" 
                  value={opt.value} 
                  {...register('type')} 
                  className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="text-lg text-gray-900">{opt.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Input Fields */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div>
            <input 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
              placeholder={t('form.name')} 
              {...register('name')} 
            />
            {errors.name && <p className="form-error mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <input 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
              placeholder={t('form.phone')} 
              {...register('phone')} 
            />
            {errors.phone && <p className="form-error mt-1">{errors.phone.message}</p>}
          </div>

          <div>
            <input 
              className="w-full px-4 py-3 border border-orange-400 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500" 
              placeholder="test@gmail.com" 
              {...register('email')} 
            />
            {errors.email && <p className="form-error mt-1">{errors.email.message}</p>}
          </div>
        </div>

        {/* Description */}
        <div className="mb-8">
          <label className="block text-lg font-medium text-gray-900 mb-3">{t('form.description.label')}</label>
          <textarea 
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-32" 
            placeholder={t('form.description.ph')} 
            {...register('description')} 
          />
          {errors.description && <p className="form-error mt-1">{errors.description.message}</p>}
        </div>

        {/* Newsletter Checkboxes */}
        <div className="mb-8">
          <label className="block text-lg font-medium text-gray-900 mb-4">{t('form.news.legend')}</label>
          <div className="space-y-3">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input 
                type="checkbox" 
                value="produkter" 
                {...register('newsletters')} 
                className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-lg text-gray-900">{t('form.news.p')}</span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer">
              <input 
                type="checkbox" 
                value="nyheter" 
                {...register('newsletters')} 
                className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-lg text-gray-900">{t('form.news.n')}</span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer">
              <input 
                type="checkbox" 
                value="marked" 
                {...register('newsletters')} 
                className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-lg text-gray-900">{t('form.news.m')}</span>
            </label>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mb-8">
          <p className="text-sm text-gray-600 mb-2">Alle henvendelser er uforpliktende. Du binder deg ikke til noe.</p>
          <p className="text-sm text-gray-600">Vi svarer så raskt vi kan</p>
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          disabled={isSubmitting}
          className={`w-full px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl ${
            isSubmitting 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 hover:scale-105'
          } text-white`}
        >
          {isSubmitting ? 'Sender...' : t('form.submit')}
        </button>

        {/* Success/Error Message */}
        {submitMessage && (
          <div className={`mt-4 p-4 rounded-lg text-center ${
            submitMessage.includes('sendt') 
              ? 'bg-green-100 text-green-800 border border-green-200' 
              : 'bg-red-100 text-red-800 border border-red-200'
          }`}>
            {submitMessage}
          </div>
        )}
      </form>

      {footerNote && <p className="mt-8 text-sm text-slate-600 text-center">{footerNote}</p>}
    </section>
  )
}

