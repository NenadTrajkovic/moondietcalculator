import FullMoon from "./phases/fullMoon";
import FirstQuarter from "./phases/firstQuarter";
import NewMoon from "./phases/newMoon";
import ThirdQuarter from "./phases/thirdQuarter";
import WaningCrescent from "./phases/waningCrescent";
import WaningGibbous from "./phases/waningGibbous";
import WaxingGibbous from "./phases/waxingGibbous";
import WaxingCrescent from "./phases/waxingCrescent";

const CurrentPhase = (props) => {
    if(props.moonPhase.phase.toString() === "FULL") {
      return <FullMoon />
    } else if(props.moonPhase.phase.toString() === "First quarter") {
      return <FirstQuarter />
    } else if(props.moonPhase.phase.toString() === "NEW") {
      return <NewMoon />
    } else if(props.moonPhase.phase.toString() === "Last quarter") {
      return <ThirdQuarter />
    } else if(props.moonPhase.phase.toString() === "Waning crescent") {
      return <WaningCrescent />
    } else if(props.moonPhase.phase.toString() === "Waning gibbous") {
      return <WaningGibbous />
    } else if(props.moonPhase.phase.toString() === "Waxing gibbous") {
      return <WaxingGibbous />
    } else if( props.moonPhase.phase.toString() === "Waxing crescent") {
      return <WaxingCrescent />
    } else {
      return "Check you're internet connection";
    }
    
}

const Phase = (props) => {
  return (
    <CurrentPhase moonPhase={props.moonPhase} />
  )
}

export default Phase;
