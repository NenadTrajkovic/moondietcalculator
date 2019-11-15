
/////////////////////////////////////////////////////////////
const date = new Date();

const MoonCalc = require("mooncalc");
// Moon currently in Zodiac, trajectory, age, (maybe phase!?)
const moonDatas = MoonCalc.datasForDay(date);
/////////////////////////////////////////////////////////////
	


class CurrentMoonData extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      city: props.city,
      lat: props.lat,
      lon: props.lon,
      tZone: props.timeZone,
      rise: props.moonRise,
      set: props.moonSet,
      phase: props.moonPhase,
      azandAl: null,
      dist: null,
      illum: null	
    }
  }
  componentDidMount() {
    this.moonDistance = setInterval(
      () => this.distance(),
      3000
    );
  }
  componentWillUnmount() {
    clearInterval(this.moonDistance);
  }
  distance() {
    const lat = this.state.lat,
          lon = this.state.lon;
    let date = new Date(); 
    let jdo = new A.JulianDay(date); 
    let coord = A.EclCoord.fromWgs84(lat, lon, 23);

    let suntp = A.Solar.topocentricPosition(jdo, coord, true);
    let moontp = A.Moon.topocentricPosition(jdo, coord, true);
    
    let i = A.MoonIllum.phaseAngleEq2(moontp.eq, suntp.eq);
    let k = A.MoonIllum.illuminated(i);
    this.setState({
      azandAl: moontp.hz.toString(),
      dist: moontp.delta,
      illum: k 
    });
  }
  render() {
    return (
      <div className="sky__current-data">

          <span>
            <em>Current Phase for</em>
            <p className="sky__current-data--location"><strong>{`${this.state.city}`}</strong>{` lat: ${this.state.lat} lon: ${this.state.lon} ${this.state.tZone}`}</p>
            <h1>{this.state.phase}</h1>
          </span>

          <div className="sky__current-data--rise-set">
            <div className="rise">
              <em>Moon Rise</em>
              <p>{this.state.rise}<em>h</em></p>
            </div>
            <div className="set">
              <em>Moon Set</em>
              <p>{this.state.set}<em>h</em></p>
            </div>
          </div>
        
          <span>
            <em>Age</em>
            <p>{`${moonDatas.age.toFixed(0)}`}<em>day(s)</em></p>
            <em>Illuminated</em>
            <p>{this.state.illum !== null ? parseFloat(Math.round(this.state.illum * 100) / 100).toFixed(2).substring(2, 5) : null}<em>%</em></p>
            <em>Distance</em>
              { this.state.azandAl === null ? <p>Calculating</p> : <>
              <p className="sky__current-data--meeus">{`${this.state.dist.toFixed(6)}`}<em>km</em></p> 
              <p className="sky__current-data--meeus">{`${this.state.azandAl}`}</p>
              </>
              }
          </span>
  
      </div>
    )
  }
};

export default CurrentMoonData;