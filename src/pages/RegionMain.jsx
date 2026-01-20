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
            <div className="countryCard" key={country.id}>
                <img className="countryImage" src={`/country-map-webp/${country.name}.webp`} alt="" />
                <div className="foregroundDetails">
                    <img src={`/country-backdrop-webp/${country.name}.webp`} alt="" className="foregroundimage" />
                    <article className="countryDetails">
                        <h2 className="countryName">{country.name}</h2>
                        <p className="countryDetail">{country.description}<br></br>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat vel quod facilis in error explicabo labore libero quidem dignissimos possimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum iste, ratione aspernatur possimus sunt natus incidunt dicta dolores, libero id omnis. Consequatur atque modi animi quaerat quia voluptates libero adipisci delectus mollitia. Velit quidem, dolorem distinctio ullam ex deserunt vitae commodi laborum. Excepturi velit maxime quae deserunt rem nostrum?</p>
                        <button className="countryButton">Learn More</button>
                    </article>
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
            <section id="countryWrapper">
                {countryCard}
            </section>
        </main>
    )
}