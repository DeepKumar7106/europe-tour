import '../styles/underratedLocation.scss'
import { underrated } from '../scripts/data'
import { useParams } from 'react-router-dom'
import { replaceSpace } from '../App'

export default function UnderratedPage() {
    const {undId} = useParams()
    const location = underrated.find(item => item.id === undId)

    return (
        <main id="underrated-page-main">
            <section id="underrated-place-bg-section">
                <img src={`/underrated-webp/${location.name.split(' ').join('-')}.webp`} alt="" id="underrated-place-bg-img" />
                <article id="underrated-place-bg-detail">
                    <h2 id="underrated-place-bg-name">{location.name}</h2>
                    <p id="underrated-place-bg-location">{location.city} {location.country}</p>
                </article>
            </section>
            <section id="underrated-place-hero-section">
                <article id="underrated-place-hero-famous">
                    <h2 id="underrated-place-hero-famous-heading">Why it is worth it</h2>
                    <p id="underrated-place-hero-famous-brief">{location.why_it_is_worth_it}</p>
                </article>
                <article id="underrated-place-hero-history">
                    <h2 id="underrated-place-hero-history-era">Era <span>{location.historical_narrative.era}</span></h2>
                    <p id="underrated-place-hero-history-brief">{location.historical_narrative.story}</p>
                  </article>
                  <article id="underrated-place-hero-facts">
                    <ul id="underrated-place-hero-facts-ul">
                        {location.tour_guide_secrets.map((item, index) => {
                            const heading = item.heading.replace('-', ' ')
                            console.log(replaceSpace(heading))
                            return(
                             <li className="underrated-place-hero-famous-li" key={index + item.heading}>
                                <h2 className="underrated-place-hero-famous-li-heading">{heading}</h2>
                                <p className="underrated-place-hero-famous-li-breif">{item.brief}</p>
                            </li>
                        )})}
                    </ul>
                </article>
                <article id="underrated-place-hero-tips">
                    <p id="underrated-place-hero-tips-vibe"><span>The vibe:</span> {location.crowd_free_strategy.the_vibe}</p>
                    <p id="underrated-place-hero-tips-best-time"><span>Best Time:</span> {location.crowd_free_strategy.best_time}</p>
                </article>
            </section>
        </main>
    )
}