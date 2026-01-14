export default function Footer() {
    return (
        <footer>
            <h1>Tour-De-Europa</h1>
            <div id="linkWrapper">
                <div id="quickLinks">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="">Attactions</a></li>
                        <li><a href="#activitiesSection">Experiences</a></li>
                        <li><a href="">FAQs</a></li>
                    </ul>
                </div>
                <div id="aboutWrapper">
                    <div id="followUs">
                        <h3>Follow Us</h3>
                        <div id="socialList">
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-x-twitter"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-youtube"></i>
                            <i className="fa-brands fa-linkedin"></i>
                        </div>
                    </div>
                    <div id="about">
                    <h3>About Us</h3>
                        <ul>
                            <li><a href="">About</a></li>
                            <li><a href="">Contact Us</a></li>
                            <li><a href="">Credits</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <p>&copy; 2026 Tour de Europa</p>
        </footer>
    )
}