import React from "react";
import styles from "../styles/Skills.module.scss";

const Skills = () => {
  return (
    <div className={styles.education}>
      <section className={styles.education_section}>
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
      <section className={styles.skills}>
        <h3 className={styles.section_header}>Skills</h3>
        <div className={styles.section_item}>
          <ul className={styles.section_ul}>
            <li className={styles.section_li}>React</li>
            <li className={styles.section_li}>Redux</li>
            <li className={styles.section_li}>Next.js</li>
            <li className={styles.section_li}>Typescript</li>
            <li className={styles.section_li}>Express</li>
            <li className={styles.section_li}>SQL</li>
            <li className={styles.section_li}>Telegraf.js</li>
            <li className={styles.section_li}>WebRTC</li>
            <li className={styles.section_li}>Linux</li>
          </ul>
        </div>
      </section>
      <section className={styles.languages}>
        <h3 className={styles.section_header}>Languages</h3>
        <ul className={styles.section_ul}>
          <li className={styles.section_li}>
            Russian
            <span className={styles.muted}> (Native)</span>
          </li>
          <li className={styles.section_li}>
            English
            <span className={styles.muted}> (Fluent)</span>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Skills;
