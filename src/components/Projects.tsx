const projects = [
  {
    number: "01",
    title: "Car Rental Web Application",
    description:
      "A full-stack vehicle rental platform with RESTful APIs, database integration, search and filtering, CRUD functionality, and cloud deployment.",
    technologies: [
      "PHP",
      "JavaScript",
      "MySQL",
      "REST API",
      "AWS",
      "GitHub",
    ],
    type: "FULL-STACK / CLOUD",
    github: "#",
  },
  {
    number: "02",
    title: "QR Payment Mobile Application",
    description:
      "An iOS payment application with QR code scanning, reusable UI components, and a structured MVVM architecture.",
    technologies: [
      "Swift",
      "SwiftUI",
      "MVVM",
      "QR Scanning",
      "GitHub",
    ],
    type: "iOS / MOBILE",
    github: "#",
  },
  {
    number: "03",
    title: "Family Finance Management Application",
    description:
      "A desktop financial management application designed to help families track income, expenses, budgets, and account information with database-driven CRUD operations.",
    technologies: [
      "Database",
      "CRUD",
      "OOP",
      "Testing",
    ],
    type: "DESKTOP / DATABASE",
    github: "#",
  },
  {
    number: "04",
    title: "Bubble Pop iOS Game",
    description:
      "An interactive iOS game featuring dynamic gameplay, user interaction, MVVM architecture, and iterative testing and debugging.",
    technologies: [
      "Swift",
      "SwiftUI",
      "MVVM",
      "Testing",
    ],
    type: "iOS / GAME",
    github: "#",
  },
]

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <div>
          <p className="section-label">SELECTED PROJECTS</p>

          <h2>
            Things I've
            <br />
            Built
          </h2>
        </div>

        <p className="projects-intro">
          A selection of full-stack, mobile, database, and cloud projects
          focused on solving practical problems through software.
        </p>
      </div>

      <div className="projects-list">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-number">{project.number}</div>

            <div className="project-content">
              <p className="project-type">{project.type}</p>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tech">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>

            <a
              href={project.github}
              className="project-link"
              target="_blank"
              rel="noreferrer"
            >
              View Project ↗
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects