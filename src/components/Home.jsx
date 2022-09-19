import React, { Component } from 'react';
import Card from "./Card"
import Carousel from './Carousel';

class Home extends Component {
  state = {}
  render() {
    return (
      <div>
        <Carousel />
        <div className="row justify-content-center">
          {this.props.products.map((item) => {
            return (
              <div className="col-8 col-sm-6 col-lg-4 col-xl-3 my-3" key={item.id}>
                <span onClick={() => { this.props.onDetails(item) }}>
                  <Card product={item} />
                </span>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default Home;