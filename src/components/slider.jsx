import React, { Component } from "react";
import "./slider.css";
import bannerimg1 from "./pics/banner00731.png";
import bannerimg3 from "./pics/banner00721.png";
class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="sliderwrapper">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner carousel-inner-set" role="listbox">
            <div class="carousel-item active carouselimgh">
              <img
                // height="445"
                // width="1498"
                class="d-block w-100"
                src={bannerimg1}
                alt="First slide"
              />
            </div>
            <div class="carousel-item carouselimgh">
              <img
                // height="445"
                // width="1498"
                class="d-block w-100"
                src={bannerimg3}
                alt="Second slide"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
