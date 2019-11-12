
import "./sky.scss";
import { Picture } from "react-responsive-picture";

class Sky extends React.Component {
  render() {
    return (
      <div className="sky">
          <Picture
            className={
              "sky__image"
            }
            alt = {
              "sky"
            }
            sources = {[
              {
                  srcSet: "../../static/images/sky/sky_2500.png",
                  media: "(min-width: 1501px)",
              },
              {
                  srcSet: "../../static/images/sky/sky_1500.png",
                  media: "(min-width: 1024px)",
              },
              {
                  srcSet: "../../static/images/sky/sky_1000.png",
                  media: "(min-width: 769px)",
              },
              {
                  srcSet: "../../static/images/sky/sky_768.png",
                  media: "(min-width: 601px)",
              },
              {
                  srcSet: "../../static/images/sky/sky_600.png",
                  media: "(min-width: 421px)",
              },
              {
                  srcSet: "../../static/images/sky/sky_420.png",
                  media: "(min-width: 331px)",
              },
              {
                  srcSet: "../../static/images/sky/sky_330.png",
                  media: "(max-width: 330px)",
              },
              {
                  srcSet: "../../static/images/sky/sky_2500.png",
                  type: "image/webp",
                  alt: "sky"
              }
          ]}
        />
      </div>
    )
  }
};

export default Sky;