import { ComponentProps } from 'react';
import styles from '../../styles/Markdown.module.scss';

export function MDLink(props: ComponentProps<'a'>) {
  return (
    <a target="_blank" className={styles.md_a} {...props}>
      {props.children}
    </a>
  );
}

export function MDP(props: ComponentProps<'p'>) {
  return (
    <p className={styles.md_p} {...props}>
      {props.children}
    </p>
  );
}

export function MDH1(props: ComponentProps<'h1'>) {
  return (
    <h1 className={styles.md_h1} {...props}>
      {props.children}
    </h1>
  );
}

export function MDHeading(props: ComponentProps<'h3'>) {
  return (
    <h3 className={styles.md_heading} {...props}>
      {props.children}
    </h3>
  );
}

export function MDHr(props: ComponentProps<'hr'>) {
  return (
    <hr className={styles.md_hr} {...props}>
      {props.children}
    </hr>
  );
}

export function MDLi(props: ComponentProps<'li'>) {
  return (
    <li className={styles.md_li} {...props}>
      {props.children}
    </li>
  );
}

export function MDCode(props: ComponentProps<'code'>) {
  return (
    <code className={styles.md_code} {...props}>
      {props.children}
    </code>
  );
}
