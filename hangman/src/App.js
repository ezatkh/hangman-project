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
  selectLetter = (letter) => {
    let NewObjectLetters = JSON.stringify(this.state.statusLetter);
    NewObjectLetters = JSON.parse(NewObjectLetters);
    NewObjectLetters[letter] = true;

    let newScore;
    let flagExistLetter = this.state.solution.word
      .split("")
      .some((letterSelected) => {
        return letterSelected == letter;
      });
    if (flagExistLetter) {
      newScore = this.state.score + 10;
    } else newScore = this.state.score - 20;

    this.setState({
      statusLetter: NewObjectLetters,
      score: newScore,
    });

    this.changeLevelScore();
  };

  render() {
    return (
      <div className="App">
        <Score score={this.state.score} />
        <Solution
          solution={this.state.solution}
          letterStatus={this.state.statusLetter}
        />
        <Letters
          selectLetter={this.selectLetter}
          letterStatus={this.state.statusLetter}
        />
      </div>
    );
  }
}

export default App;
