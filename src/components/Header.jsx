import { Link } from "react-router-dom"
import { useState, useRef } from "react"

export default function Header() {
    const [open, setOpen] = useState(false)
    const menu = useRef(null)

    function openMenu() {
        setOpen(prevOpen => !prevOpen)
        menu.current.style.cssText = open ? "height: 100vh; align-items: start; padding-top: 1rem;" : "height: 70px; align-items: center;"
    }
    return (
        <header ref={menu}>
            <img src="src\assets\react.svg" alt="" id="header-logo-img"/>
            <nav id="header-nav">
                <ul id="header-nav-list">
                    <Link to= "/region">
                        <li className="listItem">Home</li>
                    </Link>
                    <Link to= "/AttractionMain">
                        <li className="listItem">Attractions</li>
                    </Link>
                    <Link to= "/ExperienceMain">
                        <li className="listItem">Experiences</li>
                    </Link>
                    <Link to= "/ExpeditionMain">
                        <li className="listItem">Expeditions</li>
                    </Link>
                    <Link to= "/UnderratedMain">
                        <li className="listItem">Hidden Gems</li>
                    </Link>
                </ul>
            </nav>
            <div id="header-mobile-menu" 
                onClick={openMenu}
            >
                <i className="fa-solid fa-bars"></i>
            </div>
        </header>
    )
}