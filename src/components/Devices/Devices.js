import { images } from "../../utils/Constants";
import styles from "./Devices.module.css";

const Devices = (props) => {
  return (
    <section>
      <div className={styles.textWrapper}>
        <h2>Access Clipboard anywhere</h2>
        <p>
          Whether you’re on the go, or at your computer, you can access all your
          Clipboard snippets in a few simple clicks.
        </p>
      </div>
      <img src={images.devices} alt="devices" className={styles.image} />
    </section>
  );
};

export default Devices;
