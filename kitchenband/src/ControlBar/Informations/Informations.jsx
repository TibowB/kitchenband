import './Informations.css'

export default function Informations({ musicStyle, time, bars, tempo}) {
  return (
    <div className="info">
      <h2 className="info__style">{musicStyle}</h2>
      <div className="info__window">
        <p>TIME: {time}</p>
        <p>BARS: {bars} </p>
        <p>TEMPO: {tempo}</p>
      </div>
    </div>
  );
}
