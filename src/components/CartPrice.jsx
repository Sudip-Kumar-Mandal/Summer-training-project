import React, { Component } from 'react';

class CartPrice extends Component {
  state = {}

  totalPrice = () => {
    let amount = 0;
    for (let i = 0; i < this.props.products.length; i++) {
      amount += this.props.products[i].price * this.props.products[i].qty;
    }
    return amount;
  }

  totalLength = () => {
    let length = 0;
    for (let i = 0; i < this.props.products.length; i++) {
      length += this.props.products[i].qty;
    }
    return length;
  }

  deliveryCharge = () => {
    return this.totalLength() ? (this.totalPrice() > 1000 ? 0 : 40) : 0;
  }

  render() {
    return (
      <div id="CartPriceMain">
        <h5 className="text-muted">PRICE DETAILS</h5>
        <hr />
        <div className="row my-2">
          <div className="col">Price ({this.totalLength()} itmes)</div>
          <div className="col">₹{this.totalPrice()}</div>
        </div>
        <div className="row my-2">
          <div className="col">Discount</div>
          <div className="col text-success">- ₹{this.totalPrice() / 10}</div>
        </div>
        <div className="row my-2">
          <div className="col">Delivery Charges</div>
          <div className="col">₹{this.deliveryCharge()}</div>
        </div>
        <hr />
        <div className="row my-2">
          <div className="col fw-bold">Total Amount</div>
          <div className="col fw-bold">₹{(this.totalPrice()) - (this.totalPrice() / 10) + (this.deliveryCharge())}</div>
        </div>
        <hr />
        <button className="btn btn-primary text-white rounded w-100" onClick={this.props.onPay}>Pay</button>
      </div>
    );
  }
}

export default CartPrice;