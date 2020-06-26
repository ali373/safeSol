import React, { Component } from "react";
import "./howWeWork.css";

class HowWeWork extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="backgroundcolor">
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

            {/* <h5 style={{ color: "#002f5f" }}>We get to know your business</h5>
            <p className="fontsize pcolor">
              One of our consultants will visit you to understand your
              business'challenges and needs.Whenever it's Health & Safety or HR
              & Employment Law you need support with,we're the experts.
            </p> */}
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
              {/* <h5 style={{ color: "#002f5f" }}>We get you back on track</h5>
            <p className="fontsize pcolor">
              We'll get you up-to-date with the latest legislation by reviewing
              or creating all your essential contracts,handbooks,systems and
              policies.
            </p> */}
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
            {/* <h5 style={{ color: "#002f5f" }}>We're here for you 24/7</h5>
            <p className="fontsize pcolor">
            where I could enhance my expertise and acquire experience and professional skills 
              Whether you need expert advice,help during a crisis or a friendly
              ear,our industry leading experts are here for you 24/7.We'll also
              give you access to 100s of fact sheets and online tools,too.
            </p> */}
          </div>
        </div>
      </div>
    );
  }
}

export default HowWeWork;
