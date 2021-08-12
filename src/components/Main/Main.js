import { images } from "../../utils/Constants";
import DownloadButtons from "../DownloadButtons/DownloadButtons";
import styles from "./Main.module.css";

const Main = (props) => {
  return (
    <main className={styles.main}>
      <img className={styles.img} src={images.logo} alt="clipboard logo" />
      <h1>A history of everything you copy</h1>
      <p>
        Clipboard allows you to track and organize everything you copy.
        Instantly access your clipboard on all your devices.
      </p>
      <DownloadButtons />
    </main>
  );
};

export default Main;
