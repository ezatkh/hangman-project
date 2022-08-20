import "./App.css";
import React, { Component } from "react";
import Score from "./components/Score";
import Solution from "./components/Solution";
import Letters from "./components/Letters";

class App extends Component {
  constructor() {
    super();
    this.state = {
      statusLetter: this.generateLetterStatuses(),
      solution: { word: "SHARRAWI", hint: "football player" },
      score: 100,
    };
  }
  generateLetterStatuses() {
    let letterStatus = {};
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false;
    }
    return letterStatus;
  }
  render() {
    return (
      <div className="App">
        <Score score={this.state.score} />
        <Solution
          solution={this.state.solution}
          letterStatus={this.state.statusLetter}
        />
        <Letters letterStatus={this.state.statusLetter} />
      </div>
    );
  }
}

export default App;
