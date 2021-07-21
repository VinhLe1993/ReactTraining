import React, { Component } from "react";

export default class SanPham extends Component {
  render() {
    let { sp } = this.props;
    return (
      <div className="card">
        <img src={sp.hinhAnh} alt="..." height={350} />
        <div className="card-body">
          <h3>{sp.tenSP}</h3>
          <p>{sp.giaBan}</p>
          <button
            className="btn btn-success"
            onClick={() => {
              this.props.detail(sp);
            }}
          >
            Xem chi tiết
          </button>
        </div>
      </div>
    );
  }
}
