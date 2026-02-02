import {experience} from '/src/scripts/data.js'
import { addHyphen } from '../App'
import '../styles/experience.scss'
import { useNavigate } from 'react-router-dom'

export default function ExperienceMain() {
   const navigate = useNavigate()
    const experiencList = experience.map(activity => {
        const name = addHyphen(activity.activityName)
        return(
            <div className="experience-card" key={activity.id}
                onClick={() => {navigate(`/experiencePage/${activity.id}`)}}
            >
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
                <img src="/page-backdrops/experience.jpg" alt="" />
                <article id="heroArticle">
                    <h1 id="heroTitle">Experiences</h1>
                    <p id="heroPara">Find out exciting activities to enjoy across the continent</p>
                </article>
            </section>
            <section id="experience-list-section">
                {experiencList}
            </section>
        </main>
    )
}