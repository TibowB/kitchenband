import ControlBar from "./ControlBar/ControlBar";
import './App.css'

export default function App() {
    const controls = {
        iconSize: 20,
        musicStyle: 'Rock',
        time: 0.00.toFixed(2),
        bars: 0.0.toFixed(1),
        tempo: 100
    }
    return (
        <>
        <ControlBar />
        <div className="splitter" ></div>
        </>
    )
}