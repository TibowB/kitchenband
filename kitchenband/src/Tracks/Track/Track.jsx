import { BsFillVolumeMuteFill, BsHeadphones } from "react-icons/bs";
import VolumeSlider from "../VolumeSlider/VolumeSlider";
import "./Track.css";
import WaveSurfer from "wavesurfer.js";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../AppContext";

export default function Track({ instrument }) {
  const { action, musicStyle } =
    useContext(AppContext);
  const [waveSurfer, setWaveSurfer] = useState(null);
  const [volume, setVolume] = useState(1);
  const size = 20;

  function handleSoloClick(event) {
    toggleClickedClass(event);
    waveSurfer.toggleMute();
  }

  function handleMuteClick(event) {
    toggleClickedClass(event);
    waveSurfer.container.classList.toggle("muted");
    waveSurfer.toggleMute();
  }

  function toggleClickedClass(event) {
    event.currentTarget.classList.toggle("clicked");
  }

  useEffect(() => {
    setWaveSurfer(
      WaveSurfer.create({
        container: `#${instrument}`,
        waveColor: "#008016",
        backEnd: "MediaElement",
        barHeight: 4,
        height: 160,
        responsive: true,
        normalize: true,
        skipLength: 1,
        regionsMinLength: 10,
      })
    );
  }, []);

  useEffect(() => {
    if (waveSurfer) {
      waveSurfer.load(
        `/samples/${musicStyle}/${musicStyle}_${instrument.toLowerCase()}.mp3`
      );
    }
  }, [waveSurfer]);

  useEffect(() => {
    if (!waveSurfer || !action) {
      return;
    }

    switch (action) {
      case "play":
      case "pause":
        waveSurfer.playPause();
        break;
      case "stop":
        waveSurfer.stop();
        break;
      case "forward":
        waveSurfer.skipForward();
        break;
      case "backward":
        waveSurfer.skipBackward();
        break;
      default: 
        return;
    }
  }, [action]);

  function handleVolumeChange(newVolume) {
    setVolume(newVolume);
    waveSurfer.setVolume(newVolume);
  }

  return (
    <>
      <div className="track">
        <div className="settings">
          <h4>{instrument}</h4>
          <div className="actions">
            <BsFillVolumeMuteFill
              size={size}
              id="mute"
              onClick={handleMuteClick}
            />
            <BsHeadphones
              size={size}
              id="headphones"
              onClick={handleSoloClick}
            />
          </div>
          <VolumeSlider volume={volume} onChangeHandler={handleVolumeChange} />
        </div>
        <div id={instrument} className="waveform"></div>
      </div>
    </>
  );
}
