
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MoonDiet extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps }
  }
  render() {
    return (
      <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript /> 

          <script type="text/javascript" src="/static/animations/particles.js"></script>

          <script type="text/javascript" src="/static/calculations/MeeusJs/lib/Astro.js"></script>
          <script type="text/javascript" src="/static/calculations/MeeusJs/lib/Astro.Coord.js"></script>
          <script type="text/javascript" src="/static/calculations/MeeusJs/lib/Astro.DeltaT.js"></script>
          <script type="text/javascript" src="/static/calculations/MeeusJs/lib/Astro.Globe.js"></script>
          <script type="text/javascript" src="/static/calculations/MeeusJs/lib/Astro.Interp.js"></script>
          <script type="text/javascript" src="/static/calculations/MeeusJs/lib/Astro.JulianDay.js"></script>
          <script type="text/javascript" src="/static/calculations/MeeusJs/lib/Astro.Math.js"></script>
          <script type="text/javascript" src="/static/calculations/MeeusJs/lib/Astro.Moon.js"></script>
          <script type="text/javascript" src="/static/calculations/MeeusJs/lib/Astro.MoonIllum.js"></script>
          <script type="text/javascript" src="/static/calculations/MeeusJs/lib/Astro.Nutation.js"></script>
          <script type="text/javascript" src="/static/calculations/MeeusJs/lib/Astro.Parallax.js"></script>
          <script type="text/javascript" src="/static/calculations/MeeusJs/lib/Astro.Refraction.js"></script>
          <script type="text/javascript" src="/static/calculations/MeeusJs/lib/Astro.Rise.js"></script>
          <script type="text/javascript" src="/static/calculations/MeeusJs/lib/Astro.Sidereal.js"></script>
          <script type="text/javascript" src="/static/calculations/MeeusJs/lib/Astro.Solar.js"></script> 
          <script type="text/javascript" src="/static/calculations/MeeusJs/meuusjs.1.0.3.min.js"></script> 
      </body>
      </Html>
    )
  }
};
