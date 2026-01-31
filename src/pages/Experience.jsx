import { useParams } from "react-router-dom"
import { cities, experience } from "../scripts/data"
import '../styles/experiencePage.scss'

export default function Experience() {
    const {expId} = useParams()
    const activity = experience.find(item => item.id === expId)

    return (
        <main id="experience-page-main">
            <section id="experience-bg-img">
                <img src={`/experiences-webp/${activity.activityName.split(' ').join('-')}.webp`} alt="" id="experience-bg" />
                <h1 id="experience-bg-name">{activity.activityName}</h1>
            </section>
            <section id="experience-hero-details">
                <article id="experience-hero-details-brief">
                    <p id="experience-hero-details-brief-vibe">{activity.heroSection.vibe}</p>
                    <p id="experience-hero-details-brief-para">{activity.heroSection.shortBrief}</p>    
                </article>
                <article id="experience-hero-details-quick-facts">
                    <h2 id="experience-hero-details-quick-facts-headings">Facts</h2>
                    <p id="experience-hero-details-quick-facts-season"><span>Best Season:</span> {activity.quickFacts.season}</p>
                    <p id="experience-hero-details-quick-facts-cointries"><span>Best Countries:</span> {activity.quickFacts.topCountries}</p>
                    <p id="experience-hero-details-quick-facts-vibe"><span>Vibe:</span> {activity.quickFacts.vibe}</p>
                    <p id="experience-hero-details-quick-facts-budget"><span>Budget:</span> {activity.quickFacts.budget}</p>
                </article>
                <div id="experience-hero-details-spot-lights">
                    {activity.curatedSpotlights.map((spot, index) => {
                        const city = cities.find(item => item.id === spot.cityId)
                        return (
                            <div className="experience-hero-details-spot-lights-card" key={`spotCard${city.id}${index}`}>
                                <img src={`/city-images-webp/${city.cityName}.webp`} alt="" className="experience-hero-details-spot-lights-card-img" />
                                <article className="experience-hero-details-spot-lights-article">
                                    <h2 className="experience-hero-details-spot-lights-name">{spot.name}</h2>
                                    <p className="experience-hero-details-spot-lights-feature">{spot.feature}</p>
                                </article>
                            </div>
                        )})}
                </div>
                <article id="experience-hero-details-expert-guides">
                    <h2 id="experience-hero-details-expert-guides-heading">Expert Guides</h2>
                    {/* expert guide culure */}
                    {activity.expertGuide.culture && <p id="experience-hero-details-expert-guides-culture"><span>Culture:</span> {activity.expertGuide.culture}</p>}
                    {/* expert guide Levels */}
                    {activity.expertGuide.levels? <p id="experience-hero-details-expert-guides-levels"><span>Begginer Level:</span> {activity.expertGuide.levels.beginner} <br /><span>Expert Level: </span> {activity.expertGuide.levels.expert}</p> : null}
                    {/* expert guide Logistics */}
                    {activity.expertGuide.logistics && <p id="experience-hero-details-expert-guides-logistics"><span>Logistics:</span> {activity.expertGuide.logistics}</p>}
                    {/* expert guide Etiquette */}
                    {activity.expertGuide.etiquette && <p id="experience-hero-details-expert-guides.etiquette"><span>Etiquette:</span> {activity.expertGuide.etiquette}</p>}
                    {/* expert guide Fitness */}
                    {activity.expertGuide.fitness && <p id="experience-hero-details-expert-guides.fitness"><span>Fitness:</span> {activity.expertGuide.fitness}</p>}
                    {/* expert guide gear */}
                    {activity.expertGuide.gear && <p id="experience-hero-details-expert-guides.gear"><span>Gear:</span> {activity.expertGuide.gear}</p>}
                    {/* expert guide health */}
                    {activity.expertGuide.health && <p id="experience-hero-details-expert-guides-health"><span>Health:</span> {activity.expertGuide.health}</p>}
                    {/* expert guide locations */}
                    {activity.expertGuide.locations && <p id="experience-hero-details-expert-guides-locations"><span>Locations:</span> {activity.expertGuide.locations}</p>}
                    {/* expert guide photography */}
                    {activity.expertGuide.photography && <p id="experience-hero-details-expert-guides-photography"><span>Photography:</span> {activity.expertGuide.photography}</p>}
                    {/* expert guide safety */}
                    {activity.expertGuide.safety && <p id="experience-hero-details-expert-guides-safety"><span>Safety:</span> {activity.expertGuide.safety}</p>}
                    {/* expert guide temperature */}
                    {activity.expertGuide.temperature && <p id="experience-hero-details-expert-guides-temperature"><span>Temperature:</span> {activity.expertGuide.temperature}</p>}
                    {/* expert guide timing */}
                    {activity.expertGuide.timing && <p id="experience-hero-details-expert-guides-timing"><span>Timing:</span> {activity.expertGuide.timing}</p>}
                    {/* expert guide weather */}
                    {activity.expertGuide.weather && <p id="experience-hero-details-expert-guides-weather"><span>Weather:</span> {activity.expertGuide.weather}</p>}
                    {/* expert guide wildlife */}
                    {activity.expertGuide.wildlife && <p id="experience-hero-details-expert-guides-wildlife"><span>Wildlife:</span> {activity.expertGuide.wildlife}</p>}
                </article>
                <p id="experience-hero-details-pro-tip">{activity.proTip}</p>
            </section>
        </main>
    )
}