import "./App.css"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import Reveal from "./components/Reveal"
import ScrollProgress from "./components/ScrollProgress"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProjectDetail from "./pages/ProjectDetail"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="app">
              <ScrollProgress />

              <header className="navbar">
                <div className="logo">JUNGHO JANG</div>

                <nav>
                  <a href="#about">About</a>
                  <a href="#skills">Skills</a>
                  <a href="#projects">Projects</a>
                  <a href="#experience">Experience</a>
                  <a href="#contact">Contact</a>
                </nav>
              </header>

              <main>
                {/* Hero */}
                <section className="hero">
                  <p className="hero-label">
                    GRADUATE FULL-STACK DEVELOPER
                  </p>

                  <h1>
                    Hello, I'm
                    <br />
                    <span>Jungho.</span>
                  </h1>

                  <p className="hero-description">
                    I build full-stack, mobile, and cloud-based applications
                    <br />
                    with an engineering approach to problem solving.
                  </p>

                  <div className="hero-buttons">
                    <a
                      href="#projects"
                      className="button primary"
                    >
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

                <Reveal>
                  <About />
                </Reveal>

                <Reveal>
                  <Skills />
                </Reveal>

                <Projects />

                <Experience />

                <Reveal>
                  <Contact />
                </Reveal>
              </main>
            </div>
          }
        />

        <Route
          path="/projects/:projectId"
          element={<ProjectDetail />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App