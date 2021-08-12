import styles from "./DownloadButtons.module.css";

const DownloadButtons = (props) => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.ios}>
        <span className={styles.front}>Download for iOS</span>
      </button>
      <button className={styles.mac}>
        <span className={styles.front}>Download for Mac</span>
      </button>
    </div>
  );
};

export default DownloadButtons;
