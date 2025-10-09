import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import emailjs from '@emailjs/browser'

export default function NewContactForm() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    whoFor: [],
    concerns: '',
    description: '',
    newsletters: []
  })

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: checked 
          ? [...prev[name], value]
          : prev[name].filter(item => item !== value)
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      // EmailJS configuration
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id'
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id'
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key'

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        who_for: formData.whoFor.join(', '),
        concerns: formData.concerns,
        description: formData.description,
        newsletters: formData.newsletters.join(', '),
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
        alert('Henvendelse sendt! Vi kontakter deg vanligvis samme eller neste virkedag.')
        setFormData({
          name: '',
          phone: '',
          email: '',
          whoFor: [],
          concerns: '',
          description: '',
          newsletters: []
        })
      } else {
        alert('Det oppstod en feil. Prøv igjen senere.')
      }
    } catch (error) {
      console.error('Contact form error:', error)
      alert('Det oppstod en feil. Prøv igjen senere.')
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          {t('medicalFollowupProducts.contactForm.title')}
        </h2>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          {t('medicalFollowupProducts.contactForm.subtitle')}
        </h3>
        <p className="text-xl text-gray-700 leading-relaxed">
          {t('medicalFollowupProducts.contactForm.description')}
        </p>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Personal Information */}
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <label className="block text-lg font-medium text-gray-900 mb-2">{t('medicalFollowupProducts.contactForm.name')}</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder={t('medicalFollowupProducts.contactForm.name')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-900 mb-2">{t('medicalFollowupProducts.contactForm.phone')}</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+47 xx xx xx xx"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-900 mb-2">{t('medicalFollowupProducts.contactForm.email')}</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="test@gmail.com"
              className="w-full px-4 py-3 border border-orange-400 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
        </div>

        {/* Who is this for */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4">{t('medicalFollowupProducts.contactForm.whoFor')}</h3>
          <div className="space-y-3">
            {['Far', 'Mor', 'Begge'].map((option) => (
              <label key={option} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="whoFor"
                  value={option.toLowerCase()}
                  checked={formData.whoFor.includes(option.toLowerCase())}
                  onChange={handleInputChange}
                  className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-lg text-gray-900">{option}</span>
              </label>
            ))}
          </div>
        </div>

        {/* What are you most concerned about */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4">{t('medicalFollowupProducts.contactForm.concerns')}</h3>
          <div className="space-y-3">
            {[
              'Fall i hjemmet',
              'At de ikke får varslet hvis noe skjer',
              'Hjerte, pust eller andre helseverdier',
              'Alt over'
            ].map((option) => (
              <label key={option} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="concerns"
                  value={option}
                  checked={formData.concerns === option}
                  onChange={handleInputChange}
                  className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="text-lg text-gray-900">{option}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Description */}
        <div>
          <h3 className="text-lg text-gray-900 mb-3">{t('medicalFollowupProducts.contactForm.description')}</h3>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Din melding"
            rows="4"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Newsletter options */}
        <div>
          <h3 className="text-lg text-gray-900 mb-4">{t('medicalFollowupProducts.contactForm.newsletters')}</h3>
          <div className="space-y-3">
            {[
              'E-post om produkter',
              'E-post med nyheter og oppdateringer',
              'E-post med Markedsføring'
            ].map((option) => (
              <label key={option} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="newsletters"
                  value={option.toLowerCase().replace(/[^a-z]/g, '')}
                  checked={formData.newsletters.includes(option.toLowerCase().replace(/[^a-z]/g, ''))}
                  onChange={handleInputChange}
                  className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-lg text-gray-900">{option}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-gray-800 hover:bg-gray-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200"
          >
            {t('medicalFollowupProducts.contactForm.submit')}
          </button>
          <p className="mt-4 text-lg text-gray-700">
            {t('medicalFollowupProducts.contactForm.footer')}
          </p>
        </div>
      </form>
    </div>
  )
}
