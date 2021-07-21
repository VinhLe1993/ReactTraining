import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  renderProduct = () => {
    let { productData, viewDetail } = this.props;
    return productData.map((product, index) => {
      return (
        <div className="col-3" key={index}>
          <ProductItem item={product} viewDetail={viewDetail} />
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="row">{this.renderProduct()}</div>
        </div>
      </div>
    );
  }
}
