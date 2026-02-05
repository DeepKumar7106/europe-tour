import { cities } from "../scripts/data"
import { cityData } from "../scripts/moreData"
import './../styles/cities.scss'
import { useParams } from "react-router-dom"

export default function Cities() {
    const {cityId} = useParams()

    const city = cities.find(city => city.id === cityId)
    const cityDetail = cityData.find(city => city.id === cityId)
    return (
        <main id="cities-main">
            <div id="cities-backdrop-section-wrapper">
                <section id="cities-backdrop-section">
                    <img src={`/city-images-webp/${city.cityName}1.webp`} alt={city.cityName} id="cities-backdrop-section-img" />
                    <article id="cities-backdrop-section-article">
                        {city.cityName}
                    </article>
                </section>
            </div>
            <section id="cities-hero-section">
                <img src = {`/city-images-webp/${city.cityName}.webp`} alt={city.cityName} id="cities-hero-section-img" />
                <article id="cities-hero-section-article">
                    <h2 id="cities-hero-section-article-name">{city.cityName}</h2>
                    <p id="cities-hero-section-article-details">
                        {city.description}
                    </p>
                </article>
            </section>
            <section id="cities-details-section">
                <div id="cities-details-section-menu">
                    <a className="cities-details-section-menu-list overview" href="#cities-details-section-container-overview">Overview</a>
                    <a className="cities-details-section-menu-list famous" href="#cities-details-section-container-famous">Famous Places</a>
                    <a className="cities-details-section-menu-list konwn" href="#cities-details-section-container-known">Known For</a>
                </div>
                <div id="cities-details-section-container">
                    <article id="cities-details-section-container-overiew">
                        <h2 className ="cities-details-section-container-heading">Overview</h2>
                        <p>
                        {cityDetail.overview}
                        </p>
                    </article>
                    <article id="cities-details-section-container-famous">
                        <h2 className ="cities-details-section-container-heading">Famous Places</h2>
                        <p>
                        {cityDetail.featured.why_famous} <br /> {cityDetail.featured.why_recommended}
                        </p>
                    </article>
                    <article id="cities-details-section-container-known">
                        <h2 className ="cities-details-section-container-heading">Known For</h2>
                        <div>
                        {cityDetail.famous_places_details.map(loc => (
                                <div className="cities-details-section-container-deatils-container" key={loc.name}>
                                    <h3 className="cities-details-section-container-deatils-container-name">
                                        {loc.name}
                                    </h3>
                                    <p className="cities-details-section-container-deatils-container-brief">
                                        {loc.brief}
                                    </p>
                                </div>
                        ))}
                        </div>
                    </article>
                </div>
            </section>
        </main>
    )
}