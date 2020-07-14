import React, { Component } from "react";
import welcome from "./pics/welcome3.jpg";
import "./welcome.css";
class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div class="container welcomewrapper">
        <div class="row">
          <div class="col-sm-6">
            <h5 className="h5font">
              <strong>Welcome to HSE Cert. International</strong>
            </h5>
            <p className="fontsize ppad">
              {/* Delivering best quality Training and provide Consultancy
                    services in Quality, Health, Safety & Environment. */}
              HSE Cert. International has a picture of two Key Players behind
              it. It has grown from two-person organization as freelancers in
              association with several other training providers and experts,
              offering a wide range of skills,expertise,awareness and train the
              trainer courses. <br />
              HSE Cert. International team has a strong commitment towards
              quality and confidentiality which we prove while helping
              organizations to align their QHSE systems and practices. <br />
              Our trainings enhance the employees’ knowledge & awareness to
              perform their job and everyday work confidently with high quality
              and safety.
            </p>
            <div class="d-flex">
              <a class="btn learnMorebtn" href="#" role="button">
                <strong>Learn more →</strong>
              </a>
            </div>
          </div>

          <div class="col-sm-6 imgpad">
            <img src={welcome} class="img-fluid" alt="welcome img" />
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
