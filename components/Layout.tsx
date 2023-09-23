'use client';

import dynamic from 'next/dynamic';
import { ReactNode } from 'react';
import styles from '../styles/Layout.module.scss';
// import { Navbar } from './Navbar';

const Navbar = dynamic(() => import('@/components/Navbar').then(mod => mod.Navbar), {
  ssr: false,
});

export function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className={styles.main}>{children}</main>
    </>
  );
}
