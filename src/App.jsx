import { countries } from "./js/data"
function App() {

  const countriesList = countries.map(country =>
    <div className="country" key={country.id}>
      <img loading="lazy" src={`/country-backdrop/${country.name}.jpg`} alt={country.name} className="backdrop" />
      <div>
        <h2>{country.name}</h2>
        <img loading="lazy" src={`/flags/${country.name}.jpg`} alt={country.name} />
      </div>
    </div> 
  )

  // `./src\assets\flags\Albania.jpg`
  return (
    <>
      {countriesList}
    </>
  )
}
export default App
