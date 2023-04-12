//import logo from './logo.svg';
import "./App.css";
import "./components/navbar/NavbarStyle.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/home";
import About from "./components/about/about";
import Skills from "./components/skills/skills";
import Contact from "./components/contact/contact";
import Portfolio from "./components/portfolio/portfolio";
import Services from "./components/services/services";
import SocialMedia from "./components/socialmedia/socialmedia";
import bg from "./assets/falling-stars.json";
import Lottie from "lottie-react";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SocialMedia />
      <Home />
      <About />
      <Skills />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
