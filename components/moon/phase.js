import FullMoon from "./phases/fullMoon";
import FirstQuarter from "./phases/firstQuarter";
import NewMoon from "./phases/newMoon";
import ThirdQuarter from "./phases/thirdQuarter";
import WaningCrescent from "./phases/waningCrescent";
import WaningGibbous from "./phases/waningGibbous";
import WaxingGibbous from "./phases/waxingGibbous";
import WaxingCrescent from "./phases/waxingCrescent";

const CurrentPhase = (props) => {
    if(props.phase.toString() === "Full Moon") {
      return <FullMoon />
    } else if(props.phase.toString() === "First Quater") {
      return <FirstQuarter />
    } else if(props.phase.toString() === "New Moon") {
      return <NewMoon />
    } else if(props.phase.toString() === "Third Quarter") {
      return <ThirdQuarter />
    } else if(props.phase.toString() === "Waning Crescent") {
      return <WaningCrescent />
    } else if(props.phase.toString() === "Waning Gibbous") {
      return <WaningGibbous />
    } else if(props.phase.toString() === "Waxing Gibbous") {
      return <WaxingGibbous />
    } else if( props.phase.toString() === "Waxing Crescent") {
      return <WaxingCrescent />
    } else {
      return "Check you're internet connection";
    }
}

const Phase = (props) => {
  return (
    <CurrentPhase phase={props.moonPhase} />
  )
}

export default Phase;
