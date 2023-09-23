'use client';

import { Image, ReadProgress } from '@/components';
import * as Typography from '@/components/Markdown';
import { rafThrottle } from '@/lib/rafThrottle';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { Ref, useEffect, useMemo, useRef, useState } from 'react';
import styles from '../styles/Article.module.scss';

type Props = {
  content: MDXRemoteSerializeResult;
};

export function ArticleContent({ content }: Props) {
  const [scrollPercent, setScrollPercent] = useState(0);
  const ref: Ref<HTMLElement> = useRef(null);

  const components = useMemo(
    () => ({
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
    }),
    [],
  );

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const handleScroll = rafThrottle(() => {
      const percent = (window.scrollY / (element.clientHeight - window.innerHeight)) * 100;
      setScrollPercent(percent);
    });

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      handleScroll.cancel();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <ReadProgress width={scrollPercent} />
      <article className={styles.container} ref={ref}>
        <MDXRemote {...content} components={components} />
      </article>
    </>
  );
}
