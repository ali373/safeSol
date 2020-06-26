import React, { Component } from "react";
import "./body.css";
import safety from "./pics/iosh.png";
import diplomas from "./pics/diplomas.png";
import free from "./pics/free.png";
import online from "./pics/online.png";
import remote from "./pics/remote5.png";
import nebosh from "./pics/nebosh_canva.png";
import HowWeWork from "./howWeWork";
import Whtwedo from "./whtWeDo";
import Welcome from "./welcome";
import Announcements from "./announcements";
import Events from "./upcomingEvents";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // there's a mix of high level and low level components or elements here!
  //apis: these are basically end points that are publically accessible on the internet
  //rest: its a bunch of conventions and rules that we have to follow to build or consume APIS for exchanging data
  render() {
    return (
      <div className="container-fluid spacing">
        <div class="row mainRow">
          <div class="col-sm-10 contentBar toppad">
            <Welcome />
            <br />
            <br />
            <br />
            <Whtwedo />
            <br />
            <br />
            <br />
            <HowWeWork />

            <div class="ar3">
              <h5 style={{ color: "#002f5f" }}>
                <strong>
                  Progress your career with our first class training
                </strong>
              </h5>
            </div>

            <div class="card-deck ar4">
              <div class="card">
                <img class="card-img-top" src={free} alt="Card image cap" />
                <div class="card-body">
                  <a
                    href="#"
                    class="stretched-link cardlinksfont"
                    style={{ color: "#002f5f" }}
                  >
                    <strong>Free Resources</strong>
                  </a>
                </div>
              </div>

              <div class="card">
                <img class="card-img-top" src={diplomas} alt="Card image cap" />
                <div class="card-body">
                  {/* <h5 class="card-title">Free Resources</h5> */}
                  <a
                    href="#"
                    class="stretched-link cardlinksfont"
                    style={{ color: "#002f5f" }}
                  >
                    <strong>Diplomas</strong>
                  </a>
                </div>
              </div>
              <div class="card">
                <img class="card-img-top" src={safety} alt="Card image cap" />
                <div class="card-body">
                  {/* <h5 class="card-title">IOSH Managing Safely</h5> */}
                  <a
                    href="#"
                    class="stretched-link cardlinksfont"
                    style={{ color: "#002f5f" }}
                  >
                    <strong>IOSH Managing Safely</strong>
                  </a>
                </div>
              </div>
            </div>

            <div class="card-deck ar5">
              <div class="card">
                <img class="card-img-top" src={nebosh} alt="Card image cap" />
                <div class="card-body">
                  <a
                    href="#"
                    class="stretched-link cardlinksfont"
                    style={{ color: "#002f5f" }}
                  >
                    <strong>NEBOSH Qualifications</strong>
                  </a>
                </div>
              </div>

              <div class="card">
                <img class="card-img-top" src={online} alt="Card image cap" />
                <div class="card-body">
                  {/* <h5 class="card-title">Online Training Courses</h5> */}
                  <a
                    href="#"
                    class="stretched-link cardlinksfont"
                    style={{ color: "#002f5f" }}
                  >
                    <strong>Online Training Courses</strong>
                  </a>
                </div>
              </div>
              <div class="card">
                <img class="card-img-top" src={remote} alt="Card image cap" />
                <div class="card-body">
                  {/* <h5 class="card-title">Remote Audits and Consultancy</h5> */}
                  <a
                    href="#"
                    class="stretched-link cardlinksfont"
                    style={{ color: "#002f5f" }}
                  >
                    <strong>Remote Audits and Consultancy</strong>
                  </a>
                </div>
              </div>
            </div>

            <div class="d-flex justify-content-center">
              <a class="btn allCoursesbtn btnfont" href="#" role="button">
                <strong>View all Courses →</strong>
              </a>
            </div>
            <br />
            <br />
          </div>

          <div class="col-md-2 toppad">
            <div className="thisbackground">
              <Announcements />
            </div>
            <br />
            <div className="thisbackground">
              <Events />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
