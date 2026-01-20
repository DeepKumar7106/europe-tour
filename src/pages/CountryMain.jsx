export default function CountryMain() {
    console.log('works')
    return (
        <main>
            <section id="heroSection">
                <img src="/region-webp/Alpine-Europe.webp" alt="" />
                <article id="heroArticle">
                    <h1 id="heroTitle">Alpine Europe</h1>
                    <p id="heroPara">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, fugiat.</p>
                </article>
            </section>
            <section id="cityListAnimateContainer">
                <div id="cityAnimate"></div>
                <div id="cityListWrapper">
                    <div className="cityCard">
                        <img src="/country-backdrop-webp/Slovakia.webp" alt="" className="backgroundimage" />
                        <article className="cityDetails">
                            <h2 className="cityName">Slovakia</h2>
                            <p className="cityPara">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore sed eveniet cum possimus incidunt rem quaerat in veritatis ratione quae officia reprehenderit nisi, nesciunt doloribus veniam iure vitae ducimus quia.</p>
                        </article>
                    </div>
                </div>
            </section>
        </main>
    )
}