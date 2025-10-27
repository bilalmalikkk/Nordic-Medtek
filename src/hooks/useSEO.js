import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { seoConfig } from '../config/seoConfig'

export const useSEO = (pageKey, customData = {}) => {
  const location = useLocation()
  
  useEffect(() => {
    const config = seoConfig[pageKey] || seoConfig.home
    const mergedData = { ...config, ...customData }
    
    // Update document title
    document.title = mergedData.title || 'NordicMedTek - Nordic Medical Technologies'
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', mergedData.description || '')
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]')
    if (metaKeywords) {
      metaKeywords.setAttribute('content', mergedData.keywords || '')
    }
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) {
      ogTitle.setAttribute('content', mergedData.title || '')
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]')
    if (ogDescription) {
      ogDescription.setAttribute('content', mergedData.description || '')
    }
    
    const ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl) {
      ogUrl.setAttribute('content', window.location.href)
    }
    
    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) {
      canonical.setAttribute('href', window.location.href)
    }
    
  }, [location.pathname, pageKey, customData])
  
  return seoConfig[pageKey] || seoConfig.home
}
