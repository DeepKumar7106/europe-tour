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
import Cities from "./pages/Cities";
import Attraction from "./pages/Attraction";
import UnderratedPage from "./pages/UnderratedPage";
import Expedition from "./pages/Expedition";
import Experience from "./pages/Experience";

export function replaceSpace(name) {
  return name.split("-").join(" ")
}

export function addHyphen(str) {
  return str.split(' ').join('-')
  // return str.replaceAll(" ","-" );
}

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // This moves the window to the top whenever the URL path changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {


  return (
    <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element= {<Main /> } />
          <Route path="/region/:regionId" element = {<RegionMain />} />
          <Route path="/about" element = {<About />} />
          <Route path="/attraction" element = {<AttractionMain />} />
          <Route path="/country/:countryId" element = {<CountryMain />} />
          <Route path="/expedition" element = {<ExpeditionMain />} />
          <Route path="/experience" element = {<ExperienceMain />} />
          <Route path="/underrated" element = {<UnderratedMain />} />
          <Route path="/cities/:cityId" element = {<Cities />} />
          <Route path="/attractionLocation/:atcId" element = {<Attraction />} />
          <Route path="/underratedLocation/:undId" element = {<UnderratedPage />} />
          <Route path="/expeditionPage/:expdId" element = {<Expedition />} />
          <Route path="/experiencePage/:expId" element = {<Experience />} />
          </Routes>
        <Footer />
    </BrowserRouter>
  )
}
export default App
