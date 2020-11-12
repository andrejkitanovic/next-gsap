import "styles/globals.scss";

import Sidebar from "components/Sidebar/Sidebar.js";
import Navigation from "components/Navigation/Navigation";
import { useEffect, useState } from "react";

import { TweenMax, Expo } from "gsap";

function MyApp({ Component, pageProps }) {
  // const [moon, setMoon] = useState({ x: 0, y: 0 });

  useEffect(() => {
    TweenMax.from(".moon", 1, {
      delay: 1.2,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut,
    });


    TweenMax.to("#a", 1, {
      x: -1920,
      ease: Expo.easeInOut,
    });
    TweenMax.to("#b", 1, {
      delay: 0.2,
      x: -1920,
      ease: Expo.easeInOut,
    });
    TweenMax.to("#c", 1, {
      delay: 0.4,
      x: -1920,
      ease: Expo.easeInOut,
    });
    TweenMax.to("#d", 1, {
      delay: 0.6,
      x: -1920,
      ease: Expo.easeInOut,
    });


    TweenMax.from(".highnoon",1,{
      delay:3,
      y:20,
      opacity:0
    })
    TweenMax.from(".dark",1,{
      delay:3,
      y:20,
      opacity:0
    })
  }, []);


  return (
    <>
      <div className="black">
        <div id="a" />
        <div id="b" />
        <div id="c" />
        <div id="d" />
      </div>

      <header>
        <Sidebar />
        <Navigation />
      </header>
      <main>
        <div className="highnoon">HIGHNOON</div>
        <div className="dark">DARK</div>
        <div
          className="moon"
          // style={{ "--moveX": moon.x + "px", "--moveY": moon.y + "px" }}
          // onMouseMove={followMouse}
          // onMouseOut={stopFollowingMouse}
        />

        <Component {...pageProps} />
      </main>
      <footer></footer>
    </>
  );
}

export default MyApp;
