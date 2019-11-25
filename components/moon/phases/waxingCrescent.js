
import { Picture } from "react-responsive-picture";


const WaxingCrescent = () => {
  return (
      <Picture
        sources = {[
            {
                srcSet: "../../../static/images/phases/waxingCrescent/waxing_crescent.png",
                media: "(min-width: 600px)",
            },
            {
                srcSet: "../../../static/images/phases/waxingCrescent/waxing_crescent_max-width600.png",
                media: "(min-width: 420px)",
            },
            {
                srcSet: "../../../static/images/phases/waxingCrescent/waxing_crescent_max-width420.png",
                media: "(min-width: 331px)",
            },
            {
                srcSet: "../../../static/images/phases/waxingCrescent/waxing_crescent_max-width330.png",
                media: "(max-width: 330px)",
            },
            {
                srcSet: "../../../static/images/phases/waxingCrescent/waxing_crescent.png",
                type: "image/webp"
            }
        ]}
        alt = {
            "waxing crescent"
        }
    />
  )
};

export default WaxingCrescent;