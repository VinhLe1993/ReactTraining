import React, { Component } from 'react'

export default class Player extends Component {
    render() {
        return (
            <div className="player">
                <div className="player__img">
                    <div className="player__selected">
                        <img src="./img/BaoBuaKeo/bao.png" alt="..." />
                    </div>
                    <div className="speech-bubble"></div>
                    <img src="./img/BaoBuaKeo/player.png" alt="..."
                    className="character__img"/>
                </div>
                <div className="player__selector">
                    <button className="selector__item">
                        <img src="./img/BaoBuaKeo/bao.png" alt="..." />
                    </button>
                    <button className="selector__item">
                        <img src="./img/BaoBuaKeo/bua.png" alt="..." />
                    </button>
                    <button className="selector__item">
                        <img src="./img/BaoBuaKeo/keo.png" alt="..." />
                    </button>
                </div>
            </div>
        )
    }
}
