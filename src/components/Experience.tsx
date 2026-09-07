import Reveal from "./Reveal"
import { useState } from "react"

const experiences = [
  {
    company: "Warrikal",
    role: "Mechanical Rigger",
    location: "Perth, Australia",
    period: "Oct 2024 – Present",

    description:
      "Working in demanding industrial environments, supporting safe lifting and positioning of heavy structures and mechanical components.",

    highlights: [
      "Heavy Lift Operations",
      "Rigging & Load Planning",
      "Safety-Critical Work",
      "Problem Solving",
    ],

    image: "/experience/warrikal.jpg",
  },
  {
    period: "Jan 2023 — Oct 2024",
    company: "Linkforce",
    location: "Perth, Australia",
    role: "Mechanical Rigger",
    description:
      "Performed heavy crane lifting and fixed plant shutdown maintenance across major mining equipment, including crushers, apron feeders, reclaimers, and stackers, supporting safe equipment removal, installation, and maintenance activities.",
    highlights: [
      "Heavy Crane Lifting",
      "Fixed Plant Maintenance",
      "Shutdown Operations",
      "Mining Equipment",
    ],
    image: "/experience/linkforce.jpg",
  },
  {
    period: "Aug 2021 — Aug 2022",
    company: "KD Navien",
    location: "Seoul, South Korea",
    role: "Mechanical Engineer",
    description:
      "Designed boiler and heating system solutions based on project requirements, coordinating with internal teams and supporting projects through design, implementation, and technical review.",
    highlights: [
      "Engineering Design",
      "Technical Coordination",
      "Project Delivery",
    ],
    image: "",
  },
  {
    period: "May 2019 — May 2020",
    company: "KTS Singapore",
    location: "Singapore",
    role: "Field Service Engineer",
    description:
      "Supported crane automation and control system projects, including installation, testing, troubleshooting, and system improvements during the transition from manual to automated operations.",
    highlights: [
      "Automation Systems",
      "System Testing",
      "Technical Troubleshooting",
      "Field Engineering",
    ],
    image: "",
  },
]

function Experience() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <>
      <section id="experience" className="experience-section">
        <div className="experience-header">
          <div>
            <p className="section-label">PROFESSIONAL EXPERIENCE</p>

            <h2>
              From Engineering
              <br />
              to Software
            </h2>
          </div>

          <p className="experience-intro">
            Professional experience across Australia, South Korea, and
            Singapore, combining hands-on engineering, automation, and
            technical problem solving with the software skills I use today.
          </p>
        </div>

        <div className="experience-list">
          {experiences.map((experience, index) => (
            <Reveal
              direction="left"
              delay={index * 0.22}
              key={`${experience.company}-${experience.period}`}
            >
              <article className="experience-item">
                <div className="experience-info">
                  <div className="experience-meta">
                    <p>{experience.period}</p>
                    <span>{experience.location}</span>
                  </div>

                  <div className="experience-content">
                    <p className="experience-company">
                      {experience.company}
                    </p>

                    <h3>{experience.role}</h3>

                    <p className="experience-description">
                      {experience.description}
                    </p>

                    <div className="experience-highlights">
                      {experience.highlights.map((highlight) => (
                        <span key={highlight}>
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {experience.image ? (
                  <button
                    type="button"
                    className="experience-image-button"
                    onClick={() =>
                      setSelectedImage(experience.image)
                    }
                    aria-label={`View ${experience.company} work photo`}
                  >
                    <img
                      src={experience.image}
                      alt={`${experience.company} work`}
                      className="experience-image"
                    />
                  </button>
                ) : (
                  <div className="experience-image-placeholder">
                    <span>WORK EXPERIENCE</span>
                    <p>Photo coming soon</p>
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {selectedImage && (
        <div
          className="experience-lightbox"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            className="experience-lightbox-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image"
          >
            ×
          </button>

          <img
            src={selectedImage}
            alt="Expanded work experience"
          />
        </div>
      )}
    </>
  )
}

export default Experience