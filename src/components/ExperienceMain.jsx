import {experience} from '/src/scripts/data.js'
import { addHyphen } from '../App'

export default function ExperienceMain() {
   
    const experiencList = experience.map(activity => {
        const name = addHyphen(activity.activityName)
        return(
            <div className="experienceCard" key={activity.id}>
                <img src={`/experiences-webp/${name}.webp`} alt={name} className="experienceImg" />
                <article className="experienceArticle">
                    <h2 className="experiencName">{activity.activityName}</h2>
                    <p className="activityRegion">in {activity.regionOrCountry}</p>
                    <p className="activityPara">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed voluptatum dignissimos error, nesciunt illo expedita dolorem reprehenderit obcaecati voluptate repellendus deleniti distinctio magnam quasi numquam, est dicta praesentium. Impedit, saepe.</p>
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
            <section id="experienceWrapper">
                {experiencList}
            </section>
        </main>
    )
}