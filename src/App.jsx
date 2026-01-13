import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export function replaceSpace(name) {
  return name.replace("-"," " );
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
