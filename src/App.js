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
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
