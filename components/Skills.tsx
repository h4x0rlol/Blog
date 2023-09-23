import styles from '../styles/Skills.module.scss';

export function Skills() {
  return (
    <aside className={styles.wrapper}>
      <section className={styles.section}>
        <h3 className={styles.section_header}>Education</h3>
        <ul className={styles.section_ul}>
          <li className={styles.section_li}>
            <p className={styles.bold}>Master in Computer Science</p>
            <p>Omsk State Transport University</p>
            <time className={styles.dates}>2018 - 2024</time>
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h3 className={styles.section_header}>Work experience</h3>
        <ul className={styles.section_ul}>
          <li className={styles.section_li}>
            <p className={styles.bold}>BeetSoft</p>
            <p className={styles.bold}>Frontend developer</p>
            <time className={styles.dates}>2021 (July) - 2021 (December)</time>
            <ul className={styles.nested_ul}>
              <li>Development of cross-platform mobile applications using React Native</li>
              <li>SPA development on React</li>
            </ul>
          </li>
        </ul>

        <ul className={styles.section_ul}>
          <li className={styles.section_li}>
            <p className={styles.bold}>NetSyde</p>
            <p className={styles.bold}>Frontend developer</p>
            <time className={styles.dates}>2019 (October) - 2021 (June)</time>
            <ul className={styles.nested_ul}>
              <li>Development and support of decentralized applications (dApp)</li>
              <li>Development of Telegram bots</li>
              <li>Third-party orders</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h3 className={styles.section_header}>Stack</h3>
        <ul className={styles.section_ul}>
          <li className={styles.section_li}>Javascript, Typescript</li>
          <li className={styles.section_li}>React, React Native, Next.js</li>
          <li className={styles.section_li}>Redux (Toolkit, RTK Query), Mobx (State-Tree), Apollo</li>
          <li className={styles.section_li}>Websockets, REST, GraphQL, WebRTC</li>
          <li className={styles.section_li}>SCSS / CSS Modules / styled-components / material-ui / tailwind</li>
          <li className={styles.section_li}>Jest</li>
          <li className={styles.section_li}>Linux, Bash</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h3 className={styles.section_header}>Languages</h3>
        <ul className={styles.section_ul}>
          <li className={styles.section_li}>
            Russian
            <span className={styles.italic}> (Native)</span>
          </li>
          <li className={styles.section_li}>
            English
            <span className={styles.italic}> (Fluent)</span>
          </li>
        </ul>
      </section>
    </aside>
  );
}
