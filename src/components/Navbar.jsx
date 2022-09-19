import React, { Component } from 'react';
import "./styles.css"

class Navbar extends Component {
  state = {}
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-light bg-primary">
          <div className="container-fluid">
            <span className="navbar-brand text-white" onClick={this.props.onHome}>
              <h3><img src={require("./../assets/logo.png")} alt="" width="60px" /> Flipkart</h3>
            </span>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <span className="nav-link text-white" onClick={this.props.onCart}><i className="display-5 bi bi-cart px-sm-2 px-md-3"></i></span>
                <span className="nav-link text-white" data-bs-toggle="modal" data-bs-target="#modal-1"><i className="display-5 bi bi-person px-sm-2 px-md-3"></i></span>
              </div>
            </div>
          </div>
        </nav>

        <div className="modal fade" id="modal-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Profile</h5>
                <button className="btn-close" data-bs-dismiss="modal"></button>
              </div>
              <div className="modal-body">
                <form>

                  <label className="form-label">Name:</label>
                  <div className="mb-4 input-group">
                    <span className="input-group-text">
                      <i className="bi bi-person-fill text-secondary"></i>
                    </span>
                    <input type="text" className="form-control" placeholder="e.g. Mario" onChange={this.props.onChangeName.bind(this)} />
                  </div>

                  <label className="form-label">Mobile:</label>
                  <div className="input-group mb-4">
                    <span className="input-group-text">
                      <i className="bi bi-phone-fill text-secondary"></i>
                    </span>
                    <input type="mobile" className="form-control" placeholder="e.g. 9876543210" onChange={this.props.onChangeMobile.bind(this)} />
                  </div>

                  <label className="form-label">Address:</label>
                  <div className="input-group mb-4">
                    <span className="input-group-text">
                      <i className="bi bi-geo-alt-fill text-secondary"></i>
                    </span>
                    <input type="text" className="form-control" placeholder="e.g. 123 Street" onChange={this.props.onChangeAddress.bind(this)} />
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;