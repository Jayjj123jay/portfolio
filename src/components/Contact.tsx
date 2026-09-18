import { useState } from "react"

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle")

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    // Prevent the browser from leaving the portfolio page.
    event.preventDefault()

    setIsSubmitting(true)
    setSubmitStatus("idle")

    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch(
        "https://formspree.io/f/mppwzgbo",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      )

      if (response.ok) {
        setSubmitStatus("success")
        form.reset()
      } else {
        setSubmitStatus("error")
      }
    } catch {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-content">
        <p className="section-label">LET'S CONNECT</p>

        <h2>
          Ready to Start
          <br />
          My Software Career.
        </h2>

        <p className="contact-description">
          I'm open to Graduate and Junior Full-Stack Developer opportunities
          where I can contribute, learn, and grow as a software engineer.
        </p>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <div className="contact-form-row">
            <div className="contact-form-field">
              <label htmlFor="name">NAME</label>

              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                required
              />
            </div>

            <div className="contact-form-field">
              <label htmlFor="company">COMPANY</label>

              <input
                type="text"
                id="company"
                name="company"
                placeholder="Company name"
              />
            </div>
          </div>

          <div className="contact-form-field">
            <label htmlFor="email">EMAIL</label>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="your@email.com"
              required
            />
          </div>

          <div className="contact-form-field">
            <label htmlFor="message">MESSAGE</label>

            <textarea
              id="message"
              name="message"
              placeholder="Tell me about the opportunity..."
              rows={6}
              required
            />
          </div>

          <button
            type="submit"
            className="button primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {submitStatus === "success" && (
            <p className="contact-form-success">
              Message sent successfully. I'll get back to you soon.
            </p>
          )}

          {submitStatus === "error" && (
            <p className="contact-form-error">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>

      <div className="contact-info">
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
          <p>Sydney, Australia</p>
        </div>

        <div>
          <p className="contact-label">RESUME</p>

          <a
            href="/Jungho_Jang_Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            View Resume ↗
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact