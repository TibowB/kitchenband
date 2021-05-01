// PLAY PAUSE

export function playPauseTracks(
  playButton,
  drumsTrack,
  bassTrack,
  guitarTrack,
  keyboardTrack
) {
  // Changing icon
  if (
    playButton.getAttribute("src") == "./public/assets/image/play_arrow.svg"
  ) {
    playButton.setAttribute("src", "./public/assets/image/pause.svg");
  } else {
    playButton.setAttribute("src", "./public/assets/image/play_arrow.svg");
  }
  // Wavesurfer method
  drumsTrack.instrumentTrack.playPause();
  bassTrack.instrumentTrack.playPause();
  guitarTrack.instrumentTrack.playPause();
  keyboardTrack.instrumentTrack.playPause();
}

// STOP

export function stopTracks(
  playButton,
  drumsTrack,
  bassTrack,
  guitarTrack,
  keyboardTrack
) {
  // If tracks have been paused before they're stopped, we make sure to change the icon to the Play icon.
  playButton.setAttribute("src", "./public/assets/image/play_arrow.svg");
  drumsTrack.instrumentTrack.stop();
  bassTrack.instrumentTrack.stop();
  keyboardTrack.instrumentTrack.stop();
  guitarTrack.instrumentTrack.stop();
}

// FORWARD

export function forwardTracks(
  playButton,
  drumsTrack,
  bassTrack,
  guitarTrack,
  keyboardTrack
) {
  // Same as stopTracks()
  playButton.setAttribute("src", "./public/assets/image/play_arrow.svg");
  drumsTrack.instrumentTrack.skipForward();
  bassTrack.instrumentTrack.skipForward();
  keyboardTrack.instrumentTrack.skipForward();
  guitarTrack.instrumentTrack.skipForward();
}

// REWIND

export function rewindTracks(
  playButton,
  drumsTrack,
  bassTrack,
  guitarTrack,
  keyboardTrack
) {
  // Same as stopTracks()
  playButton.setAttribute("src", "./public/assets/image/play_arrow.svg");
  drumsTrack.instrumentTrack.skipBackward();
  bassTrack.instrumentTrack.skipBackward();
  keyboardTrack.instrumentTrack.skipBackward();
  guitarTrack.instrumentTrack.skipBackward();
}

// MUTE

export function muteTrack(button, track) {
  // Change background
  if (!button.hasAttribute("style")) {
    button.setAttribute("style", "background-color: #119e74;");
  } else {
    button.removeAttribute("style");
  }
  // Mute track and toggle the class list in order the change the display of the track.
  track.instrumentTrack.toggleMute();
  track.instrumentTrack.container.classList.toggle("muted-track");
}

// SOLO

export function soloTrack(button, array, chosenTrack) {
  // Change background
  if (!button.hasAttribute("style")) {
    button.setAttribute("style", "background-color: #e2941f;");
  } else {
    button.removeAttribute("style");
  }

  var indexOfChosenTrack = array.indexOf(chosenTrack);
  // With this code, you can only solo one track at a time.
  array.forEach((track) => {
    // Index of each track
    var index = array.indexOf(track);
    // If track is not the one chosen, it gets muted.
    if (index !== indexOfChosenTrack) {
      track.instrumentTrack.toggleMute();
      track.instrumentTrack.container.classList.toggle("muted-track");
    }
  });
}

// VOLUME SLIDER

export function changeVolume(slider, track) {
  // Assigne slider value to the track volume.
  var sliderVolumeValue = slider.value;
  track.instrumentTrack.setVolume(sliderVolumeValue);
}
