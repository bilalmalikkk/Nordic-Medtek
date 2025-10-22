import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { getPageTranslation, getMainPage } from '../utils/pageTranslations'

export default function PageIndicator() {
  const location = useLocation()
  const { t, i18n, ready } = useTranslation()
  
  const mainPage = getMainPage(location.pathname)
  const currentPage = location.pathname
  
  // Hide page indicator for IT Welfare Technology, Demo, Guidance, and Experiences pages
  if (currentPage === '/it-welfare-technology' || currentPage === '/demo' || currentPage === '/guidance' || currentPage === '/experiences') return null
  
  if (!mainPage || mainPage === currentPage || !ready) return null
  
  const currentPageTitle = getPageTranslation(currentPage, t, i18n)
  
  return (
    <div className="bg-gradient-to-r from-teal-50 to-blue-50 border-b border-teal-200 py-3">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-teal-700">
              {t('nav.currentlyViewing')}: 
            </span>
            <span className="text-sm font-semibold text-teal-800">
              {currentPageTitle}
            </span>
          </div>
          <div className="text-xs text-teal-600">
            {t('nav.subpageOf')} {t(`nav.${mainPage.replace('/', '')}`)}
          </div>
        </div>
      </div>
    </div>
  )
}
