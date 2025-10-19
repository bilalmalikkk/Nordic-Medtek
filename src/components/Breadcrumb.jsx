import { useLocation, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { getPageTranslation, getMainPage } from '../utils/pageTranslations'

export default function Breadcrumb() {
  const location = useLocation()
  const { t, i18n, ready } = useTranslation()
  
  const mainPage = getMainPage(location.pathname, location.state)
  const currentPage = location.pathname
  
  // Hide breadcrumb for FAQ page and IT Welfare Technology page
  if (currentPage === '/faq' || currentPage === '/it-welfare-technology') return null
  
  if (!mainPage || mainPage === currentPage || !ready) return null
  
  // Map main pages to their nav translation keys
  const mainPageNavKey = mainPage === '/kommune1' 
    ? 'municipality' 
    : mainPage === '/' 
    ? 'home' 
    : mainPage.replace('/', '')
  
  return (
    <div className="bg-teal-600 text-white py-2 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center text-sm">
        <Link 
          to={mainPage} 
          className="text-teal-200 hover:text-white transition-colors duration-200"
        >
          {t(`nav.${mainPageNavKey}`)}
        </Link>
        <svg className="w-4 h-4 mx-2 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
        <span className="text-white font-medium">
          {getPageTranslation(currentPage, t, i18n)}
        </span>
      </div>
    </div>
  )
}
