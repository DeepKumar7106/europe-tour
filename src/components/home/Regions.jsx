import { useNavigate } from "react-router-dom";
import { regions } from "../../scripts/data"
import { useState, useEffect, useRef } from "react";


const RegionList = ({region, onCardClick}) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const name = region.name.replace(/\s+/g, '-');
    const imgSrc = `/region-webp/${region.name}.webp`
    return (
        <div className="home-region-card" 
            key={region.id} 
            style={
                { transform: 
                    `scale(${isMobile ? 1 : region.scale}) 
                    translate(${isMobile ? 0 : region.x},${isMobile ? 0 : region.y})` }
            }
            onClick={(() => onCardClick(region))}
            id={region.id}
        >
            <img className="home-region-card-img" src={imgSrc} alt="" />
            <article className="home-region-card-article">
                <h3 className="home-region-card-article-name">{name}</h3>
                <p className="home-region-card-article-para">Lorem ipsum dolor sit amet consectetur.</p>
            </article>
        </div>
    )
}




export default function Region() {
    const [currentRegion, setCurrentRegion] = useState({})
    function updateRegion(reg) {      
        setCurrentRegion(reg)
    }

    const navigate = useNavigate()

    function navigateRegion() {
        navigate(`/region/${currentRegion.id}`)
    }
    return (
        <section id="home-region-section">
            <div id="home-region-section-info">
                <h2 id="home-region-section-info-heading">regions</h2>
                {currentRegion.name && <article id="home-region-section-info-article">
                    <h2 id="home-region-section-info-article-name">{currentRegion.name}</h2>
                    <p id="home-region-section-info-article-para">
                        {currentRegion.desc}
                    </p>
                    <button id="home-region-section-info-article-explore"
                        onClick={navigateRegion}
                    >
                        Explore <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </article>}
            </div> 
            <div id="home-region-section-container">
                {
                    regions.map(region => (
                        <RegionList 
                            key={region.id} 
                            region={region} 
                            onCardClick={
                                (
                                    () => updateRegion(region)
                                )
                            }    
                        />
                    ))
                }
            </div>
        </section>
    )
}


// const regionList = regions.map(region => {
//     const name = replaceSpace(region.name)
//     const imgSrc = `public/region-webp/${region.name}.webp`
//     return (
//         <div className="regionCard" key={region.id} style={
//             { 
//                 transform: `scale(${region.scale}) translate(${region.x},${region.y})` 
//             }} id={region.id}>
//             <img className="regionImg" src={imgSrc} alt="" />
//             <article className="regionArticle">
//                 <h3 className="regionName">{name}</h3>
//                 <p className="regionPara">Lorem ipsum dolor sit amet consectetur.</p>
//             </article>
//         </div>
//     )
   
// })

{/* <div className="regionCard">
    <article className="regionArticle">
        <h3 className="regionName">Eastern Europe</h3>
        <p className="regionPara">Lorem ipsum dolor sit amet consectetur.</p>
    </article>
</div> */}