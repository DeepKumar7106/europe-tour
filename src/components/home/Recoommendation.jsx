import { expeditions } from '../../scripts/data'
import { addHyphen } from '../../App'
import { useState, useRef } from 'react'

export default function Recommendation() {
    const [page, setPage] = useState(0)
    const totalPage = 3

    const expeditionList = expeditions.map(expedition => {
        const name = addHyphen(expedition.name)
        return (
            <div className="recommendationCard" key={expedition.id}>
                <img src={`public/expedition-webp/${name}.webp`} alt={name} className="recommendationImg" />
                <article className="recommendationArticle">
                    <h3 className="planName">{expedition.name}</h3>
                    <p className="planDescription">{expedition.usp}</p>
                </article>
            </div>
        )
    })

    function shiftRight() {
        setPage(prevPage => {
            if(totalPage -1 === prevPage)
                return 0
            return prevPage + 1
        })
    }
    function shiftLeft() {
        setPage(prevPage => {
            if(0 === prevPage)
                return 2
            return prevPage - 1
        })
    }

    const trackMovement = page * 33.333

    return (
        <section id="recommendationSection">
            <h2 id="recommendationHeading">expedition</h2>
            <div id="recommendationCardWrapper">
                <div id="recommendationCardContainer">
                    <div className="track"
                        style={{
                            transform:`translate(-${trackMovement}%)`
                        }}
                    >
                        {expeditionList}
                    </div>
                </div>
                <div id="recommendationButtonWrapper">
                    <div id="navButtons">
                        <i className="fa-solid fa-arrow-left"
                            onClick={shiftLeft}
                        ></i>
                        <i className="fa-solid fa-arrow-right"
                            onClick={shiftRight}
                        ></i>
                    </div>
                    <button id="recommendationDiscoverBtn">Discover More</button>
                </div>
            </div>
        </section>
    )
}

{/* <div className="recommendationCard">
    <img src="public\city-images-webp\Verona.webp" alt="" className="recommendationImg" />
    <article className="recommendationArticle">
        <h3 className="planName">2 day Italy</h3>
        <p className="planDescription">Explore Italia in blink</p>
    </article>
</div> */}