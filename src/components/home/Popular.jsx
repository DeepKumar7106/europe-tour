import { attractions } from "../../scripts/data";
import { useState } from "react";

export default function Popular() {
    let prevCityIndex , nextCityIndex
    const [cityIndex, setCityIndex] = useState(0)
    prevCityIndex = cityIndex === 0 ? attractions.length - 1 : cityIndex - 1
    nextCityIndex = cityIndex === attractions.length - 1 ? 0 : cityIndex + 1

    const foreGroundCity = attractions[cityIndex]
    const nextCity = attractions[nextCityIndex]
    const prevCity = attractions[prevCityIndex]

    function updateCityImageNext() {
        setCityIndex(prevCityIndex => {
            if(attractions.length - 1 === prevCityIndex)
                return 0
            return prevCityIndex + 1
        })
    }
    function updateCityImagePrev() {
        setCityIndex(prevCityIndex => {
            if(0 === prevCityIndex)
                return attractions.length - 1
            return prevCityIndex - 1
        })
    }

    return (
        <section id="popular">
            <h2 id="popularHeading">attractions</h2>
            <div id="popularImageWrapper">
                {/* next img */}
                <div id="bgImageWrapperLeft"
                    onClick={updateCityImageNext}
                >
                    <img className="popularBgImage leftImage" src={`/city-images-webp/${nextCity.city}.webp`} alt={nextCity.city} />
                </div>
                {/* previous img */}
                <div id="bgImageWrapperRight"
                    onClick={updateCityImagePrev}
                >
                    <img className="popularBgImage rightImage" src={`/city-images-webp/${prevCity.city}.webp`} alt={prevCity.city} />
                </div>
                <img id="popularImage" src={`/city-images-webp/${foreGroundCity.city}.webp`} alt={foreGroundCity.city} />  
                <article id="imageDeatailTexts">
                    <p id="city">{foreGroundCity.name}</p>
                    <p id="countryName"><i className="fa-solid fa-location-dot"></i> {foreGroundCity.city}, {foreGroundCity.country}</p>
                </article>
            </div>
            <div id="navButtonWrapper">
                <i className="fa-solid fa-circle-chevron-left"
                    onClick={updateCityImagePrev}
                ></i>
                <button className="navButton"></button>
                <button className="navButton"></button>
                <button className="navButton"></button>
                <button className="navButton"></button>
                <button className="navButton"></button>
                <button className="navButton"></button>
                <button className="navButton"></button>
                <button className="navButton"></button>
                <button className="navButton"></button>
                <button className="navButton"></button>
                <i className="fa-solid fa-circle-chevron-right"
                    onClick={updateCityImageNext} 
                ></i>
            </div>
        </section>
    )
}