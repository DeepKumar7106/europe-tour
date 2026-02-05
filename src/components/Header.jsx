import { Link } from "react-router-dom"
import { useState, useRef, useEffect } from "react"


export default function Header() {
    const [open, setOpen] = useState(false)
    // const [windowScroll, setWindowScroll] = useState(window.screenY)
    const menu = useRef(null)
    const menuList = useRef(null)
    const scrollPos = useRef(0)

    useEffect(() => {
        function handleScroll() {
        const element = menu.current
        const currentScroll = window.scrollY
            if (element) {
                element.style.transform = scrollPos.current < currentScroll ? 'translateY(-200px)' : 'translateY(0px)'
                scrollPos.current = currentScroll
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {window.removeEventListener('scroll', handleScroll)}
    },[])
    function openMenu() {
        setOpen(prevOpen => !prevOpen)
        menuList.current.style.cssText = !open ? "transform: translateX(0%); display:block;" : "transform: translateX(100%);display:none;"
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