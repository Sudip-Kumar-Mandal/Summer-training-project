import React, { Component } from 'react';
import CartCard from "./CartCard";
import CartPrice from "./CartPrice"
import "./styles.css"

class Cart extends Component {
  state = {}
  render() {
    return (
      <div id="CartMain">
        <div className="row">
          <div className="col-sm-7 col-md-8 col-xl-9">
            {this.props.products.map(product => <CartCard
              key={product.id}
              product={product}
              onPlus={this.props.onPlus}
              onMinus={this.props.onMinus}
              onCartCardRemove={this.props.onCartCardRemove}
            />)}
          </div>
          <div className="col-sm-5 col-md-4 col-xl-3">
            <CartPrice products={this.props.products} onPay={this.props.onPay} />
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;