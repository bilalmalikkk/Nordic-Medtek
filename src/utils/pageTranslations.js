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

// Hard fallbacks per language in case i18n keys are missing
const hardFallbacks = {
  no: {
    '/alarm-communication': 'Alarmkommunikasjon',
    '/medical-followup': 'Medisinsk oppfølging',
    '/safety-solutions': 'Sikkerhetsløsninger',
    '/fallalarm': 'Fallalarm',
    '/experiences': 'Erfaringer',
    '/municipality-details': 'Kommunedetaljer',
    '/municipality-knowledge': 'Kommunekunnskap',
    '/procurement-manager': 'Innkjøpsansvarlig',
    '/health-personnel': 'Helsepersonell',
    '/it-welfare-technology': 'IT-velferdsteknologi',
    '/municipal-benefits': 'Kommunegevinster',
    '/demo': 'Demo',
    '/politicians': 'Politikere',
    '/guidance': 'Veiledning',
    '/documents': 'Dokumenter',
    '/pricing': 'Priser',
    '/support': 'Support',
    '/evidence': 'Bevis',
    '/alarm-buttons': 'Alarmknapper',
    '/trygghet-og-fallsikring': 'Trygghet og fallsikring',
    '/medical-followup-products': 'Produkter for medisinsk oppfølging',
    '/easeblink': 'EaseBlink'
  },
  en: {
    '/alarm-communication': 'Alarm Communication',
    '/medical-followup': 'Medical Follow-up',
    '/safety-solutions': 'Safety Solutions',
    '/fallalarm': 'Fall Alarm',
    '/experiences': 'Experiences',
    '/municipality-details': 'Municipality Details',
    '/municipality-knowledge': 'Municipality Knowledge',
    '/procurement-manager': 'Procurement Manager',
    '/health-personnel': 'Health Personnel',
    '/it-welfare-technology': 'IT Welfare Technology',
    '/municipal-benefits': 'Municipal Benefits',
    '/demo': 'Demo',
    '/politicians': 'Politicians',
    '/guidance': 'Guidance',
    '/documents': 'Documents',
    '/pricing': 'Pricing',
    '/support': 'Support',
    '/evidence': 'Evidence',
    '/alarm-buttons': 'Alarm Buttons',
    '/trygghet-og-fallsikring': 'Safety & Fall Protection',
    '/medical-followup-products': 'Medical Follow-up Products',
    '/easeblink': 'EaseBlink'
  }
}

export const getPageTranslation = (pathname, t, i18n) => {
  const translationKey = pageMappings[pathname]
  if (translationKey) {
    const translated = t(translationKey)
    // If translation returns the key itself, it means the translation is missing
    if (translated !== translationKey) return translated
    const lang = (i18n?.language || 'no').startsWith('no') ? 'no' : 'en'
    const hard = hardFallbacks[lang][pathname]
    if (hard) return hard
    return pathname.replace('/', '').replace(/-/g, ' ')
  }
  return pathname.replace('/', '').replace(/-/g, ' ')
}

export const getMainPage = (pathname) => {
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
