import React, { Component } from "react";
import Cart from "./Cart";
import ProductListCart from "./ProductListCart";
// import dataPhone from "../../assets/data/dataPhone.json"

export default class ShoppingCart extends Component {
  dataPhone = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
    },
    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },
  ];

  state = {
    cart: [],
  };

  //state nằm ở đâu thì phương thức setState sẽ dc khai báo tại đó (component đó)

  addToCart = (phoneClick) => {
    // console.log(phoneClick)
    let shoppingCart = { ...phoneClick, soLuong: 1 };

    let cartUpdate = [...this.state.cart];
    let addCart = cartUpdate.find((sp) => sp.maSP === shoppingCart.maSP);
    if (addCart) {
      //tìm thấy
      addCart.soLuong += 1; //tăng số lượng
    } else {
      //không tìm thấy
      cartUpdate.push(shoppingCart); //Thêm vào giỏ
    }

    this.setState({ cart: cartUpdate });
  };

  removeProduct = (productIDClick) => {
    let { cart } = this.state;
    // let index = cart.findIndex(sp=>sp.maSP === productIDClick);
    // if (index !== -1) //tìm thấy
    // {
    //     cart.splice(index,1); //Tiến hành xóa phần tử tại vitri tìm thấy
    // }
    cart = cart.filter((sp) => sp.maSP !== productIDClick);

    this.setState({
      cart: cart,
    });
  };

  plusAndMinus = (productIDClick, soLuong) => {
    let { cart } = this.state;
    let productPlusMinus = cart.find((sp) => sp.maSP === productIDClick);
    //tìm ra sản phẩm tăng giảm
    if (productPlusMinus) {
        //2 + -1 =1
      productPlusMinus.soLuong += soLuong;
      if (productPlusMinus.soLuong < 1) {
        alert("Số lượng tối thiểu là 1!");
        //2 - -1 =1
        productPlusMinus.soLuong -= soLuong;
        // this.removeProduct(productIDClick); 
        // return;
      }
    }
    this.setState({
      cart: cart,
    });
  };

  countProduct = () => {
      let {cart} = this.state;
      let totalCount = cart.reduce((soLuong, sanPham, index) => {
          return soLuong += sanPham.soLuong;
      },0);
      return totalCount.toLocaleString();
  }

  totalPrice = () => {
      let {cart} = this.state;
      let total = cart.reduce((thanhTien, sanPham, index) => {
          return thanhTien += sanPham.soLuong * sanPham.giaBan;
      },0);
      return total.toLocaleString();
  }

  render() {
    return (
      <div className="container">
        <h3 className="text-center">Bài tập giỏ hàng</h3>
        <div className="text-right">
          <span
            style={{ cursor: "pointer" }}
            className="text text-danger font-weight-bold"
            data-toggle="modal"
            data-target="#modelId"
          >
            Giỏ hàng ({this.countProduct()} - {this.totalPrice()})
          </span>
        </div>
        <Cart
          cart={this.state.cart}
          removeProduct={this.removeProduct}
          plusAndMinus={this.plusAndMinus}
        />
        <ProductListCart
          dataPhone={this.dataPhone}
          addToCart={this.addToCart}
        />
      </div>
    );
  }
}
