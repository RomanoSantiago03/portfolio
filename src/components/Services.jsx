import { profile } from "../data/profile"

const services = [
  {
    title: "Landing pages",
    text: "Una página clara para presentar tu emprendimiento, mostrar lo que vendés y que te contacten.",
  },
  {
    title: "Sitios institucionales",
    text: "Varias secciones (inicio, historia, productos, galería, contacto) con diseño propio y adaptado a celulares.",
  },
  {
    title: "Puesta en línea",
    text: "Me encargo del dominio, el hosting, el certificado SSL y el botón de WhatsApp para que todo funcione.",
  },
]

function Services() {
  const contactHref = profile.whatsapp || `mailto:${profile.email}`
  return (
    <section id="services" className="section section-light">
      <div className="container">
        <div className="services-head reveal">
          <h2 className="section-title">Páginas web para tu negocio</h2>
          <p>
            También hago páginas web por mi cuenta para emprendimientos, como {profile.brand}.
          </p>
        </div>
        <div className="services-grid">
          {services.map((s) => (
            <div className="service reveal" key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
        <div className="reveal">
          <a href={contactHref} target="_blank" rel="noreferrer" className="btn btn-dark">
            Pedir presupuesto
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services
