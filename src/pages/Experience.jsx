import { useParams } from "react-router-dom"
import { experience } from "../scripts/data"
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
            <section id="experience-hero-details"></section>
        </main>
    )
}