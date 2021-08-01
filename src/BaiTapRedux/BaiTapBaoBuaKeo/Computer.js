import React, { Component } from "react";

export default class Computer extends Component {
  render() {
    return (
      <div className="computer">
        <div className="computer__selected"></div>
        <div className="speech-bubble"></div>
        <img
          src="./img/BaoBuaKeo/playerComputer.png"
          alt="..."
          className="character_img"
        />
      </div>
    );
  }
}
