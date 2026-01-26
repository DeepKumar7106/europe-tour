import {countries, regions} from '/src/scripts/data.js'
import './../styles/region.scss'
import { useNavigate, useParams } from 'react-router-dom'
import { useRef } from 'react'

export default function RegionMain() {
    const {regionId} = useParams()
    const navigate = useNavigate()
    const regionCard = useRef(null)

    let countryList = []
    countries.forEach(country => {
        if(country.region === regionId)
            countryList.push(country)
    })

    const countryCard = countryList.map(country => {
        return (
            <div className="region-country-card" key={country.id} id={country.id} ref={regionCard}>
                <img className="region-country-card-bg-img" src={`/country-map-webp/${country.name}.webp`} alt="" />
                <div className="region-country-card-detail">
                    <img src={`/country-backdrop-webp/${country.name}.webp`} alt="" className="region-country-card-detail-img" />
                    <article className="region-country-card-detail-article">
                        <h2 className="region-country-card-detail-article-name">{country.name}</h2>
                        <p className="region-country-card-detail-article-para">{country.description}<br></br>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat vel quod facilis in error explicabo labore libero quidemvelit maxime quae deserunt rem nostrum?</p>
                        <button className="region-country-card-detail-article-btn"
                            onClick={() => {navigate(`/country/${country.id}`)}}
                        >Learn More</button>
                    </article>
                </div>
            </div>
        )
    })

    
    return (
        <main>
            <section id="region-hero-section">
                <img src="/region-webp/Alpine-Europe.webp" alt="" />
                <article id="heroArticle">
                    <h1 id="heroTitle">Alpine Europe</h1>
                    <p id="heroPara">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, fugiat.</p>
                </article>
            </section>
            <section id="region-list-section">
                {countryCard}
            </section>
        </main>
    )
}