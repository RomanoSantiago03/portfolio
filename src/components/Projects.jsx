import { projects } from "../data/projects"

function Projects() {
  return (
    <section id="projects">
      <h2>Proyectos</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>

            <p className="project-desc">
              {project.description}
            </p>

            <p className="project-tech">
              {project.tech.join(" · ")}
            </p>

            <div className="project-actions">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                Ver código en GitHub
              </a>

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link demo"
                >
                  Ver demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
