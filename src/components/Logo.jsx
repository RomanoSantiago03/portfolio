import { icons } from "../data/icons"

// Pinta el logo con el color del texto (currentColor), por eso funciona en blanco y en negro.
function Logo({ name, className = "" }) {
  const src = icons[name]
  if (!src) return null
  return (
    <span
      className={`logo ${className}`}
      data-icon={name}
      style={{ "--icon": `url("${src}")` }}
      aria-hidden="true"
    />
  )
}

export default Logo
