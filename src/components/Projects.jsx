import Logo from "./Logo"
import { featuredProjects, careerProjects } from "../data/projects"

function ProjectCard({ project, featured }) {
  return (
    <article className={`project-card reveal${featured ? " featured" : ""}`}>
      <div className="project-head">
        <h3>{project.title}</h3>
        {featured && project.team && <span className="badge">En equipo</span>}
      </div>

      <p className="project-desc">{project.description}</p>

      {project.myPart && (
        <p className="project-mypart"><strong>Mi parte:</strong> {project.myPart}</p>
      )}

      <ul className="tech-list">
        {project.tech.map((t) => (
          <li key={t}><Logo name={t} />{t}</li>
        ))}
      </ul>

      <div className="project-actions">
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noreferrer" className="project-link">
            {project.demoLabel || "Ver demo"}
          </a>
        )}
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
            Código en GitHub
          </a>
        )}
        {project.docs && (
          <a href={project.docs} target="_blank" rel="noreferrer" className="project-link">
            Documentación de la API
          </a>
        )}
        {!project.github && project.privateRepo && (
          <span className="project-private">Repositorio privado</span>
        )}
      </div>
    </article>
  )
}

function Projects() {
  return (
    <section id="projects" className="section section-dark">
      <div className="container">
        <h2 className="section-title reveal">Proyectos</h2>

        <div className="projects-grid projects-featured">
          {featuredProjects.map((p) => <ProjectCard project={p} featured key={p.title} />)}
        </div>

        <div className="subhead reveal">
          <h3>Proyectos de la carrera</h3>
          <p>Todos hechos en equipo con compañeros del IES 9&#8209;023.</p>
        </div>
        <div className="projects-grid">
          {careerProjects.map((p) => <ProjectCard project={p} key={p.title} />)}
        </div>
      </div>
    </section>
  )
}

export default Projects
