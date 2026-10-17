import Header from "./components/Header"
import TechMarquee from "./components/TechMarquee"
import About from "./components/About"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Services from "./components/Services"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { useRevealOnScroll } from "./hooks"

function App() {
  useRevealOnScroll()

  return (
    <>
      <Header />
      <main>
        <TechMarquee />
        <About />
        <Experience />
        <Projects />
        <Services />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
