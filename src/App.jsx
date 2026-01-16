import Header from "./components/Header";
import Main from "./components/home/Main";
import Footer from "./components/Footer";

export function replaceSpace(name) {
  return name.split("-").join(" ")
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
