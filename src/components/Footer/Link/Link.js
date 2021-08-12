import styles from "./Link.module.css";

const Link = (props) => {
  const { link } = props;
  return (
    <a className={styles.link} href={link.url}>
      {link.text}
    </a>
  );
};

export default Link;
