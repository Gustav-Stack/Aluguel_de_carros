import "./styles/styles.css";
import NavBar from "./NavBar";
import LandPage from "./LandPage";
import Alugar from "./Alugar";
import Modelos from "./Modelos";
import Testimonials from "./Testimonials";
import Depoimentos from "./Depoimentos";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container-app">
        <div className="component-landpage">
          <LandPage />
        </div>
        <div className="component-container">
          <Alugar />
        </div>
        <div className="component-container">
          <Modelos />
        </div>
        <div className="component-container">
          <Testimonials />
        </div>
        <div className="component-container">
          <Depoimentos />
        </div>
        <div className="component-container">
          <Footer />
        </div>
      </div>
    </div>
  );
}
