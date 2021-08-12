import { images } from "../../utils/Constants";
import styles from "./Footer.module.css";
import Icon from "./Icon/Icon";
import Link from "./Link/Link";
import { footerLinks } from "../../utils/Constants";
import { footerIcons } from "../../utils/Constants";

const Footer = (props) => {
  return (
    <footer className={styles.footer}>
      <img src={images.logo} alt="clipboard logo" className={styles.logo} />
      <div className={styles.links}>
        {footerLinks.map((link) => (
          <Link key={link.text} link={link} />
        ))}
        <p>&emsp;</p>
        <p>&emsp;</p>
        <p>&emsp;</p>
      </div>
      <div>
        {footerIcons.map((icon) => (
          <Icon key={icon.src} icon={icon} />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
