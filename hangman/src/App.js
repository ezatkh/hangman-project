import "./App.css";
import React, { Component } from "react";
import Score from "./components/Score";
import Solution from "./components/Solution";
import Letters from "./components/Letters";
import EndGame from "./components/endGame";

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
    let selectedBefore = false;
    let NewObjectLetters = JSON.stringify(this.state.statusLetter);
    NewObjectLetters = JSON.parse(NewObjectLetters);

    if (NewObjectLetters[letter] == true) {
      selectedBefore = true;
    } else NewObjectLetters[letter] = true;

    let newScore;
    let flagExistLetter = this.state.solution.word
      .split("")
      .some((letterSelected) => {
        return letterSelected == letter;
      });
    if (flagExistLetter && !selectedBefore) {
      if (this.state.score <= 90) newScore = this.state.score + 10;
      else newScore = this.state.score;
    } else if (this.state.score >= 20 && !selectedBefore)
      newScore = this.state.score - 20;
    else newScore = this.state.score;
    this.setState({
      statusLetter: NewObjectLetters,
      score: newScore,
    });
  };

  render() {
    return (
      <div className=" imageBG">
        <div className="App">
          <div className="game">
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
          <EndGame
            score={this.state.score}
            word={this.state.solution.word}
            letterStatus={this.state.statusLetter}
          />
        </div>
      </div>
    );
  }
}

export default App;
