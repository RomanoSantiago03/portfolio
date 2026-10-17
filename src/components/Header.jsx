import { useEffect, useRef, useState } from "react"
import { profile } from "../data/profile"

const links = [
  { href: "#about", label: "Sobre mí" },
  { href: "#experience", label: "Experiencia" },
  { href: "#projects", label: "Proyectos" },
  { href: "#services", label: "Servicios" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contacto" },
]

// Separa cada palabra en letras para animarlas al cargar
function AnimatedWord({ word, delayStart }) {
  return (
    <span className="hero-line" aria-hidden="true">
      {word.split("").map((char, i) => (
        <span
          key={i}
          className="hero-char"
          style={{ animationDelay: `${delayStart + i * 45}ms` }}
        >
          {char}
        </span>
      ))}
    </span>
  )
}

function Header() {
  const heroRef = useRef(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [first, ...rest] = profile.name.split(" ")
  const last = rest.join(" ")

  // Linterna que sigue al mouse sobre la grilla de puntos
  const handlePointerMove = (e) => {
    const el = heroRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`)
    el.style.setProperty("--my", `${e.clientY - rect.top}px`)
  }

  // La barra se esconde al bajar y vuelve a aparecer al subir
  useEffect(() => {
    let lastY = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setHidden(y > 160 && y > lastY)
      lastY = y
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [menuOpen])

  return (
    <>
      <nav className={`topbar${hidden && !menuOpen ? " is-hidden" : ""}`} aria-label="Navegación principal">
        <a href="#top" className="brand">{profile.brand}</a>
        <div className="topbar-links">
          {links.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </div>
        <button
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? "Cerrar" : "Menú"}
        </button>
      </nav>

      <div id="mobile-menu" className={`mobile-menu${menuOpen ? " open" : ""}`} hidden={!menuOpen}>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
        ))}
      </div>

      <header id="top" className="hero" ref={heroRef} onPointerMove={handlePointerMove}>
        <div className="hero-dots" aria-hidden="true" />
        <div className="hero-spot" aria-hidden="true" />

        <div className="container hero-inner">
          <h1 className="hero-name" aria-label={profile.name}>
            <AnimatedWord word={first} delayStart={150} />
            <AnimatedWord word={last} delayStart={150 + first.length * 45} />
          </h1>

          <div className="hero-bottom">
            <div className="hero-copy">
              <p className="hero-role">{profile.role} <span>en {profile.location}</span></p>
              <p className="hero-text">
                Desarrollo aplicaciones web de punta a punta y páginas para emprendimientos.
                Hoy hago QA en una pasantía con un equipo remoto y estoy terminando la
                Tecnicatura en Desarrollo de Software.
              </p>
            </div>
            <div className="hero-actions">
              <a href="#projects" className="btn btn-light">Ver proyectos</a>
              <a href="#contact" className="btn btn-outline-light">Contactame</a>
              {profile.cv && (
                <a href={profile.cv} className="btn btn-outline-light" download>Descargar CV</a>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
