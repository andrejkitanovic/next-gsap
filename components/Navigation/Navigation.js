import styles from "./Navigation.module.scss";

import { FiUser, FiShoppingCart } from "react-icons/fi";
import { useEffect, useRef } from "react";

import { TweenMax, Expo } from "gsap";

const Navigation = (props) => {
  const logo = useRef(null);
  const links = useRef(null);
  const profile = useRef(null)

  useEffect(() => {
    TweenMax.staggerFrom([logo.current, links.current, profile.current], 1, {
      delay: 2.5,
      opacity: 0,
      y: 20,
    });
  }, []);

  return (
    <div className={styles.Navigation}>
      <div className={styles.logo} ref={logo}>
        high<span>noon.</span>
      </div>

      <div className={styles.links} ref={links}>
        <a className={styles.active}>Home</a>
        <a>Gallery</a>
        <a>Shop</a>
        <a>Reviews</a>
        <a>About</a>
      </div>

      <div className={styles.profile} ref={profile}>
        <div>
          <FiUser />
        </div>
        <div>
          <FiShoppingCart />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
