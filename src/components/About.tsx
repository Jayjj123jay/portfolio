function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-left">
        <p className="section-label">ABOUT ME</p>

        <h2>
          From Engineering
          <br />
          to Full-Stack Development
        </h2>

        <p>
          I am a recent Master of Information Technology graduate with a
          background in Mechanical Engineering.
        </p>

        <p>
          My engineering experience strengthened my problem-solving,
          analytical thinking, and attention to detail, which I now apply to
          software development.
        </p>

        <p>
          I am focused on building full-stack web and mobile applications using modern
          frontend, backend, database, and cloud technologies.
        </p>
      </div>

      <div className="about-right">
        <div className="about-card">
          <p className="section-label">EDUCATION</p>

          <h3>Master of Information Technology</h3>
          <p>University of Technology Sydney</p>

          <h3>Bachelor of Mechanical Engineering</h3>
          <p>Korea Maritime and Ocean University</p>
        </div>

        <div className="about-card">
          <p className="section-label">FOCUS</p>

          <p>Full-Stack Web Development</p>
          <p>Cloud Computing</p>
          <p>Backend APIs</p>
          <p>Database Design</p>
        </div>
      </div>
    </section>
  )
}

export default About