function UtilityBar() {
  return (
    <div className="bg-teal-800 text-teal-50 text-xs">
      <div className="container-page flex items-center justify-end gap-4 py-1">
        <a href="#" className="hover:underline">Om oss</a>
        <a href="#" className="hover:underline">Bestill demo</a>
        <a href="#" className="hover:underline">Kontakt oss</a>
        <a href="#" className="hover:underline">Personvernerklæring</a>
        <a href="#" className="hover:underline">Norsk</a>
      </div>
    </div>
  )
}

import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Navbar() {
  const { t, i18n } = useTranslation()
  function toggleLang() {
    const next = i18n.language === 'no' ? 'en' : 'no'
    i18n.changeLanguage(next)
    localStorage.setItem('lang', next)
  }
  return (
    <header>
      <UtilityBar />
      <div className="bg-teal-700 text-white">
        <div className="container-page flex items-center justify-between py-3">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-white/20" />
            <Link to="/" className="font-semibold">NordicMedTek</Link>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <NavLink to="/" className={({isActive})=> isActive? 'underline' : 'hover:underline'}>{t('nav.home')}</NavLink>
            <NavLink to="/private" className={({isActive})=> isActive? 'underline' : 'hover:underline'}>{t('nav.private')}</NavLink>
            <NavLink to="/municipality" className={({isActive})=> isActive? 'underline' : 'hover:underline'}>{t('nav.municipality')}</NavLink>
            <NavLink to="/company" className={({isActive})=> isActive? 'underline' : 'hover:underline'}>{t('nav.company')}</NavLink>
            <NavLink to="/partners" className={({isActive})=> isActive? 'underline' : 'hover:underline'}>{t('nav.partners')}</NavLink>
            <NavLink to="/products" className={({isActive})=> isActive? 'underline' : 'hover:underline'}>{t('nav.products')}</NavLink>
            <button onClick={toggleLang} className="ml-4 rounded bg-white/10 px-3 py-1 hover:bg-white/20">{t('nav.lang')}</button>
          </nav>
        </div>
      </div>
    </header>
  )
}

