export const seoConfig = {
  home: {
    title: 'NordicMedTek - Nordic Medical Technologies',
    description: 'Leading provider of medical technology solutions including fall detection systems, alarm buttons, and healthcare monitoring devices for elderly care in Nordic countries.',
    keywords: 'medical technology, fall detection, alarm systems, healthcare monitoring, elderly care, Nordic medical devices, safety solutions',
    type: 'website'
  },
  products: {
    title: 'Medical Technology Products',
    description: 'Comprehensive range of medical technology products including fall sensors, alarm buttons, and monitoring systems for healthcare professionals and elderly care.',
    keywords: 'medical devices, fall sensors, alarm buttons, monitoring systems, healthcare technology, medical equipment',
    type: 'website'
  },
  municipality: {
    title: 'Municipality Solutions',
    description: 'Complete healthcare technology solutions for municipalities including elderly care monitoring, fall detection systems, and alarm communication.',
    keywords: 'municipality healthcare, elderly care solutions, municipal technology, public healthcare, community care',
    type: 'website'
  },
  private: {
    title: 'Private Healthcare Solutions',
    description: 'Personal medical technology solutions for private healthcare including home monitoring, fall detection, and emergency alarm systems.',
    keywords: 'private healthcare, home monitoring, personal medical devices, private care solutions, home safety',
    type: 'website'
  },
  company: {
    title: 'About NordicMedTek',
    description: 'Learn about NordicMedTek, a leading provider of innovative medical technology solutions for healthcare professionals and elderly care in Nordic countries.',
    keywords: 'about NordicMedTek, medical technology company, healthcare innovation, Nordic medical devices, company information',
    type: 'website'
  },
  support: {
    title: 'Support & Contact',
    description: 'Get technical support and contact information for NordicMedTek medical technology products and services.',
    keywords: 'technical support, customer service, contact information, product support, help center',
    type: 'website'
  },
  pricing: {
    title: 'Pricing & Plans',
    description: 'View pricing information and service plans for NordicMedTek medical technology solutions and healthcare monitoring systems.',
    keywords: 'pricing, service plans, medical technology costs, healthcare solutions pricing, subscription plans',
    type: 'website'
  },
  evidence: {
    title: 'Clinical Evidence & Research',
    description: 'Clinical evidence, research studies, and scientific data supporting the effectiveness of NordicMedTek medical technology solutions.',
    keywords: 'clinical evidence, medical research, scientific studies, healthcare effectiveness, clinical trials',
    type: 'website'
  },
  fallalarm: {
    title: 'Fall Detection Systems',
    description: 'Advanced fall detection systems and sensors for elderly care, providing immediate alerts and monitoring for healthcare professionals.',
    keywords: 'fall detection, fall sensors, elderly fall monitoring, healthcare alerts, safety systems',
    type: 'website'
  },
  alarmButtons: {
    title: 'Emergency Alarm Buttons',
    description: 'Emergency alarm button systems for elderly care and healthcare facilities, providing instant communication with healthcare professionals.',
    keywords: 'emergency buttons, alarm systems, healthcare communication, elderly safety, emergency response',
    type: 'website'
  }
}

export const structuredDataTemplates = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "NordicMedTek",
    "description": "Leading provider of medical technology solutions for healthcare professionals and elderly care",
    "url": "https://www.nordicmedtek.no",
    "logo": "https://www.nordicmedtek.no/assets/NordicMedical_Logo-YPRtnose.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "availableLanguage": ["English", "Norwegian"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "NO"
    }
  },
  product: (productName, description) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    "name": productName,
    "description": description,
    "category": "Medical Technology",
    "brand": {
      "@type": "Brand",
      "name": "NordicMedTek"
    }
  }),
  service: (serviceName, description) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "NordicMedTek"
    }
  })
}
