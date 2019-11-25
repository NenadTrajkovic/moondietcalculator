
import { Picture } from "react-responsive-picture";


const WaningGibbous = () => {
  return (
      <Picture
        sources = {[
            {
                srcSet: "../../../static/images/phases/waningGibbous/waning_gibbous.png",
                media: "(min-width: 600px)",
            },
            {
                srcSet: "../../../static/images/phases/waningGibbous/waning_gibbous_max-width600.png",
                media: "(min-width: 420px)",
            },
            {
                srcSet: "../../../static/images/phases/waningGibbous/waning_gibbous_max-width420.png",
                media: "(min-width: 331px)",
            },
            {
                srcSet: "../../../static/images/phases/waningGibbous/waning_gibbous_max-width330.png",
                media: "(max-width: 330px)",
            },
            {
                srcSet: "../../../static/images/phases/waningGibbous/waning_gibbous.png",
                type: "image/webp"
            }
        ]}
        alt = {
            "waning gibbous"
        }
    />
  )
};

export default WaningGibbous;