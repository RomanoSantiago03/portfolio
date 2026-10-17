import Logo from "./Logo"
import { experience } from "../data/experience"

function Experience() {
  return (
    <section id="experience" className="section section-light">
      <div className="container">
        <h2 className="section-title reveal">Experiencia</h2>
        <ol className="timeline">
          {experience.map((item) => (
            <li className="timeline-item reveal" key={`${item.org}-${item.role}`}>
              <p className="timeline-period">{item.period}</p>
              <div>
                <h3>{item.role}</h3>
                <p className="timeline-org">{item.org}, {item.type.toLowerCase()}</p>
                <p className="timeline-desc">{item.description}</p>
                {item.tags?.length > 0 && (
                  <ul className="chips">
                    {item.tags.map((t) => <li key={t}><Logo name={t} />{t}</li>)}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Experience
