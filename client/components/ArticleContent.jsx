import { throttle } from "lodash";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import styles from "../styles/Article.module.scss";
import * as Typography from "./Markdown/Typography";
import ReadProgress from "./ReadProgress";

const components = {
  Image,
  h1: Typography.MDH1,
  h2: Typography.MDHeading,
  h3: Typography.MDHeading,
  h4: Typography.MDHeading,
  h5: Typography.MDHeading,
  h6: Typography.MDHeading,
  p: Typography.MDP,
  a: Typography.MDLink,
  hr: Typography.MDHr,
  li: Typography.MDLi,
  code: Typography.MDCode,
};

const ArticleContent = ({ article }) => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const percent =
        (window.scrollY / (ref.current.clientHeight - window.innerHeight)) *
        100;
      setScrollPercent(percent);
    }, 100);

    if (ref.current) {
      window.addEventListener("scroll", handleScroll, {
        passive: true,
      });

      return () => {
        handleScroll.cancel();
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <>
      <ReadProgress width={scrollPercent} />
      <article className={styles.container} ref={ref}>
        <MDXRemote {...article.content} components={components} />
      </article>
    </>
  );
};

export default ArticleContent;
