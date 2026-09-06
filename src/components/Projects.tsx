import { useState } from "react"
import Reveal from "./Reveal"

const projects = [
  {
    number: "01",
    title: "Car Rental Web Application",
    description:
      "A full-stack vehicle rental platform with RESTful APIs, database integration, search and filtering, CRUD functionality, and cloud deployment.",
    technologies: ["PHP", "JavaScript", "MySQL", "REST API", "AWS"],
    type: "FULL-STACK / CLOUD",
    image: "",
    github: "#",
  },
  {
    number: "02",
    title: "QR Payment Mobile Application",
    description:
      "An iOS payment application with QR code scanning, reusable UI components, and a structured MVVM architecture.",
    technologies: ["Swift", "SwiftUI", "MVVM", "QR Scanning"],
    type: "iOS / MOBILE",
    image: "",
    github: "#",
  },
  {
    number: "03",
    title: "Family Finance Management Application",
    description:
      "A desktop financial management application designed to help families track income, expenses, budgets, and account information with database-driven CRUD operations.",
    technologies: ["Database", "CRUD", "OOP", "Testing"],
    type: "DESKTOP / DATABASE",
    image: "",
    github: "#",
  },
  {
    number: "04",
    title: "Bubble Pop iOS Game",
    description:
      "An interactive iOS game featuring dynamic gameplay, user interaction, MVVM architecture, and iterative testing and debugging.",
    technologies: ["Swift", "SwiftUI", "MVVM", "Testing"],
    type: "iOS / GAME",
    image: "",
    github: "#",
  },
]

function Projects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

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
        {projects.map((project, index) => (
          <Reveal
            direction="left"
            delay={index * 0.18}
            key={project.number}
          >
            <article className="project-card">
              <div className="project-info">
                <div className="project-number">{project.number}</div>

                <div className="project-content">
                  <p className="project-type">{project.type}</p>

                  <h3>{project.title}</h3>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="project-tech">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    className="project-link"
                    onClick={(event) => {
                      if (project.github === "#") {
                        event.preventDefault()
                      }
                    }}
                  >
                    View Project ↗
                  </a>
                </div>
              </div>

              {project.image ? (
                <button
                  type="button"
                  className="project-image-button"
                  onClick={() => setSelectedImage(project.image)}
                  aria-label={`View ${project.title} screenshot`}
                >
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="project-image"
                  />
                </button>
              ) : (
                <div className="project-image-placeholder">
                  <span>PROJECT PREVIEW</span>
                  <p>Screenshot coming soon</p>
                </div>
              )}
            </article>
          </Reveal>
        ))}
      </div>

      {selectedImage && (
        <div
          className="image-modal"
          role="button"
          tabIndex={0}
          onClick={() => setSelectedImage(null)}
          onKeyDown={(event) => {
            if (event.key === "Escape" || event.key === "Enter") {
              setSelectedImage(null)
            }
          }}
        >
          <img
            src={selectedImage}
            alt="Project screenshot enlarged"
            className="image-modal-content"
          />
        </div>
      )}
    </section>
  )
}

export default Projects