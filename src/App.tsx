import "./App.css"
import About from "./components/About"
import Skills from "./components/Skills"

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">JUNGHO</div>

        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <p className="hero-label">GRADUATE FULL-STACK DEVELOPER</p>

          <h1>
            Hello, I'm
            <br />
            <span>Jungho.</span>
          </h1>

          <p className="hero-description">
            Graduate full-stack developer focused on building
            <br />
            practical, scalable, and user-focused web applications.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="button primary">
              View Projects
            </a>

            <a
              href="https://github.com/Jayjj123jay"
              target="_blank"
              rel="noreferrer"
              className="button secondary"
            >
              GitHub ↗
            </a>
          </div>
        </section>

        <About />
        <Skills />

        <section id="projects" className="placeholder-section">
          <p>PROJECTS</p>
        </section>

        <section id="contact" className="placeholder-section">
          <p>CONTACT</p>
        </section>
      </main>
    </div>
  )
}

export default App