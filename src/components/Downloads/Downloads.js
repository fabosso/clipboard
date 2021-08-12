import DownloadButtons from "../DownloadButtons/DownloadButtons";
import styles from "./Downloads.module.css";

const Downloads = (props) => {
  return (
    <section className={styles.downloads}>
      <h2>Clipboard for iOS and Mac OS</h2>
      <p>
        Available for free on the App Store. Download for Mac or iOS, sync with
        iCloud and you’re ready to start adding to your clipboard.
      </p>
      <DownloadButtons />
    </section>
  );
};

export default Downloads;
