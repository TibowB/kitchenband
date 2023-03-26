import "./Modal.css";

export default function Modal({ children, top, left }) {
  return (
    <div>
      <div className="modal" style={{ top: top, left: left }}>
        {children}
      </div>
    </div>
  );
}
