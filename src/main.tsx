import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"

// Prevent the browser from restoring the previous scroll position on refresh
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual"
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)