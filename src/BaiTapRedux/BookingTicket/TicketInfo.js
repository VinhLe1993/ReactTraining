import React, { Component } from "react";

export default class TicketInfo extends Component {
  render() {
    return (
      <div>
        <div className="mt-5 ticketInfo">
          <button className="gheDuocChon"></button>
          <span className="text-light">Ghế đã đặt</span>
          <br />
          <button className="gheDangChon"></button>
          <span className="text-light">Ghế đang đặt</span>
          <br />
          <button className="ghe"></button>
          <span className="text-light">Ghế chưa đặt</span>
        </div>
        <div className="mt-5">
          <table className="table" border="2">
            <thead>
              <tr className="text-light" style={{fontSize:'35px'}}>
               <th>Số ghế</th>
               <th>Giá</th>
               <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                  <th>Số ghế</th>
                  <th>Giá</th>
                  <th></th>
              </tr>
              <tr>
                  <th>Số ghế</th>
                  <th>Giá</th>
                  <th></th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
