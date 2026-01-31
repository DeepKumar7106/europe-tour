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
                <span id="expedtion-page-breif-details-duration"><i className="fa-regular fa-clock"></i><br />{expedition.duration}</span>
                <span id="expedtion-page-breif-details-difficulty"><i className="fa-solid fa-chart-line"></i><br />{expedition.difficulty}</span>
                <span id="expedtion-page-breif-details-group"><i className="fa-solid fa-people-group"></i><br />{expedition.stats.groupSize}</span>
                <span id="expedtion-page-breif-details-accomadtion"><i className="fa-solid fa-hotel"></i><br />{expedition.stats.accommodation}</span>
                <span id="expedtion-page-breif-details-transport"><i className="fa-solid fa-paper-plane"></i><br />{expedition.stats.transport}</span>
            </section>
            <section id="expedition-page-description-section">
                <div id="expedition-page-description-section-brief-container">
                    <article id="expedition-page-description-section-brief-article">
                        <h2 id="expedition-page-description-section-brief-heading">Description</h2>
                        <p id="expedition-page-description-section-brief">{expedition.summary.shortBrief}<br />{expedition.description}</p>
                    </article>
                    <img src={`/expedition-webp/${expedition.name.split(' ').join('-')}.webp`} alt="" id="expedition-page-description-section-map-img" />
                </div>
                <div id="expedition-page-description-information-wrapper">
                    <article id="expedition-page-description-features">
                        <h2 id="expedition-page-description-features-heading">Features</h2>
                        <article id="expedition-page-description-features-para-wrapper">
                            <p id="expedition-page-description-features-max-alt">
                                <span><i className="fa-solid fa-mountain"></i>Max-Altitude:</span>{expedition.detailedKeyFeatures.maxAltitude}
                            </p>
                            <p id="expedition-page-description-features-terrain">
                                <span><i className="fa-solid fa-person-hiking"></i>Terrain:</span>{expedition.detailedKeyFeatures.terrain}
                            </p>
                            <p id="expedition-page-description-features-season">
                                <span><i className="fa-solid fa-calendar-days"></i>Best Season:</span>{expedition.detailedKeyFeatures.bestSeason}
                            </p>
                        </article>
                    </article>
                    <article id="expedition-page-description-highlights">
                        <h2 id="expedition-page-description-highlights-heading">Highlights</h2>
                        {expedition.highlights.map((highlight, index) => (
                            <p className="expedition-page-description-highlights-para" 
                                key={highlight[index]+String(index)} 
                                id={highlight[index]+String(index)}
                            >
                                <i className="fa-regular fa-circle-play"></i> {highlight}
                            </p>
                        ))}
                    </article>
                </div>
            </section>
            <section id="expedition-page-route-section"></section>
            <section id="expedition-page-information-section">
                <article id="expedition-page-information-requirements">
                    <h2 id="expedition-page-description-requirements-heading">Requirements</h2>
                    {expedition.requirements.map((req, index) => (
                        <p className="expedition-page-description-requirements-para" 
                            key={req[index]+String(index)} 
                            id={req[index]+String(index)}
                        >
                            <i className="fa-solid fa-diamond"></i> {req}
                        </p>
                    ))}
                </article>
                <article id="expedition-page-information-precautions">
                    {expedition.precaution}
                </article>
            </section>
        </main>
    )
}