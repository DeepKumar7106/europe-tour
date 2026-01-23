import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <footer>
            <h1 id="footer-heading">Tour-De-Europa</h1>
            <div id="footer-link-container">
                <div id="footer-link-container-quick-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to='/attraction'>Attactions</Link></li>
                        <li><Link to='/experience'>Experiences</Link></li>
                        <li><Link to='/attraction'>FAQs</Link></li>
                    </ul>
                </div>
                <div id="footer-link-container-about-links">
                    <div id="footer-link-container-about-links-follow">
                        <h3>Follow Us</h3>
                        <div id="footer-link-container-about-links-social-list">
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-x-twitter"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-youtube"></i>
                            <i className="fa-brands fa-linkedin"></i>
                        </div>
                    </div>
                    <div id="footer-link-container-about-links-about">
                    <h3>About Us</h3>
                        <ul>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/about'>Contact Us</Link></li>
                            <li><Link to='/about'>Credits</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <p>&copy; 2026 Tour de Europa</p>
        </footer>
    )
}