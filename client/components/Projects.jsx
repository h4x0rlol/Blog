import React from "react";
import styles from "../styles/Projects.module.scss";
import Skills from "./Skills";

const Projects = () => {
  const [items, setItems] = React.useState([]);
  // const itemRef = React.useRef(null);

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

  const handleMouseMove = () => {
    console.log("Dsadasd");
  };

  return (
    <div className={styles.container}>
      <div className={styles.items}>
        <div className={styles.item} id="item">
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
              X-rays
            </text>

            <g clipPath="url(#clip-0)">
              <image
                className={styles.image}
                height="100%"
                preserveAspectRatio="xMinYMin slice"
                width="100%"
                href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/i-xrays.png"
              ></image>
              <text
                className={styles.svg_masked_text}
                dy=".3em"
                x="50%"
                y="50%"
              >
                X-rays
              </text>
            </g>
          </svg>
        </div>

        <div className={styles.item} id="item">
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
              X-rays
            </text>

            <g clipPath="url(#clip-1)">
              <image
                className={styles.image}
                height="100%"
                preserveAspectRatio="xMinYMin slice"
                width="100%"
                href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/i-xrays.png"
              ></image>
              <text
                className={styles.svg_masked_text}
                dy=".3em"
                x="50%"
                y="50%"
              >
                X-rays
              </text>
            </g>
          </svg>
        </div>

        <div className={styles.item} id="item">
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
              X-rays
            </text>

            <g clipPath="url(#clip-2)">
              <image
                className={styles.image}
                height="100%"
                preserveAspectRatio="xMinYMin slice"
                width="100%"
                href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/i-xrays.png"
              ></image>
              <text
                className={styles.svg_masked_text}
                dy=".3em"
                x="50%"
                y="50%"
              >
                X-rays
              </text>
            </g>
          </svg>
        </div>

        <div className={styles.item} id="item">
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
              X-rays
            </text>

            <g clipPath="url(#clip-3)">
              <image
                className={styles.image}
                height="100%"
                preserveAspectRatio="xMinYMin slice"
                width="100%"
                href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/i-xrays.png"
              ></image>
              <text
                className={styles.svg_masked_text}
                dy=".3em"
                x="50%"
                y="50%"
              >
                X-rays
              </text>
            </g>
          </svg>
        </div>

        <div className={styles.item} id="item">
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
              X-rays
            </text>

            <g clipPath="url(#clip-4)">
              <image
                className={styles.image}
                height="100%"
                preserveAspectRatio="xMinYMin slice"
                width="100%"
                href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/i-xrays.png"
              ></image>
              <text
                className={styles.svg_masked_text}
                dy=".3em"
                x="50%"
                y="50%"
              >
                X-rays
              </text>
            </g>
          </svg>
        </div>
      </div>

      <Skills />
    </div>
  );
};

export default Projects;
