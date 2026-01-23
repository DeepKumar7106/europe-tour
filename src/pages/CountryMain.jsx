import './../styles/country.scss'
import { cities } from '../scripts/data'
import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'



export default function CountryMain() {
    const [cardIndex, setCardIndex] = useState(0)
    const {countryId} = useParams()
    const cardRefs = useRef([])
    const barRefs = useRef([])
    const cityList = []
    const indexedClass = "country-city-card-indexed"
    const defaultCardClass ="country-city-card"

    cities.forEach(city => {
        if(city.countryId === countryId)
            cityList.push(city)
    })

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
        <div className="country-city-card" key={city.id} id={city.id} ref={(el) => (cardRefs.current[index] = el)}>
            <img src={`/city-images-webp/${city.cityName}.webp`} alt={city.cityName} className='country-city-card-img' />
            <article className="country-city-card-detail">
                <h2 className='country-city-card-detail-name'>{city.cityName.split('-').join(' ')}</h2>
                <p className='country-city-card-detail-para'>{city.description}</p>
            </article>
        </div>
    )) 

    function updateCityDown() {
        setCardIndex(prevIndex => {
            console.log(prevIndex)
            if(prevIndex >= cityList.length - 1)
                return 0
            return Number(prevIndex) + 1
        })
    }

    function updateCityUp() {
        setCardIndex(prevIndex => {
            if(0 === prevIndex)
                return cityList.length - 1
            return prevIndex - 1
        })
    }

    return (
        <main>
            <section id="country-hero-section">
                <img src="/region-webp/Alpine-Europe.webp" alt="" />
                <article id="heroArticle">
                    <h1 id="heroTitle">Alpine Europe</h1>
                    <p id="heroPara">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, fugiat.</p>
                </article>
            </section>
            <section id="country-city-list-section">
                <div id="country-city-list-section-bar">
                    <div id="country-city-list-section-bar-container">
                        {barList}
                    </div>
                </div>
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
            </section>
        </main>
    )
}