import {countries, regions, attractions} from '/src/scripts/data.js'
import './../styles/attraction.scss'

export default function AttractionMain() {
    const attractionList = attractions.map(place => {
        return (
            <div className="attraction-card" key={place.id}>
                <img src={`/city-images-webp/${place.city}.webp`} alt="" className="attraction-card-bg-img" />
                <div className="attraction-card-details">
                    <article className="attraction-card-details-article">
                        <h2 className="attraction-card-details-article-name">{place.city}</h2>
                        <p className="attraction-card-details-article-country">{place.country}</p>
                    </article>
                <i className="fa-solid fa-circle-arrow-right"></i>
                </div>
            </div>
        )
    })
    
    return (
        <main>
            <section id="attraction-hero-section">
                <img src="/region-webp/Alpine-Europe.webp" alt="" />
                <article>
                    <h1 id="heroTitle">Alpine Europe</h1>
                    <p id="heroPara">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, fugiat.</p>
                </article>
            </section>
            <section id="attraction-list-section">
                {attractionList}
            </section>
        </main>
    )
}
