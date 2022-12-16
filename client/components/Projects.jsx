import cn from "classnames";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { useInView } from "react-intersection-observer";
import styles from "../styles/Projects.module.scss";
import Skills from "./Skills";

const Projects = () => {
  const [items, setItems] = React.useState([]);
  const [isTouch, setIsTouch] = React.useState(false);
  const [divref, divinView] = useInView({
    // triggerOnce: true,
    rootMargin: "-50px 0px",
  });

  React.useEffect(() => {
    const isTouchDevice =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0;

    setIsTouch(isTouchDevice);

    if (
      document.querySelector("svg") &&
      document.querySelectorAll("#item") &&
      !isTouchDevice
    ) {
      const point = document.querySelector("svg").createSVGPoint();
      const litems = document.querySelectorAll("#item");

      class Item {
        constructor(config) {
          Object.keys(config).forEach((item) => {
            this[item] = config[item];
          }, this);

          this.el.addEventListener(
            "mousemove",
            this.mouseMoveHandler.bind(this)
          );
        }

        update(c) {
          this.clip.setAttribute("cx", c.x);
          this.clip.setAttribute("cy", c.y);
        }

        getCoordinates(e, svg) {
          point.x = e.clientX;
          point.y = e.clientY;
          return point.matrixTransform(svg.getScreenCTM().inverse());
        }

        mouseMoveHandler(e) {
          this.update(this.getCoordinates(e, this.svg));
        }
      }

      litems.forEach((item, index) => {
        setItems((prev) => [
          ...prev,
          new Item({
            el: item,
            svg: item.querySelector("svg"),
            clip: document.querySelector("#clip-" + index + " circle"),
          }),
        ]);
      });
    }
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.items}>
          <h3 className={styles.header}>Open Source</h3>

          <article className={styles.project}>
            <a
              className={styles.item}
              id="item"
              href="https://github.com/h4x0rlol/dra.ws"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                preserveAspectRatio="xMidYMid slice"
                viewBox="0 0 300 200"
                className={styles.svg}
              >
                {!isTouch && (
                  <>
                    <defs>
                      <clipPath id="clip-0">
                        <circle
                          cx={0}
                          cy={0}
                          fill="#000"
                          r="150px"
                          className={styles.circle}
                        ></circle>
                      </clipPath>
                    </defs>
                    <text className={styles.svg_text} dy=".3em" x="50%" y="50%">
                      DRA.WS
                    </text>
                  </>
                )}

                <g clipPath="url(#clip-0)">
                  <image
                    className={cn({
                      [styles.mobile_image]: isTouch,
                      [styles.image]: !isTouch,
                    })}
                    height="100%"
                    preserveAspectRatio="xMidYMid"
                    width="100%"
                    href="/img/draws.gif"
                  ></image>
                </g>
              </svg>
            </a>

            <div className={styles.project_description}>
              An open source service for deployment on a local network that
              allows users to interact in a real-time session with a virtual
              drawing canvas, also with real-time chat support to increase the
              productivity of work meetings, thereby reducing their time and
              increasing productivity labor.
            </div>
          </article>

          <article className={styles.project}>
            <a
              className={styles.item}
              id="item"
              href="https://github.com/h4x0rlol/react-raspberry-dashboard"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                preserveAspectRatio="xMidYMid slice"
                viewBox="0 0 300 200"
                className={styles.svg}
              >
                {!isTouch && (
                  <>
                    <defs>
                      <clipPath id="clip-1">
                        <circle
                          cx={0}
                          cy={0}
                          fill="#000"
                          r="150px"
                          className={styles.circle}
                        ></circle>
                      </clipPath>
                    </defs>

                    <text className={styles.svg_text} dy=".3em" x="50%" y="35%">
                      React
                    </text>
                    <text className={styles.svg_text} dy=".3em" x="50%" y="50%">
                      Raspberry
                    </text>

                    <text className={styles.svg_text} dy=".3em" x="50%" y="65%">
                      Dashboard
                    </text>
                  </>
                )}

                <g clipPath="url(#clip-1)">
                  <image
                    className={cn({
                      [styles.mobile_image]: isTouch,
                      [styles.image]: !isTouch,
                    })}
                    height="100%"
                    preserveAspectRatio="xMidYMid"
                    width="100%"
                    href="/img/react-raspberry-dashboard.jpg"
                  ></image>
                </g>
              </svg>
            </a>

            <div className={styles.project_description}>
              <p>
                Dashboard for monitoring indoor air parameters using Raspberry
                Pi, as well as displaying data from various public APIs.{" "}
                <Link
                  className={styles.link}
                  href="/blog/react-raspberry-dashboard"
                >
                  (How to make it)
                </Link>
              </p>
            </div>
          </article>

          <article className={styles.project}>
            <a
              className={styles.item}
              id="item"
              href="https://happy-hearts.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                preserveAspectRatio="xMidYMid slice"
                viewBox="0 0 300 200"
                className={styles.svg}
              >
                {!isTouch && (
                  <>
                    <defs>
                      <clipPath id="clip-2">
                        <circle
                          cx={0}
                          cy={0}
                          fill="#000"
                          r="150px"
                          className={styles.circle}
                        ></circle>
                      </clipPath>
                    </defs>

                    <text className={styles.svg_text} dy=".3em" x="50%" y="50%">
                      Happy Hearts
                    </text>
                  </>
                )}

                <g clipPath="url(#clip-2)">
                  <image
                    className={cn({
                      [styles.mobile_image]: isTouch,
                      [styles.image]: !isTouch,
                    })}
                    height="100%"
                    preserveAspectRatio="xMidYMid"
                    width="100%"
                    href="/img/happyhearts.jpg"
                  ></image>
                </g>
              </svg>
            </a>

            <div className={styles.project_description}>
              Website for buying English courses for young children, payment
              using Yandex Kassa.
            </div>
          </article>

          <article className={styles.project}>
            <a
              className={styles.item}
              id="item"
              href="https://github.com/h4x0rlol/gnility"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                preserveAspectRatio="xMidYMid slice"
                viewBox="0 0 300 200"
                className={styles.svg}
              >
                {!isTouch && (
                  <>
                    <defs>
                      <clipPath id="clip-3">
                        <circle
                          cx={0}
                          cy={0}
                          fill="#000"
                          r="150px"
                          className={styles.circle}
                        ></circle>
                      </clipPath>
                    </defs>

                    <text className={styles.svg_text} dy=".3em" x="50%" y="50%">
                      Gnility
                    </text>
                  </>
                )}

                <g clipPath="url(#clip-3)">
                  <image
                    className={cn({
                      [styles.mobile_image]: isTouch,
                      [styles.image]: !isTouch,
                    })}
                    height="100%"
                    preserveAspectRatio="xMidYMid"
                    width="100%"
                    href="/img/gnility.png"
                  ></image>
                </g>
              </svg>
            </a>

            <div className={styles.project_description}>
              A simple peer-to-peer chat based on WebRTC on random topics.
            </div>
          </article>

          <article className={styles.project}>
            <a
              className={styles.item}
              id="item"
              href="https://github.com/h4x0rlol/darts2bot"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                preserveAspectRatio="xMidYMid slice"
                viewBox="0 0 300 200"
                className={styles.svg}
              >
                {!isTouch && (
                  <>
                    <defs>
                      <clipPath id="clip-4">
                        <circle
                          cx={0}
                          cy={0}
                          fill="#000"
                          r="150px"
                          className={styles.circle}
                        ></circle>
                      </clipPath>
                    </defs>

                    <text className={styles.svg_text} dy=".3em" x="50%" y="50%">
                      darts2bot
                    </text>
                  </>
                )}

                <g clipPath="url(#clip-4)">
                  <image
                    className={cn({
                      [styles.mobile_image]: isTouch,
                      [styles.image]: !isTouch,
                    })}
                    height="100%"
                    preserveAspectRatio="xMidYMid"
                    width="100%"
                    href="/img/darts2bot.png"
                  ></image>
                </g>
              </svg>
            </a>

            <div className={styles.project_description}>
              Multiplayer darts game in the form of a telegram bot.
            </div>
          </article>

          <article className={styles.project}>
            <a
              className={styles.item}
              id="item"
              href="https://github.com/h4x0rlol/weathermaps"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                preserveAspectRatio="xMidYMid slice"
                viewBox="0 0 300 200"
                className={styles.svg}
              >
                {!isTouch && (
                  <>
                    <defs>
                      <clipPath id="clip-5">
                        <circle
                          cx={0}
                          cy={0}
                          fill="#000"
                          r="150px"
                          className={styles.circle}
                        ></circle>
                      </clipPath>
                    </defs>

                    <text className={styles.svg_text} dy=".3em" x="50%" y="50%">
                      WeatherMaps
                    </text>
                  </>
                )}

                <g clipPath="url(#clip-5)">
                  <image
                    className={cn({
                      [styles.mobile_image]: isTouch,
                      [styles.image]: !isTouch,
                    })}
                    height="100%"
                    preserveAspectRatio="xMinYMid"
                    width="100%"
                    href="/img/weather.jpg"
                  ></image>
                </g>
              </svg>
            </a>

            <div className={styles.project_description}>
              Application for tracking weather conditions anywhere in the world
              using interactive maps.
            </div>
          </article>
        </div>
        <Skills />
      </div>

      <motion.footer
        ref={divref}
        initial={{ opacity: 0, y: 70 }}
        animate={divinView ? { opacity: 1, y: 0 } : { opacity: 0, y: 70 }}
        transition={{ duration: 0.8 }}
      >
        <hr className={styles.hr} />
      </motion.footer>
    </>
  );
};

export default Projects;
