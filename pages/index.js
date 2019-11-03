
import Layout from "../components/layout/layout";
import Head from "next/head";
import "../scss/style.scss";

const App = () => {
  return (
    <>
      <Head>
        <title>Moon diet calendar</title>
      </Head>
      <Layout>
        <h1>Hello moon diet</h1>
      </Layout>
    </>
  )
};

export default App;