import styles from "./Icon.module.css";
import { iconsSvg } from "../../../utils/Icons";
import { useState } from "react";

const Icon = (props) => {
  const { icon } = props;
  const svgData = iconsSvg[icon.src];
  const [hover, setHover] = useState(false);
  return (
    <svg
      width={svgData.width}
      height={svgData.height}
      xmlns="http://www.w3.org/2000/svg"
      className={styles.icon}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <path
        d={svgData.d}
        fill={hover ? icon.hoverColor : "#4C545C"}
        fillRule="nonzero"
      />
    </svg>
  );
};

export default Icon;
