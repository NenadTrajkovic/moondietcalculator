
import { Picture } from "react-responsive-picture";


const ThirdQuarter = () => {
  return (
      <Picture
        sources = {[
            {
                srcSet: "../../../static/images/phases/thirdQuarter/third_quarter.png",
                media: "(min-width: 600px)",
            },
            {
                srcSet: "../../../static/images/phases/thirdQuarter/third_quarter_max-width600.png",
                media: "(min-width: 420px)",
            },
            {
                srcSet: "../../../static/images/phases/thirdQuarter/third_quarter_max-width420.png",
                media: "(min-width: 331px)",
            },
            {
                srcSet: "../../../static/images/phases/thirdQuarter/third_quarter_max-width330.png",
                media: "(max-width: 330px)",
            },
            {
                srcSet: "../../../static/images/phases/thirdQuarter/third_quarter.png",
                type: "image/webp"
            }
        ]}
        alt = {
            "third quarter"
        }
    />
  )
};

export default ThirdQuarter;