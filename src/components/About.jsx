import { useRef } from "react"
import { useScrollProgressWords } from "../hooks"

const lead =
  "Me gusta construir sistemas completos, desde la base de datos hasta la pantalla que usa la gente, y entender qué necesita un negocio antes de escribir código."

function About() {
  const leadRef = useRef(null)
  const words = lead.split(" ")
  const lit = useScrollProgressWords(leadRef, words.length)

  return (
    <section id="about" className="section section-dark">
      <div className="container about-grid">
        <h2 className="section-title reveal">Sobre mí</h2>

        <div>
          <p className="about-lead" ref={leadRef} aria-label={lead}>
            {words.map((w, i) => (
              <span key={i} className={i < lit ? "lit" : ""} aria-hidden="true">
                {w}{" "}
              </span>
            ))}
          </p>

          <div className="about-body reveal">
            <p>
              Estoy cursando el último año de la Tecnicatura en Desarrollo de Software en el
              IES 9&#8209;023 (Mendoza) y me recibo en diciembre de 2026. En la carrera trabajo en
              equipo con metodologías ágiles, armando sistemas con frontend, backend y base de datos.
            </p>
            <p>
              Durante seis años trabajé en La Rañatela, una empresa textil de impacto social, donde
              desarrollé su sitio web y me encargué del diseño gráfico y parte del área comercial.
              Mi objetivo es crecer como desarrollador trabajando de forma remota, en equipos donde
              pueda seguir aprendiendo y aportar desde el primer día.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
