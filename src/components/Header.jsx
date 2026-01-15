export default function Header() {
    return (
        <header>
            <img src="src\assets\react.svg" alt="" />
            <nav>
                <ul id="navList">
                    <li className="listItem"><a href="src\pages\region\region.html">Home</a></li>
                    <li className="listItem"><a href="">About</a></li>
                    <li className="listItem"><a href="">Must Visit</a></li>
                    <li className="listItem"><a href="">Popular</a></li>
                </ul>
            </nav>
        </header>
    )
}