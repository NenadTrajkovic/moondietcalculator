
import { Picture } from "react-responsive-picture";


const WaningCrescent = () => {
  return (
      <Picture
        sources = {[
            {
                srcSet: "../../../static/images/phases/waningCrescent/waning_crescent.png",
                media: "(min-width: 600px)",
            },
            {
                srcSet: "../../../static/images/phases/waningCrescent/waning_crescent_max-width600.png",
                media: "(min-width: 420px)",
            },
            {
                srcSet: "../../../static/images/phases/waningCrescent/waning_crescent_max-width420.png",
                media: "(min-width: 331px)",
            },
            {
                srcSet: "../../../static/images/phases/waningCrescent/waning_crescent_max-width330.png",
                media: "(max-width: 330px)",
            },
            {
                srcSet: "../../../static/images/phases/waningCrescent/waning_crescent.png",
                type: "image/webp"
            }
        ]}
        alt = {
            "waning crescent"
        }
    />
  )
};

export default WaningCrescent;