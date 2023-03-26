import ControlBar from "./ControlBar/ControlBar";
import "./App.css";
import Tracks from "./Tracks/Tracks";
import { AppContext } from "./AppContext";
import { useState } from "react";

export default function App() {
  const [action, setAction] = useState('');
  const [musicStyle, setMusicStyle] = useState("ROCK")
  const [timer, setTimer] = useState(0.0)

  const context = {
    action,
    setAction,
    musicStyle,
    setMusicStyle,
    timer,
    setTimer
  }

  return (
    <>
      <AppContext.Provider value={context}>
        <ControlBar />
        <div className="splitter"></div>
        <Tracks />
      </AppContext.Provider>
    </>
  );
}
