import Hero from '../components/Hero'
import HelpCards from '../components/HelpCards'
import ContactForm from '../components/ContactForm'

export default function Home() {
  return (
    <div>
      <Hero />
      <hr className="container-page border-slate-300/60" />
      <HelpCards />
      <ContactForm />
    </div>
  )
}


