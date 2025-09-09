

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
      <div className="bg-teal-800 text-gray-200 text-xs">
        <div className="container-page flex items-center justify-end gap-6 py-2">
          <Link to="/company" className="hover:underline">{t('util.about')}</Link>
          <Link to="/demo" className="hover:underline">{t('util.demo')}</Link>
          <Link to="/guidance" className="hover:underline">{t('util.contact')}</Link>
          <Link to="/documents" className="hover:underline">{t('util.privacy')}</Link>
          <button onClick={toggleLang} className="hover:underline">{t('nav.lang')}</button>
        </div>
      </div>
      <div className="bg-teal-700 text-white">
        <div className="container-page flex items-center gap-64 py-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded bg-teal-500" />
            <Link to="/" className="font-bold text-lg">NordicMedTek</Link>
          </div>
          <nav className="flex items-center gap-16 text-base">
            <NavLink to="/" className={({isActive})=> isActive? 'underline' : 'hover:underline'}>{t('nav.home')}</NavLink>
            <NavLink to="/private" className={({isActive})=> isActive? 'underline' : 'hover:underline'}>{t('nav.private')}</NavLink>
            <NavLink to="/municipality" className={({isActive})=> isActive? 'underline' : 'hover:underline'}>{t('nav.municipality')}</NavLink>
            <NavLink to="/company" className={({isActive})=> isActive? 'underline' : 'hover:underline'}>{t('nav.company')}</NavLink>
            <NavLink to="/partners" className={({isActive})=> isActive? 'underline' : 'hover:underline'}>{t('nav.partners')}</NavLink>
          </nav>
        </div>
      </div>
    </header>
  )
}

