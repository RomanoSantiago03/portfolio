// github / demo / docs vacíos ("") = no se muestra el link.
// Si el repo es privado, dejá github vacío y poné privateRepo: true.
// Los nombres de "tech" que existan en data/icons.js se muestran con su logo.

export const featuredProjects = [
  {
    title: "Paciente360º",
    team: true,
    description:
      "Sistema de gestión clínica para centros de atención primaria: historias clínicas, turnos, seguimiento de pacientes, pase de guardia y control de insumos, con cuatro roles (paciente, enfermero, médico y administrativo).",
    myPart:
      "Me encargo del dominio de operaciones e inventario y del módulo de estadísticas. Participé en la planificación ágil: historias de usuario, estimación y sprints en Jira.",
    tech: ["React", "Python", "Flask", "SQLAlchemy", "MySQL", "Jira"],
    github: "",
    privateRepo: true,
  },
  {
    title: "App Mundial de Fútbol",
    team: true,
    description:
      "Plataforma para gestionar jugadores y usuarios del Mundial: registro e inicio de sesión con JWT, roles de administrador y usuario, búsqueda con filtros por goles, asistencias y tarjetas, estadísticas con gráficos y foto de perfil desde archivo o cámara web.",
    myPart:
      "Desarrollo fullstack en un equipo de tres, trabajando con ramas y pull requests. API REST en Flask con modelos orientados a objetos y frontend en React con hooks y contexto de autenticación.",
    tech: ["React", "Material UI", "Flask", "SQLAlchemy", "MySQL", "Postman"],
    github: "https://github.com/rubenledesma10/app-mundial",
    docs: "https://documenter.getpostman.com/view/31369461/2sBXwvKUqh",
  },
  {
    title: "Web La Rañatela",
    description:
      "Sitio institucional de una empresa textil que genera trabajo para personas con discapacidad: catálogo de productos, servicios, galería y contacto directo por WhatsApp. Hecho con Astro, sin CMS.",
    myPart: "Proyecto individual: diseño, desarrollo, dominio, hosting y mantenimiento.",
    tech: ["Astro", "JavaScript", "CSS", "TypeScript"],
    github: "",
    privateRepo: true,
    demo: "https://laranatela.com",
    demoLabel: "Ver sitio",
  },
]

export const careerProjects = [
  {
    title: "Barbería Los Santi's",
    description:
      "Web para una barbería con presentación, barberos, servicios y reserva de turnos guardados en el navegador con LocalStorage.",
    tech: ["React", "Vite", "CSS", "Vercel"],
    github: "https://github.com/SantiDev03/puebla-romano",
    demo: "https://puebla-romano.vercel.app/",
    demoLabel: "Ver sitio",
  },
  {
    title: "Argenoid",
    description:
      "Juego estilo Arkanoid en Python con PyGame, enfocado en lógica de juego, manejo de eventos y estructura modular.",
    tech: ["Python", "PyGame"],
    github: "https://github.com/SantiDev03/arkanoid",
    demo: "https://www.youtube.com/watch?v=e9hnXtgwrak",
    demoLabel: "Ver video",
  },
  {
    title: "GoTour",
    description:
      "Aplicación web orientada al turismo, con frontend en HTML, CSS y JavaScript y backend en Flask con MySQL.",
    tech: ["HTML", "CSS", "JavaScript", "Flask", "MySQL"],
    github: "https://github.com/rubenledesma10/GoTour",
  },
  {
    title: "Winery Management",
    description:
      "Sistema de gestión para una bodega, enfocado en la organización de datos y procesos internos.",
    tech: ["Python", "Flask"],
    github: "https://github.com/SantiDev03/winery_managament",
  },
  {
    title: "Mechanical Workshop",
    description:
      "Aplicación web para un taller mecánico, con control de clientes, trabajos y operaciones.",
    tech: ["Python", "Flask"],
    github: "https://github.com/rubenledesma10/mechanical-workshop_flask",
  },
  {
    title: "Sales System",
    description:
      "Sistema de ventas para registrar, controlar y seguir operaciones comerciales.",
    tech: ["Python", "Flask"],
    github: "https://github.com/rubenledesma10/sales_system",
  },
]
