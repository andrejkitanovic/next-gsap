import styles from "./Mover.module.scss";

import {MdKeyboardArrowUp,MdKeyboardArrowDown} from 'react-icons/md'

const Mover = (props) => {
  return (
    <div className={styles.Mover}>
      <div className={styles.arrow}><MdKeyboardArrowUp /></div>
      <div className={styles.dots}>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
      </div>
      <div className={styles.arrow}><MdKeyboardArrowDown /></div>
    </div>
  );
};

export default Mover