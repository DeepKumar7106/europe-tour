import { useParams } from "react-router-dom"
import { expeditions } from "../scripts/data"
import '../styles/expeditionPage.scss'

export default function Expedition() {
    const {expdId} = useParams()
    const expedition = expeditions.find(item => item.id === expdId)

    return (
        <main id="expedition-page-main">
            <section id="expedition-page-hero-section">
                <img src={`/expedition-webp/${expedition.name.split(' ').join('-')}.webp`} alt="" id="expedition-page-hero-img" />
                <article id="expedition-page-hero-article">
                    <h2 id="expedition-page-hero-article-name">{expedition.name}</h2>
                    <p id="expedition-page-hero-usp">{expedition.usp}</p>
                </article>
            </section>
            <section id="expedtion-page-breif-details">
                <span id="expedtion-page-breif-details-duration"><i className="fa-regular fa-clock"></i>{expedition.duration}</span>
                <span id="expedtion-page-breif-details-difficulty"><i className="fa-solid fa-chart-line"></i>{expedition.difficulty}</span>
                <span id="expedtion-page-breif-details-group"><i className="fa-solid fa-people-group"></i>{expedition.stats.groupSize}</span>
            </section>
            <section id="expedition-page-description-section">
                <div id="expedition-page-description-section-brief-container">
                    <article id="expedition-page-description-section-brief-article">
                        <h2 id="expedition-page-description-section-brief-heading">Description</h2>
                        <p id="expedition-page-description-section-brief">{expedition.summary.vibe}<br />{expedition.summary.shortBrief}</p>
                    </article>
                    <img src={`/expedition-webp/${expedition.name.split(' ').join('-')}.webp`} alt="" id="expedition-page-description-section-map-img" />
                </div>
            </section>
        </main>
    )
}