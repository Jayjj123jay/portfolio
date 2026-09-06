const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "PHP", "Python", "Java"],
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "MySQL", "SQLite"],
  },
  {
    title: "Cloud & Tools",
    skills: ["AWS", "Git", "GitHub", "VS Code"],
  },
]

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-header">
        <div>
          <p className="section-label">SKILLS & TECHNOLOGIES</p>
          <h2>Full-Stack Toolkit</h2>
        </div>

        <p className="skills-intro">
          Technologies I use to build modern, practical, and scalable web
          applications.
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
    </section>
  )
}

export default Skills