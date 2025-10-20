import { useNavigate, useParams } from 'react-router-dom'
import vaktrommetPatientImage from '../assets/vaktrommet_patient.png'
import vaktrommetOverviewImage from '../pages/vaktrommet_overview.png'

export default function DashboardViewer() {
  const { dashboardType } = useParams()
  const navigate = useNavigate()

  const getDashboardTitle = () => {
    switch(dashboardType) {
      case 'oversikt':
        return 'Oversikt-side'
      case 'pasient':
        return 'Pasient-side'
      default:
        return 'Dashboard'
    }
  }

  const getDashboardImage = () => {
    switch(dashboardType) {
      case 'oversikt':
        return vaktrommetOverviewImage
      case 'pasient':
        return vaktrommetPatientImage
      default:
        return vaktrommetOverviewImage
    }
  }

  return (
    <div className="min-h-screen w-full bg-gray-50">
      {/* Header with Back Button */}
      <div className="w-full bg-white border-b border-gray-200">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center text-gray-600 hover:text-teal-600 transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-medium">Tilbake</span>
          </button>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
            <h1 className="text-2xl font-bold text-gray-900">{getDashboardTitle()}</h1>
          </div>
          <div className="p-4">
            <img 
              src={getDashboardImage()} 
              alt={getDashboardTitle()} 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

