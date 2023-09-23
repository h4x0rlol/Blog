'use client';

import { DiscussionEmbed } from 'disqus-react';
import { useCallback, useEffect, useState } from 'react';
import styles from '../styles/CommentSection.module.scss';

type Props = {
  url: string;
  id: string;
  title: string;
};

export function CommentSection({ url, id, title }: Props) {
  const [key, setKey] = useState(false);

  const transitionEnd = useCallback((e: TransitionEvent) => {
    const { target, propertyName } = e;

    if (target === document.body && propertyName === 'background-color') {
      setKey(prev => !prev);
    }
  }, []);

  useEffect(() => {
    document.body.addEventListener('transitionend', transitionEnd);

    return () => document.body.removeEventListener('transitionend', transitionEnd);
  }, [transitionEnd]);

  return (
    <div className={styles.container}>
      <DiscussionEmbed
        key={String(key)}
        shortname={'h4x0rlol'}
        config={{
          url: url,
          identifier: id,
          title: title,
        }}
      />
    </div>
  );
}
