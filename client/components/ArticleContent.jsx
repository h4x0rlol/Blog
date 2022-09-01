import { useEffect, useRef, useState } from "react";
import styles from "../styles/Article.module.scss";
import ReadProgress from "./ReadProgress";

const ArticleContent = ({ article }) => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      const handleScroll = () => {
        const percent =
          (window.scrollY / (ref.current.clientHeight - window.innerHeight)) *
          100;
        setScrollPercent(percent);
      };

      window.addEventListener("scroll", handleScroll, { passive: true });

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  useEffect(() => {
    console.log(scrollPercent);
  }, [scrollPercent]);

  return (
    <>
      <ReadProgress width={scrollPercent} />
      <article
        ref={ref}
        className={styles.container}
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </>
  );
};

export default ArticleContent;
