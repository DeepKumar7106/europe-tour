import { useNavigate } from "react-router-dom";
import { attractions } from "../../scripts/data";
import { useState } from "react";

export default function Popular() {
    const [cityIndex, setCityIndex] = useState(0)
    const navigate = useNavigate()
    let prevCityIndex , nextCityIndex
    
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

    function updateCityIndex(index) {
        setCityIndex(index)
    }

    return (
        <section id="home-popular-section">
            <h2 id="home-popular-heading"onClick={(() => {navigate('/attraction')})}>attractions</h2>
            <div id="home-popular-container" >
                {/* next img */}
                <div id="home-popular-bg-img-container-left"
                    onClick={updateCityImageNext}
                >
                    <img className="home-popular-bg-img left-img" src={`/city-images-webp/${nextCity.city}.webp`} alt={nextCity.city} />
                </div>
                {/* previous img */}
                <div id="home-popular-bg-img-container-right"
                    onClick={updateCityImagePrev}
                >
                    <img className="home-popular-bg-img rightImage" src={`/city-images-webp/${prevCity.city}.webp`} alt={prevCity.city} />
                </div>
                <div id="home-popular-img-container"  >
                    <img id="home-popular-img" src={`/city-images-webp/${foreGroundCity.city}.webp`} alt={foreGroundCity.city}  />  
                    <article id="home-popular-img-detail-text">
                        <div id="home-popular-img-detail-text-wrap">
                            <p id="home-popular-city">{foreGroundCity.name}</p>
                            <p id="home-popular-country-name"><i className="fa-solid fa-location-dot"></i> {foreGroundCity.city}, {foreGroundCity.country}</p>
                        </div>
                        <i className="fa-solid fa-circle-chevron-right" onClick={() => {navigate(`/attractionLocation/${foreGroundCity.id}`)}}></i>
                    </article>
                </div>
            </div>
            <div id="home-popular-nav-container">
                <i className="fa-solid fa-circle-chevron-left"
                    onClick={updateCityImagePrev}
                ></i>
                {attractions.map((atc,index) => (
                    <button className={cityIndex === index ? 'home-popular-nav-btn-active' : 'home-popular-nav-btn'}
                        key={atc.id} 
                        onClick={() => {updateCityIndex(index)}}
                    ></button>
                ))}
                <i className="fa-solid fa-circle-chevron-right"
                    onClick={updateCityImageNext} 
                ></i>
            </div>
        </section>
    )
}