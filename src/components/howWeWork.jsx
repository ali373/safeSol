import React, { Component } from "react";
import "./howWeWork.css";

class HowWeWork extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="howeworkWrapper backgroundcolor">
        <div className="pad1">
          <h5 style={{ textAlign: "center", color: "#002f5f" }}>
            <strong>How we work</strong>
          </h5>
          <p
            style={{ textAlign: "center", color: "black" }}
            className="fontsize color"
          >
            Simply.Collaboratively.Endlessly
          </p>
        </div>

        <div class="row pad2">
          <div class="col-sm-4">
            <div class="card bckgrndcolor">
              <div class="card-body">
                <h5 class="card-title" className="HeadText">
                  We get to know your business
                </h5>
                <p class="card-text" className="pText">
                  One of our consultants will visit you to understand your
                  business'challenges and needs, whenever you need support we
                  are the experts.
                </p>
              </div>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="card bckgrncolor">
              <div class="card-body">
                <h5 class="card-title" className="HeadText">
                  We get you back on track
                </h5>
                <p class="card-text" className="pText">
                  We'll get you up-to-date with latest legislation by reviewing
                  or creating all your essential contracts,handbooks, systems
                  and policies.
                </p>
              </div>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="card bckgrncolor">
              <div class="card-body">
                <h5 class="card-title" className="HeadText">
                  We're here for you <br />
                  24/7
                </h5>
                <p class="card-text" className="pText">
                  Whether you need an expert advice, or you need a help during a
                  crisis or a friendly ear, our industry leading experts are
                  here for you 24/7.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HowWeWork;
