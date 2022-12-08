import "@styles/globals.css";
import Loading from "@components/Loading";

function Application({ Component, pageProps }) {
  return (
    <>
      {/* <Loading /> */}
      <Component {...pageProps} />
    </>
  );
}

export default Application;
