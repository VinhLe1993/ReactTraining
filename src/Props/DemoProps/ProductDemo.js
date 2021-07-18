import React, { Component } from 'react'

export default class ProductDemo extends Component {
    render() {
        /**
         *      Sự khác biệt giữa state và props ?
         *      + Giống nhau: cả hai đều là thuộc tính có sẵn của 
         *          react class component để bindding dữ liệu hiển 
         *          thị lên giao diện
         *      + Khác nhau: 
         *       this.state dùng để chứa các giá trị thay đổi trên giao diện
         *      và có thể gán lại được thông qua phương thức setState
         *        this.props dùng để nhận giá trị từ component cha (nơi sử dụng thẻ đó)
         *        
         * 
         */

        let {product} = this.props;
        return (
            <div className="card">
                <img src={product.img} alt="..." />
                <div className="card-body bg-dark text-white">
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                </div>
            </div>
        )
    }
}
