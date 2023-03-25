import Track from "./Track/Track";
import "./Tracks.css";

export default function Tracks() {
  const instruments = ["Drums", "Bass", "Guitar", "Keyboard"];

  return (
    <>
      {instruments.map((instrument, index) => (
        <Track key={index} instrument={instrument} />
      ))}
    </>
  );
}
