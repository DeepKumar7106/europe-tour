import { experience } from '/src/scripts/data.js'
import { addHyphen } from '../../App'

export default function Activities() {
    const activities = experience.map((activity, index) => {
        const name = addHyphen(activity.activityName)
        return (
            <div className={`home-experience-card home-item${index + 1}`} key={activity.id}>
                <img src={`public/experiences-webp/${name}.webp`} alt={name} className="home-experience-img" />
                <div className="home-activity-details-box">
                    <div className="home-activity-detail">
                        <h3 className="home-activity">{activity.activityName}</h3>
                        <p className="home-activity-para">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, eos.</p>
                    </div>
                    <button className="home-experience-btn">Explore</button>
                </div>
            </div>
        )
    })

    return (
        <section id="home-activity-section">
            <h2 id="home-activity-section-heading">experiences</h2>
            <div id="home-activity-container">
                <div id="home-activity-card-container">
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