// Performance optimization utilities

export const optimizeImages = () => {
  // Add loading="lazy" to images
  const images = document.querySelectorAll('img')
  images.forEach(img => {
    if (!img.hasAttribute('loading')) {
      img.setAttribute('loading', 'lazy')
    }
  })
}

export const preloadCriticalResources = () => {
  // Preload critical CSS and JS
  const criticalCSS = document.createElement('link')
  criticalCSS.rel = 'preload'
  criticalCSS.href = '/assets/index-BEfc9ioo.css'
  criticalCSS.as = 'style'
  document.head.appendChild(criticalCSS)
  
  const criticalJS = document.createElement('link')
  criticalJS.rel = 'preload'
  criticalJS.href = '/assets/index-BouvkK9o.js'
  criticalJS.as = 'script'
  document.head.appendChild(criticalJS)
}

export const addPerformanceMetrics = () => {
  // Add performance monitoring
  if ('performance' in window) {
    window.addEventListener('load', () => {
      const perfData = performance.getEntriesByType('navigation')[0]
      console.log('Page Load Time:', perfData.loadEventEnd - perfData.loadEventStart)
    })
  }
}
