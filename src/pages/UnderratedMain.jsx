import {countries, regions, underrated} from '/src/scripts/data.js'
import { addHyphen } from '../App'
import './../styles/underrated.scss'
import { useNavigate } from 'react-router-dom'


export default function UnderratedMain() {
    const navigate = useNavigate()

    const attractionList = underrated.map(place => {
        const name = addHyphen(place.name)
        return (
            <div className="underrated-card" key={place.id}>
                <img src={`/underrated-webp/${name}.webp`} alt={name} className="underrated-card-bg-img" />
                <div className="underrated-card-details">
                    <article className="underrated-card-details-article">
                        <h2 className="underrated-card-details-article-name">{place.name}</h2>
                        <p className="underrated-card-details-article-country">{place.city}, {place.country}</p>
                    </article>
                    <i className="fa-solid fa-circle-arrow-right"
                        onClick={() => {navigate(`/underratedLocation/${place.id}`)}}
                    ></i>
                </div>
            </div>
        )
    })
    
    return (
        <main>
            <section id="underrated-hero-section">
                <img src="/page-backdrops/underrated.jpg" alt="" />
                <article id="heroArticle">
                    <h1 id="heroTitle">Hidden GEms</h1>
                    <p id="heroPara">Discover european unheard gems which bring peace to your soul</p>
                </article>
            </section>
            <section id="underrated-list-section">
                {attractionList}
            </section>
        </main>
    )
}
