
import "./orbs.scss";


class Orbs extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount() { 
    const lat = this.props.lat,
          lon = this.props.lon;

    particlesJS.load("particles-js", "../../static/animations/particlesjs_small.json", function(){
      console.log("Particles.js da li radi?")
    });

    
  }
  render() {
    return (
      <div id="particles-js">
        
      </div>
    )
  }
};

export default Orbs;