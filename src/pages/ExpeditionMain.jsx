import { expeditions } from '/src/scripts/data.js'
import { addHyphen } from '../App'
import './../styles/expedition.scss'

export default function ExpeditionMain() {
   const expeditionList = expeditions.map(exp => {
    const name = addHyphen(exp.name)

    return (
        <div className="expeditionCard">
            <img src={`/expedition-webp/${name}.webp`} alt={name} className="expeditonImg" />
            <article className="expeditonArticle">
                <h2 className="expeditionName">{exp.name}</h2>
                <p className="duration"><i className="fa-regular fa-clock"></i> {exp.duration}</p>
                <h3 className="usp">{exp.usp}</h3>
                <p className="region">{exp.region}</p>
                <p className="descritption">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque consequatur maxime qui doloremque quisquam dicta. Adipisci sed delectus deserunt odit.</p>
            </article>
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
            <section id="expeditionWrapper">
                {expeditionList}
            </section>
        </main>
    )
}