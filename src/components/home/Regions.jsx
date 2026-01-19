import { regions } from "../../scripts/data"
import { replaceSpace } from "../../App"

const regionList = regions.map(region => {
    const name = replaceSpace(region.name)
    const imgSrc = `public/region-webp/${region.name}.webp`
    return (
        <div className="regionCard" key={region.id} style={
            { 
                transform: `scale(${region.scale}) translate(${region.x},${region.y})` 
            }} id={region.id}>
            <img className="regionImg" src={imgSrc} alt="" />
            <article className="regionArticle">
                <h3 className="regionName">{name}</h3>
                <p className="regionPara">Lorem ipsum dolor sit amet consectetur.</p>
            </article>
        </div>
    )
   
})

{/* <div className="regionCard">
    <article className="regionArticle">
        <h3 className="regionName">Eastern Europe</h3>
        <p className="regionPara">Lorem ipsum dolor sit amet consectetur.</p>
    </article>
</div> */}


export default function Region() {
    return (
        <section id="regionSection">
            <h2 id="sectionHeading">regions</h2>
            <div id="regionWrapper">
                {regionList}
            </div>
        </section>
    )
}