import React, { Component } from "react";
class Score extends Component {
  changeLevelScore = () => {
    let className = "";
    if (this.props.score >= 80) {
      className = "greenScore";
    } else if (this.props.score >= 50) {
      className = "yellowScore";
    } else {
      className = "redScore";
    }
    return className;
  };
  render() {
    return (
      <div>
        <div className={this.changeLevelScore()}>Score: {this.props.score}</div>
      </div>
    );
  }
}

export default Score;
