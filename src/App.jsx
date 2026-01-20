import { BrowserRouter , Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/home/Main";
import Footer from "./components/Footer";
import RegionMain from "./pages/RegionMain";
import About from "./pages/About";
import AttractionMain from "./pages/AttractionMain";
import CountryMain from "./pages/CountryMain";
import ExpeditionMain from "./pages/ExpeditionMain";
import ExperienceMain from "./pages/ExperienceMain";
import UnderratedMain from "./pages/UnderratedMain";

export function replaceSpace(name) {
  return name.split("-").join(" ")
}

export function addHyphen(str) {
  return str.split(' ').join('-')
  // return str.replaceAll(" ","-" );
}
function App() {


  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element= {<Main /> } />
          <Route path="/region" element = {<RegionMain />} />
          <Route path="/About" element = {<About />} />
          <Route path="/AttractionMain" element = {<AttractionMain />} />
          <Route path="/CountryMain" element = {<CountryMain />} />
          <Route path="/ExpeditionMain" element = {<ExpeditionMain />} />
          <Route path="/ExperienceMain" element = {<ExperienceMain />} />
          <Route path="/UnderratedMain" element = {<UnderratedMain />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}
export default App
