'use client';

import { Skills } from '@/components';
import { clsx } from 'clsx';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactNode, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from '../styles/Projects.module.scss';

type Config = {
  el: Element;
  svg: SVGSVGElement;
  clip: Element;
  point: DOMPoint;
};

class SvgItem {
  el: Element;
  svg: SVGSVGElement;
  clip: Element;
  point: DOMPoint;

  constructor(config: Config) {
    this.el = config.el;
    this.svg = config.svg;
    this.clip = config.clip;
    this.point = config.point;

    this.el.addEventListener('mousemove', this.mouseMoveHandler.bind(this));
  }

  removeEventListener() {
    this.el.removeEventListener('mousemove', this.mouseMoveHandler.bind(this));
  }

  update(c: DOMPoint) {
    this.clip.setAttribute('cx', String(c.x));
    this.clip.setAttribute('cy', String(c.y));
  }

  getCoordinates(e: MouseEventInit) {
    this.point.x = e.clientX!;
    this.point.y = e.clientY!;

    return this.point.matrixTransform(this.svg.getScreenCTM()?.inverse());
  }

  mouseMoveHandler(e: MouseEventInit) {
    this.update(this.getCoordinates(e));
  }
}

export function Projects() {
  const [isTouch, setIsTouch] = useState(false);
  const [ref, refInView] = useInView({
    rootMargin: '-50px 0px',
  });

  useEffect(() => {
    const svgs: SvgItem[] = [];

    const isTouchEnabled = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    setIsTouch(isTouchEnabled);

    if (document.querySelector('svg') && document.querySelectorAll('#item') && !isTouchEnabled) {
      const point = document.querySelector('svg')!.createSVGPoint();
      const items = document.querySelectorAll('#item');

      items.forEach((item, index) => {
        const el = new SvgItem({
          el: item,
          svg: item.querySelector('svg')!,
          clip: document.querySelector('#clip-' + index + ' circle')!,
          point: point,
        });
        svgs.push(el);
      });
    }

    return () => {
      svgs.forEach(item => item.removeEventListener());
    };
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.items}>
          <h3 className={styles.header}>Open Source</h3>
          {PROJECTS.map(p => (
            <Project key={p.id} isTouch={isTouch} project={p} />
          ))}
        </div>
        <Skills />
      </div>

      <motion.footer
        ref={ref}
        initial={{ opacity: 0, y: 70 }}
        animate={refInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 70 }}
        transition={{ duration: 0.8 }}
      >
        <hr className={styles.hr} />
      </motion.footer>
    </>
  );
}

type ProjectProps = {
  isTouch: boolean;
  project: Project;
};

function Project({ isTouch, project }: ProjectProps) {
  return (
    <article className={styles.project}>
      <a className={styles.item} id="item" href={project.href} target="_blank">
        <svg preserveAspectRatio="xMidYMid slice" viewBox="0 0 300 200" className={styles.svg}>
          {!isTouch && (
            <>
              <defs>
                <clipPath id={`clip-${project.id}`}>
                  <circle cx={0} cy={0} fill="#000" r="150px" className={styles.circle} />
                </clipPath>
              </defs>
              {project.text}
            </>
          )}

          <g clipPath={`url(#clip-${project.id})`}>
            <image
              className={clsx({
                [styles.mobile_image]: isTouch,
                [styles.image]: !isTouch,
              })}
              height="100%"
              preserveAspectRatio="xMidYMid"
              width="100%"
              href={project.src}
            />
          </g>
        </svg>
      </a>

      <div className={styles.project_description}>{project.description}</div>
    </article>
  );
}

type Project = Readonly<{
  id: number;
  href: string;
  text: ReactNode;
  src: string;
  description: ReactNode;
}>;

const PROJECTS: readonly Project[] = [
  {
    id: 0,
    text: (
      <text className={styles.svg_text} dy=".3em" x="50%" y="50%">
        DRA.WS
      </text>
    ),
    href: 'https://github.com/h4x0rlol/dra.ws',
    src: '/img/draws.gif',
    description:
      'An open source service for deployment on a local network that allows users to interact in a real-time session with a virtual drawing canvas, also with real-time chat support to increase the productivity of work meetings, thereby reducing their time and increasing productivity labor.',
  },
  {
    id: 1,
    text: (
      <>
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
    ),
    href: 'https://github.com/h4x0rlol/react-raspberry-dashboard',
    src: '/img/react-raspberry-dashboard.jpg',
    description: (
      <p>
        Dashboard for monitoring indoor air parameters using Raspberry Pi, as well as displaying data from various
        public APIs.{' '}
        <Link className={styles.link} href="/blog/react-raspberry-dashboard">
          (How to make it)
        </Link>
      </p>
    ),
  },
  {
    id: 2,
    text: (
      <text className={styles.svg_text} dy=".3em" x="50%" y="50%">
        Happy Hearts
      </text>
    ),
    href: 'https://happy-hearts.herokuapp.com/',
    src: '/img/happyhearts.jpg',
    description: 'Website for buying English courses for young children, payment using Yandex Kassa.',
  },
  {
    id: 3,
    text: (
      <text className={styles.svg_text} dy=".3em" x="50%" y="50%">
        Gnility
      </text>
    ),
    href: 'https://github.com/h4x0rlol/gnility',
    src: '/img/gnility.png',
    description: 'A simple peer-to-peer chat based on WebRTC on random topics.',
  },
  {
    id: 4,
    text: (
      <text className={styles.svg_text} dy=".3em" x="50%" y="50%">
        WeatherMaps
      </text>
    ),
    href: 'https://github.com/h4x0rlol/weathermaps',
    src: '/img/darts2bot.png',
    description: 'Application for tracking weather conditions anywhere in the world using interactive maps.',
  },
  {
    id: 5,
    text: (
      <text className={styles.svg_text} dy=".3em" x="50%" y="50%">
        WeatherMaps
      </text>
    ),
    href: 'https://github.com/h4x0rlol/weathermaps',
    src: '/img/weather.jpg',
    description: 'Application for tracking weather conditions anywhere in the world using interactive maps.',
  },
];
