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
            <section id="cities-backdrop-section">
                <img src={`/city-images-webp/${city.cityName}1.webp`} alt={city.cityName} id="cities-backdrop-section-img" />
                <article id="cities-backdrop-section-article">
                    {city.cityName}
                </article>
            </section>
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

                </div>
                <div id="cities-details-section-container">
                    <h2 className ="cities-details-section-container-heading">Overview</h2>
                    <p>
                       {cityDetail.overview}
                    </p>
                    <h2 className ="cities-details-section-container-heading">Famous Places</h2>
                    <p>
                       {cityDetail.featured.why_famous} <br /> {cityDetail.featured.why_recommended}
                    </p>
                    <h2 className ="cities-details-section-container-heading">Known For</h2>
                    <div>
                       {cityDetail.famous_places_details.map(loc => (
                            <div className="cities-details-section-container-deatils-container" key={loc.name}>
                                <h2 className="cities-details-section-container-deatils-container-name">
                                    {loc.name}
                                </h2>
                                <p className="cities-details-section-container-deatils-container-brief">
                                    {loc.brief}
                                </p>
                            </div>
                       ))}
                    </div>
                </div>
            </section>
        </main>
    )
}