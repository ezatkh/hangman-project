import React, { Component } from "react";
import Letter from "./Letter";
class Letters extends Component {
  render() {
    return (
      <div>
        <div>Available letters</div>
        {Object.keys(this.props.letterStatus).map((oneLetter) => (
          <Letter
            className={this.props.letterStatus[oneLetter] + "Letter"}
            oneLetter={oneLetter}
            selectLetter={this.props.selectLetter}
          />
        ))}
      </div>
    );
  }
}

export default Letters;
