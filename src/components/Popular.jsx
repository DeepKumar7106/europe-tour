import { cities, oldCities, countries } from "../scripts/data";

export default function Popular() {
    const paris = cities.find(city => city.id === "euc001")
    const country = countries.find(item => item.id === paris.countryId)
    // console.log(country)

    return (
        <section id="popular">
            <h2 id="popularHeading">Popular Destinations</h2>
            <div id="popularImageWrapper">
                <img id="popularImage" src={`/city-images-webp/${paris.cityName}.webp`} alt={paris.cityName} />  
                <div id="imageDeatailTexts">
                    <p id="cityName">{paris.cityName}</p>
                    <p id="countryName">{country.name}</p>
                </div>
            </div>
        </section>
    )
}