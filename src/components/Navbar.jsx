function UtilityBar({ onToggleLang, labels }) {
  return (
    <div className="bg-teal-800 text-teal-50 text-xs">
      <div className="container-page flex items-center justify-end gap-4 py-1">
        <Link to="/company" className="hover:underline">{labels.about}</Link>
        <Link to="/demo" className="hover:underline">{labels.demo}</Link>
        <Link to="/guidance" className="hover:underline">{labels.contact}</Link>
        <Link to="/documents" className="hover:underline">{labels.privacy}</Link>
        <button onClick={onToggleLang} className="hover:underline">{labels.lang}</button>
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
      <UtilityBar
        onToggleLang={toggleLang}
        labels={{
          about: t('util.about'),
          demo: t('util.demo'),
          contact: t('util.contact'),
          privacy: t('util.privacy'),
          lang: t('nav.lang'),
        }}
      />
      <div className="bg-teal-700 text-white">
        <div className="container-page grid grid-cols-3 items-center py-3">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-white/20" />
            <Link to="/" className="font-semibold">NordicMedTek</Link>
          </div>
          <nav className="hidden md:flex items-center justify-center gap-10 text-sm">
            <NavLink to="/" className={({isActive})=> isActive? 'underline' : 'hover:underline'}>{t('nav.home')}</NavLink>
            <NavLink to="/private" className={({isActive})=> isActive? 'underline' : 'hover:underline'}>{t('nav.private')}</NavLink>
            <NavLink to="/municipality" className={({isActive})=> isActive? 'underline' : 'hover:underline'}>{t('nav.municipality')}</NavLink>
            <NavLink to="/company" className={({isActive})=> isActive? 'underline' : 'hover:underline'}>{t('nav.company')}</NavLink>
            <NavLink to="/partners" className={({isActive})=> isActive? 'underline' : 'hover:underline'}>{t('nav.partners')}</NavLink>
          </nav>
          <div className="hidden md:flex justify-end">
            <div className="relative group text-sm">
              <button className="hover:underline">{t('nav.resources')}</button>
              <div className="absolute right-0 top-full mt-2 hidden w-60 rounded-md border border-slate-200 bg-white p-1 text-slate-900 shadow-lg group-hover:block">
                <Link to="/guidance" className="block rounded px-3 py-2 hover:bg-slate-50">{t('nav.guidance')}</Link>
                <Link to="/demo" className="block rounded px-3 py-2 hover:bg-slate-50">{t('nav.demo')}</Link>
                <Link to="/experiences" className="block rounded px-3 py-2 hover:bg-slate-50">{t('nav.experiences')}</Link>
                <Link to="/documents" className="block rounded px-3 py-2 hover:bg-slate-50">{t('nav.documents')}</Link>
                <Link to="/pricing" className="block rounded px-3 py-2 hover:bg-slate-50">{t('nav.pricing')}</Link>
                <Link to="/support" className="block rounded px-3 py-2 hover:bg-slate-50">{t('nav.support')}</Link>
                <Link to="/evidence" className="block rounded px-3 py-2 hover:bg-slate-50">{t('nav.evidence')}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

