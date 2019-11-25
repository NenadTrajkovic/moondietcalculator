
import { Picture } from "react-responsive-picture";


const NewMoon = () => {
  return (
      <Picture
        sources = {[
            {
                srcSet: "../../../static/images/phases/newMoon/new_moon.png",
                media: "(min-width: 600px)",
            },
            {
                srcSet: "../../../static/images/phases/newMoon/new_moon_max-width600.png",
                media: "(min-width: 420px)",
            },
            {
                srcSet: "../../../static/images/phases/newMoon/new_moon_max-width420.png",
                media: "(min-width: 331px)",
            },
            {
                srcSet: "../../../static/images/phases/newMoon/new_moon_max-width330.png",
                media: "(max-width: 330px)",
            },
            {
                srcSet: "../../../static/images/phases/newMoon/new_moon.png",
                type: "image/webp"
            }
        ]}
        alt = {
            "new moon"
        }
    />
  )
};

export default NewMoon;