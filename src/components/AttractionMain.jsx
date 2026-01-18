import {countries, regions, attractions} from '/src/scripts/data.js'

export default function AttractionMain() {
   
    const attractionList = attractions.map(place => {
        return (
            <div className="attractionCard" key={place.id}>
                <img src={`/city-images-webp/${place.city}.webp`} alt="" className="attractionBG" />
                <div className="detailWrapper">
                    <article className="attractionArticle">
                        <h2 className="cityName">{place.city}</h2>
                        <p className="countryName">{place.country}</p>
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