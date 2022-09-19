import React, { Component } from 'react';
import "./styles.css"

class Card extends Component {
  state = {}
  render() {
    return (
      <div className="card m-2">
        <img className="p-3" src={this.props.product.image} alt="" />
        <div className="card-body">
          <h4 className="card-title mb-3">{this.props.product.name}</h4>
          <span className="bg-success rounded text-white p-1 px-2 m-2"><i className="bi bi-star-fill pe-1"></i>{this.props.product.rating}</span>
          <p className="display-5 m-2">₹{this.props.product.price}</p>
        </div>
      </div>
    );
  }
}

export default Card;