// IMPORTS
// Import of the wavesurfer library in the index.html file.

import { InstrumentTrack } from "./modules/instrumentTrack.js";
import {
  playPauseTracks,
  stopTracks,
  rewindTracks,
  forwardTracks,
  muteTrack,
  soloTrack,
  changeVolume,
} from "./modules/actionsOnTrack.js";

import { toggleManual, toggleSource } from "./modules/manualAndSource.js";

// INSTRUMENT TRACK INSTANCES

// We create a new instance for each instrument
// By default, the style is rock
function generateInstanceTrack(style, instrument) {
  const track = new InstrumentTrack(style, instrument);
  track.generateTrack();
  return track;
}

let drumsTrack = generateInstanceTrack("rock", "drums");
let bassTrack = generateInstanceTrack("rock", "bass");
let guitarTrack = generateInstanceTrack("rock", "guitar");
let keyboardTrack = generateInstanceTrack("rock", "keyboard");

// MODAL ON LOADING PAGE

function loadTracks() {
  var modal = document.getElementById("modal");
  var modalBg = document.getElementById("modal_bg");
  var myBar = document.getElementById("mybar");
  var width = 1;
  var id = setInterval(frame, 10);

  function frame() {
    if (width >= 100) {
      // We stop the setInterval function then we hide the modal
      // by toggling the hidden attribute.
      clearInterval(id);
      modal.toggleAttribute("hidden");
      modalBg.toggleAttribute("hidden");
    }
    // Increment width of the bar until the width = 100%
    width++;
    myBar.style.width = width + "%";
  }
}

// Call the function on loading
window.addEventListener("load", () => {
  loadTracks();
});

// HELP

const helpButton = document.getElementById("help_outline");
const linkToBlackHelpIcon = "./public/assets/image/help_outline_black.svg";
const linkToWhiteHelpIcon = "./public/assets/image/help_outline_white.svg";
helpButton.addEventListener("click", () => {
  if (helpButton.getAttribute("src") === linkToBlackHelpIcon) {
    toggleManual();
    helpButton.setAttribute("src", linkToWhiteHelpIcon);
  } else {
    toggleManual();
    helpButton.setAttribute("src", linkToBlackHelpIcon);
  }
});

// SOURCE

const sourceButton = document.getElementById("folder");
const linkToWhiteFolder = "./public/assets/image/source_white.svg";
const linkToBlackFolder = "./public/assets/image/source_black.svg";
sourceButton.addEventListener("click", () => {
  if (sourceButton.getAttribute("src") === linkToBlackFolder) {
    toggleSource();
    sourceButton.setAttribute("src", linkToWhiteFolder);
  } else {
    toggleSource();
    sourceButton.setAttribute("src", linkToBlackFolder);
  }
});

// TIMER + BARS

// We change the timing every 100ms by calling the getCurrentTime
// which return the playtime of the track

function convertTimeToBeat(time) {
  var barsAndBeats = [
    "1.1",
    "1.2",
    "1.3",
    "1.4",
    "2.1",
    "2.2",
    "2.3",
    "2.4",
    "3.1",
    "3.2",
    "3.3",
    "3.4",
    "4.1",
    "4.2",
    "4.3",
    "4.4",
  ];
  // At 100BPM, 1 beat = 0.6 second
  var convertedTime = (time.toFixed(1) / 0.6).toFixed(0);
  if (convertedTime == "16") {
    var beat = "4.4";
    return beat;
  }
  var beat = barsAndBeats[convertedTime];
  return beat;
}

const trackTime = document.querySelector(".time");
const bars = document.querySelector(".bar");
setInterval(() => {
  var currentTrackTime = drumsTrack.instrumentTrack.getCurrentTime();
  trackTime.innerText = currentTrackTime.toFixed(2);
  bars.innerText = convertTimeToBeat(currentTrackTime);
}, 100);

// PLAY PAUSE

const playButton = document.querySelector(".play");
playButton.addEventListener("click", () => {
  playPauseTracks(
    playButton,
    drumsTrack,
    bassTrack,
    guitarTrack,
    keyboardTrack
  );
});

// STOP

const stopButton = document.querySelector(".stop");
stopButton.addEventListener("click", () => {
  stopTracks(playButton, drumsTrack, bassTrack, guitarTrack, keyboardTrack);
});

// REWIND

const rewindButton = document.querySelector(".rewind");
rewindButton.addEventListener("click", () => {
  rewindTracks(playButton, drumsTrack, bassTrack, guitarTrack, keyboardTrack);
});

// FORWARD

const forwardButton = document.querySelector(".forward");
forwardButton.addEventListener("click", () => {
  forwardTracks(playButton, drumsTrack, bassTrack, guitarTrack, keyboardTrack);
});

// CHANGE STYLE

const styles = document.querySelectorAll(".style");
const title = document.querySelector(".info__title");
styles.forEach((style) => {
  style.addEventListener("click", () => {
    // We verify if the clicked style is not the current style.
    // If it is, we don't change anything.
    if (style.innerText !== title.innerText) {
      // Stop tracks to avoid a bug when we change style
      stopTracks(playButton, drumsTrack, bassTrack, guitarTrack, keyboardTrack);
      // Delete tracks
      drumsTrack.removeTrack();
      bassTrack.removeTrack();
      guitarTrack.removeTrack();
      keyboardTrack.removeTrack();
      // Change title
      title.innerText = style.innerText;
      var titleToLowerCase = title.innerText.toLowerCase();
      // Generate new instances with the value of the title  to get the new style
      drumsTrack = generateInstanceTrack(titleToLowerCase, "drums");
      bassTrack = generateInstanceTrack(titleToLowerCase, "bass");
      guitarTrack = generateInstanceTrack(titleToLowerCase, "guitar");
      keyboardTrack = generateInstanceTrack(titleToLowerCase, "keyboard");
      // Close styles window
      toggleSource();
      sourceButton.setAttribute("src", linkToBlackFolder);
    }
  });
});

// MUTE

const muteButtons = document.querySelectorAll("#mute");
muteButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // We mute each independenly by getting the classe of each button
    switch (button.className) {
      case "mute-drums":
        muteTrack(button, drumsTrack);
        break;
      case "mute-bass":
        muteTrack(button, bassTrack);
        break;
      case "mute-guitar":
        muteTrack(button, guitarTrack);
        break;
      case "mute-keyboard":
        muteTrack(button, keyboardTrack);
        break;
    }
  });
});

// SOLO

const soloButtons = document.querySelectorAll("#headset");
soloButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // We create an array with all the tracks in order to solo one track and mute all the others.
    var tracksArray = [drumsTrack, bassTrack, guitarTrack, keyboardTrack];
    switch (button.className) {
      case "headset-drums":
        soloTrack(button, tracksArray, drumsTrack);
        break;
      case "headset-bass":
        soloTrack(button, tracksArray, bassTrack);
        break;
      case "headset-guitar":
        soloTrack(button, tracksArray, guitarTrack);
        break;
      case "headset-keyboard":
        soloTrack(button, tracksArray, keyboardTrack);
        break;
    }
  });
});

// VOLUME SLIDER

// DRUMS

const drumsVolumeSlider = document.querySelector(".volume-slider-drums");
drumsVolumeSlider.addEventListener("change", () => {
  changeVolume(drumsVolumeSlider, drumsTrack);
});

// BASS

const bassVolumeSlider = document.querySelector(".volume-slider-bass");
bassVolumeSlider.addEventListener("change", () => {
  changeVolume(bassVolumeSlider, bassTrack);
});

// GUITAR

const guitarVolumeSlider = document.querySelector(".volume-slider-guitar");
guitarVolumeSlider.addEventListener("change", () => {
  changeVolume(guitarVolumeSlider, guitarTrack);
});

// KEYBOARD

const keyboardVolumeSlider = document.querySelector(".volume-slider-keyboard");
keyboardVolumeSlider.addEventListener("change", () => {
  changeVolume(keyboardVolumeSlider, keyboardTrack);
});

// Play/pause, stop, rewind, forward by using keyboard.

document.addEventListener("keydown", ({ keyCode }) => {
  // SPACEBAR
  if (keyCode == 32) {
    playPauseTracks(
      playButton,
      drumsTrack,
      bassTrack,
      guitarTrack,
      keyboardTrack
    );
  }
  // ESCAPE
  if (keyCode == 27) {
    stopTracks(playButton, drumsTrack, bassTrack, guitarTrack, keyboardTrack);
  }
  // RIGHT ARROW
  if (keyCode == 39) {
    forwardTracks(
      playButton,
      drumsTrack,
      bassTrack,
      guitarTrack,
      keyboardTrack
    );
  }
  // LEFT ARROW
  if (keyCode == 37) {
    rewindTracks(playButton, drumsTrack, bassTrack, guitarTrack, keyboardTrack);
  }
});
