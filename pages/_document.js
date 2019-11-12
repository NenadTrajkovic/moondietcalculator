
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MoonDiet extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps }
  }
  render() {
    return (
      <Html lang="en">
      <Head>
        
      </Head>
      <body>
        <Main />
        <NextScript /> 
          <script type="text/javascript" src="/static/animations/particles.js"></script>
      </body>
      </Html>
    )
  }
};
