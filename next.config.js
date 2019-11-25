
const withImages = require("next-images");
const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
const compose = require("next-compose");


module.exports = compose([
  [withImages],
  [withCSS],
  [withSass],
  {
    webpack: (config) => {
      return config
    }
  }
]);