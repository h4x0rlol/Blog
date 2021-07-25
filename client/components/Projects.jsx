import React from "react";
import styles from "../styles/Projects.module.scss";
import Skills from "./Skills";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Projects = () => {
  const [items, setItems] = React.useState([]);
  const [divref, divinView] = useInView({
    triggerOnce: true,
    rootMargin: "-60px 0px",
  });

  React.useEffect(() => {
    if (document.querySelector("svg") && document.querySelectorAll("#item")) {
      const point = document.querySelector("svg").createSVGPoint();
      const litems = document.querySelectorAll("#item");

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

      const getCoordinates = (e, svg) => {
        point.x = e.clientX;
        point.y = e.clientY;
        return point.matrixTransform(svg.getScreenCTM().inverse());
      };

      Item.prototype = {
        update: function update(c) {
          this.clip.setAttribute("cx", c.x);
          this.clip.setAttribute("cy", c.y);
        },
        mouseMoveHandler: function mouseMoveHandler(e) {
          this.update(getCoordinates(e, this.svg));
        },
        touchMoveHandler: function touchMoveHandler(e) {
          e.preventDefault();
          var touch = e.targetTouches[0];
          if (touch) return this.update(getCoordinates(touch, this.svg));
        },
      };

      function Item(config) {
        Object.keys(config).forEach(function (item) {
          this[item] = config[item];
        }, this);
        this.el.addEventListener("mousemove", this.mouseMoveHandler.bind(this));
        this.el.addEventListener("touchmove", this.touchMoveHandler.bind(this));
      }
    }
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.items}>
          <div className={styles.project}>
            <a
              className={styles.item}
              id="item"
              href="https://github.com/h4x0rlol/timesheet"
              target="_blank"
            >
              <svg
                preserveAspectRatio="xMidYMid slice"
                viewBox="0 0 300 200"
                className={styles.svg}
              >
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
                  Timesheet
                </text>

                <g clipPath="url(#clip-0)">
                  <image
                    className={styles.image}
                    height="100%"
                    preserveAspectRatio="xMidYMid"
                    width="100%"
                    href="/img/timesheet.png"
                  ></image>
                </g>
              </svg>
            </a>

            <div className={styles.project_description}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
              dolor iste alias temporibus aliquid sunt nulla cumque! Voluptatum
              vero voluptatem quis laudantium, libero nostrum ipsum quos a sequi
              recusandae alias, tempora earum aliquid eum quidem architecto
              officiis voluptates delectus aliquam.
            </div>
          </div>

          <div className={styles.project}>
            <a
              className={styles.item}
              id="item"
              href="https://happy-hearts.herokuapp.com/"
              target="_blank"
            >
              <svg
                preserveAspectRatio="xMidYMid slice"
                viewBox="0 0 300 200"
                className={styles.svg}
              >
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

                <text className={styles.svg_text} dy=".3em" x="50%" y="50%">
                  Happy Hearts
                </text>

                <g clipPath="url(#clip-1)">
                  <image
                    className={styles.image}
                    height="100%"
                    preserveAspectRatio="xMidYMid"
                    width="100%"
                    href="/img/happyhearts.png"
                  ></image>
                </g>
              </svg>
            </a>

            <div className={styles.project_description}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
              dolor iste alias temporibus aliquid sunt nulla cumque! Voluptatum
              vero voluptatem quis laudantium, libero nostrum ipsum quos a sequi
              recusandae alias, tempora earum aliquid eum quidem architecto
              officiis voluptates delectus aliquam.
            </div>
          </div>

          <div className={styles.project}>
            <a
              className={styles.item}
              id="item"
              href="https://github.com/h4x0rlol/gnility"
              target="_blank"
            >
              <svg
                preserveAspectRatio="xMidYMid slice"
                viewBox="0 0 300 200"
                className={styles.svg}
              >
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
                  Gnility
                </text>

                <g clipPath="url(#clip-2)">
                  <image
                    className={styles.image}
                    height="100%"
                    preserveAspectRatio="xMidYMid"
                    width="100%"
                    href="/img/gnility.png"
                  ></image>
                </g>
              </svg>
            </a>

            <div className={styles.project_description}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
              dolor iste alias temporibus aliquid sunt nulla cumque! Voluptatum
              vero voluptatem quis laudantium, libero nostrum ipsum quos a sequi
              recusandae alias, tempora earum aliquid eum quidem architecto
              officiis voluptates delectus aliquam.
            </div>
          </div>

          <div className={styles.project}>
            <a
              className={styles.item}
              id="item"
              href="https://github.com/h4x0rlol/darts2bot"
              target="_blank"
            >
              <svg
                preserveAspectRatio="xMidYMid slice"
                viewBox="0 0 300 200"
                className={styles.svg}
              >
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
                  darts2bot
                </text>

                <g clipPath="url(#clip-3)">
                  <image
                    className={styles.image}
                    height="100%"
                    preserveAspectRatio="xMidYMid"
                    width="100%"
                    href="/img/darts2bot.jpeg"
                  ></image>
                </g>
              </svg>
            </a>

            <div className={styles.project_description}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
              dolor iste alias temporibus aliquid sunt nulla cumque! Voluptatum
              vero voluptatem quis laudantium, libero nostrum ipsum quos a sequi
              recusandae alias, tempora earum aliquid eum quidem architecto
              officiis voluptates delectus aliquam.
            </div>
          </div>

          <div className={styles.project}>
            <a
              className={styles.item}
              id="item"
              href="https://github.com/h4x0rlol/react-interactive-weather"
              target="_blank"
            >
              <svg
                preserveAspectRatio="xMidYMid slice"
                viewBox="0 0 300 200"
                className={styles.svg}
              >
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
                  WeatherMaps
                </text>

                <g clipPath="url(#clip-4)">
                  <image
                    className={styles.image}
                    height="100%"
                    preserveAspectRatio="xMinYMid"
                    width="100%"
                    href="/img/weather.jpeg"
                  ></image>
                </g>
              </svg>
            </a>

            <div className={styles.project_description}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
              dolor iste alias temporibus aliquid sunt nulla cumque! Voluptatum
              vero voluptatem quis laudantium, libero nostrum ipsum quos a sequi
              recusandae alias, tempora earum aliquid eum quidem architecto
              officiis voluptates delectus aliquam.
            </div>
          </div>
        </div>
        <Skills />
      </div>

      <motion.div
        ref={divref}
        initial={{ opacity: 0, y: 70 }}
        animate={divinView ? { opacity: 1, y: 0 } : { opacity: 0, y: 70 }}
        transition={{ duration: 0.8 }}
      >
        <hr className={styles.hr} />
        <div className={styles.footer_text}>
          Wow! You scrolled the whole page!
        </div>
      </motion.div>
    </>
  );
};

export default Projects;
