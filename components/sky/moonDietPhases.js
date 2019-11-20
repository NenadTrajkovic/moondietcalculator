
const lune = require("lune");

// Previus Moon Diet
const currentDate = new Date();
const prevWeek = currentDate.getUTCDate() - 8;
const monthPrevNext = currentDate.getUTCMonth();
const year = currentDate.getUTCFullYear();

const today = currentDate.toISOString();

const prev = new Date(year, monthPrevNext, prevWeek);
const prev_week = prev.toISOString();


const prev_phase_new = lune.phase_range(
    new Date(prev_week),
    new Date(today),
    lune.PHASE_NEW
);
const prev_phase_first = lune.phase_range(
    new Date(prev_week),
    new Date(today),
    lune.PHASE_FIRST
);
const prev_phase_full = lune.phase_range(
    new Date(prev_week),
    new Date(today),
    lune.PHASE_FULL
);
const prev_phase_last = lune.phase_range(
    new Date(prev_week),
    new Date(today),
    lune.PHASE_LAST
);

// Current Moon Phase
const current_moon_data = lune.phase(); // age, illuminated, distance, phase (in number value)

// Next Moon Diet
const nextWeek = currentDate.getUTCDate() + 9;

const next = new Date(year, monthPrevNext, nextWeek);
const next_week = next.toISOString();

const next_phase_new = lune.phase_range(
    new Date(today),
    new Date(next_week),
    lune.PHASE_NEW
);
const next_phase_first = lune.phase_range(
    new Date(today),
    new Date(next_week),
    lune.PHASE_FIRST
);
const next_phase_full = lune.phase_range(
    new Date(today),
    new Date(next_week),
    lune.PHASE_FULL
);
const next_phase_last = lune.phase_range(
    new Date(today),
    new Date(next_week),
    lune.PHASE_LAST
);

///////////////////  COMPONENT  ////////////////////////////
////////////////////////////////////////////////////////////

class Diet extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      prevPhases: [],
      currPhase: [],
      nextPhases: []
    }
  }
  componentDidMount(){
    const prev_Phase = [];
    const next_Phase = [];
    const curr_phase = [];
    this.setState(() => {
      return {
          prevPhases: prev_Phase.concat([prev_phase_first, prev_phase_full, prev_phase_last, prev_phase_new]),
          currPhase: curr_phase.concat([current_moon_data]),
          nextPhases: next_Phase.concat([next_phase_first, next_phase_full, next_phase_last, next_phase_new])
      }
    });
}
  render(){
    return (
      <div className="diet">
        {this.state.prevPhases.length !== 0 ? <>
          <div className="diet__prev">
            <em>Prev diet</em>
            <p>{this.state.prevPhases.toString().substring(1, 26)}</p>
          </div>
          <div className="diet__next">
            <em>Next diet</em>
            <p>{this.state.nextPhases.toString().substring(3, 28)}</p>
          </div> </> : 
          <h1>Calculating</h1>}
      </div>
    )
  }
};

export default Diet;