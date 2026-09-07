import Reveal from "./Reveal"

const experiences = [
  {
    period: "Oct 2024 — Present",
    company: "Warrikal",
    location: "Perth, Australia",
    role: "Mechanical Rigger",
    description:
      "Support industrial maintenance and shutdown activities in high-risk environments, coordinating with multidisciplinary teams to complete mechanical work safely and efficiently.",
    highlights: [
      "Safety-Critical Operations",
      "Team Coordination",
      "Practical Problem Solving",
    ],
    image: "",
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
    image: "",
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
  return (
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
          Professional experience across Australia, South Korea, and Singapore,
          combining hands-on engineering, automation, and technical problem
          solving with the software skills I use today.
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
                <img
                  src={experience.image}
                  alt={`${experience.company} work`}
                  className="experience-image"
                />
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
  )
}

export default Experience