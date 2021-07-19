import React, { Component } from "react";

export default class GlassShop extends Component {
  arrGlasses = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./glassesImage/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./glassesImage/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "./glassesImage/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "./glassesImage/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "./glassesImage/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "./glassesImage/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "./glassesImage/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "./glassesImage/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];

  state = {
      imgSrc: "./img/glassesImage/v1.png"
  }

  handleChangeGlasses = (glasses) => {
      this.setState({
        imgSrc: `./img/glassesImage/${glasses}.png`
      })
  }

  render() {
    return (
      <div className="content" style={{backgroundImage: "url(./img/glassesImage/background.jpg)"}}>
        <div className="header">Glass Shop</div>
        <div className="body">
          <div className="body__item">
            <img src="./img/glassesImage/model.jpg" className=" face" />
            <img src={this.state.imgSrc} className="glasses"/>
          </div>
          <div className="body__item">
            <img src="./img/glassesImage/model.jpg" />
          </div>
        </div>
        <div className="choose_glasses">
          <div>
            <button>
              <img src="./img/glassesImage/v1.png" onClick={()=>{
                  this.handleChangeGlasses('v1')
              }}></img>
            </button>
          </div>
          <div>
            <button>
              <img src="./img/glassesImage/v2.png" onClick={()=>{
                  this.handleChangeGlasses('v2')
              }}></img>
            </button>
          </div>
          <div>
            <button>
              <img src="./img/glassesImage/v3.png"onClick={()=>{
                  this.handleChangeGlasses('v3')
              }}></img>
            </button>
          </div>
          <div>
            <button>
              <img src="./img/glassesImage/v4.png" onClick={()=>{
                  this.handleChangeGlasses('v4')
              }}></img>
            </button>
          </div>
          <div>
            <button>
              <img src="./img/glassesImage/v5.png" onClick={()=>{
                  this.handleChangeGlasses('v5')
              }}></img>
            </button>
          </div>
          <div>
            <button>
              <img src="./img/glassesImage/v6.png" onClick={()=>{
                  this.handleChangeGlasses('v6')
              }}></img>
            </button>
          </div>
          <div>
            <button>
              <img src="./img/glassesImage/v7.png" onClick={()=>{
                  this.handleChangeGlasses('v7')
              }}></img>
            </button>
          </div>
          <div>
            <button>
              <img src="./img/glassesImage/v8.png" onClick={()=>{
                  this.handleChangeGlasses('v8')
              }}></img>
            </button>
          </div>
          <div>
            <button>
              <img src="./img/glassesImage/v9.png" onClick={()=>{
                  this.handleChangeGlasses('v9')
              }}></img>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
