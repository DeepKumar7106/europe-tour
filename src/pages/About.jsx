import './../styles/about.scss'
import { Link } from 'react-router-dom'

export default function About() {
    return (
        <main id='about-main'>
            <section id="about-text-section">
                <Link to='/' id='about-text-section-link'>
                    <h2 id='about-text-section-home'><i className="fa-solid fa-circle-arrow-left"></i>home</h2>
                </Link>
                <h1 id='about-text-section-heading'>about us</h1>
                <p>The goal of this project is to explore the Europe subcontinent and discover the hidden gems along side the already well known hot destinations in Europe for the tourists across the globe 
                </p>
                <p>
                This site will expose you the <br></br>
                -Attractions of Europe<br></br>
                -Adventures waiting for you<br></br>
                -Hidden Gems <br></br>
                -Expedition guides <br></br>
                </p>
                <p>

                Explore Europe on the basis of region or even down to country level<br></br> 

                7106
                </p>    
            </section>
            <section id="about-nav-section">
                <ul>
                    <li>about us</li>
                    <li>contact</li>
                    <li>credits</li>
                </ul>
            </section>
        </main>
    )
}