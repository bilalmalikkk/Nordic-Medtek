import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Function to force scroll to top with multiple methods
    const scrollToTop = () => {
      // Method 1: Standard window scroll
      window.scrollTo(0, 0)
      
      // Method 2: Document element scroll
      if (document.documentElement) {
        document.documentElement.scrollTop = 0
      }
      
      // Method 3: Document body scroll
      if (document.body) {
        document.body.scrollTop = 0
      }
      
      // Method 4: Try with smooth behavior
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }

    // Immediate scroll
    scrollToTop()
    
    // Delayed scroll to handle any async rendering
    const timeout1 = setTimeout(scrollToTop, 50)
    const timeout2 = setTimeout(scrollToTop, 100)
    const timeout3 = setTimeout(scrollToTop, 200)
    
    // Cleanup timeouts
    return () => {
      clearTimeout(timeout1)
      clearTimeout(timeout2)
      clearTimeout(timeout3)
    }
  }, [pathname])

  return null
}
