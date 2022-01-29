import type { NextPage } from "next";
import Head from "next/head";
import Main from "../components/Main/Main";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Future awesome app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main />
    </div>
  );
};

export default Home;
