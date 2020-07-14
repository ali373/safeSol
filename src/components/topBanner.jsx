import React, { Component } from "react";
import "./topBanner.css";
class Topbanner extends Component {
  state = {};
  render() {
    return (
      <div class="container-fluid secondaryTxtColor primaryBckgdColor">
        <div className="container-fluid style">
          <div class="row">
            <div class="col-sm">
              <h6>LET THE JOURNEY TO THE GREATNESS BEGIN!</h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Topbanner;
