import React, { Component } from "react";

class Solution extends Component {
  dashes = [];
  getDashes() {
    for (let i = 0; i < 2; i++) this.dashes.push(<span>- </span>);
    return this.dashes;
  }

  render() {
    return (
      <div>
        <div> {this.getDashes()}</div>
        <em>your ideal mood when coding</em>
      </div>
    );
  }
}

export default Solution;
