import { useParams } from "react-router-dom"
import { attractions } from "../scripts/data"
import './../styles/attractionLocation.scss'

export default function Attraction() {
    const {atcId} = useParams()
    const location = attractions.find(item => item.id === atcId)
    
    return (
        <main id="attraction-place-main">
            <section id="attraction-place-bg-section">
                <img src={`/city-images-webp/${location.city}.webp`} alt="" id="attraction-place-bg-img" />
                <article id="attraction-place-bg-detail">
                    <h2 id="attraction-place-bg-name">{location.name}</h2>
                    <p id="attraction-place-bg-location">{location.city} {location.country}</p>
                </article>
            </section>
            <section id="attraction-place-hero-section">
                <article id="attraction-place-hero-famous">
                    <h2 id="attraction-place-hero-famous-heading">Why it is famous</h2>
                    <ul id="attraction-place-hero-famous-ul">
                        {location.why_it_is_famous.map((item, index) => (
                            <li className="attraction-place-hero-famous-li" key={index + item.heading}>
                                <h2 className="attraction-place-hero-famous-li-heading">{item.heading}</h2>
                                <p className="attraction-place-hero-famous-li-breif">{item.brief}</p>
                            </li>
                        ))}
                    </ul>
                </article>
                <article id="attraction-place-hero-history">
                    <h2 id="attraction-place-hero-history-era">Era <span>{location.historical_narrative.era}</span></h2>
                    <p id="attraction-place-hero-history-brief">{location.historical_narrative.story}</p>
                    <p id="attraction-place-hero-architecture-style">Style: <span>{location.historical_narrative.architectural_style}</span></p>
                </article>
                <article id="attraction-place-hero-facts">
                    <ul id="attraction-place-hero-facts-ul">
                        {location.tour_guide_secrets.map((item, index) => (
                             <li className="attraction-place-hero-famous-li" key={index + item.heading}>
                             <h2 className="attraction-place-hero-famous-li-heading">{item.heading}</h2>
                             <p className="attraction-place-hero-famous-li-breif">{item.brief}</p>
                         </li>
                        ))}
                    </ul>
                </article>
                <article id="attraction-place-hero-tips">
                    <h2 id="attraction-place-hero-tips-heading">suggestion</h2>
                    <p id="attraction-place-hero-tips-duration">ideal duration: {location.visitor_strategy.ideal_duration}</p>
                    <p id="attraction-place-hero-tips-time">best time: {location.visitor_strategy.best_time_to_visit}</p>
                </article>
                <article id="attraction-place-hero-beware">
                    <h2 id="attraction-place-hero-beware-heading">Avoid!!</h2>
                    <p id="attraction-place-hero-beware-para">{location.visitor_strategy.avoid_this}</p>
                </article>
            </section>
        </main>
    )
}