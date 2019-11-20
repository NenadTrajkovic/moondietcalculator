import Diet from "./moonDietPhases";


class CurrentMoonData extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      city: props.city,
      lat: props.lat,
      lon: props.lon,
      tZone: props.timeZone,
      phase: props.moonPhase,
      moonApi: props.moonApi
    }
  }
  // distance() {
  //   const lat = this.state.lat,
  //         lon = this.state.lon;
  //   let date = new Date(); 
  //   let jdo = new A.JulianDay(date); 
  //   let coord = A.EclCoord.fromWgs84(lat, lon, 23);

  //   let suntp = A.Solar.topocentricPosition(jdo, coord, true);
  //   let moontp = A.Moon.topocentricPosition(jdo, coord, true);
    
  //   let i = A.MoonIllum.phaseAngleEq2(moontp.eq, suntp.eq);
  //   let k = A.MoonIllum.illuminated(i);
  //   this.setState({
  //     azandAl: moontp.hz.toString(),
  //     dist: moontp.delta,
  //     illum: k 
  //   });
  // }
  render() {
    const phase = this.state.phase.phase.toString();
    return (
      <div className="sky__current-data">

          <span>
            <em>Current Phase for</em>
            <p className="location"><strong>{`${this.state.city}`}</strong>{` lat: ${this.state.lat} lon: ${this.state.lon} ${this.state.tZone}`}</p>
            <h1>{phase}</h1>
          </span>

          <div className="sky__current-data--rise-set">
            <div className="rise">
              <em>Moon Rise</em>
              <p>{this.state.moonApi.moonrise}<em>h</em></p>
            </div>
            <div className="set">
              <em>Moon Set</em>
              <p>{this.state.moonApi.moonset}<em>h</em></p>
            </div>
            <div className="age">
              <em>Age</em>
              <p>{this.state.phase.age.toFixed(0)}<em>day(s)</em></p>
            </div>
          </div>

          <div className="sky__current-data--diet">
            <Diet />
          </div>

        
          {/* <span>
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
          </span> */}
  
      </div>
    )
  }
};

export default CurrentMoonData;