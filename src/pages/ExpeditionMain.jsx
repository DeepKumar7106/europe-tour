import { expeditions } from '/src/scripts/data.js'
import { addHyphen } from '../App'
import './../styles/expedition.scss'
import { useNavigate } from 'react-router-dom'

export default function ExpeditionMain() {
    const navigate = useNavigate()
    const expeditionList = expeditions.map(exp => {
        const name = addHyphen(exp.name)

        return (
            <div className="expedition-card" key={exp.id}
                onClick={() => {navigate(`/expeditionPage/${exp.id}`)}}
            >
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
                <img src="/page-backdrops/expedition.jpg" alt="" />
                <article id="heroArticle">
                    <h1 id="heroTitle">Expeditions</h1>
                    <p id="heroPara">Confused where to go? choose one of our expeditions...</p>
                </article>
            </section>
            <section id="expedition-list-section">
                {expeditionList}
            </section>
        </main>
    )
}