import { useLayoutEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

type ProjectChallenge = {
  title: string
  problem: string
  solution: string
}

type ProjectDetailData = {
  title: string
  type: string
  description: string
  technologies: string[]
  overview: string
  features: string[]
  contribution: string
  challenges: ProjectChallenge[]
  github: string
  demoVideo: string
  screenshots: string[]
}

const projectDetails: Record<string, ProjectDetailData> = {
  "car-rental": {
    title: "Car Rental Web Application",
    type: "FULL-STACK / CLOUD",

    description:
      "A full-stack vehicle rental platform built to support vehicle browsing, search, filtering, reservation workflows, database operations, and cloud deployment.",

    technologies: [
      "PHP",
      "JavaScript",
      "MySQL",
      "REST API",
      "AWS",
    ],

    overview:
      "This project was developed as a full-stack web application for managing vehicle rental workflows. It combines frontend interaction, backend processing, database operations, RESTful APIs, and cloud deployment.",

    features: [
      "Vehicle browsing and search",
      "Filtering and reservation workflow",
      "Database-driven CRUD operations",
      "RESTful API integration",
      "Cloud deployment with AWS",
    ],

    contribution:
      "Independently designed and developed the entire application, covering frontend development, backend logic, database design and integration, RESTful API implementation, testing, debugging, and AWS cloud deployment.",

    challenges: [
      {
        title: "Building My First Full-Stack Application",

        problem:
          "As my first complete web application, one of the main challenges was understanding how the frontend, backend, database, and APIs should work together as a single system.",

        solution:
          "I broke the application into smaller functional components and developed them incrementally, testing each part before integrating the complete workflow. This helped me understand the responsibilities of each layer and how data moves through a full-stack application.",
      },

      {
        title: "Managing Data and Application Logic",

        problem:
          "Connecting user interactions with backend processing and database operations introduced challenges around data flow, validation, and keeping application behaviour consistent.",

        solution:
          "I structured the application logic around clear request and response flows, validated data before database operations, and tested CRUD functionality individually before connecting it to the user interface.",
      },

      {
        title: "Debugging Across Multiple Layers",

        problem:
          "Errors were sometimes difficult to identify because a problem visible in the browser could originate from the frontend, backend logic, API communication, or database.",

        solution:
          "I learned to debug systematically by isolating each layer, inspecting input and output values, testing API responses, and verifying database operations separately rather than changing multiple parts of the application at once.",
      },

      {
        title: "Moving from Local Development to AWS",

        problem:
          "Deploying the application introduced a different set of considerations compared with running the project locally, including cloud configuration and application environment setup.",

        solution:
          "I worked through the deployment process step by step, learning how the application components interact with AWS services and resolving configuration issues through testing and documentation.",
      },
    ],

    github:
      "https://github.com/Jayjj123jay/Car-Rental-App",

    demoVideo: "/projects/car-rental/car-rental-demo.mp4",

    screenshots: [],
  },

  "qr-payment": {
    title: "QR Payment Mobile Application",
    type: "iOS / MOBILE",

    description:
      "An iOS payment application focused on QR code scanning, reusable SwiftUI components, and a structured MVVM architecture.",

    technologies: [
      "Swift",
      "SwiftUI",
      "MVVM",
      "QR Scanning",
    ],

    overview:
      "This project focused on building a structured iOS payment application with QR code scanning and reusable SwiftUI components using the MVVM architecture.",

    features: [
      "QR code scanning",
      "Reusable SwiftUI components",
      "MVVM architecture",
      "Mobile user interface",
    ],

    contribution:
      "Contributed to the product and UI/UX design of the application, focusing on page layouts, low-fidelity mockups, and user flow planning. I helped define the MVP scope around essential payment flows, including profile management, Scan and Pay, transaction details, and payment requests. I also supported user acceptance testing and presentation preparation to ensure the application was clear, usable, and aligned with the project goals.",

    challenges: [
      {
        title: "Designing for Simplicity",

        problem:
          "The application was designed for elderly users, so a key challenge was presenting payment features in a way that was simple, clear, and easy to understand without unnecessary complexity.",

        solution:
          "I focused the page layouts and mockups on clear navigation, reduced visual complexity, and straightforward user flows. The design prioritised the core payment actions rather than attempting to reproduce every feature of a traditional banking application.",
      },

      {
        title: "Defining a Practical MVP",

        problem:
          "A payment application can quickly become too large in scope because of the number of possible banking and transaction features.",

        solution:
          "I helped narrow the product scope around the most important user flows: profile management, Scan and Pay, transaction details, and payment requests. This allowed the team to focus development effort on a smaller set of meaningful and demonstrable features.",
      },

      {
        title: "Turning Ideas into User Flows",

        problem:
          "Early product ideas needed to be converted into a clear application structure before implementation so that individual screens would form a consistent user journey.",

        solution:
          "I used low-fidelity mockups and page layout planning to organise the application structure and map how users would move between important payment tasks before the final interface was implemented.",
      },

      {
        title: "Validating the Final User Experience",

        problem:
          "As the application evolved during development, the final implementation needed to be checked against the intended user experience and prepared for demonstration.",

        solution:
          "I supported final user acceptance testing and presentation preparation, reviewing the main application flows and helping ensure that the product communicated its purpose and functionality clearly.",
      },
    ],

    github:
      "https://github.com/steve133188/IOS-ASSIG-3-LUMIO",

    demoVideo:
      "/projects/qr-payment/qr-payment-demo.mp4",

    screenshots: [],
  },

  "family-finance": {
    title: "Family Finance Management Application",
    type: "DESKTOP / DATABASE",

    description:
      "A financial management application designed to help families manage income, expenses, budgets, and account information using database-driven CRUD functionality.",

    technologies: [
      "Database",
      "CRUD",
      "OOP",
      "Testing",
    ],

    overview:
      "This application was designed to support household financial management through structured data handling, CRUD operations, and object-oriented development.",

    features: [
      "Income and expense management",
      "Budget tracking",
      "Account information management",
      "Database CRUD operations",
      "Testing and debugging",
    ],

    contribution:
      "Contributed to the development, interface refinement, documentation, and final testing of the application. I worked on an early implementation of the project, helped improve the GUI, prepared and revised the project report, and performed build and functional testing in a Windows environment. I also helped identify and troubleshoot compatibility and configuration issues during the final integration stage.",

    challenges: [
      {
        title: "Developing an Early Application Prototype",

        problem:
          "One of the initial challenges was turning the project requirements into a working financial management application while learning how the different application components should be structured.",

        solution:
          "I developed an early implementation of the application and worked through errors incrementally, using the process to better understand the relationship between the interface, application logic, and project structure.",
      },

      {
        title: "Improving the User Interface",

        problem:
          "The interface required refinement so that the financial information and application functions could be presented more clearly and consistently.",

        solution:
          "I reviewed and modified parts of the GUI, focusing on improving the presentation and making the application easier to understand during use and demonstration.",
      },

      {
        title: "Keeping Documentation Aligned with Development",

        problem:
          "As the implementation changed, the project documentation also needed to be updated so that it accurately reflected the final features, testing scope, and application design.",

        solution:
          "I prepared and revised the project report, updated sections based on implementation changes and team feedback, and reviewed the document structure and wording before submission.",
      },

      {
        title: "Resolving Build and Environment Issues",

        problem:
          "The application encountered build and deployment problems caused by differences in .NET SDK versions, target platform configuration, and the Windows development environment.",

        solution:
          "I repeatedly built and tested the application on my Windows machine, investigated version and target platform errors, adjusted the development environment, and verified the application again after configuration updates.",
      },
    ],

    github:
      "https://github.com/steve133188/dotnetFinancialTracker",

    demoVideo: "",

    screenshots: [],
  },

  "online-grocery": {
    title: "Online Grocery Web Application",
    type: "FULL-STACK / WEB",
    description:
      "A full-stack online grocery shopping application with product browsing, cart management, order processing, and database integration.",

    technologies: [
      "PHP",
      "JavaScript",
      "MySQL",
      "HTML",
      "CSS",
    ],

    overview:
      "This project was developed as an online grocery shopping application that allows users to browse products, search and filter items, manage a shopping cart, and complete an order workflow. The project focused on connecting frontend interactions with backend processing and database-driven product and order management.",

    features: [
      "Product browsing and search",
      "Category-based product filtering",
      "Shopping cart management",
      "Stock availability handling",
      "Order summary and checkout workflow",
      "Database-driven product and order data",
    ],

    contribution:
      "Independently developed the application across the frontend, backend, database, shopping cart logic, order workflow, testing, and debugging. I implemented the product browsing interface, cart functionality, customer order form, and database interactions required to support the grocery shopping process.",

    challenges: [
      {
        title: "Building the Shopping Cart Workflow",
        problem:
          "One of the main challenges was keeping product quantities, prices, stock availability, and cart information consistent as users added or removed products.",
        solution:
          "I structured the cart logic around product identifiers and quantity updates, recalculated totals whenever the cart changed, and tested different cart scenarios to make sure the displayed information remained consistent.",
      },
      {
        title: "Managing Product Availability",
        problem:
          "The application needed to clearly distinguish between products that were available for purchase and products that were out of stock.",
        solution:
          "I connected product stock information to the user interface so unavailable products could be clearly identified and prevented from being added to the cart.",
      },
      {
        title: "Connecting the Cart to the Order Page",
        problem:
          "The selected products and calculated totals needed to move correctly from the shopping interface to the final order and customer details page.",
        solution:
          "I implemented a structured cart data flow and used stored cart information to dynamically populate the order summary before the customer completed the checkout process.",
      },
      {
        title: "Validating Customer Order Information",
        problem:
          "The checkout workflow required reliable customer input before an order could be processed.",
        solution:
          "I added form validation and tested different input scenarios to reduce invalid or incomplete order submissions.",
      },
    ],

    github: "https://github.com/Jayjj123jay/Online-Grocery-Order-System",
    demoVideo: "",
    screenshots: [
      "/projects/online-grocery/grocery-01.png",
      "/projects/online-grocery/grocery-02.png",
      "/projects/online-grocery/grocery-03.png",
      "/projects/online-grocery/grocery-04.png",
    ],
  },

  "bubble-pop": {
    title: "Bubble Pop iOS Game",
    type: "iOS / GAME",

    description:
      "An interactive iOS game built with Swift and SwiftUI, featuring dynamic gameplay, user interaction, MVVM architecture, testing, and debugging.",

    technologies: [
      "Swift",
      "SwiftUI",
      "MVVM",
      "Testing",
    ],

    overview:
      "This project explored interactive iOS game development using Swift and SwiftUI, with focus on gameplay logic, user interaction, structured architecture, and iterative testing.",

    features: [
      "Interactive gameplay",
      "Dynamic game logic",
      "SwiftUI interface",
      "MVVM architecture",
      "Testing and debugging",
    ],

    contribution:
      "Independently designed and developed the entire Bubble Pop iOS game as my first mobile development project. I was responsible for the full development process, including UI implementation, game logic, user interaction, testing, debugging, and overall application behaviour. The project gave me practical experience in understanding how mobile application components and real-time game logic work together.",

    challenges: [
      {
        title: "Building My First Mobile Application",

        problem:
          "As my first mobile development project, I needed to understand how application state, user interaction, UI updates, and game behaviour should work together within an iOS application.",

        solution:
          "I approached the project incrementally, implementing individual features first and testing each part before combining them into the complete game. This helped me build a clearer understanding of mobile application structure and interactive UI development.",
      },

      {
        title: "Implementing the Game Logic",

        problem:
          "The most challenging part of the project was translating the game rules into working application logic. Multiple behaviours needed to operate together correctly, which initially caused frequent logic errors and unexpected results.",

        solution:
          "I broke the overall game logic into smaller components and analysed each behaviour separately. I tested individual conditions, identified where the application state was producing incorrect results, and gradually connected the components after confirming that each part worked correctly.",
      },

      {
        title: "Debugging Interconnected Behaviours",

        problem:
          "Because several parts of the game logic were connected, fixing one issue could sometimes affect another part of the application. This made debugging more difficult when multiple behaviours were executed during gameplay.",

        solution:
          "Instead of trying to fix the entire flow at once, I isolated each problem and tested the related logic independently. By resolving errors one at a time and repeatedly testing the complete gameplay flow, I was able to stabilise the application and complete the project.",
      },

      {
        title: "Turning Logic into a Complete Game",

        problem:
          "Implementing individual features was only one part of the challenge. The final application also needed all game behaviours, UI interactions, and state changes to work together consistently during gameplay.",

        solution:
          "After completing the individual components, I integrated them step by step and continuously tested the game from the user's perspective. This iterative process helped me identify remaining issues and successfully complete a fully working mobile game.",
      },
    ],

    github: "",

    demoVideo: "",

    screenshots: [],
  },
}

function ProjectDetail() {
  const { projectId } = useParams()

  const [selectedImage, setSelectedImage] =
    useState<string | null>(null)

  useLayoutEffect(() => {
    const scrollingElement =
      document.scrollingElement as HTMLElement | null

    if (!scrollingElement) {
      return
    }

    const previousScrollBehavior =
      scrollingElement.style.scrollBehavior

    // Temporarily disable smooth scrolling
    scrollingElement.style.scrollBehavior = "auto"

    // Move to the top before the page is painted
    window.scrollTo(0, 0)

    const frame = requestAnimationFrame(() => {
      scrollingElement.style.scrollBehavior =
        previousScrollBehavior
    })

    return () => {
      cancelAnimationFrame(frame)

      scrollingElement.style.scrollBehavior =
        previousScrollBehavior
    }
  }, [projectId])

  const project =
    projectId
      ? projectDetails[projectId]
      : undefined

  if (!project) {
    return (
      <main>
        <h1>Project Not Found</h1>

        <Link to="/">
          Back to Home
        </Link>
      </main>
    )
  }

  return (
    <main className="project-detail-page">
      <Link
        to="/"
        state={{
          scrollTo: `project-${projectId}`,
        }}
        className="project-detail-back"
      >
        ← Back to Projects
      </Link>

      <section className="project-detail-hero">
        <p className="section-label">
          {project.type}
        </p>

        <h1>{project.title}</h1>

        <p className="project-detail-description">
          {project.description}
        </p>

        <div className="project-detail-tech">
          {project.technologies.map((technology) => (
            <span key={technology}>
              {technology}
            </span>
          ))}
        </div>
      </section>
    
      <section className="project-detail-section">
        <p className="section-label">
          PROJECT OVERVIEW
        </p>

        <p className="project-detail-overview">
          {project.overview}
        </p>
      </section>

      <section className="project-detail-section">
        <p className="section-label">
          KEY FEATURES
        </p>

        <div className="project-detail-features">
          {project.features.map((feature, index) => (
            <div
              className="project-detail-feature"
              key={feature}
            >
              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              <p>{feature}</p>
            </div>
          ))}
        </div>
      </section>

      {project.contribution && (
        <section className="project-detail-section">
          <p className="section-label">
            MY CONTRIBUTION
          </p>

          <p className="project-detail-overview">
            {project.contribution}
          </p>
        </section>
      )}

      {project.challenges.length > 0 && (
        <section className="project-detail-section">
          <p className="section-label">
            CHALLENGES & SOLUTIONS
          </p>

          <div className="project-detail-challenges">
            {project.challenges.map(
              (challenge, index) => (
                <article
                  className="project-detail-challenge"
                  key={challenge.title}
                >
                  <div className="project-detail-challenge-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div>
                    <h3>{challenge.title}</h3>

                    <div className="project-detail-challenge-content">
                      <div>
                        <span>CHALLENGE</span>

                        <p>
                          {challenge.problem}
                        </p>
                      </div>

                      <div>
                        <span>SOLUTION</span>

                        <p>
                          {challenge.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              ),
            )}
          </div>
        </section>
      )}

      {project.demoVideo && (
        <section className="project-detail-section">
          <p className="section-label">
            PROJECT DEMO
          </p>

          <div className="project-detail-video-wrapper">
            <video
              className={`project-detail-video ${
                projectId === "qr-payment"
                  ? "project-detail-video-mobile"
                  : "project-detail-video-desktop"
              }`}
              controls
              playsInline
              preload="metadata"
            >
              <source
                src={project.demoVideo}
                type="video/mp4"
              />

              Your browser does not support the video tag.
            </video>
          </div>
        </section>
      )}
    {!project.demoVideo && (
      <section className="project-detail-section">
        <p className="section-label">
          PROJECT SCREENSHOTS
        </p>

        {project.screenshots.length > 0 ? (
          <div className="project-detail-screenshots">
            {project.screenshots.map((screenshot) => (
              <button
                type="button"
                className="project-detail-screenshot-button"
                onClick={() =>
                  setSelectedImage(screenshot)
                }
                key={screenshot}
                aria-label={`View ${project.title} screenshot`}
              >
                <img
                  src={screenshot}
                  alt={`${project.title} screenshot`}
                />
              </button>
            ))}
          </div>
        ) : (
          <div className="project-detail-placeholder">
            <span>PROJECT SCREENSHOTS</span>
            <p>Images coming soon</p>
          </div>
        )}
      </section>
    )}
    
      <section className="project-detail-section">
        <p className="section-label">
          SOURCE CODE
        </p>

        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="project-detail-github"
          >
            View GitHub Repository ↗
          </a>
        ) : (
          <p className="project-detail-coming-soon">
            GitHub repository coming soon
          </p>
        )}
      </section>

      {selectedImage && (
        <div
          className="image-modal"
          role="button"
          tabIndex={0}
          onClick={() => setSelectedImage(null)}
          onKeyDown={(event) => {
            if (
              event.key === "Escape" ||
              event.key === "Enter"
            ) {
              setSelectedImage(null)
            }
          }}
        >
          <img
            src={selectedImage}
            alt={`${project.title} screenshot enlarged`}
            className="image-modal-content"
          />
        </div>
      )}
    </main>
  )
}

export default ProjectDetail