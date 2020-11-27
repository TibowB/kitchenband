// DRAG AND DROP
// ev = event
// Make an element draggable by adding the attribute draggable="true"
// Call preventDefault() to prevent the browser default handling of the data (default is open as link on drop)
// Get the dragged data with the dataTransfer.getData() method. This method will return any data that was set to the same type in the setData() method
// The dragged data is the id of the dragged element ("drag1")
// Append the dragged element into the drop element

// Delete default behavior to allow drop
function allowDrop(ev) {
  ev.preventDefault();
}

// dataTransfer.setData set the data type and the value of the dregged data
function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  var track = document.getElementById(data);
  ev.target.appendChild(track);
  if (ev.target.id === "soundtracks") {
    track.classList.remove("dropped");
  } else {
    track.classList.add("dropped");
  }
}
