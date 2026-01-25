import { expeditions } from '/src/scripts/data.js'
import { addHyphen } from '../App'
import './../styles/expedition.scss'

export default function ExpeditionMain() {
   const expeditionList = expeditions.map(exp => {
    const name = addHyphen(exp.name)

    return (
        <div className="expedition-card" key={exp.id}>
            <img src={`/expedition-webp/${name}.webp`} alt={name} className="expedition-card-img" />
            <article className="expedition-card-article">
                <h2 className="expedition-card-article-name">{exp.name}</h2>
                <p className="expedition-card-article-duration"><i className="fa-regular fa-clock"></i> {exp.duration}</p>
                <h3 className="expedition-card-article-usp">{exp.usp}</h3>
                <p className="expedition-card-article-region">{exp.region}</p>
                <p className="expedition-card-article-description">{exp.summary.shortBrief}</p>
            </article>
        </div>
    )
   })

    
    return (
        <main>
            <section id="expedition-hero-section">
                <img src="/region-webp/Alpine-Europe.webp" alt="" />
                <article id="heroArticle">
                    <h1 id="heroTitle">Alpine Europe</h1>
                    <p id="heroPara">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, fugiat.</p>
                </article>
            </section>
            <section id="expedition-list-section">
                {expeditionList}
            </section>
        </main>
    )
}