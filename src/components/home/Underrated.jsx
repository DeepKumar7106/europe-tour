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
        <section id="home-underrated-section">
            <img src={`public/underrated-webp/${addHyphen(location.name)}.webp`} alt={addHyphen(location.name)} loading="lazy" />
            <h2 id="home-underrated-section-heading">hidden gems</h2>
            <div className="home-underrated-section-container" id={location.id}>
                <article id="home-underrated-section-container-article">
                    <i className="fa-solid fa-location-dot"> {location.name}</i>
                    <p id="countryCity">{location.city}, {location.country}</p>
                </article>
                <div id="home-underrated-section-container-btn-ctn">
                    <div id="home-underrated-section-container-btn-ctn-nav">
                        <i className="fa-solid fa-arrow-left" 
                            onClick={updateImgPrev}
                        ></i>
                        <i className="fa-solid fa-arrow-right"
                            onClick={updateImgNext}
                        ></i>
                    </div>
                    <button id="home-underrated-section-container-btn-ctn-learn-more">Learn More</button>
                </div>
            </div>
        </section>
    )
}