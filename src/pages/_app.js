import "../styles/globals.scss";

import { useRouter } from "next/router";

import { Header } from "../components/header";
import { Footer } from "../components/footer";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const showHeaderAndFooter =
    router.pathname === "/login" || router.pathname === "/register";

  return (
    <>
      {!showHeaderAndFooter && <Header />}
      <Component {...pageProps} />
      {!showHeaderAndFooter && <Footer />}
    </>
  );
}

export default MyApp;
