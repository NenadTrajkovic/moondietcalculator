
import Head from "next/head";

import fetch from "isomorphic-unfetch";

import "../scss/style.scss";

import Layout from "../components/layout/layout";
import Sky from "../components/sky/sky";
import Stars from "../components/stars/stars";
import Clouds from "../components/clouds/clouds";
import Forest from "../components/forest/forest";
import Moon from "../components/moon/moon";
import Orbs from "../components/orbs/orbs";

const App = (props) => {
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
        
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="apple-touch-icon" sizes="180x180" href="/static/images/apple-touch-icon.png" />
        <meta property="og:image" content="/static/images/apple-touch-icon.png" />  
        <meta name="twitter:image" content="/static/images/apple-touch-icon.png" /> 
      </Head>
      <Layout>
        <Stars />
        <Sky  city={props.userData.city}
              lat={props.userData.latitude}
              lon={props.userData.longitude}
              timeZone={props.userData.utc_offset}
              moonRise={props.moonAndSunApi.moonRise}
              moonSet={props.moonAndSunApi.moonSet}
              moonPhase={props.moonAndSunApi.moonPhase}
        />
        <Moon moonPhase={props.moonAndSunApi.moonPhase}
        />
        <Clouds />
        <Forest />
        <Orbs />
      </Layout>
    </>
  )
};

  ///////// DATE AND TIMEZONE FORMATING FOR CURRENT USER POSITION ///////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////

  // Formated date y,m,d
  const formatDate = (date) => {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('');
  }

  const formatedDate = formatDate(new Date()); // Date

  // Formated TimeZone from +0100 to +01
  const timeZone = new Date().toString();
  const timeZoneLeft = timeZone.substring(28);
  const formatedTimeZone = timeZoneLeft.substring(0, 3); // TimeZone

/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////


App.getInitialProps = async function() {

// USER LOCATION FETCHING
  let LocationRes = await fetch("https://ipapi.co/json");
  let LocationData = await LocationRes.json();

  let lat = LocationData.latitude.toFixed(2);
  let lon = LocationData.longitude.toFixed(2);

// MOON AND SUN DATA FOR CURRENT USER POSITION
//                                                                      Lat   Lon   Date     Time zone  
// MoonAPI                            "https://api.solunar.org/solunar/44.81,20.46,20190228,+1"; (+01)
  let soLunarApi = await fetch(`https://api.solunar.org/solunar/${lat},${lon},${formatedDate},${formatedTimeZone}`);
  let soLunarApiData = await soLunarApi.json();

// WEATHER FOR CURRENT LOCATION
//                                                 API secret key                Lat     Lon
// WeatherAPI  "https://api.darksky.net/forecast/4bed243081b1cce4f0d65b6ca0cdb834/44.8186,20.4681";
  let weatherApi = await fetch(`https://api.darksky.net/forecast/4bed243081b1cce4f0d65b6ca0cdb834/${lat},${lon}`);
  let weatherApiData = await weatherApi.json(); 
  
  console.log(`Server-side test: ${soLunarApiData.moonRise}`);

  return {
  // User Location data. ENDPOINTS: city, region, country_name, continent_code, latitude, longitude, utc_offset, org, asn, ip
    userData: LocationData,
  // Moon and Sun current data for user location. ENDPOINTS: moonRise, moonSet, moonTransit, moonPhase, sunRise, sunSet, sunTransit
    moonAndSunApi: soLunarApiData,
  // Weather for current user position. ENDPOINTS: latitude, longitude, timezone, currently.summary, currently.icon, currently.humidity, currently.temperature (F),
  // currently.pressure, currently.windSpeed, currently.uvIndex, currently.visibility, currently.ozone, hourly.summary, hourly.icon 
    weatherData: weatherApiData
  
  };

};

export default App;