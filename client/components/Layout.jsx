import React from "react";
import dynamic from "next/dynamic";
import styles from "../styles/Layout.module.scss";

const Navbar = dynamic(() => import("../components/Navbar"), {
  ssr: false,
});

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div>{children}</div>
      </main>
    </>
  );
};

export default Layout;
