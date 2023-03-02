import Head from "next/head";
import Layout from "../components/layout";

import { GlobalStyles } from "../styles/GlobalStyles";
import "tailwindcss/tailwind.css";

const _App = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyles />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Post Ideas - Sharing Board</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default _App;
