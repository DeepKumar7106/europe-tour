import { regions } from "../../scripts/data"
import { useState, useEffect } from "react";


const RegionList = ({region, onCardClick}) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    function updateRegionDetail() {
        console.log(document.getElementById('regionName'))
    }
    const name = region.name.replace(/\s+/g, '-');
    const imgSrc = `public/region-webp/${region.name}.webp`
    return (
        <div className="regionCard" 
            key={region.id} 
            style={
                { transform: 
                    `scale(${isMobile ? 1 : region.scale}) 
                    translate(${isMobile ? 0 : region.x},${isMobile ? 0 : region.y})` }
            }
            onClick={(() => onCardClick(region))}
            id={region.id}
        >
            <img className="regionImg" src={imgSrc} alt="" />
            <article className="regionArticle">
                <h3 className="regionName">{name}</h3>
                <p className="regionPara">Lorem ipsum dolor sit amet consectetur.</p>
            </article>
        </div>
    )
}




export default function Region() {

    const [currentRegion, setCurrentRegion] = useState({})
    function updateRegion(reg) {
        document.getElementById('regionExplore').style.display = 'block'
        setCurrentRegion(reg)
    }
    return (
        <section id="regionSection">
            <div id="regionInfo">
                <h2 id="sectionHeading">regions</h2>
                <article id="regionDetail">
                    <h2 id="regionName">{currentRegion.name}</h2>
                    <p id="regionDetail">
                        {currentRegion.desc}
                    </p>
                    <button id="regionExplore">
                        Explore <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </article>
            </div> 
            <div id="regionWrapper">
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