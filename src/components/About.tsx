function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-left">
        <p className="section-label">ABOUT ME</p>

        <h2>
          Engineering Mindset.
          <br />
          Software Solutions.
        </h2>

        <p>
          I'm a Graduate Full-Stack Developer with a Master of Information
          Technology from the University of Technology Sydney and a
          professional background in Mechanical Engineering.
        </p>

        <p>
          My transition into software development began while working with
          automation systems and technical engineering environments. Seeing
          how software could improve systems, automate processes, and solve
          practical problems motivated me to move into software development.
        </p>

        <p>
          Today, I combine my engineering problem-solving experience with
          full-stack, cloud, database, and mobile development skills to build
          practical and user-focused software applications.
        </p>
      </div>

      <div className="about-right">
        <div className="about-card">
          <p className="section-label">EDUCATION</p>

          <div className="about-detail">
            <span>2024 — 2026</span>
            <h3>Master of Information Technology</h3>
            <p>Enterprise Software Development</p>
            <p>University of Technology Sydney</p>
          </div>

          <div className="about-detail">
            <span>2016 — 2019</span>
            <h3>Bachelor of Engineering</h3>
            <p>Mechanical Engineering</p>
            <p>Korea Maritime and Ocean University</p>
          </div>
        </div>

        <div className="about-card">
          <p className="section-label">WHAT I BRING</p>

          <div className="about-values">
            <p>Full-Stack Development</p>
            <p>Engineering Problem Solving</p>
            <p>Cloud & Database Experience</p>
            <p>Cross-Functional Collaboration</p>
            <p>Adaptability & Continuous Learning</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About