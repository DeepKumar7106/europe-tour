import { cities, oldCities, countries } from "../scripts/data";

export default function Popular() {
    const paris = cities.find(city => city.id === "euc001")
    const country = countries.find(item => item.id === paris.countryId)
    // console.log(country)

    return (
        <section id="popular">
            <h2 id="popularHeading">attractions</h2>
            <div id="popularImageWrapper">
                <div id="bgImageWrapperLeft">
                    <img className="popularBgImage leftImage" src={`/city-images-webp/${paris.cityName}.webp`} alt={paris.cityName} />
                </div>
                <div id="bgImageWrapperRight">
                    <img className="popularBgImage rightImage" src="public\city-images-webp\Zurich.webp" alt={paris.cityName} />
                </div>
                <img id="popularImage" src={`/city-images-webp/${paris.cityName}.webp`} alt={paris.cityName} />  
                <article id="imageDeatailTexts">
                    <p id="cityName">{paris.famousLocation[0]}</p>
                    <p id="countryName"><i className="fa-solid fa-location-dot"></i> {paris.cityName}, {country.name}</p>
                    <p id="cityParagraph">{paris.description}</p>
                </article>
            </div>
            <div id="navButtonWrapper">
                <i className="fa-solid fa-circle-chevron-left"></i>
                <buttun className="navButton"></buttun>
                <buttun className="navButton"></buttun>
                <buttun className="navButton"></buttun>
                <buttun className="navButton"></buttun>
                <buttun className="navButton"></buttun>
                <buttun className="navButton"></buttun>
                <buttun className="navButton"></buttun>
                <buttun className="navButton"></buttun>
                <buttun className="navButton"></buttun>
                <buttun className="navButton"></buttun>
                <i className="fa-solid fa-circle-chevron-right"></i>
            </div>
        </section>
    )
}