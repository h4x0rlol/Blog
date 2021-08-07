import dynamic from "next/dynamic";
import "../styles/global.scss";

const Navbar = dynamic(() => import("../components/Navbar"), {
  ssr: false,
});

function MyApp({ Component, pageProps }) {
  return (
    <Navbar>
      <Component {...pageProps} />
    </Navbar>
  );
}

export default MyApp;
