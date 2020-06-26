import React, { Component } from "react";
import "./slider.css";
import bannerimg1 from "./pics/banner0071.jpg";
// import bannerimg2 from "./pics/banner007.jpg";
import bannerimg3 from "./pics/banner0072.png";
class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
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
          <div
            class="carousel-inner carousel-inner-set"
            role="listbox"
            // style=" width:100%; height: 500px !important;"
          >
            <div class="carousel-item active">
              <img class="d-block w-100" src={bannerimg1} alt="First slide" />
              {/* <div class="carousel-caption d-none d-md-block">
                  <strong>OUR TEAM</strong>
                </div> */}
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src={bannerimg3} alt="Second slide" />
              {/* <div class="carousel-caption d-none d-md-block">
                  <strong>MYSELF</strong>
                </div> */}
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Slider;
