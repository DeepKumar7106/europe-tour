import { createRoot } from "react-dom/client"
import { StrictMode } from "react"
import App from "./App"
import './../../styles/attraction.scss'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>
)
