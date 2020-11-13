import "styles/globals.scss";

import Sidebar from "components/Sidebar/Sidebar.js";
import Navigation from "components/Navigation/Navigation";
import { useEffect, useState } from "react";

import LoadingScreen from 'components/Utils/LoadingScreen/LoadingScreen'
import { TweenMax, Expo } from "gsap";

function MyApp({ Component, pageProps }) {
  const [clouds, setClouds] = useState({ x: 0, y: 0 });

  useEffect(() => {
    TweenMax.from(".moon", 1, {
      delay: 1.2,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut,
    });
    TweenMax.from(".highnoon", 1, {
      delay: 3,
      y: 20,
      opacity: 0,
    });
    TweenMax.from(".dark", 1, {
      delay: 3,
      y: 20,
      opacity: 0,
    });

    const moveClouds = (e) => {
      let x = e.clientX;
      let y = e.clientY; 
      console.log("X:" + x , ", Y:" + y)

      setClouds({x:(window.innerWidth / 2 - x) / 60 ,y:(window.innerHeight / 2 - y) / 60})

    }
  

    document.addEventListener('mousemove',moveClouds);
  }, []);

 
  return (
    <>
      <div className="background"/>
      <div className="clouds" 
      style={{transform:`translate(${clouds.x}px,${clouds.y}px)`}}
      />
      <LoadingScreen/>

      <header>
        <Sidebar />
        <Navigation />
      </header>
      <main>
        <div className="highnoon">GOTHIC</div>
        <div className="dark">SHOP</div>
        <div
          className="moon"
          style={{transform:`translate(${-clouds.x / 2}px,${-clouds.y / 2}px)`}}
        />

        <Component {...pageProps} />
      </main>
      <footer></footer>
    </>
  );
}

export default MyApp;
