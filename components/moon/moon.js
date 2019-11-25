
import "./moon.scss";
import Phase from "./phase";

const Moon = (props) => {
  return (
    <div className="moon">
      <Phase moonPhase={props.moonPhase} />
    </div>
  )
};

export default Moon;