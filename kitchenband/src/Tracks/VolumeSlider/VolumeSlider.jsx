import "./VolumeSlider.css";

export default function VolumeSlider({ volume, onChangeHandler }) {
  return (
    <input
      className="volume-slider"
      type="range"
      min="0"
      max="1"
      step="0.1"
      value={volume}
      onChange={(e) => onChangeHandler(e.target.value)}
    />
  );
}
