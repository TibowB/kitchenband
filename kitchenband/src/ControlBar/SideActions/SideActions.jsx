import { BsQuestionCircle, BsFillFolderFill } from "react-icons/bs";
import "./SideActions.css";
import { createPortal } from "react-dom";
import { useContext, useState } from "react";
import Modal from "../../Modal/Modal";
import { AppContext } from "../../AppContext";

export default function SideActions() {
  const { setMusicStyle, setAction } = useContext(AppContext);
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);
  const [showKeyboardShortcuts, setShowKeyboardShortcuts] = useState(false);
  const [showMusicStyleSelector, setShowMusicStyleSelector] = useState(false);

  const musicStyles = ["ROCK", "BLUES", "JAZZ", "FUNK"];
  const size = 20;

  function setModalPosition(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    setLeft(rect["x"]);
    setTop(rect["bottom"]);
  }

  function handleShowKeyboardShortcuts(event) {
    setModalPosition(event);
    setShowKeyboardShortcuts(!showKeyboardShortcuts);
  }

  function handleShowMusicStyleSelector(event) {
    setModalPosition(event);
    setShowMusicStyleSelector(!showMusicStyleSelector);
  }

  function handleStyleSelection(style) {
    setAction("stop");
    setShowMusicStyleSelector(!showMusicStyleSelector);
    setMusicStyle(style);
  }

  return (
    <div className="side-actions">
      <BsQuestionCircle
        size={size}
        onClick={(e) => handleShowKeyboardShortcuts(e)}
      />
      <BsFillFolderFill
        size={size}
        onClick={(e) => handleShowMusicStyleSelector(e)}
      />
      {showKeyboardShortcuts &&
        createPortal(
          <Modal top={top} left={left}>
            <div className="shortcuts">
              <h3>Shortcuts:</h3>
              <p>Spacebar: Play/Pause</p>
              <p>Escape: Stop</p>
              <p>Left Arrow: Rewind</p>
              <p>Right Arrow: Forward</p>
            </div>
          </Modal>,
          document.querySelector("#root")
        )}
      {showMusicStyleSelector &&
        createPortal(
          <Modal top={top} left={left}>
            <div className="styles">
              {musicStyles.map((style, index) => (
                <h2 key={index} onClick={() => handleStyleSelection(style)}>
                  {style}
                </h2>
              ))}
            </div>
          </Modal>,
          document.querySelector("#root")
        )}
    </div>
  );
}
