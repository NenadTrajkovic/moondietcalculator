
import Head from "next/head";

import "../scss/style.scss";

import Layout from "../components/layout/layout";
import Sky from "../components/sky/sky";
import Stars from "../components/stars/stars";
import Clouds from "../components/clouds/clouds";
import Forest from "../components/forest/forest";
import Moon from "../components/moon/moon";
import Orbs from "../components/orbs/orbs";

const App = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Moon diet calendar</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        <meta name="description" content="Moon phase and diet calculator. Get current moon position and diet plan for youre exact location" />
        <meta property="og:type" content="website" />
        <meta name="og:title" property="og:title" content="Moon phase and diet calculator" />
        <meta name="og:description" property="og:description" content="Moon phase and diet calculator. Get current moon position and diet plan for youre exact location" />
        <meta property="og:site_name" content="Moon phase and diet calculator" />
        <meta property="og:url" content="" />  
        <meta name="twitter:card" content="summary" /> 
        <meta name="twitter:title" content="Moon phase and diet calculator" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/images/favicon-16x16.png" />
        <link rel="manifest" href="/static/images/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="apple-touch-icon" sizes="180x180" href="/static/images/apple-touch-icon.png" />
        <meta property="og:image" content="/static/images/apple-touch-icon.png" />  
        <meta name="twitter:image" content="/static/images/apple-touch-icon.png" /> 
      </Head>
      <Layout>
        <Stars />
        <Sky />
        <Moon />
        <Clouds />
        <Forest />
        <Orbs />
      </Layout>
    </>
  )
};

export default App;