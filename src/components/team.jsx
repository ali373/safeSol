import React, { Component } from "react";
import "./team.css";
import Topbanner from "./topBanner";
import Navbar from "./navbar";
import Footer from "./footer";
import me from "./pics/tariq1.png";
import partner from "./pics/partner3.png";
class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="">
        <Topbanner />
        <Navbar />
        <div className="container content">
          <h4 className="heading">Welcome to HSE Cert. International!</h4>
          <br />
          <h5 className="ptext">
            <strong>
              Meet the Team
              <br />
              <br />
            </strong>
          </h5>
          <div className="row cardsdiv">
            <div className="col-md-3"></div>
            <div className="col-md-3">
              <div className="card text-center card1">
                <img
                  className="card-img-top img-responsive"
                  src={me}
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 className="card-title">Tariq Maqbool</h5>
                  <p className="card-text">Co-Founder & CEO</p>
                  <a href="#" class="btn profilebtn">
                    <strong> Linkedin profile</strong>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-center card2">
                <img
                  className="card-img-top img-responsive"
                  src={partner}
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 className="card-title">AMIR RASHEED</h5>
                  <p className="card-text">Co-Founder & COO</p>
                  <a href="#" class="btn profilebtn">
                    <strong>Linkedin profile</strong>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Team;
