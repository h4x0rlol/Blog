'use client';

import { WebGLContent } from '@/webgl';
import debounce from 'lodash/debounce';
import { Ref, useEffect, useRef, useState } from 'react';
import styles from '../styles/Index.module.scss';
import { Loader } from './Loader';
import { Logo } from './Logo';

export function MainPage() {
  const [isLoading, setIsLoading] = useState(true);
  const canvasRef: Ref<HTMLCanvasElement> = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    canvas.addEventListener('contextmenu', e => {
      e.preventDefault();
    });

    canvas.addEventListener('selectstart', e => {
      e.preventDefault();
    });

    const webglContent = new WebGLContent(canvas);

    const resizeWindow = () => {
      webglContent.resize();
    };

    const resize = debounce(resizeWindow, 100);

    window.addEventListener('resize', resize);

    (async function () {
      await webglContent.init();
    })();

    setIsLoading(false);

    return () => {
      resize.cancel();
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('contextmenu', e => {
        e.preventDefault();
      });
      canvas.removeEventListener('selectstart', e => {
        e.preventDefault();
      });
    };
  }, []);

  return (
    <>
      {isLoading && (
        <div className={styles.loader}>
          <Loader />
        </div>
      )}
      <Logo />
      <canvas ref={canvasRef} className={styles.canvas} />
    </>
  );
}
