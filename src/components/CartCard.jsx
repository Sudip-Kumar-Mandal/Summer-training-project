import React, { Component } from 'react';
import "./styles.css"

class CartCard extends Component {

  render() {
    return (
      <div id="CartCardMain" className='m-3'>
        <div id="CartCardRow" className="row justify-content-center p-3">
          <div className="col-sm-4 col-lg-3">
            <div><img className="w-100" src={this.props.product.image} alt="" /></div>
            <div>
              <button className="btn btn-outline-dark rounded-pill m-2" onClick={() => this.props.onMinus(this.props.product)}>-</button>
              <button className="btn btn-outline-dark rounded m-2">{this.props.product.qty}</button>
              <button className="btn btn-outline-dark rounded-pill m-2" onClick={() => this.props.onPlus(this.props.product)}>+</button>
            </div>
          </div>
          <div className="col-sm-8">
            <h4>{this.props.product.name}</h4>
            <p className="fw-bold">₹{this.props.product.price}</p>
            <button id="CartCardRemove" onClick={() => { this.props.onCartCardRemove(this.props.product) }}>REMOVE</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CartCard;