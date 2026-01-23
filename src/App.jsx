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
          <Route path="/home" element= {<Main /> } />
          <Route path="/region/:regionId" element = {<RegionMain />} />
          <Route path="/about" element = {<About />} />
          <Route path="/attraction" element = {<AttractionMain />} />
          <Route path="/country" element = {<CountryMain />} />
          <Route path="/expedition" element = {<ExpeditionMain />} />
          <Route path="/experience" element = {<ExperienceMain />} />
          <Route path="/underrated" element = {<UnderratedMain />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}
export default App
