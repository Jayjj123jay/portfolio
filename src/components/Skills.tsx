const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Java",
      "Python",
      "PHP",
      "RESTful APIs",
      "C#",
    ],
  },
  {
    title: "Database & Cloud",
    skills: [
      "MySQL",
      "SQLite",
      "SQL",
      "AWS",
    ],
  },
  {
    title: "Mobile & Tools",
    skills: [
      "Swift",
      "SwiftUI",
      "MVVM",
      "Git",
      "GitHub",
      "Testing",
      "Debugging",
    ],
  },
]

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-header">
        <div>
          <p className="section-label">SKILLS & TECHNOLOGIES</p>

          <h2>
            Full-Stack
            <br />
            Toolkit
          </h2>
        </div>

        <p className="skills-intro">
          Technologies and development practices I use across frontend,
          backend, database, cloud, and mobile application development.
        </p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.title}>
            <h3>{group.title}</h3>

            <div className="skill-tags">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="development-practices">
        <p className="section-label">DEVELOPMENT PRACTICES</p>

        <div className="practice-list">
          <span>Object-Oriented Programming</span>
          <span>Agile</span>
          <span>Scrum</span>
          <span>Testing</span>
          <span>Debugging</span>
          <span>Version Control</span>
        </div>
      </div>
    </section>
  )
}

export default Skills