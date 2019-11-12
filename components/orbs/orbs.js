
import "./orbs.scss";


class Orbs extends React.Component {
  componentDidMount() {
    {
      /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
      particlesJS.load("particles-js", "../../static/animations/particlesjs_small.json", function(){});
    }
  }
  render() {
    return (
      <div id="particles-js">
    
      </div>
    )
  }
};

export default Orbs;