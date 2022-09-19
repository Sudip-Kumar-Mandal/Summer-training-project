import React, { Component } from 'react';

class Bill extends Component {
  state = {}

  totalPrice = () => {
    let amount = 0;
    for (let i = 0; i < this.props.products.length; i++) {
      amount += this.props.products[i].price * this.props.products[i].qty;
    }
    return amount - amount / 10 + (amount > 0 ? (amount > 1000 ? 0 : 40) : 0);
  }

  getDateTime = () => {
    var currentdate = new Date();
    return "" + currentdate.getDate() + "-"
      + (currentdate.getMonth() + 1) + "-"
      + currentdate.getFullYear() + "  "
      + currentdate.getHours() + ":"
      + currentdate.getMinutes() + ":"
      + currentdate.getSeconds();
  }



  render() {
    return (
      <div className='border border-1 border-primary m-2 p-2 rounded'>
        <p className="display-4 w-100 text-center fw-bold">Bill</p>
        <hr />
        <div className="row my-2 fw-light h4 align-items-end">
          <div className="col">Date and Time of purchase:</div>
          <div className="col">{this.getDateTime()}</div>
        </div>
        <div className="row my-2 fw-light h4">
          <div className="col">Name:</div>
          <div className="col">{this.props.profile.name}</div>
        </div>
        <div className="row my-2 fw-light h4">
          <div className="col">Mobile:</div>
          <div className="col">{this.props.profile.mobile}</div>
        </div>
        <div className="row my-2 fw-light h4">
          <div className="col">Address:</div>
          <div className="col">{this.props.profile.address}</div>
        </div>
        <div className="row my-2 h4">
          <div className="col">Amount Paid:</div>
          <div className="col">₹{this.totalPrice()}</div>
        </div>
        <hr />
        <p className="display-6 w-100 text-center fst-italic">Payment Success!</p>
      </div>
    );
  }
}

export default Bill;