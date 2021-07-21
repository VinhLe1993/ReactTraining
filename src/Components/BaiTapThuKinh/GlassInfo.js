import React, { Component } from "react";

export default class GlassInfo extends Component {
  render() {
    let { glasses } = this.props;
    return (
      <div className="cardInfo">
        <h3>{glasses.name}</h3>
        <p>{glasses.desc}</p>
        <p>{glasses.price}</p>
      </div>
    );
  }
}
