import React from "react";
import styles from "../../styles/Markdown.module.scss";

export const MDLink = (props) => {
  return (
    <a {...props} target="_blank" className={styles.md_a}>
      {props.children}
    </a>
  );
};

export const MDP = (props) => {
  return <p className={styles.md_p}>{props.children}</p>;
};

export const MDH1 = (props) => {
  return <h1 className={styles.md_h1}>{props.children}</h1>;
};

export const MDHeading = (props) => {
  return <h3 className={styles.md_heading}>{props.children}</h3>;
};

export const MDHr = (props) => {
  return <hr className={styles.md_hr}>{props.children}</hr>;
};

export const MDLi = (props) => {
  return <li className={styles.md_li}>{props.children}</li>;
};

export const MDCode = (props) => {
  return <code className={styles.md_code}>{props.children}</code>;
};
