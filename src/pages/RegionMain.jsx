import {countries, regions} from '/src/scripts/data.js'
import './../styles/region.scss'

console.log("made it")
export default function RegionMain() {
    const regionId = "eur05"
    let countryList = []
    countries.forEach(country => {
        if(country.region === regionId)
            countryList.push(country)
    })


    const countryCard = countryList.map(country => {
        return (
            <div className="region-country-card" key={country.id}>
                <img className="region-country-card-bg-img" src={`/country-map-webp/${country.name}.webp`} alt="" />
                <div className="region-country-card-detail">
                    <img src={`/country-backdrop-webp/${country.name}.webp`} alt="" className="region-country-card-detail-img" />
                    <article className="region-country-card-detail-article">
                        <h2 className="region-country-card-detail-article-name">{country.name}</h2>
                        <p className="region-country-card-detail-article-para">{country.description}<br></br>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat vel quod facilis in error explicabo labore libero quidem dignissimos possimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum iste, ratione aspernatur possimus sunt natus incidunt dicta dolores, libero id omnis. Consequatur atque modi animi quaerat quia voluptates libero adipisci delectus mollitia. Velit quidem, dolorem distinctio ullam ex deserunt vitae commodi laborum. Excepturi velit maxime quae deserunt rem nostrum?</p>
                        <button className="region-country-card-detail-article-btn">Learn More</button>
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