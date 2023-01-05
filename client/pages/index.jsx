import { Vector2 } from "three";
import WebGLContent from "webgl/WebGLContent";
import Head from "next/head";
import styles from "/styles/Index.module.scss";
import { useEffect } from "react";
import { useRef } from "react";
import { debounce } from "lodash";
import { Loader } from "components";
import { Logo } from "components";

const Index = () => {
  const ref = useRef();

  useEffect(() => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
      document.body.className = "";
    }, 500);

    if (ref.current) {
      ref.current.addEventListener("contextmenu", (event) => {
        event.preventDefault();
      });

      ref.current.addEventListener("selectstart", (event) => {
        event.preventDefault();
      });

      const webglContent = new WebGLContent(ref.current);
      const resolution = new Vector2();

      const resizeWindow = () => {
        resolution.set(document.body.clientWidth, window.innerHeight);
        webglContent.resize(resolution);
      };

      const render = () => {
        webglContent.update();
        requestAnimationFrame(render);
      };

      const resize = debounce(resizeWindow, 100);

      window.addEventListener("resize", resize);

      resizeWindow(webglContent, resolution);

      (async function () {
        await webglContent.init(resolution);
      })();

      loader.classList.add(styles.hidden);
      webglContent.start();
      render(webglContent);

      return () => {
        window.removeEventListener("resize", resize);
        resize.cancel();
      };
    }
  }, []);

  return (
    <>
      <Head>
        <meta keywords="h4x0rlol, cv, blog, resume, portfolio" />
        <title>h4x0rlol</title>
      </Head>
      <div>
        <div id="loader" className={styles.loader}>
          <Loader />
        </div>
        <Logo />
        <canvas ref={ref} className={styles.canvas} />
      </div>
    </>
  );
};

export default Index;
