import React, { Component } from 'react';

class Details extends Component {
  state = {}
  handleAddToCartDetails = () => {
    let btn = document.getElementById("addToCart");
    btn.innerHTML = "Added";
    btn.disabled = true;
    this.props.onAddToCart()
  }
  render() {
    return (
      <div>
        <div className="row justify-content-center m-4">
          <div className="col-sm-6 col-md-5">
            <div>
              <div><img className="w-100" src={this.props.product.image} alt="" /></div>
              <div className='row justify-content-center'>
                <div className="col-sm-6 col-lg-5">
                  <button
                    id="addToCart"
                    className="btn btn-warning text-white fw-bold rounded p-3 my-2"
                    onClick={this.handleAddToCartDetails}
                  >
                    <i className="bi bi-cart pe-2"></i>
                    ADD TO CART
                  </button>
                </div>
                <div className="col-sm-6 col-lg-5">
                  <button
                    className="btn btn-danger text-white fw-bold rounded p-3 my-2"
                    onClick={this.props.onBuyNow}
                  >
                    <i className="bi bi-lightning pe-2"></i>
                    BUY NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-7">
            <p className='display-5'>{this.props.product.name}</p>
            <h3 className='py-3'>₹{this.props.product.price}</h3>
            Category: <p className="lead">{this.props.product.category}</p>
            <p>{this.props.product.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;