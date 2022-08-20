import React, { Component } from "react";

class Letter extends Component {
  selectLetter = () => {
    this.props.selectLetter(this.props.oneLetter);
  };
  render() {
    return (
      <span onClick={this.selectLetter} className={this.props.className}>
        {this.props.oneLetter}
      </span>
    );
  }
}

export default Letter;
