import styles from "./Logo.module.css";

const Logo = (props) => {
  const { logo } = props;
  return <img src={logo.src} alt={logo.alt} className={styles.logo} />;
};

export default Logo;
