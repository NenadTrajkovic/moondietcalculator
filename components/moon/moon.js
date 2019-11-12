
import "./moon.scss";
import Phase from "./phase";

class Moon extends React.Component {
  render() {
    return (
      <div className="moon">
        <Phase />
      </div>
    )
  }
};

export default Moon;