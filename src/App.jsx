import Header from "./components/Header";
import Main from "./components/home/Main";
import Footer from "./components/Footer";

export function replaceSpace(name) {
  return name.split("-").join(" ")
}

export function addHyphen(str) {
  return str.split(' ').join('-')
  // return str.replaceAll(" ","-" );
}
function App() {


  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}
export default App
