
import { Picture } from "react-responsive-picture";


const WaxingGibbous = () => {
  return (
      <Picture
        sources = {[
            {
                srcSet: "../../../static/images/phases/waxingGibbous/waxing_gibbous.png",
                media: "(min-width: 600px)",
            },
            {
                srcSet: "../../../static/images/phases/waxingGibbous/waxing_gibbous_max-width600.png",
                media: "(min-width: 420px)",
            },
            {
                srcSet: "../../../static/images/phases/waxingGibbous/waxing_gibbous_max-width420.png",
                media: "(min-width: 331px)",
            },
            {
                srcSet: "../../../static/images/phases/waxingGibbous/waxing_gibbous_max-width330.png",
                media: "(max-width: 330px)",
            },
            {
                srcSet: "../../../static/images/phases/waxingGibbous/waxing_gibbous.png",
                type: "image/webp"
            }
        ]}
        alt = {
            "waxing gibbous"
        }
    />
  )
};

export default WaxingGibbous;