

import { Picture } from "react-responsive-picture";


const FirstQuarter = () => {
  return (
      <Picture
        sources = {[
            {
                srcSet: "../../../static/images/phases/firstQuater/first_quarter.png",
                media: "(min-width: 600px)",
            },
            {
                srcSet: "../../../static/images/phases/firstQuater/first_quarter_max-width600.png",
                media: "(min-width: 420px)",
            },
            {
                srcSet: "../../../static/images/phases/firstQuater/first_quarter_max-width420.png",
                media: "(min-width: 331px)",
            },
            {
                srcSet: "../../../static/images/phases/firstQuater/first_quarter_max-width330.png",
                media: "(max-width: 330px)",
            },
            {
                srcSet: "../../../static/images/phases/firstQuater/first_quarter.png",
                type: "image/webp"
            }
        ]}
        alt = {
            "first quarter"
        }
    />
  )
};

export default FirstQuarter;