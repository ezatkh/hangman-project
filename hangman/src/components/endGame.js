import React, { Component } from "react";

class EndGame extends Component {
  render() {
    let flagEndGame = 1;
    let wordsFlag = this.props.word
      .split("")
      .every((letter) => this.props.letterStatus[letter] === true);
    console.log(wordsFlag);

    if (wordsFlag) flagEndGame = 0;

    if (this.props.score <= 0) flagEndGame = 0;
    return flagEndGame === 1 ? (
      <div>Think hard ^_^</div>
    ) : wordsFlag ? (
      <div>congratulations you guess the word</div>
    ) : (
      <div>
        you didnt guess the world which is:
        <span className="wordSpan"> {this.props.word} </span>
      </div>
    );
  }
}
export default EndGame;
