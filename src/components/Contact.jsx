import { profile } from "../data/profile"

function Contact() {
  const links = [
    { label: "WhatsApp", href: profile.whatsapp },
    { label: "LinkedIn", href: profile.linkedin },
    { label: "GitHub", href: profile.github },
    { label: "Instagram", href: profile.instagram },
  ].filter((l) => l.href)

  return (
    <section id="contact" className="section section-light contact">
      <div className="container">
        <h2 className="contact-title reveal">¿Hablamos?</h2>
        <p className="contact-intro reveal">
          ¿Tenés una propuesta laboral o un proyecto web? Escribime y te respondo a la brevedad.
        </p>
        <a href={`mailto:${profile.email}`} className="contact-email reveal">
          {profile.email}
        </a>
        <ul className="contact-links reveal">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} target="_blank" rel="noreferrer" className="btn btn-outline-dark">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Contact
