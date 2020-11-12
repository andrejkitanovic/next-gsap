import styles from "./Sidebar.module.scss";
import {useRef,useEffect} from 'react'
import Mover from "./Mover/Mover";

import { GiBatwingEmblem } from "react-icons/gi";
import { AiOutlineInstagram } from "react-icons/ai";

import { TweenMax, Expo } from "gsap";

const Sidebar = (props) => {
  const sideBar = useRef(null)

  useEffect(() => {
    TweenMax.from(sideBar.current, 1, {
      delay:1.5,
      opacity: 0,
      x: -122,
      ease: Expo.easeInOut,
    });

  }, []);
  return (
    <div className={styles.Sidebar} ref={sideBar}>
      <div className={styles.container}>
        <div className={styles.icon}>
          <GiBatwingEmblem />
        </div>
        <Mover />
        <div className={styles.instagram}>
          <AiOutlineInstagram />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
