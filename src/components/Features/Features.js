import { images } from "../../utils/Constants";
import { features } from "../../utils/Constants";
import Feature from "../Feature/Feature";
import styles from "./Features.module.css";

const Features = (props) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <h2>Keep track of your snippets</h2>
        <p>
          Clipboard instantly stores any item you copy in the cloud, meaning you
          can access your snippets immediately on all your devices. Our Mac and
          iOS apps will help you organize everything.
        </p>
      </div>
      <img src={images.computer} alt="computer" />
      <div className={styles.features}>
        {features.map((feature) => (
          <Feature key={feature.header} feature={feature} />
        ))}
      </div>
    </section>
  );
};

export default Features;
