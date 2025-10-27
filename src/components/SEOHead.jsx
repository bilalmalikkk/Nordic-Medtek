import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

const SEOHead = ({ 
  title, 
  description, 
  keywords, 
  image, 
  url, 
  type = 'website',
  structuredData = null 
}) => {
  const { i18n } = useTranslation()
  const currentLanguage = i18n.language || 'en'
  
  const defaultTitle = 'NordicMedTek - Nordic Medical Technologies'
  const defaultDescription = 'Leading provider of medical technology solutions including fall detection systems, alarm buttons, and healthcare monitoring devices for elderly care in Nordic countries.'
  const defaultKeywords = 'medical technology, fall detection, alarm systems, healthcare monitoring, elderly care, Nordic medical devices, safety solutions'
  const defaultImage = '/assets/NordicMedical_Logo-YPRtnose.svg'
  const siteUrl = 'https://www.nordicmedtek.no'
  
  const finalTitle = title ? `${title} | ${defaultTitle}` : defaultTitle
  const finalDescription = description || defaultDescription
  const finalKeywords = keywords || defaultKeywords
  const finalImage = image ? `${siteUrl}${image}` : `${siteUrl}${defaultImage}`
  const finalUrl = url ? `${siteUrl}${url}` : siteUrl
  
  const jsonLd = structuredData || {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "NordicMedTek",
    "description": finalDescription,
    "url": siteUrl,
    "logo": finalImage,
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "availableLanguage": ["English", "Norwegian"]
    },
    "sameAs": [
      // Add your social media URLs here
    ]
  }

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      <meta name="language" content={currentLanguage} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="NordicMedTek" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:url" content={finalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="NordicMedTek" />
      <meta property="og:locale" content={currentLanguage === 'no' ? 'nb_NO' : 'en_US'} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalImage} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={finalUrl} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="theme-color" content="#1e40af" />
    </Helmet>
  )
}

export default SEOHead
