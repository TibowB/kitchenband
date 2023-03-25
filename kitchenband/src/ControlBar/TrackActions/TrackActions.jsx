import { useContext } from "react";
import {
  BsFillRewindFill,
  BsFillFastForwardFill,
  BsFillStopFill,
  BsFillPlayFill,
  BsRecordFill,
  BsFillPauseFill,
} from "react-icons/bs";
import { AppContext } from "../../AppContext";
import "./TrackActions.css";

export default function TrackActions() {
  const { action, setAction } = useContext(AppContext);
  const size = 25;

  return (
    <div className="track-actions">
      <BsFillRewindFill size={size} onClick={() => setAction("backward")}/>
      <BsFillFastForwardFill size={size} onClick={() => setAction("forward")}/>
      <BsFillStopFill size={size} onClick={() => setAction("stop")}/>
      {action === "play" ? (
        <BsFillPauseFill size={size} onClick={() => setAction("pause")} />
      ) : (
        <BsFillPlayFill size={size} onClick={() => setAction("play")} />
      )}
      <BsRecordFill size={size} style={{ color: "red" }} />
    </div>
  );
}
