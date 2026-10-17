import Logo from "./Logo"
import { skills } from "../data/skills"
import { icons } from "../data/icons"

function Skills() {
  return (
    <section id="skills" className="section section-dark">
      <div className="container">
        <h2 className="section-title reveal">Skills</h2>
        <div className="skills-grid">
          {skills.map((card) => (
            <div className="skills-col reveal" key={card.group}>
              <h3>{card.group}</h3>
              <ul>
                {card.items.map((name) => (
                  <li key={name}>
                    {icons[name] ? <Logo name={name} /> : <span className="logo-fallback" aria-hidden="true" />}
                    <span>{name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
