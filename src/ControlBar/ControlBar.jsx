import TrackActions from "./TrackActions/TrackActions";
import SideActions from "./SideActions/SideActions";
import Informations from "./Informations/Informations";
import "./ControlBar.css";

export default function ControlBar() {
  
  return (
    <section className="control-bar">
      <SideActions />
      <TrackActions />
      <Informations
        bars={(0.0).toFixed(1)}
      />
    </section>
  );
}
