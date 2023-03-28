//import logo from './logo.svg';
import './App.css';
import './components/navbar/NavbarStyle.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/home';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Projects from './components/portfolio/portfolio';
import Services from './components/services/services';
import bg from './assets/falling-stars.json';
import Lottie from 'lottie-react';

function App() {

  return (
    
    <div className="App">
      <div className="app__container">
        <Navbar/>
        <Home/>
        <About/>
        <Projects/>
        <Services/>
        <Contact/>
      </div>
      {/* <div className="background">
        <Lottie
          animationData={bg}
          loop
          autoplay
          style={{ width: '100%', height: '100%' }}
        />
      </div> */}
    </div>
  );
}

export default App;
