import { experience } from '/src/scripts/data.js'
import { addHyphen } from '../../App'

export default function Activities() {
    const activities = experience.map((activity, index) => {
        const name = addHyphen(activity.activityName)
        return (
            <div className={`experienceCard item${index + 1}`} key={activity.id}>
                <img src={`public/experiences-webp/${name}.webp`} alt={name} className="experienceImage" />
                <div className="activityDetailBox">
                    <div className="activityDetail">
                        <h3 className="activity">{activity.activityName}</h3>
                        <p className="activityPara">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, eos.</p>
                    </div>
                    <button className="experienceButton">Explore</button>
                </div>
            </div>
        )
    })

    return (
        <section id="activitiesSection">
            <h2 id="activitiesHeading">experiences</h2>
            <div id="actiivtyContainer">
                <div id="experienceWrapper">
                    {activities}
                </div>
            </div>
        </section>
    )
}

{/* <div className="experienceCard">
    <img src="public\city-images-webp\Zurich.webp" alt="" className="experienceImage" />
    <div className="activityDetailBox">
        <div className="activityDetail">
            <h3 className="activity">Hiking</h3>
            <p className="activityPara">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, eos.</p>
        </div>
        <button className="experienceButton">Explore</button>
    </div>
</div> */}