import { cities } from "../scripts/data"
import './../styles/cities.scss'
import { useParams } from "react-router-dom"

export default function Cities() {
    const {cityId} = useParams()

    const city = cities.find(city => city.id === cityId)

    return (
        <main id="cities-main">
            <section id="cities-backdrop-section">
                <img src={`/city-images-webp/${city.cityName}1.webp`} alt={city.cityName} id="cities-backdrop-section-img" />
                <article id="cities-backdrop-section-article"></article>
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
                    <h2 id="cities-details-section-container">Heading</h2>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores iste saepe vero dignissimos aspernatur. Et facere fugiat commodi, in repellat aut ratione molestias similique unde. Quis, molestiae voluptatum nisi aliquid molestias delectus minus cum ab quibusdam culpa vitae tempore, voluptas at! Nesciunt atque, nulla, ab ipsam laboriosam nemo accusamus, fugit omnis minima suscipit ipsa. Vero, modi quae aliquam esse dolorem hic iste accusamus tempora dicta, voluptatum architecto amet illum! Vitae id sint deleniti tempore non eos nisi. Magnam vel quis, repellendus reiciendis voluptatum ducimus temporibus pariatur, exercitationem amet repellat nemo ipsa! Unde perferendis fugiat similique optio! Nostrum assumenda architecto dolorem.
                    </p>
                </div>
            </section>
        </main>
    )
}