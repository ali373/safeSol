import React, { Component } from "react";
import "./whtWeDo.css";

class Whtwedo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container whtwedoWrapper">
        <h5 style={{ textAlign: "center", color: "#002f5f" }}>
          <strong>What we do</strong>
        </h5>
        <p style={{ textAlign: "center" }} className="fontsize">
          HseCertIntl is focused on delivering best quality Training and provide
          Consultancy services in Quality, Health, Safety and Environment (QHSE)
        </p>

        <div class="row">
          <div class="col-sm-4">
            <div class="card text-center bckgrncolor">
              <div class="card-body">
                <h5 class="card-title" className="cardHeadText">
                  Training
                </h5>
                <p class="card-text" className="cardPText">
                  We offer Occupational Safety, Health, Environment and Quality
                  trainings and development keys for your organization,
                  individual and team competency.
                </p>
              </div>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="card text-center bckgrncolor">
              <div class="card-body">
                <h5 class="card-title" className="cardHeadText">
                  Consultancy
                </h5>
                <p class="card-text" className="cardPText">
                  Our consultants offer value adding services to manage your
                  organization's health and safety affairs and help you reeduce
                  your ill health and injury related costs.
                </p>
              </div>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="card text-center bckgrncolor">
              <div class="card-body">
                <h5 class="card-title" className="cardHeadText">
                  Auditing
                </h5>
                <p class="card-text" className="cardPText">
                  HSE Cert. International also facilitates its clients in
                  international ass well as supplier auditing.
                  <br />
                  <br />
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Whtwedo;
