import styles from "../styles/Skills.module.scss";

const Skills = () => {
  return (
    <aside className={styles.education}>
      <section className={styles.education_section}>
        <h3 className={styles.section_header}>Education</h3>
        <ul className={styles.section_ul}>
          <li className={styles.section_li}>
            <div className={styles.degree}>Bachelor in Computer Science</div>
            <div className={styles.university}>
              Omsk State Transport University
            </div>
            <div className={styles.education_years}>2018 - 2022</div>
          </li>
        </ul>
      </section>
      <section className={styles.education_section}>
        <h3 className={styles.section_header}>Work experience</h3>
        <ul className={styles.section_ul}>
          <li className={styles.section_li}>
            <div className={styles.degree}>BeetSoft</div>
            <div className={styles.degree}>Frontend developer</div>
            <div className={styles.university}>
              Development of cross-platform mobile applications using React
              Native.
              <br />
              SPA development on React.
            </div>
            <div className={styles.education_years}>
              2021 (August) - 2021 (December)
            </div>
          </li>
        </ul>
      </section>
      <section className={styles.skills}>
        <h3 className={styles.section_header}>Stack</h3>
        <div className={styles.section_item}>
          <ul className={styles.section_ul}>
            <li className={styles.section_li}>Javascript, Typescript</li>
            <li className={styles.section_li}>React, React Native</li>
            <li className={styles.section_li}>Redux, Mobx, Apollo</li>
            <li className={styles.section_li}>Next.js</li>
            <li className={styles.section_li}>
              Websockets, REST, GraphQL, WebRTC
            </li>
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
    </aside>
  );
};

export default Skills;
