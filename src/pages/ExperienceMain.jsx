import {experience} from '/src/scripts/data.js'
import { addHyphen } from '../App'
import '../styles/experience.scss'

export default function ExperienceMain() {
   
    const experiencList = experience.map(activity => {
        const name = addHyphen(activity.activityName)
        return(
            <div className="experience-card" key={activity.id}>
                <img src={`/experiences-webp/${name}.webp`} alt={name} className="experience-card-img" />
                <article className="experience-card-article">
                    <h2 className="experience-card-article-name">{activity.activityName}</h2>
                    <p className="experience-card-article-region">in {activity.regionOrCountry}</p>
                    <p className="experience-card-article-para">{activity.heroSection.shortBrief}</p>
                </article>
            </div>
        )
    })
    
    return (
        <main id='expereince-main'>
            <section id="experience-hero-section">
                <img src="/region-webp/Alpine-Europe.webp" alt="" />
                <article id="heroArticle">
                    <h1 id="heroTitle">Alpine Europe</h1>
                    <p id="heroPara">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, fugiat.</p>
                </article>
            </section>
            <section id="experience-list-section">
                {experiencList}
            </section>
        </main>
    )
}