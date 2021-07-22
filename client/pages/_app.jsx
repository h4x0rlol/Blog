import Navbar from "../components/Navbar";
import "../styles/global.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Navbar>
      <Component {...pageProps} />
    </Navbar>
  );
}

export default MyApp;
