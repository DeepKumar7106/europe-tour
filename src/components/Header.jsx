import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header>
            <img src="src\assets\react.svg" alt="" />
            <nav>
                <ul id="navList">
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
        </header>
    )
}