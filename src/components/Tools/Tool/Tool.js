import { images } from "../../../utils/Constants";
import styles from "./Tool.module.css";

const Tool = (props) => {
  const { tool } = props;
  return (
    <div className={styles.wrapper}>
      <img className={styles.img} src={images.icons[tool.src]} alt={tool.src} />
      <h3>{tool.header}</h3>
      <p>{tool.description}</p>
    </div>
  );
};

export default Tool;
