import {countries, regions, attractions} from '/src/scripts/data.js'
import './../styles/attraction.scss'
import { useNavigate } from 'react-router-dom'

export default function AttractionMain() {
    const navigate = useNavigate()

    const attractionList = attractions.map(place => {
        return (
            <div className="attraction-card" key={place.id}>
                <img src={`/city-images-webp/${place.city}.webp`} alt="" className="attraction-card-bg-img" />
                <div className="attraction-card-details">
                    <article className="attraction-card-details-article">
                        <h2 className="attraction-card-details-article-name">{place.name}</h2>
                        <p className="attraction-card-details-article-country">{place.country}</p>
                    </article>
                <i className="fa-solid fa-circle-arrow-right"
                    onClick={()=>{navigate(`/attractionLocation/${place.id}`)}}
                ></i>
                </div>
            </div>
        )
    })
    
    return (
        <main id='attraction-all-loc-main'>
            <section id="attraction-hero-section">
                <img src="/page-backdrops/attraction-page.jpg" alt="" />
                <article>
                    <h1 id="heroTitle">Attractions</h1>
                    <p id="heroPara">Find places which are popular across globe</p>
                </article>
            </section>
            <section id="attraction-list-section">
                {attractionList}
            </section>
        </main>
    )
}
