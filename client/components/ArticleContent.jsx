import { throttle } from "lodash";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import styles from "../styles/Article.module.scss";
import ReadProgress from "./ReadProgress";

const components = { Image };

const ArticleContent = ({ article }) => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const ref = useRef(null);

  const handleScroll = useMemo(
    () =>
      throttle(() => {
        const percent =
          (window.scrollY / (ref.current.clientHeight - window.innerHeight)) *
          100;
        setScrollPercent(percent);
      }, 100),
    []
  );

  useEffect(() => {
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
      <article className={styles.container}>
        <MDXRemote {...article.content} components={components} />
      </article>
    </>
  );
};

export default ArticleContent;
