import styles from "./Title.module.scss";

import { useEffect, useRef } from "react";
import { TweenMax, Expo } from "gsap";
import { HiOutlineShoppingCart } from "react-icons/hi";

const Title = (props) => {
  const smallHeader = useRef(null);
  const header = useRef(null);
  const description = useRef(null);
  const cart = useRef(null);
  const go = useRef(null);

  useEffect(() => {
    TweenMax.from(smallHeader.current, 1.5, {
      delay: 1.5,
      y: 500,
      skewY: 20,
    });
    TweenMax.from(header.current, 1.5, {
      delay: 1.5,
      y: 600,
      skewY: 20,
    });
    TweenMax.from(".line", 1.5, {
      delay: 1.5,
      y: 200,
      skewY: 10,
      stagger: {
        amount: 0.4,
      },
    });
    TweenMax.from(cart.current, 0.8, {
      delay: 2,
      y: 110,
    });
  }, []);

  const goOnEnter = () => {
    TweenMax.to(go.current, .5, {
      width:255,
      background:"#E0C08D",
      ease: Expo.easeInOut,
    });


  };

  const goOnLeave = () => {
    TweenMax.to(go.current, .5, {
      width:66,
      background:"#FFF",
      ease: Expo.easeInOut,
    });
  }

  return (
    <div className={styles.Title}>
      <div className={styles.wrapperh3}>
        <h3 ref={smallHeader}>dark side</h3>
      </div>

      <div className={styles.wrapperh1}>
        <h1 ref={header}>LUNAGO</h1>
      </div>

      <div className={styles.description} ref={description}>
        <div className="wrapper">
          <div className="line">
            Welcome to the biggest gothic shop
          </div>
        </div>
        <div className="wrapper">
          <div className="line">
            on the web, feel free to discover new
          </div>
        </div>
        <div className="wrapper">
          <div className="line">dark sides in our shop</div>
        </div>
      </div>

      <div className={styles.wrapperCart}>
        <div className={styles.cart} ref={cart}  onMouseEnter={goOnEnter} onMouseLeave={goOnLeave}>
          <div className={styles.go} ref={go}>
            <HiOutlineShoppingCart />
          </div>
          <span>Go to shop</span>
        </div>
      </div>
    </div>
  );
};

export default Title;
