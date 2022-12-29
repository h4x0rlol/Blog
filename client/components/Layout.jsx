import dynamic from "next/dynamic";
import styles from "/styles/Layout.module.scss";

const Navbar = dynamic(
  () => import("/components/Navbar").then((mod) => mod.Navbar),
  {
    ssr: false,
  }
);

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div>{children}</div>
      </main>
    </>
  );
};
