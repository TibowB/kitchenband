import {
  BsFillRewindFill,
  BsFillFastForwardFill,
  BsFillStopFill,
  BsFillPlayFill,
  BsRecordFill,
} from "react-icons/bs";
import './TrackActions.css'

export default function TrackActions() {
  const size = 25

  return (
    <div className="track-actions">
      <BsFillRewindFill size={size} />
      <BsFillFastForwardFill size={size} />
      <BsFillStopFill size={size} />
      <BsFillPlayFill size={size} />
      <BsRecordFill size={size} style={{ color: "red" }} />
    </div>
  );
}
