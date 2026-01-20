import {countries, regions, underrated} from '/src/scripts/data.js'
import { addHyphen } from '../App'
import './../styles/underrated.scss'


export default function UnderratedMain() {
    
    
    
    console.log(addHyphen("a and b"))

    const attractionList = underrated.map(place => {
        const name = addHyphen(place.name)
        return (
            <div className="attractionCard" key={place.id}>
                <img src={`/underrated-webp/${name}.webp`} alt={name} className="attractionBG" />
                <div className="detailWrapper">
                    <article className="attractionArticle">
                        <h2 className="cityName">{place.name}</h2>
                        <p className="countryName">{place.city}, {place.country}</p>
                    </article>
                    <i className="fa-solid fa-circle-arrow-right"></i>
                </div>
            </div>
        )
    })
    
    return (
        <main>
            <section id="heroSection">
                <img src="/region-webp/Alpine-Europe.webp" alt="" />
                <article id="heroArticle">
                    <h1 id="heroTitle">Alpine Europe</h1>
                    <p id="heroPara">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, fugiat.</p>
                </article>
            </section>
            <section id="attractionList">
                {attractionList}
            </section>
        </main>
    )
}
