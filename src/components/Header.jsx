import { Link } from "react-router-dom"
import { useState, useRef } from "react"


export default function Header() {
    const [open, setOpen] = useState(false)
    const menu = useRef(null)
    const menuList = useRef(null)

    function openMenu() {
        setOpen(prevOpen => !prevOpen)
        menuList.current.style.cssText = !open ? "transform: translateX(0%); display:block;" : "transform: translateX(100%);display:none;"
        // menu.current.style.cssText = !open ? `height: 100vh; 
                                            // align-items: start; 
                                            // padding-top: 1rem; 
                                            // overflow: hidden; 
                                            // background: radial-gradient($secondary, darken($secondary, 15%));` : `height: 70px; align-items: center; 
                                            // overflow: auto;
                                            // background-color: $secondary;`
    }


    return (
        <header ref={menu}>
            <img src="src\assets\react.svg" alt="" id="header-logo-img"/>
            <nav id="header-nav">
                <ul id="header-nav-list">
                    <Link to= "/">
                        <li className="listItem">Home</li>
                    </Link>
                    <Link to= "/attraction">
                        <li className="listItem">Attractions</li>
                    </Link>
                    <Link to= "/experience">
                        <li className="listItem">Experiences</li>
                    </Link>
                    <Link to= "/expedition">
                        <li className="listItem">Expeditions</li>
                    </Link>
                    <Link to= "/underrated">
                        <li className="listItem">Hidden Gems</li>
                    </Link>
                </ul>
            </nav>
            <i className="fa-solid fa-bars"  onClick={openMenu} id="header-mobile-menu" ></i>
            <div id="header-mobile-menu-list" ref={menuList} className="header-menu-list-container">
                <ul id="header-mobile-list">
                    <Link onClick={openMenu} to= "/">Home</Link>
                    <Link onClick={openMenu} to= "/attraction">Attraction</Link>
                    <Link onClick={openMenu} to= "/experience">Experience</Link>
                    <Link onClick={openMenu} to= "/expedition">Expedition</Link>
                    <Link onClick={openMenu} to= "/underrated">Hidden Gems</Link>
                </ul>
            </div>
        </header>
    )
}