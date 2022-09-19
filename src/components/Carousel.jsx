import React, { Component } from 'react';

class Carousal extends Component {
  state = {}
  render() {
    return (
      <div>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/93a9d2d08ef58174.jpg?q=50" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://rukminim1.flixcart.com/flap/1688/280/image/ff938f15fd1feb73.jpg?q=50" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/b349066a5aaace72.jpg?q=50" className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    );
  }
}

export default Carousal;