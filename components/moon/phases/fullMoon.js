
import { Picture } from "react-responsive-picture";


const FullMoon = () => {
  return (
      <Picture
        sources = {[
            {
                srcSet: "../../../static/images/phases/fullMoon/full_moon.png",
                media: "(min-width: 600px)",
            },
            {
                srcSet: "../../../static/images/phases/fullMoon/full_moon_max-width600.png",
                media: "(min-width: 420px)",
            },
            {
                srcSet: "../../../static/images/phases/fullMoon/full_moon_max-width420.png",
                media: "(min-width: 331px)",
            },
            {
                srcSet: "../../../static/images/phases/fullMoon/full_moon_max-width330.png",
                media: "(max-width: 330px)",
            },
            {
                srcSet: "../../../static/images/phases/fullMoon/full_moon.png",
                type: "image/webp"
            }
        ]}
        alt = {
            "full moon"
        }
    />
  )
};

export default FullMoon;