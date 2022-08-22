import React, { Component } from "react";
import Letter from "./Letter";

class Solution extends Component {
  render() {
    return (
      <div className="solution">
        <h4>
          {this.props.solution.word
            .split("")
            .map((keyLetter) =>
              this.props.letterStatus[keyLetter] ? (
                <Letter oneLetter={keyLetter} />
              ) : (
                " __ "
              )
            )}
        </h4>
        <h4>hint:{this.props.solution.hint}</h4>
      </div>
    );
  }
}

export default Solution;
