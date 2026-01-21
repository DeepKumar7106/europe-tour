import { Link } from "react-router-dom"

export default function Hero() {
    return (
      <section id="home-hero">
          <img src="public\city-images-webp\Vienna.webp" alt="" id="home-hero-image" loading="lazy" />
          <div id="home-hero-details">
            <h1 id="home-hero-title">Explore Europe</h1>
            <p id="home-hero-text">Embark on an unforgettable odyssey across Europe, where ancient history seamlessly blends with modern vibrance. From sun-drenched Mediterranean shores to frost-dusted Alpine peaks, go beyond the famous landmarks to uncover enchanting hidden gems and create timeless stories in every corner.</p>
            <div id="home-cta-box">
                <Link to="/region">
                  <button id="home-explore">Explore</button>
                </Link>
                <button id="home-learn-more">Learn More</button>
            </div>
          </div>
      </section>
    )
}