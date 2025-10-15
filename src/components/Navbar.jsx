

import { Link, NavLink, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import logo from '../assets/logo_and_text__high_quality.svg'
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
    const municipalitySubPages = ['/municipality-details', '/municipality-knowledge', '/procurement-manager', '/health-personnel', '/it-welfare-technology', '/municipal-benefits', '/demo', '/politicians']
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
    const municipalitySubPages = ['/municipality-details', '/municipality-knowledge', '/procurement-manager', '/health-personnel', '/it-welfare-technology', '/municipal-benefits', '/demo', '/politicians']
    const companySubPages = ['/guidance', '/documents', '/pricing', '/support', '/evidence']
    const productsSubPages = ['/alarm-buttons', '/trygghet-og-fallsikring', '/medical-followup-products']
    
    if (privateSubPages.includes(pathname)) return '/private'
    if (municipalitySubPages.includes(pathname)) return '/municipality'
    if (companySubPages.includes(pathname)) return '/company'
    if (productsSubPages.includes(pathname) || pathname.startsWith('/products')) return '/products'
    
    return pathname
  }

  return (
    <header className="w-screen">
      {/* Top utility bar - hidden on mobile */}
      <div className="bg-teal-800 text-gray-200 text-xs w-full hidden md:block">
        <div className="w-full px-4 sm:px-6 lg:px-8 flex items-center justify-end gap-6 py-2">
          <Link to="/vision" className="hover:underline">{t('util.about')}</Link>
          <Link to="/demo" className="hover:underline">{t('util.demo')}</Link>
          <Link to="/documents" className="hover:underline">{t('util.contact')}</Link>
          <Link to="/privacy" className="hover:underline">{t('util.privacy')}</Link>
          <button onClick={toggleLang} className="hover:underline">{t('nav.lang')}</button>
        </div>
      </div>
      
      {/* Main navigation */}
      <div className="bg-teal-700 text-white w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center w-48 md:w-64 lg:w-72 relative overflow-visible">
            <img 
              src={logo} 
              alt="NordicMedTek" 
              className="h-8 md:h-10 lg:h-12 w-auto" 
              style={{ transform: 'scaleX(2) scaleY(1.9)', transformOrigin: 'left center' }} 
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-8 xl:gap-20 text-sm lg:text-base">
            <NavLink to="/" end className={({isActive})=> isActive? 'underline font-semibold' : 'hover:underline'}>{t('nav.home')}</NavLink>
            
            {/* Private Dropdown */}
            <div className="relative group">
              <NavLink to="/private" className={({isActive})=> isPrivateActive(isActive)? 'underline font-semibold relative' : 'hover:underline'}>
                {t('nav.private')}
                {isPrivateActive(false) && getCurrentPageTitle() && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-yellow-400"></span>
                )}
              </NavLink>
              <div className="absolute top-full left-0 mt-1 w-64 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  {subpages.private.map((subpage) => (
                    <Link
                      key={subpage.path}
                      to={subpage.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-colors"
                    >
                      {t(subpage.key)}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Municipality Dropdown */}
            <div className="relative group">
              <NavLink to="/municipality" className={({isActive})=> isMunicipalityActive(isActive)? 'underline font-semibold relative' : 'hover:underline'}>
                {t('nav.municipality')}
                {isMunicipalityActive(false) && getCurrentPageTitle() && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-yellow-400"></span>
                )}
              </NavLink>
              <div className="absolute top-full left-0 mt-1 w-64 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  {subpages.municipality.map((subpage) => (
                    <Link
                      key={subpage.path}
                      to={subpage.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-colors"
                    >
                      {t(subpage.key)}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Company Dropdown */}
            <div className="relative group">
              <NavLink to="/company" className={({isActive})=> isCompanyActive(isActive)? 'underline font-semibold relative' : 'hover:underline'}>
                {t('nav.company')}
                {isCompanyActive(false) && getCurrentPageTitle() && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-yellow-400"></span>
                )}
              </NavLink>
              <div className="absolute top-full left-0 mt-1 w-64 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  {subpages.company.map((subpage) => (
                    <Link
                      key={subpage.path}
                      to={subpage.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-colors"
                    >
                      {t(subpage.key)}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Products Dropdown */}
            <div className="relative group">
              <NavLink to="/products" className={({isActive})=> isProductsActive(isActive)? 'underline font-semibold relative' : 'hover:underline'}>
                {t('nav.products')}
                {isProductsActive(false) && getCurrentPageTitle() && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-yellow-400"></span>
                )}
              </NavLink>
              <div className="absolute top-full left-0 mt-1 w-64 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  {subpages.products.map((subpage) => (
                    <Link
                      key={subpage.path}
                      to={subpage.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-colors"
                    >
                      {t(subpage.key)}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <NavLink to="/partners" className={({isActive})=> isPartnersActive(isActive)? 'underline font-semibold' : 'hover:underline'}>{t('nav.partners')}</NavLink>
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
                to="/municipality" 
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
      
      {/* Breadcrumb for subpages */}
      <Breadcrumb />
    </header>
  )
}

