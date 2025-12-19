function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>

      <div className="skills-cards">

        <div className="skills-card">
          <h3>Frontend</h3>
          <ul className="skills-grid">
            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />HTML</li>
            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />CSS</li>
            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />JavaScript</li>
            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />React</li>
          </ul>
        </div>

        <div className="skills-card">
          <h3>Backend</h3>
          <ul className="skills-grid">
            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />Python</li>
            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" />Flask</li>
            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />Node.js</li>
            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />MySQL</li>
          </ul>
        </div>

        <div className="skills-card tools">
          <h3>Herramientas</h3>
          <ul className="skills-grid">
            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />Git</li>
            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />GitHub</li>
            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />VS Code</li>
            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" />Jira</li>
            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" />Trello</li>
          </ul>
        </div>

      </div>
    </section>
  )
}

export default Skills
