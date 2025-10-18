import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HelpCards from './components/HelpCards'
import ContactForm from './components/ContactForm'
import ScrollToTop from './components/ScrollToTop'
import PageIndicator from './components/PageIndicator'
import Home from './pages/Home'
import HomePage1 from './pages/HomePage1'
import Private from './pages/Private'
import PrivatePage1 from './pages/PrivatePage1'
import Municipality from './pages/Municipality'
import Kommune1 from './pages/Kommune1'
import MunicipalityDetails from './pages/MunicipalityDetails'
import MunicipalityKnowledge from './pages/MunicipalityKnowledge'
import ProcurementManager from './pages/ProcurementManager'
import Company from './pages/Company'
import CompetitiveAdvantage from './pages/CompetitiveAdvantage'
import Partners from './pages/Partners'
import VaktromIntegration from './pages/VaktromIntegration'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import ProductDatasheet from './pages/ProductDatasheet'
import Guidance from './pages/Guidance'
import AlarmCommunication from './pages/AlarmCommunication'
import AlarmCommunication1 from './pages/AlarmCommunication1'
import MedicalFollowup from './pages/MedicalFollowup'
import MedicalFollowup1 from './pages/MedicalFollowup1'
import MedicalFollowupProducts from './pages/MedicalFollowupProducts'
import SafetySolutions from './pages/SafetySolutions'
import SafetySolutions1 from './pages/SafetySolutions1'
import Demo from './pages/Demo'
import Experiences from './pages/Experiences'
import Fallalarm from './pages/Fallalarm'
import Documents from './pages/Documents'
import Pricing from './pages/Pricing'
import Support from './pages/Support'
import Evidence from './pages/Evidence'
import HealthPersonnel from './pages/HealthPersonnel'
import ITWelfareTechnology from './pages/ITWelfareTechnology'
import MunicipalBenefits from './pages/MunicipalBenefits'
import Politicians from './pages/Politicians'
import Admin from './pages/Admin'
import CsvImport from './pages/CsvImport'
import Vision from './pages/Vision'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TrygghetOgFallsikring from './pages/TrygghetOgFallsikring'
import AlarmButtons from './pages/AlarmButtons'
import EaseBlink from './pages/EaseBlink'

function App() {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <PageIndicator />
      <main className="w-full max-w-[2000px] mx-auto">
        <Routes>
          <Route path="/" element={<HomePage1 />} />
          <Route path="/home-original" element={<Home />} />
          <Route path="/private" element={<PrivatePage1 />} />
          <Route path="/private-original" element={<Private />} />
          <Route path="/municipality" element={<Municipality />} />
          <Route path="/kommune1" element={<Kommune1 />} />
          <Route path="/municipality-details" element={<MunicipalityDetails />} />
          <Route path="/municipality-knowledge" element={<MunicipalityKnowledge />} />
          <Route path="/procurement-manager" element={<ProcurementManager />} />
          <Route path="/company" element={<Company />} />
          <Route path="/competitive-advantage" element={<CompetitiveAdvantage />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/vaktrom-integration" element={<VaktromIntegration />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/products/:id/datasheet" element={<ProductDatasheet />} />
          <Route path="/guidance" element={<Guidance />} />
          <Route path="/alarm-communication" element={<AlarmCommunication />} />
          <Route path="/alarm-communication1" element={<AlarmCommunication1 />} />
          <Route path="/medical-followup" element={<MedicalFollowup />} />
          <Route path="/medical-followup1" element={<MedicalFollowup1 />} />
          <Route path="/medical-followup-products" element={<MedicalFollowupProducts />} />
          <Route path="/safety-solutions" element={<SafetySolutions />} />
          <Route path="/safety-solutions1" element={<SafetySolutions1 />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/fallalarm" element={<Fallalarm />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/support" element={<Support />} />
          <Route path="/evidence" element={<Evidence />} />
          <Route path="/health-personnel" element={<HealthPersonnel />} />
          <Route path="/it-welfare-technology" element={<ITWelfareTechnology />} />
          <Route path="/municipal-benefits" element={<MunicipalBenefits />} />
          <Route path="/politicians" element={<Politicians />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/csv-import" element={<CsvImport />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/trygghet-og-fallsikring" element={<TrygghetOgFallsikring />} />
          <Route path="/alarm-buttons" element={<AlarmButtons />} />
          <Route path="/easeblink" element={<EaseBlink />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
