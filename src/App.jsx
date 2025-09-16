import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HelpCards from './components/HelpCards'
import ContactForm from './components/ContactForm'
import Home from './pages/Home'
import Private from './pages/Private'
import Municipality from './pages/Municipality'
import Company from './pages/Company'
import Partners from './pages/Partners'
import Products from './pages/Products'
import Guidance from './pages/Guidance'
import AlarmCommunication from './pages/AlarmCommunication'
import MedicalFollowup from './pages/MedicalFollowup'
import SafetySolutions from './pages/SafetySolutions'
import Demo from './pages/Demo'
import Experiences from './pages/Experiences'
import Fallalarm from './pages/Fallalarm'
import Documents from './pages/Documents'
import Pricing from './pages/Pricing'
import Support from './pages/Support'
import Evidence from './pages/Evidence'

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/private" element={<Private />} />
          <Route path="/municipality" element={<Municipality />} />
          <Route path="/company" element={<Company />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/products" element={<Products />} />
          <Route path="/guidance" element={<Guidance />} />
          <Route path="/alarm-communication" element={<AlarmCommunication />} />
          <Route path="/medical-followup" element={<MedicalFollowup />} />
          <Route path="/safety-solutions" element={<SafetySolutions />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/fallalarm" element={<Fallalarm />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/support" element={<Support />} />
          <Route path="/evidence" element={<Evidence />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
