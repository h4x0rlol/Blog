import React from "react";
import styles from "../styles/Projects.module.scss";
import Skills from "./Skills";

const Projects = () => {
  return (
    <div className={styles.container}>
      <div className={styles.projects}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
        inventore placeat impedit a aperiam hic deleniti reiciendis tenetur
        iste? Fuga soluta ad maxime quasi, voluptatum numquam rem iusto
        laboriosam consectetur voluptas eos, voluptatibus molestiae aut libero,
        consequuntur saepe nihil minus dolor voluptates qui nesciunt? Harum
        cumque amet eaque placeat soluta.
      </div>
      <Skills />
    </div>
  );
};

export default Projects;
