import { throttle } from "lodash";
import { useEffect, useMemo, useRef, useState } from "react";
import styles from "../styles/Article.module.scss";
import ReadProgress from "./ReadProgress";

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
      <article
        ref={ref}
        className={styles.container}
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </>
  );
};

export default ArticleContent;
