import './bootstrap-5-dist/css/bootstrap.min.css';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Stats from './components/Stats';
import Team from './components/Team';
import StakingDevice from './components/StakingDevice';
import ClubWelcome from './components/ClubWelcome';
import Footer from './components/Footer';
import Roadmap from './components/Roadmap';
import BackgroundBlurs from './components/BackgroundBlurs';
import styled from 'styled-components';
import './App.css';
import About from './components/About';
import { useEffect } from 'react';

const Site = styled.div`
background-color: black;
color: white;
overflow-y: hidden;
`;

function App() {

  useEffect(() => {
    let IDs = ["stats", "about", "team", "stakingDevice", "clubWelcome", "roadmap", "footer"];
    IDs.forEach((val) => {
      let element = document.getElementById(val);
      element.style.transition = "opacity 0.3s ease-in-out";
      element.style.opacity = 0;

    });
    
    let scrollFunction = function () {
      let bottomPos = window.scrollY + window.innerHeight;

      let positions = IDs.map((val) => document.getElementById(val).offsetTop );
      let heights = IDs.map((val) => document.getElementById(val).offsetHeight );
      
      positions.forEach((pos,i) => {
        let element = document.getElementById(IDs[i]);
        if (window.scrollY + 100 <= pos + heights[i] && bottomPos - 100 >= pos) {
          if (!element.classList.contains("scroll")) {
            element.classList.add("scroll");
            (async () => {
              await ((seconds) => {
                      return new Promise((resolve, reject) => {
                          setTimeout(() => resolve(), seconds * 1000);
                      })
                    })(0.6);
                    element.style.opacity = 1;
                  })();
                }
              } else {
                element.classList.remove("scroll");
                element.style.opacity = 0;
              }
      });
    };

    window.addEventListener('scroll', scrollFunction);

    return () => window.removeEventListener('scroll', scrollFunction);
  }, []);


  return (<Site>
    <BackgroundBlurs />
    <Welcome />
    <Stats />
    <About />
    <Team />
    <StakingDevice />
    <ClubWelcome />
    <Roadmap />
    <Footer />
    <Header />
  </Site>
  );
}

export default App;
