import {countries, regions} from '/src/scripts/data.js'

export default function ExpeditionMain() {
   

    
    return (
        <main>
            <section id="heroSection">
                <img src="/region-webp/Alpine-Europe.webp" alt="" />
                <article id="heroArticle">
                    <h1 id="heroTitle">Alpine Europe</h1>
                    <p id="heroPara">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, fugiat.</p>
                </article>
            </section>
            <section id="expeditionWrapper">
                <div className="expeditionCard">
                    <img src={`/expedition-webp/Swiss-Alps-Adventure.webp`} alt="" className="expeditonImg" />
                    <article className="expeditonArticle">
                        <h2 className="expeditionName">hell yeah tours</h2>
                        <p className="duration"><i className="fa-regular fa-clock"></i> eternity</p>
                        <h3 className="usp">spend ur all money</h3>
                        <p className="region">Alpine</p>
                        <p className="descritption">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque consequatur maxime qui doloremque quisquam dicta. Adipisci sed delectus deserunt odit.</p>
                    </article>
                </div>
            </section>
        </main>
    )
}