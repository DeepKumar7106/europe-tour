import { expeditions } from '../../scripts/data'
import { addHyphen } from '../../App'
import { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Recommendation() {
    const [page, setPage] = useState(0)
    const isMobile = window.innerWidth <= 700
    const totalPage = isMobile ? 12 : 3
    const navigate = useNavigate()

    function navigateExpedition(id) {
        console.log(id)
    }

    const expeditionList = expeditions.map(expedition => {
        const name = addHyphen(expedition.name)
        return (
            <div 
                className="home-recommend-card" 
                key={expedition.id}
                id={expedition.id}
                onClick={((e) => {navigateExpedition(e.currentTarget.id)})}    
            >
                <img src={`/expedition-webp/${name}.webp`} alt={name} className="home-recommend-card-img" />
                <article className="home-recommend-card-article">
                    <h3 className="home-recommend-card-article-expedition">{expedition.name}</h3>
                    {/* <p className="home-recommend-card-article-expedition-description">{expedition.usp}</p> */}
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
                return totalPage - 1
            return prevPage - 1
        })
    }

    const trackMovement = page * 33.333

    return (
        <section id="home-recommend-section">
            <h2 id="home-recommend-section-heading" onClick={(() => {navigate('/expedition')})}>expedition</h2>
            <div id="home-recommend-section-container">
                <div id="home-recommend-card-container">
                    <div className="home-recommend-card-track"
                        style={{
                            transform:`translate(-${trackMovement}%)`
                        }}
                    >
                        {expeditionList}
                    </div>
                </div>
                <div id="home-recommend-btn-container">
                    <div id="home-recommend-btn-container-nav">
                        <i className="fa-solid fa-circle-chevron-left"
                            onClick={shiftLeft}
                        ></i>
                        <i className="fa-solid fa-circle-chevron-right"
                            onClick={shiftRight}
                        ></i>
                    </div>
                    <button id="home-recommend-btn-container-discover-btn">
                        <Link to='/expedition'>Discover More</Link>
                    </button>
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