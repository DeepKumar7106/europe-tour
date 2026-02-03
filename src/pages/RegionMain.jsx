import {countries, regions} from '/src/scripts/data.js'
import './../styles/region.scss'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

export default function RegionMain() {
    const [countryIndex , setCountryIndex] = useState(0)
    const {regionId} = useParams()
    const navigate = useNavigate()
    const regionCard = useRef(null)
    const currentRegion = regions.find(item => item.id === regionId)
    const countryList = countries.filter(country => country.region === regionId)

    const currentCountry = countryList[countryIndex]

    const updateCountryIndex = index => {setCountryIndex(index)}

    useEffect(() => {
        const listWrapper = document.getElementById('region-list-section')
        listWrapper.style.height = `${countryList.length * 120}vh`
        const listWrapperHeight = Math.round(listWrapper.offsetHeight * 0.8)
        console.log(listWrapperHeight)
        const lisStartPoint = listWrapper.getBoundingClientRect().top + window.scrollY
        const listEndPoint = listWrapperHeight + lisStartPoint

        const ranges = countryList.map((c, index) => {
            const start = Math.floor((index * 100) / countryList.length);
            const end = Math.floor(((index + 1) * 100) / countryList.length);
            return { start: index === 0 ? 0 : start + 1, end };
        } )

        const handleScroll = () => {
            const currentScrollPoint = Math.floor((window.scrollY - lisStartPoint) / (listWrapperHeight / 100))
            
            ranges.forEach((range, index) => {
                if(currentScrollPoint > range.start && currentScrollPoint < range.end)
                    setCountryIndex(index)
            })
        }

        window.addEventListener('scroll' , handleScroll)

        return () => window.removeEventListener('scroll', handleScroll);
    },[countryList])

    return (
        <main>
            <section id="region-hero-section">
                <img src={`/region-webp/${currentRegion.name}.webp`} alt="" />
                <article id="heroArticle">
                    <h1 id="heroTitle">{currentRegion.name}</h1>
                    <p id="heroPara">{currentRegion.desc}</p>
                </article>
            </section>
            <section id="region-list-section">
                <div className="region-country-card" key={currentCountry.id} id={currentCountry.id} ref={regionCard}>
                    <img className="region-country-card-bg-img" src={`/country-backdrop-webp/${currentCountry.name}.webp`} alt="" />
                    <div className="region-country-card-detail">
                        {countryList.map((c, index) => (
                            <button 
                                className= {countryIndex === index ?"region-country-card-detail-card-index-current":"region-country-card-detail-card-index"} 
                                id={index} 
                                key={c.id}
                                onClick={()=>{updateCountryIndex(index)}}
                            >{index + 1}</button>
                        ))}
                    </div>
                    <article className="region-country-card-detail-article">
                        <h2 className="region-country-card-detail-article-name">{currentCountry.name}</h2>
                        <p className="region-country-card-detail-article-para">{currentCountry.description}</p>
                        <i className="fa-solid fa-circle-chevron-right"
                            onClick={() => {navigate(`/country/${currentCountry.id}`)}}
                        ></i>
                    </article>
                </div>
            </section>
        </main>
    )
}