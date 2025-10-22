import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import varmeHenderImage from '../assets/varme_hender.jpg'
import NordicMedicalLogo from '../assets/NordicMedical_Logo.svg'
import OmsynLogo from '../assets/image (27).png'
import WestControlLogo from '../assets/image (28).png'
import KoperaLogo from '../assets/image (29).png'
import InventasLogo from '../assets/image (30).png'
import ValideLogo from '../assets/image (31).png'

// Helper function to render text with bold formatting
const renderBoldText = (text) => {
  const parts = text.split(/(\*\*.*?\*\*)/g)
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>
    }
    return part
  })
}

// Helper function to get company logo
const getCompanyLogo = (company) => {
  switch (company) {
    case 'nordicmedtek':
      return NordicMedicalLogo
    case 'omsyn':
      return OmsynLogo
    case 'westcontrol':
      return WestControlLogo
    case 'kopera':
      return KoperaLogo
    case 'inventas':
      return InventasLogo
    case 'valide':
      return ValideLogo
    default:
      return NordicMedicalLogo
  }
}

export default function Vision() {
  const { t } = useTranslation()
  
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full relative overflow-hidden">
        {/* Content */}
        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8" style={{backgroundImage: `url(${varmeHenderImage})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <div className="relative z-20 py-8">
            {/* Back navigation */}
            <div className="mb-4">
              <Link to="/" className="text-white hover:text-gray-300 transition-colors flex items-center">
                <span className="text-lg">← Tilbake</span>
              </Link>
            </div>
            
            {/* Main content */}
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                {t('about.title')}
              </h1>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white leading-relaxed drop-shadow-lg">
                  {t('about.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-8">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-lg">
          <div className="space-y-4 text-gray-800 leading-8 text-lg">
            <p>{renderBoldText(t('about.section.paragraph1'))}</p>
            <p>{renderBoldText(t('about.section.paragraph2'))}</p>
            <p>{renderBoldText(t('about.section.paragraph3'))}</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-8">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-lg">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-8 uppercase">
            {t('about.team.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t('about.team.members', { returnObjects: true }).map((member, index) => (
              <div key={index} className="flex flex-col items-center text-center space-y-3">
                {/* Company Logo */}
                <div className="w-24 h-16 flex items-center justify-center">
                  <img 
                    src={getCompanyLogo(member.company)} 
                    alt={`${member.company} logo`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                
                {/* Member Name */}
                <h3 className="text-lg font-bold text-gray-900 uppercase">
                  {member.name}
                </h3>
                
                {/* Member Role */}
                <p className="text-sm text-gray-700 leading-relaxed">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-8">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-lg">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-8">
            {t('about.help.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t('about.help.cards', { returnObjects: true }).map((card, index) => (
              <div key={index} className="border-2 border-dashed border-orange-500 rounded-xl p-6 text-center flex flex-col h-full">
                {/* Card Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {card.title}
                </h3>
                
                {/* Card Content */}
                <p className="text-gray-700 leading-relaxed flex-grow mb-3">
                  {card.content}
                </p>
                
                {/* Card Button */}
                {card.title === 'Kontakt oss' ? (
                  <button 
                    onClick={() => {
                      // Open guidance page in current tab
                      window.location.href = '/guidance'
                      // Open contact page in new tab
                      window.open('/documents', '_blank')
                    }}
                    className="w-full bg-gray-700 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors mt-auto"
                  >
                    {card.buttonText}
                  </button>
                ) : card.title === 'Ofte stilte spørsmål' ? (
                  <button 
                    onClick={() => window.location.href = '/faq'}
                    className="w-full bg-gray-700 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors mt-auto"
                  >
                    {card.buttonText}
                  </button>
                ) : (
                  <button className="w-full bg-gray-700 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors mt-auto">
                    {card.buttonText}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
