import { underrated } from "../../scripts/data"
import { useState } from "react"
import { addHyphen } from "../../App"
export default function Underrated() {

    const [locIndex, setLocIndex] = useState(0)
    const location = underrated[locIndex]

    function updateImgNext() {
        setLocIndex(preLocIndex => {
            if(underrated.length -1 === preLocIndex)
                return 0
            return preLocIndex + 1
        })
    }

    function updateImgPrev() {
        setLocIndex(preLocIndex => {
            if(0 === preLocIndex)
                return underrated.length - 1 
            return preLocIndex - 1
        })
    }

    return (
        <section id="underratedSection">
            <img src={`public/underrated-webp/${addHyphen(location.name)}.webp`} alt={addHyphen(location.name)} loading="lazy" />
            <h2 id="underratedHeading">hidden gems</h2>
            <div className="underratedWrapper" id={location.id}>
                <article id="underratedArticle">
                    <i className="fa-solid fa-location-dot"> {location.name}</i>
                    <p id="countryCity">{location.city}, {location.country}</p>
                </article>
                <div id="underratedButtonWrapper">
                    <div id="navButtons">
                        <i className="fa-solid fa-arrow-left" 
                            onClick={updateImgPrev}
                        ></i>
                        <i className="fa-solid fa-arrow-right"
                            onClick={updateImgNext}
                        ></i>
                    </div>
                    <button id="underratedLearnBtn">Learn More</button>
                </div>
            </div>
        </section>
    )
}