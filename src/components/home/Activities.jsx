import { experience } from '/src/scripts/data.js'
import { addHyphen } from '../../App'
import { useNavigate } from 'react-router-dom'

export default function Activities() {
    function navigateExpereince(expid) {
        console.log(expid)
    }

    const navigate = useNavigate()

    const activities = experience.map((activity, index) => {
        const name = addHyphen(activity.activityName)
        return (
            <div 
                className={`home-experience-card home-item${index + 1}`} 
                key={activity.id}
                id={activity.id}
                onClick={((e)=>navigateExpereince(e.currentTarget.id))}    
            >
                <img src={`/experiences-webp/${name}.webp`} alt={name} className="home-experience-img" />
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
            <h2 id="home-activity-section-heading" onClick={(() => {navigate('/experience')})}>experiences</h2>
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