import { useLayoutEffect } from "react"
import { useLocation } from "react-router-dom"

function ScrollToTop() {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    const html = document.documentElement
    const previousScrollBehavior = html.style.scrollBehavior

    // Disable smooth scrolling during route changes.
    html.style.scrollBehavior = "auto"

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    })

    html.style.scrollBehavior = previousScrollBehavior
  }, [pathname])

  return null
}

export default ScrollToTop