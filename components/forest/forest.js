
import "./forest.scss";
import { Picture } from "react-responsive-picture";

class Forest extends React.Component {
  render() {
    return (
      <div className="forest">
        <Picture
          sources = {[
              {
                  srcSet: "../../static/images/forest/forest_orig.png",
                  media: "(min-width: 2201px)",
              },
              {
                  srcSet: "../../static/images/forest/forest_2200.png",
                  media: "(min-width: 1201px)",
              },
              {
                  srcSet: "../../static/images/forest/forest_1200.png",
                  media: "(min-width: 769px)",
              },
              {
                  srcSet: "../../static/images/forest/forest_768FullWidth.png",
                  media: "(min-width: 601px)",
              },
              {
                  srcSet: "../../static/images/forest/forest_600.png",
                  media: "(min-width: 421px)",
              },
              {
                  srcSet: "../../static/images/forest/forest_420.png",
                  media: "(min-width: 331px)",
              },
              {
                  srcSet: "../../static/images/forest/forest_330.png",
                  media: "(max-width: 330px)",
              },
              {
                  srcSet: "../../static/images/forest/forest_orig.png",
                  type: "image/webp"
              }
          ]}
          alt = {
              "forest"
          }
        />
      </div>
    )
  }
};

export default Forest;