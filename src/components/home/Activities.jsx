import { experience } from '/src/scripts/data.js'
import { addHyphen } from '../../App'
import { useNavigate } from 'react-router-dom'
import { useEffect, useRef } from 'react'

export default function Activities() {
    const sectionWrapper = useRef(0)
    const navigate = useNavigate()
    const windowVW = window.innerWidth
    
    useEffect(()=> {
        const element = document.getElementById('home-activity-section-wrapper');
        const rect = element.getBoundingClientRect();
        const elementHeight = element.offsetHeight * 0.8
        const sectionStartPoint = rect.top + window.scrollY;
        const sectionEndPoint = sectionStartPoint + elementHeight
        console.log(windowVW + `The section begins at pixel: ${sectionEndPoint}`);
        
        const ranges = experience.map((_, index) => {
            const start = Math.floor((index * 100) / experience.length);
            const end = Math.floor(((index + 1) * 100) / experience.length);
            return { start: index === 0 ? 0 : start + 1, end };
        });

        const pcActiveCardArticle =`
            display: flex;
            width: 20vw;
            opacity: 1;
        `

        const mobileActiveCardArticle = `
            display: flex;
            opacity: 1;
        `
        const pcAllCardStyles = `
            width: 3vw;
        `

        const mobilwAllCardStyles = `
            width: 90vw;
            display: none;
        `
    
        const handleScroll = () => {
            const currentScrollPoint = Math.floor((window.scrollY - sectionStartPoint) / (elementHeight / 100));
    
            ranges.forEach((range, index) => {
                if (currentScrollPoint > range.start && currentScrollPoint < range.end) {
                    // Reset all cards
                    const cards = document.querySelectorAll('.home-experience-card');
                    cards.forEach(item => {
                        item.querySelector('.home-activity-details-box').style.display = 'none'
                        item.style = windowVW < 700 ?  mobilwAllCardStyles : pcAllCardStyles
                    });
    
                    // Expand the active card
                    const activeCard = document.querySelector(`.home-item${index + 1}`);
                    if (activeCard) {
                        activeCard.style = windowVW < 700 ? `display: flex; height: 60vh` : `width: 20vw` 
                        activeCard.querySelector('.home-activity-details-box').style= windowVW < 700 ? mobileActiveCardArticle : pcActiveCardArticle
                    }
                }
            });
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => window.removeEventListener('scroll', handleScroll);
    }, [experience]);

    const activities = experience.map((activity, index) => {

        const name = addHyphen(activity.activityName)
        return (
            <div 
                className={`home-experience-card home-item${index + 1}`}
                key={activity.id}
                id={activity.id}
                onClick={((e)=>navigateExpereince(e.currentTarget.id))}    
            >
                <img src={`/experiences-webp/${name}.webp`} alt={name} className="home-experience-img" />
                <div className="home-activity-details-box">
                    <div className="home-activity-detail">
                        <h3 className="home-activity">{activity.activityName}</h3>
                        <p className="home-activity-para">{activity.heroSection.vibe}</p>
                    </div>
                    <button className="home-experience-btn"
                        onClick={() => {navigate(`/experiencePage/${activity.id}`)}}
                    >Explore</button>
                </div>
            </div>
        )
    })

    function navigateExpereince(expid) {
        console.log(expid)
    }

    return (
        <div id="home-activity-section-wrapper" ref={sectionWrapper} >
            <section id="home-activity-section">
                <h2 id="home-activity-section-heading" onClick={(() => {navigate('/experience')})}>experiences</h2>
                <div id="home-activity-container">
                    <div id="home-activity-card-container">
                        {activities}
                    </div>
                </div>
            </section>
        </div>
    )
}

{/* <div className="experienceCard">
    <img src="public\city-images-webp\Zurich.webp" alt="" className="experienceImage" />
    <div className="activityDetailBox">
        <div className="activityDetail">
            <h3 className="activity">Hiking</h3>
            <p className="activityPara">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, eos.</p>
        </div>
        <button className="experienceButton">Explore</button>
    </div>
</div> */}


// const rangeValueEntry = experience.map((a,index) => {
//     const value = Math.floor(((index) * 100) / 16 ) + 1 
//     return  value === 1 ? 0 : value
// })

// const rangeValueExit = experience.map((a, index) => (
//     Math.floor(((index + 1) * 100) / 16 )
// ))

// window.addEventListener('scroll', () => {
//     currentScrollPoint = Math.floor((window.scrollY - sectionStartPoint) / (elementHeight / 100))
//     const rect = document.getElementById('home-activity-section-wrapper').getBoundingClientRect();
//     console.log(`current : ${currentScrollPoint}` );
//     // if(currentScrollPoint > 0 && currentScrollPoint < elementHeight )

//     if(rangeValueEntry[0] < currentScrollPoint && currentScrollPoint < rangeValueExit[0]){
//         console.log(rangeValueEntry[0], rangeValueExit[0] )
//         document.querySelectorAll('.home-experience-card').forEach(item => {
//             item.style.width = '3vw'
//             console.log(item.classList)
//             // item.classList.remove('home-experience-card-expand')
//         })
//         const card = document.querySelector('.home-item1')
//         console.log(`card: ${card.classList}`)
//         card.style.width = '20vw'
//         // card.classList.add('home-experience-card-expand')
//     }
//     if(rangeValueEntry[1] < currentScrollPoint && currentScrollPoint < rangeValueExit[1]){
//         console.log(rangeValueEntry[1], rangeValueExit[1])
//         document.querySelectorAll('.home-experience-card').forEach(item => {
//             item.style.width = '3vw'
//             console.log(item.classList)
//             // item.classList.remove('home-experience-card-expand')
//         })
//         const card = document.querySelector('.home-item2')
//         console.log(`card: ${card.classList}`)
//         card.style.width = '20vw'
//         // card.classList.add('home-experience-card-expand')
//     }
//     if(rangeValueEntry[2] < currentScrollPoint && currentScrollPoint < rangeValueExit[2]){
//         console.log(rangeValueEntry[2], rangeValueExit[2])
//         document.querySelectorAll('.home-experience-card').forEach(item => {
//             item.style.width = '3vw'
//             console.log(item.classList)
//             // item.classList.remove('home-experience-card-expand')
//         })
//         const card = document.querySelector('.home-item3')
//         console.log(`card: ${card.classList}`)
//         card.style.width = '20vw'
//         // card.classList.add('home-experience-card-expand')
//     }
//     if(rangeValueEntry[3] < currentScrollPoint && currentScrollPoint < rangeValueExit[3]){
//         console.log(rangeValueEntry[3], rangeValueExit[3] )
//         document.querySelectorAll('.home-experience-card').forEach(item => {
//             item.style.width = '3vw'
//             console.log(item.classList)
//             // item.classList.remove('home-experience-card-expand')
//         })
//         const card = document.querySelector('.home-item4')
//         console.log(`card: ${card.classList}`)
//         card.style.width = '20vw'
//         // card.classList.add('home-experience-card-expand')
//     }
//     if(rangeValueEntry[4] < currentScrollPoint && currentScrollPoint < rangeValueExit[4]){
//         console.log(rangeValueEntry[4], rangeValueExit[4] )
//         document.querySelectorAll('.home-experience-card').forEach(item => {
//             item.style.width = '3vw'
//             console.log(item.classList)
//             // item.classList.remove('home-experience-card-expand')
//         })
//         const card = document.querySelector('.home-item5')
//         console.log(`card: ${card.classList}`)
//         card.style.width = '20vw'
//         // card.classList.add('home-experience-card-expand')
//     }
//     if(rangeValueEntry[5] < currentScrollPoint && currentScrollPoint < rangeValueExit[5]){
//         console.log(rangeValueEntry[5], rangeValueExit[5] )
//         document.querySelectorAll('.home-experience-card').forEach(item => {
//             item.style.width = '3vw'
//             console.log(item.classList)
//             // item.classList.remove('home-experience-card-expand')
//         })
//         const card = document.querySelector('.home-item6')
//         console.log(`card: ${card.classList}`)
//         card.style.width = '20vw'
//         // card.classList.add('home-experience-card-expand')
//     }
//     if(rangeValueEntry[6] < currentScrollPoint && currentScrollPoint < rangeValueExit[6]){
//         console.log(rangeValueEntry[6], rangeValueExit[6] )
//         document.querySelectorAll('.home-experience-card').forEach(item => {
//             item.style.width = '3vw'
//             console.log(item.classList)
//             // item.classList.remove('home-experience-card-expand')
//         })
//         const card = document.querySelector('.home-item7')
//         console.log(`card: ${card.classList}`)
//         card.style.width = '20vw'
//         // card.classList.add('home-experience-card-expand')
//     }
//     if(rangeValueEntry[7] < currentScrollPoint && currentScrollPoint < rangeValueExit[7]){
//         console.log(rangeValueEntry[7], rangeValueExit[7] )
//         document.querySelectorAll('.home-experience-card').forEach(item => {
//             item.style.width = '3vw'
//             console.log(item.classList)
//             // item.classList.remove('home-experience-card-expand')
//         })
//         const card = document.querySelector('.home-item8')
//         console.log(`card: ${card.classList}`)
//         card.style.width = '20vw'
//         // card.classList.add('home-experience-card-expand')
//     }
//     if(rangeValueEntry[8] < currentScrollPoint && currentScrollPoint < rangeValueExit[8]){
//         console.log(rangeValueEntry[8], rangeValueExit[8] )
//         document.querySelectorAll('.home-experience-card').forEach(item => {
//             item.style.width = '3vw'
//             console.log(item.classList)
//             // item.classList.remove('home-experience-card-expand')
//         })
//         const card = document.querySelector('.home-item9')
//         console.log(`card: ${card.classList}`)
//         card.style.width = '20vw'
//         // card.classList.add('home-experience-card-expand')
//     }
//     if(rangeValueEntry[9] < currentScrollPoint && currentScrollPoint < rangeValueExit[9]){
//         console.log( rangeValueEntry[9], rangeValueExit[9] )
//         document.querySelectorAll('.home-experience-card').forEach(item => {
//             item.style.width = '3vw'
//             console.log(item.classList)
//             // item.classList.remove('home-experience-card-expand')
//         })
//         const card = document.querySelector('.home-item10')
//         console.log(`card: ${card.classList}`)
//         card.style.width = '20vw'
//         // card.classList.add('home-experience-card-expand')
//     }
//     if(rangeValueEntry[10] < currentScrollPoint && currentScrollPoint < rangeValueExit[10]){
//         console.log(rangeValueEntry[10], rangeValueExit[10] )
//         document.querySelectorAll('.home-experience-card').forEach(item => {
//             item.style.width = '3vw'
//             console.log(item.classList)
//             // item.classList.remove('home-experience-card-expand')
//         })
//         const card = document.querySelector('.home-item11')
//         console.log(`card: ${card.classList}`)
//         card.style.width = '20vw'
//         // card.classList.add('home-experience-card-expand')
//     }
//     if(rangeValueEntry[11] < currentScrollPoint && currentScrollPoint < rangeValueExit[11]){
//         console.log(rangeValueEntry[11], rangeValueExit[11] )
//         document.querySelectorAll('.home-experience-card').forEach(item => {
//             item.style.width = '3vw'
//             console.log(item.classList)
//             // item.classList.remove('home-experience-card-expand')
//         })
//         const card = document.querySelector('.home-item12')
//         console.log(`card: ${card.classList}`)
//         card.style.width = '20vw'
//         // card.classList.add('home-experience-card-expand')
//     }
//     if(rangeValueEntry[12] < currentScrollPoint && currentScrollPoint < rangeValueExit[12]){
//         console.log(rangeValueEntry[12], rangeValueExit[12] )
//         document.querySelectorAll('.home-experience-card').forEach(item => {
//             item.style.width = '3vw'
//             console.log(item.classList)
//             // item.classList.remove('home-experience-card-expand')
//         })
//         const card = document.querySelector('.home-item13')
//         console.log(`card: ${card.classList}`)
//         card.style.width = '20vw'
//         // card.classList.add('home-experience-card-expand')
//     }
//     if(rangeValueEntry[13] < currentScrollPoint && currentScrollPoint < rangeValueExit[13]){
//         console.log(rangeValueEntry[13], rangeValueExit[13] )
//         document.querySelectorAll('.home-experience-card').forEach(item => {
//             item.style.width = '3vw'
//             console.log(item.classList)
//             // item.classList.remove('home-experience-card-expand')
//         })
//         const card = document.querySelector('.home-item14')
//         console.log(`card: ${card.classList}`)
//         card.style.width = '20vw'
//         // card.classList.add('home-experience-card-expand')
//     }
//     if(rangeValueEntry[14] < currentScrollPoint && currentScrollPoint < rangeValueExit[14]){
//         console.log(rangeValueEntry[14], rangeValueExit[14] )
//         document.querySelectorAll('.home-experience-card').forEach(item => {
//             item.style.width = '3vw'
//             console.log(item.classList)
//             // item.classList.remove('home-experience-card-expand')
//         })
//         const card = document.querySelector('.home-item15')
//         console.log(`card: ${card.classList}`)
//         card.style.width = '20vw'
//         // card.classList.add('home-experience-card-expand')
//     }
//     if(rangeValueEntry[15] < currentScrollPoint && currentScrollPoint < rangeValueExit[15]){
//         console.log(rangeValueEntry[16], rangeValueExit[15] )
//         document.querySelectorAll('.home-experience-card').forEach(item => {
//             // item.classList.remove('home-experience-card-expand')
//             item.style.width = '3vw'
//             console.log(item.classList)
//         })
//         const card = document.querySelector('.home-item16')
//         console.log(`card: ${card.classList}`)
//         card.style.width = '20vw'
//         // card.classList.add('home-experience-card-expand')
//     }

// });