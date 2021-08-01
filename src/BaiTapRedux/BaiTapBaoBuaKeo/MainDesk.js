import React, { Component } from 'react'

export default class MainDesk extends Component {
    render() {
        return (
            <div className="main_desk">
                <div className="dialog"></div>
                <div className="info">
                    <h3>Số bàn thắng</h3>
                    <h3>Số bàn chơi</h3>
                </div>
                <button className="btn btn-success">Play Game</button>
            </div>
        )
    }
}
