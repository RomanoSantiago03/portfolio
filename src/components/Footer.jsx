import { profile } from "../data/profile"

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <a href="#top">Volver arriba</a>
      </div>
    </footer>
  )
}

export default Footer
