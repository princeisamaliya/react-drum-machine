import React, { Component } from "react";

const bankOne = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
];

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(e) {}

  playSound(e) {}
  render() {
    return (
      <div id={this.props.clipId} onClick={this.playSound} className="drum-pad">
        <audio
          className="clip"
          id={this.props.keyTrigger}
          src={this.props.clip}
        />
        {this.props.keyTrigger}
      </div>
    );
  }
}

class PadBank extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let padBank;
    padBank = this.props.currentPadBank.map((drumObj, i, padBankArr) => {
      return (
        <DrumPad
          key={padBankArr[i].id}
          clipId={padBankArr[i].id}
          clip={padBankArr[i].url}
          keyTrigger={padBankArr[i].keyTrigger}
          keyCode={padBankArr[i].keyCode}
        />
      );
    });
    return <div className="pad-bank">{padBank}</div>;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPadBank: bankOne
    };
  }

  render() {
    return (
      <div id="drum-machine" className="inner-container">
        <PadBank currentPadBank={this.state.currentPadBank} />
      </div>
    );
  }
}
export default App;
