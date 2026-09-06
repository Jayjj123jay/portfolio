const experiences = [
  {
    period: "Oct 2024 — Present",
    company: "Warrikal",
    location: "Perth, Australia",
    role: "Mechanical Rigger",
    description:
      "Work in demanding industrial environments where safety, technical problem solving, adaptability, and effective team collaboration are essential.",
    highlights: [
      "Technical Problem Solving",
      "Team Collaboration",
      "Adaptability",
    ],
  },
  {
    period: "Jan 2023 — Oct 2024",
    company: "Linkforce",
    location: "Perth, Australia",
    role: "Mechanical Rigger",
    description:
      "Supported fixed plant maintenance and shutdown projects involving heavy equipment and machinery, applying structured problem solving in complex operational environments.",
    highlights: [
      "Problem Solving",
      "Technical Operations",
      "Teamwork",
    ],
  },
  {
    period: "Aug 2021 — Aug 2022",
    company: "KD Navien",
    location: "Seoul, South Korea",
    role: "Mechanical Engineer",
    description:
      "Designed boiler and heating systems based on customer requirements while collaborating with cross-functional teams and supporting projects from design through implementation.",
    highlights: [
      "Engineering Design",
      "Stakeholder Collaboration",
      "Project Support",
    ],
  },
  {
    period: "May 2019 — May 2020",
    company: "KTS Singapore",
    location: "Singapore",
    role: "Field Service Engineer",
    description:
      "Worked with crane automation systems and supported the transition from manual to automated operations, including system implementation, testing, troubleshooting, and performance improvements.",
    highlights: [
      "Automation Systems",
      "System Testing",
      "Troubleshooting",
      "Technical Collaboration",
    ],
  },
]

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-header">
        <div>
          <p className="section-label">PROFESSIONAL EXPERIENCE</p>

          <h2>
            Engineering
            <br />
            Experience
          </h2>
        </div>

        <p className="experience-intro">
          Professional engineering experience across Australia, South Korea,
          and Singapore, building the problem-solving and collaboration skills
          I now bring to software development.
        </p>
      </div>

      <div className="experience-list">
        {experiences.map((experience) => (
          <article
            className="experience-item"
            key={`${experience.company}-${experience.period}`}
          >
            <div className="experience-meta">
              <p>{experience.period}</p>
              <span>{experience.location}</span>
            </div>

            <div className="experience-content">
              <p className="experience-company">{experience.company}</p>

              <h3>{experience.role}</h3>

              <p className="experience-description">
                {experience.description}
              </p>

              <div className="experience-highlights">
                {experience.highlights.map((highlight) => (
                  <span key={highlight}>{highlight}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience