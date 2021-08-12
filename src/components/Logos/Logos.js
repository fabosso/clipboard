import styles from "./Logos.module.css";
import Logo from "./Logo/Logo";
import { logos } from "../../utils/Constants";

const Logos = (props) => {
  return (
    <section className={styles.wrapper}>
      {logos.map((logo) => (
        <Logo key={logo.alt} logo={logo} />
      ))}
    </section>
  );
};

export default Logos;
