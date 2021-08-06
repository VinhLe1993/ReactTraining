import React, { Component } from "react";

export default class SeatMap extends Component {
  renderSeats = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe, index) => {

       
      let cssGheDaDat = "";
      let disable = false;
      if (ghe.daDat) {
        cssGheDaDat = "gheDuocChon";
        disable = true;
      }
      return (
        <button disabled={disable} key={index} className={`ghe ${cssGheDaDat}`}>
          {ghe.soGhe}
        </button>
      );
    });
  };

  renderSoHang = () => {
      return this.props.hangGhe.danhSachGhe.map((hang, index)=> {
          return <span className="rowNumber">
              {hang.soGhe}
          </span>
      })
  }

  renderHangGhe = () => {
      if (this.props.soHangGhe === 0) {
          return <div className="ml-4">
              {this.props.hangGhe.hang} {this.renderSoHang()}
          </div>
      } else {
          return <div>
              {this.props.hangGhe.hang} {this.renderSeats()}
          </div>
      }
  }

  render() {
    
    return (
      <div className="text-light text-left ml-5 mt-3" style={{ fontSize: 30}}>
          {this.renderHangGhe()}
      </div>
    );
  }
}
