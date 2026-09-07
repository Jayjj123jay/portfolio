import { useEffect } from "react"
import { useLocation } from "react-router-dom"

type LocationState = {
  scrollTo?: string
}

function ScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    const state = location.state as LocationState | null
    const targetId = state?.scrollTo

    // Return to the selected project
    if (location.pathname === "/" && targetId) {
      const timer = setTimeout(() => {
        const element = document.getElementById(targetId)

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "center",
          })
        }
      }, 300)

      return () => clearTimeout(timer)
    }

    // Default homepage position
    if (location.pathname === "/") {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      })
    }
  }, [location.pathname, location.state])

  return null
}

export default ScrollToHash