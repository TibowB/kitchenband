export class InstrumentTrack {
  constructor(style, instrument) {
    this.style = style;
    this.instrument = instrument;
    this.isMute = false;
    this.isSolo = false;
  }

  generateTrack() {
    var body = document.querySelector("body");
    // Instrument container
    var windowTrack = document.querySelector(`.${this.instrument}__track`);
    // Generate the track container
    const instrumentDiv = document.createElement("div");
    instrumentDiv.id = `${this.style}_${this.instrument}`;
    // Add the container to the body
    body.append(instrumentDiv);
    // Generate track
    this.instrumentTrack = WaveSurfer.create({
      container: `#${this.style}_${this.instrument}`,
      waveColor: "#008016",
      backEnd: "MediaElement",
      barHeight: 4,
      height: 160,
      responsive: true,
      regionsMinLength: 10,
      loopSelection: 0.05,
    });
    // Load sound
    this.instrumentTrack.load(
      `../public/assets/sound/${this.style}/${this.style}_${this.instrument}.mp3`
    );
    // Add the track container to the window
    windowTrack.append(instrumentDiv);
  }

  // This method remove each instrument track. It is used when we change
  // from one style to another.
  removeTrack() {
    var waveTrack = document.getElementById(`${this.style}_${this.instrument}`);
    waveTrack.remove();
  }
}
