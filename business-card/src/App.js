import Info from "./components/Info";
import About from "./components/About";
import Footer from "./components/Footer";
import Headshot from "./images/headshot.jpeg";
import data from "./data"
import "./styles.css"
function App() {
  return (
    <div className = "border-block">
      <img src={Headshot} className = "headshot"></img>
      <div className = "black-box">
      <Info/>
      <About/>

      <Footer/>
      </div>
    </div>
  );
}

export default App;
