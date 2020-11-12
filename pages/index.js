import styles from "styles/Home.module.scss";

import Title from "components/Home/Title/Title";
import Advantages from "../components/Home/Advantages/Advantages";

export default function Home() {
  return (
    <div className={styles.Home}>
      <Title />
      <Advantages />
    </div>
  );
}
