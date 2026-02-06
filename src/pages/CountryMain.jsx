import './../styles/country.scss'
import { cities, countries } from '../scripts/data'
import { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'




export default function CountryMain() {
    const [cardIndex, setCardIndex] = useState(0)
    const {countryId} = useParams()
    const navigate = useNavigate()
    const cardRefs = useRef([])
    const barRefs = useRef([])
    const cityList = cities.filter(item => item.countryId === countryId)
    const indexedClass = "country-city-card-indexed"
    const defaultCardClass ="country-city-card"
    const country = countries.find(item => item.id === countryId)

    function updateCityIndex(index) {
        setCardIndex(prevIndex => index)
    }

    useEffect(() => {
        const currentCard = cardRefs.current[cardIndex]
        const currentBar = barRefs.current[cardIndex]
        if (currentCard) {
            currentCard.classList.add(indexedClass)
            currentCard.classList.remove(defaultCardClass)
        }
        if(currentBar)
            currentBar.classList.add('country-city-list-section-bar-element-scale')

        return () => {
            if (currentCard) {
                currentCard.classList.remove(indexedClass);
                currentCard.classList.add(defaultCardClass);

            }
            if(currentBar)
                currentBar.classList.remove('country-city-list-section-bar-element-scale')
        }
    }, [cardIndex])

    const barList = cityList.map((city, index)=> (
        <div className="country-city-list-section-bar-element"
            data-index={index}
            key={city.id}
            ref={(el)=> (barRefs.current[index] = el)}
            onClick={((e)=>{updateCityIndex(e.currentTarget.dataset.index)})}
        ></div>
    ))
    
    const cityCards = cityList.map((city, index) => (
        <div 
            className="country-city-card" 
            key={city.id} id={city.id} 
            ref={(el) => (cardRefs.current[index] = el)}
            onClick={(()=> navigate(`/cities/${city.id}`))}
        >
            <img src={`/city-images-webp/${city.cityName}.webp`} alt={city.cityName} className='country-city-card-img' />
            <h2 className='country-city-card-detail-name'>{city.cityName.split('-').join(' ')}</h2>
        </div>
    )) 

    function updateCityDown() {
        setCardIndex(prevIndex => {
            if(prevIndex >= cityList.length - 1)
                return 0
            return Number(prevIndex) + 1
        })
    }

    function updateCityUp() {
        setCardIndex(prevIndex => {
            if(prevIndex <= 0)
                return cityList.length - 1
            return Number(prevIndex) - 1
        })
    }

    return (
        <main>
            <section id="country-hero-section">
                <img src={`/country-backdrop-webp/${country.name}.webp`} alt="" />
                <article id="heroArticle">
                    <h1 id="heroTitle">{country.name}</h1>
                    <p id="heroPara">{country.description}</p>
                </article>
            </section>
            <section id="country-city-list-section">
                <div id="country-city-list-section-bar">
                    {barList}
                </div>
                <div id="country-city-list-section-wrapper">
                    <div id="country-city-list-section-container">
                        {cityCards}
                    </div>
                    <div id="country-city-update-btns">
                        <i className="fa-solid fa-circle-chevron-up"
                            onClick={updateCityUp}
                        ></i>
                        <i className="fa-solid fa-circle-chevron-down"
                            onClick={updateCityDown}
                        ></i>
                    </div>
                </div>
            </section>
        </main>
    )
}