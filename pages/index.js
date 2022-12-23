import Head from "next/head";

import styles from "../styles/Home.module.css";
import Dashboard from "../Components/Landing_page/home";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div>
        <Dashboard />
      </div>
    </>
  );
}
