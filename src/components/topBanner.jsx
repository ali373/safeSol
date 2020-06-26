import React, { Component } from "react";
import "./topBanner.css";
class Topbanner extends Component {
  state = {};
  render() {
    return (
      <div class="container-fluid bck">
        {/* <div class="row">
          <div class="col-sm-1"></div>

          <div class="col-sm-4" className="center">
            <p>Let the journey to the greatness begin</p>
          </div>

          <div class="col-sm-2"></div>
          <div class="col-sm-4" className="center">
            <p>info@safesolutions.com | +965-23928344</p>
          </div>
          <div class="col-sm-1"></div>
        </div> */}

        <div className="style">
          <h6>LET THE JOURNEY TO THE GREATNESS BEGIN!</h6>

          {/* <span>
              <p>info@safesolutions.com | +965-23928344</p>
            </span> */}
        </div>
      </div>
    );
  }
}

export default Topbanner;
