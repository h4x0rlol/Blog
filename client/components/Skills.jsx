import React from "react";
import styles from "../styles/Skills.module.scss";

const Skills = () => {
  return (
    <div className={styles.education}>
      <section styles={styles.education_section}>
        <h3 className={styles.section_header}>Education</h3>
        <ul className={styles.section_ul}>
          <li className={styles.section_li}>
            <div className={styles.degree}>
              Bachelor in Informatics and Computer Engineering
            </div>
            <div className={styles.university}>
              Omsk State Transport University
            </div>
            <div className={styles.education_years}>2018 - 2022</div>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Skills;
