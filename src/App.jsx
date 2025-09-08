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

function App() {
  return (
    <div>
      <Navbar />
      <main className="container-page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/private" element={<Private />} />
          <Route path="/municipality" element={<Municipality />} />
          <Route path="/company" element={<Company />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
