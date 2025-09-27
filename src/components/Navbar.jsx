

import { Link, NavLink, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import logo from '../assets/logo_and_text__high_quality.svg'

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const location = useLocation()
  
  function toggleLang() {
    const next = i18n.language === 'no' ? 'en' : 'no'
    i18n.changeLanguage(next)
    localStorage.setItem('lang', next)
  }

  // Custom functions to determine if each main section should be active
  const isPrivateActive = (isActive) => {
    if (isActive) return true
    // Private section sub-pages
    const privateSubPages = ['/alarm-communication', '/medical-followup', '/safety-solutions', '/fallalarm', '/experiences']
    return privateSubPages.includes(location.pathname)
  }

  const isMunicipalityActive = (isActive) => {
    if (isActive) return true
    // Municipality section sub-pages
    const municipalitySubPages = ['/municipality-details', '/municipality-knowledge', '/procurement-manager', '/health-personnel', '/it-welfare-technology', '/municipal-benefits', '/demo', '/politicians']
    return municipalitySubPages.includes(location.pathname)
  }

  const isCompanyActive = (isActive) => {
    if (isActive) return true
    // Company section sub-pages
    const companySubPages = ['/products', '/guidance', '/documents', '/pricing', '/support', '/evidence']
    return companySubPages.includes(location.pathname)
  }

  const isPartnersActive = (isActive) => {
    if (isActive) return true
    // Partners section sub-pages (currently none, but keeping for future expansion)
    const partnersSubPages = []
    return partnersSubPages.includes(location.pathname)
  }
  return (
    <header>
      <div className="bg-teal-800 text-gray-200 text-xs w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8 flex items-center justify-end gap-6 py-2">
          <Link to="/company" className="hover:underline">{t('util.about')}</Link>
          <Link to="/demo" className="hover:underline">{t('util.demo')}</Link>
          <Link to="/guidance" className="hover:underline">{t('util.contact')}</Link>
          <Link to="/documents" className="hover:underline">{t('util.privacy')}</Link>
          <button onClick={toggleLang} className="hover:underline">{t('nav.lang')}</button>
        </div>
      </div>
      <div className="bg-teal-700 text-white w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8 flex items-center gap-98 py-4">
                       <div className="flex items-center w-72 relative overflow-visible">
                         <img src={logo} alt="NordicMedTek" className="h-12 w-auto" style={{ transform: 'scaleX(2) scaleY(1.9)', transformOrigin: 'left center' }} />
                       </div>
          <nav className="flex items-center gap-20 text-base">
            <NavLink to="/" end className={({isActive})=> isActive? 'underline' : 'hover:underline'}>{t('nav.home')}</NavLink>
            <NavLink to="/private" className={({isActive})=> isPrivateActive(isActive)? 'underline' : 'hover:underline'}>{t('nav.private')}</NavLink>
            <NavLink to="/municipality" className={({isActive})=> isMunicipalityActive(isActive)? 'underline' : 'hover:underline'}>{t('nav.municipality')}</NavLink>
            <NavLink to="/company" className={({isActive})=> isCompanyActive(isActive)? 'underline' : 'hover:underline'}>{t('nav.company')}</NavLink>
            <NavLink to="/partners" className={({isActive})=> isPartnersActive(isActive)? 'underline' : 'hover:underline'}>{t('nav.partners')}</NavLink>
          </nav>
        </div>
      </div>
    </header>
  )
}

