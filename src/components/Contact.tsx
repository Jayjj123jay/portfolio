function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-content">
        <p className="section-label">LET'S CONNECT</p>

        <h2>
          Interested in
          <br />
          working together?
        </h2>

        <p className="contact-description">
          I'm open to Graduate and Junior Full-Stack Developer opportunities
          where I can contribute, learn, and grow as a software engineer.
        </p>

        <div className="contact-actions">
          <a
            href="mailto:jjh44728@gmail.com"
            className="button primary"
          >
            Email Me
          </a>

          <a
            href="https://github.com/Jayjj123jay"
            target="_blank"
            rel="noreferrer"
            className="button secondary"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/jungho-jang-271b95166"
            target="_blank"
            rel="noreferrer"
            className="button secondary"
          >
            LinkedIn ↗
          </a>

          <a
            href="/Jungho_Jang_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="button secondary"
          >
            Resume ↗
          </a>
        </div>
      </div>

      <div className="contact-info">
        <div>
          <p className="contact-label">EMAIL</p>
          <a href="mailto:jjh44728@gmail.com">
            jjh44728@gmail.com
          </a>
        </div>

        <div>
          <p className="contact-label">GITHUB</p>
          <a
            href="https://github.com/Jayjj123jay"
            target="_blank"
            rel="noreferrer"
          >
            github.com/Jayjj123jay
          </a>
        </div>

        <div>
          <p className="contact-label">LINKEDIN</p>
          <a
            href="https://www.linkedin.com/in/jungho-jang-271b95166"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/jungho-jang-271b95166
          </a>
        </div>

        <div>
          <p className="contact-label">LOCATION</p>
          <p>Australia</p>
        </div>
      </div>
    </section>
  )
}

export default Contact