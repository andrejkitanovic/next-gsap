import "styles/globals.scss";

import Sidebar from "components/Sidebar/Sidebar.js";
import Navigation from "components/Navigation/Navigation";
import { useEffect, useState } from "react";

import { TweenMax, Expo } from "gsap";

function MyApp({ Component, pageProps }) {
  const [moon, setMoon] = useState({ x: 0, y: 0 });

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
      delay:0.2,
      opacity:0,
      x: -1920,
      ease: Expo.easeInOut,
    });
    TweenMax.to("#c", 1, {
      delay:0.4,
      opacity:0,
      x: -1920,
      ease: Expo.easeInOut,
    });
    TweenMax.to("#d", 1, {
      delay:0.6,
      opacity:0,
      x: -1920,
      ease: Expo.easeInOut,
    });
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
        <div
          className="moon"
          style={{ "--moveX": moon.x + "px", "--moveY": moon.y + "px" }}
        />

        <Component {...pageProps} />
      </main>
      <footer></footer>
    </>
  );
}

export default MyApp;
