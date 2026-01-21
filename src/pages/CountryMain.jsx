import './../styles/country.scss'

export default function CountryMain() {
    return (
        <main>
            <section id="country-hero-section">
                <img src="/region-webp/Alpine-Europe.webp" alt="" />
                <article id="heroArticle">
                    <h1 id="heroTitle">Alpine Europe</h1>
                    <p id="heroPara">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, fugiat.</p>
                </article>
            </section>
            <section id="country-city-list-section">
                <div id="country-city-list-section-bar"></div>
                <div id="country-city-list-section-container">
                    <div className="country-city-card">
                        <img src="/country-backdrop-webp/Slovakia.webp" alt="" className="backgroundimage" />
                        <article className="country-city-card-detail">
                            <h2 className="country-city-card-detail-name">Slovakia</h2>
                            <p className="country-city-card-detail-para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore sed eveniet cum possimus incidunt rem quaerat in veritatis ratione quae officia reprehenderit nisi, nesciunt doloribus veniam iure vitae ducimus quia.</p>
                        </article>
                    </div>
                </div>
            </section>
        </main>
    )
}