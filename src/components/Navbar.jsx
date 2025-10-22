

import { Link, NavLink, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import logo from '../assets/Puls_and_name.svg'
import Breadcrumb from './Breadcrumb'

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  
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
    const municipalitySubPages = ['/municipality', '/municipality-details', '/municipality-knowledge', '/procurement-manager', '/health-personnel', '/it-welfare-technology', '/municipal-benefits', '/demo', '/politicians']
    return municipalitySubPages.includes(location.pathname)
  }

  const isCompanyActive = (isActive) => {
    if (isActive) return true
    // Company section sub-pages
    const companySubPages = ['/guidance', '/documents', '/pricing', '/support', '/evidence']
    return companySubPages.includes(location.pathname)
  }

  const isProductsActive = (isActive) => {
    if (isActive) return true
    // Products section includes list, detail pages, alarm-buttons, and medical follow-up products
    return location.pathname.startsWith('/products') || location.pathname === '/alarm-buttons' || location.pathname === '/trygghet-og-fallsikring' || location.pathname === '/medical-followup-products'
  }

  const isPartnersActive = (isActive) => {
    if (isActive) return true
    // Partners section sub-pages (currently none, but keeping for future expansion)
    const partnersSubPages = []
    return partnersSubPages.includes(location.pathname)
  }
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const subpages = {
    private: [
      { path: '/alarm-communication', key: 'pageTitles.alarmCommunication' },
      { path: '/medical-followup', key: 'pageTitles.medicalFollowup' },
      { path: '/safety-solutions', key: 'pageTitles.safetySolutions' },
      { path: '/fallalarm', key: 'pageTitles.fallalarm' },
      { path: '/experiences', key: 'pageTitles.experiences' }
    ],
    municipality: [
      { path: '/municipality-details', key: 'pageTitles.municipalityDetails' },
      { path: '/municipality-knowledge', key: 'pageTitles.municipalityKnowledge' },
      { path: '/procurement-manager', key: 'pageTitles.procurementManager' },
      { path: '/health-personnel', key: 'pageTitles.healthPersonnel' },
      { path: '/it-welfare-technology', key: 'pageTitles.itWelfareTechnology' },
      { path: '/municipal-benefits', key: 'pageTitles.municipalBenefits' },
      { path: '/demo', key: 'pageTitles.demo' },
      { path: '/politicians', key: 'pageTitles.politicians' }
    ],
    company: [
      { path: '/guidance', key: 'pageTitles.guidance' },
      { path: '/documents', key: 'pageTitles.documents' },
      { path: '/pricing', key: 'pageTitles.pricing' },
      { path: '/support', key: 'pageTitles.support' },
      { path: '/evidence', key: 'pageTitles.evidence' }
    ],
    products: [
      { path: '/alarm-buttons', key: 'pageTitles.alarmButtons' },
      { path: '/trygghet-og-fallsikring', key: 'pageTitles.trygghetOgFallsikring' },
      { path: '/medical-followup-products', key: 'pageTitles.medicalFollowupProducts' }
    ]
  }

  const getCurrentPageTitle = () => {
    const pageMappings = {
      '/alarm-communication': 'pages.alarmCommunication',
      '/medical-followup': 'pages.medicalFollowup',
      '/safety-solutions': 'pages.safetySolutions',
      '/fallalarm': 'pages.fallalarm',
      '/experiences': 'pages.experiences',
      '/municipality-details': 'pages.municipalityDetails',
      '/municipality-knowledge': 'pages.municipalityKnowledge',
      '/procurement-manager': 'pages.procurementManager',
      '/health-personnel': 'pages.healthPersonnel',
      '/it-welfare-technology': 'pages.itWelfareTechnology',
      '/municipal-benefits': 'pages.municipalBenefits',
      '/demo': 'pages.demo',
      '/politicians': 'pages.politicians',
      '/guidance': 'pages.guidance',
      '/documents': 'pages.documents',
      '/pricing': 'pages.pricing',
      '/support': 'pages.support',
      '/evidence': 'pages.evidence',
      '/alarm-buttons': 'pages.alarmButtons',
      '/trygghet-og-fallsikring': 'pages.trygghetOgFallsikring',
      '/medical-followup-products': 'pages.medicalFollowupProducts',
      '/easeblink': 'pages.easeblink'
    }
    
    const mainPage = getMainPage(location.pathname)
    if (mainPage && mainPage !== location.pathname) {
      return pageMappings[location.pathname] ? t(pageMappings[location.pathname]) : location.pathname.replace('/', '')
    }
    return null
  }

  const getMainPage = (pathname) => {
    if (pathname === '/') return null
    
    const privateSubPages = ['/alarm-communication', '/medical-followup', '/safety-solutions', '/fallalarm', '/experiences']
    const municipalitySubPages = ['/municipality', '/municipality-details', '/municipality-knowledge', '/procurement-manager', '/health-personnel', '/it-welfare-technology', '/municipal-benefits', '/demo', '/politicians']
    const companySubPages = ['/guidance', '/documents', '/pricing', '/support', '/evidence']
    const productsSubPages = ['/alarm-buttons', '/trygghet-og-fallsikring', '/medical-followup-products']
    
    if (privateSubPages.includes(pathname)) return '/private'
    if (municipalitySubPages.includes(pathname)) return '/kommune1'
    if (companySubPages.includes(pathname)) return '/company'
    if (productsSubPages.includes(pathname) || pathname.startsWith('/products')) return '/products'
    
    return pathname
  }

  // Check if current page is guidance or experiences page
  const isGuidancePage = location.pathname === '/guidance'
  const isExperiencesPage = location.pathname === '/experiences'

  return (
    <header className="w-screen">
      {/* Top utility bar */}
      <div className="bg-teal-800 text-gray-200 text-sm w-full">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-end gap-8 lg:gap-12 py-3">
          <Link to="/vision" className="hover:opacity-80 transition-opacity">Om oss</Link>
          <Link to="/products" className="hover:opacity-80 transition-opacity">Våre produkter</Link>
          <Link to="/demo" className="hover:opacity-80 transition-opacity">Book demo</Link>
          <Link to="/documents" className="hover:opacity-80 transition-opacity">Kontakt oss</Link>
          <Link to="/privacy" className="hover:opacity-80 transition-opacity">Personvernerklæring</Link>
          <button onClick={toggleLang} className="hover:opacity-80 transition-opacity">{t('nav.lang')}</button>
        </div>
      </div>
      
      {/* Main navigation */}
      <div className="bg-teal-700 text-white w-full">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
            <img 
              src={logo} 
              alt="NordicMedTek" 
              className="h-10 md:h-12 lg:h-14 w-auto" 
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-12 xl:gap-16 text-base lg:text-lg absolute left-1/2 transform -translate-x-1/2">
            <NavLink to="/private" className={isPrivateActive(location.pathname === '/private') ? 'font-semibold border-b-2 border-white pb-1' : 'hover:opacity-80 transition-opacity'}>
              {t('nav.private')}
            </NavLink>

            <NavLink to="/kommune1" className={isMunicipalityActive(location.pathname === '/kommune1') ? 'font-semibold border-b-2 border-white pb-1' : 'hover:opacity-80 transition-opacity'}>
              {t('nav.municipality')}
            </NavLink>

            <NavLink to="/company" className={isCompanyActive(location.pathname === '/company') ? 'font-semibold border-b-2 border-white pb-1' : 'hover:opacity-80 transition-opacity'}>
              {t('nav.company')}
            </NavLink>
          </nav>

          {/* Mobile menu button and language toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <button onClick={toggleLang} className="text-sm hover:underline">{t('nav.lang')}</button>
            <button
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded-md p-2 transition-all duration-300 hover:bg-teal-600 hover:scale-110"
              aria-label="Toggle mobile menu"
            >
              <svg
                className={`w-6 h-6 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-180' : 'rotate-0'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden bg-teal-600 border-t border-teal-500 transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen 
            ? 'max-h-screen opacity-100' 
            : 'max-h-0 opacity-0'
        }`}>
          <nav className="px-4 py-4 space-y-2">
              <NavLink 
                to="/" 
                end 
                className={({isActive})=> `block py-2 px-3 rounded-md text-base transition-all duration-200 transform hover:scale-105 ${isActive? 'bg-teal-500 text-white' : 'text-gray-200 hover:bg-teal-500 hover:text-white'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.home')}
              </NavLink>
              <NavLink 
                to="/private" 
                className={({isActive})=> `block py-2 px-3 rounded-md text-base transition-all duration-200 transform hover:scale-105 ${isPrivateActive(isActive)? 'bg-teal-500 text-white' : 'text-gray-200 hover:bg-teal-500 hover:text-white'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.private')}
              </NavLink>
              <NavLink 
                to="/kommune1" 
                className={({isActive})=> `block py-2 px-3 rounded-md text-base transition-all duration-200 transform hover:scale-105 ${isMunicipalityActive(isActive)? 'bg-teal-500 text-white' : 'text-gray-200 hover:bg-teal-500 hover:text-white'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.municipality')}
              </NavLink>
              <NavLink 
                to="/company" 
                className={({isActive})=> `block py-2 px-3 rounded-md text-base transition-all duration-200 transform hover:scale-105 ${isCompanyActive(isActive)? 'bg-teal-500 text-white' : 'text-gray-200 hover:bg-teal-500 hover:text-white'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.company')}
              </NavLink>
              <NavLink 
                to="/products" 
                className={({isActive})=> `block py-2 px-3 rounded-md text-base transition-all duration-200 transform hover:scale-105 ${isProductsActive(isActive)? 'bg-teal-500 text-white' : 'text-gray-200 hover:bg-teal-500 hover:text-white'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.products')}
              </NavLink>
              <NavLink 
                to="/partners" 
                className={({isActive})=> `block py-2 px-3 rounded-md text-base transition-all duration-200 transform hover:scale-105 ${isPartnersActive(isActive)? 'bg-teal-500 text-white' : 'text-gray-200 hover:bg-teal-500 hover:text-white'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.partners')}
              </NavLink>
              
              {/* Mobile utility links */}
              <div className="pt-4 border-t border-teal-500 mt-4">
                <Link 
                  to="/vision" 
                  className="block py-2 px-3 rounded-md text-sm text-gray-200 hover:bg-teal-500 hover:text-white transition-all duration-200 transform hover:scale-105"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('util.about')}
                </Link>
                <Link 
                  to="/demo" 
                  className="block py-2 px-3 rounded-md text-sm text-gray-200 hover:bg-teal-500 hover:text-white transition-all duration-200 transform hover:scale-105"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('util.demo')}
                </Link>
                <Link 
                  to="/documents" 
                  className="block py-2 px-3 rounded-md text-sm text-gray-200 hover:bg-teal-500 hover:text-white transition-all duration-200 transform hover:scale-105"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('util.contact')}
                </Link>
                <Link 
                  to="/privacy" 
                  className="block py-2 px-3 rounded-md text-sm text-gray-200 hover:bg-teal-500 hover:text-white transition-all duration-200 transform hover:scale-105"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('util.privacy')}
                </Link>
              </div>
            </nav>
          </div>
      </div>
      
      {/* Breadcrumb for subpages - hide for guidance and experiences pages */}
      {!isGuidancePage && !isExperiencesPage && <Breadcrumb />}
    </header>
  )
}

