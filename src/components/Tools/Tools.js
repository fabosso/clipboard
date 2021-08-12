import { tools } from "../../utils/Constants";
import Tool from "./Tool/Tool";
import styles from "./Tools.module.css";

const Tools = (props) => {
  return (
    <section className={styles.tools}>
      <h2>Supercharge your workflow</h2>
      <p>We’ve got the tools to boost your productivity.</p>
      <div className={styles.toolsWrapper}>
        {tools.map((tool) => (
          <Tool key={tool.header} tool={tool} />
        ))}
      </div>
    </section>
  );
};

export default Tools;
