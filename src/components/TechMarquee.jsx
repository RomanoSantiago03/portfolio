import Logo from "./Logo"
import { marquee } from "../data/skills"

function Row({ items, reverse }) {
  // Se duplica la lista para que el loop no tenga cortes
  const doubled = [...items, ...items]
  return (
    <div className={`marquee-row${reverse ? " reverse" : ""}`}>
      <ul className="marquee-track">
        {doubled.map((name, i) => (
          <li key={`${name}-${i}`} aria-hidden={i >= items.length}>
            <Logo name={name} />
            <span>{name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function TechMarquee() {
  const half = Math.ceil(marquee.length / 2)
  return (
    <section className="marquee" aria-label="Tecnologías que uso">
      <Row items={marquee.slice(0, half)} />
      <Row items={marquee.slice(half)} reverse />
    </section>
  )
}

export default TechMarquee
