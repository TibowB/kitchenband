import { useContext, useEffect } from "react";
import { AppContext } from "../../AppContext";
import "./Informations.css";

export default function Informations({ bars }) {
  const { isPlaying, timer, setTimer, musicStyle } = useContext(AppContext);

  useEffect(() => {
    if (!isPlaying) {
      setTimer(0.0);
      return;
    }
    const id = setInterval(() => {
      setTimer((t) => t + 0.6);
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, [isPlaying, timer]);

  return (
    <div className="info">
      <h2 className="info__style">{musicStyle}</h2>
      <div className="info__window">
        <p>TIME: {timer.toFixed(2)}</p>
        <p>BARS: {bars} </p>
        <p>TEMPO: 100</p>
      </div>
    </div>
  );
}
