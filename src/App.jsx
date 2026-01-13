import { cities, regions } from "./scripts/data" 
function App() {

  function replaceSpace(name) {
    return name.replace("-"," " );
  }

  // console.log(replaceSpace("Hello World"))

  const cityList = regions.map((city, index) => {
    const name = replaceSpace(city.name)
    return <div key={city.id} className="cityWrapper">
            <h2 className="cityWrapperText">{index + 1} {name}</h2> 
            <div className="imageWrapper">
              <img className="cityImage" src={`/region-webp/${city.name}.webp`} alt={city.name} /> 
            </div>
          </div>
    }
  )

  return (
    <main>
      {cityList}
    </main>
  )
}
export default App
