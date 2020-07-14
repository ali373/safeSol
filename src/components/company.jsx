import React, { Component } from "react";
import "./company.css";
import Topbanner from "./topBanner";
import Navbar from "./navbar";
import Footer from "./footer";

class Company extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="">
        <Topbanner />
        <Navbar />
        <div className="container">
          <h4 className="heading content">What is HSE Cert. International?</h4>
          <br />
          <p className="ptext">
            <strong>
              <span style={{ fontWeight: "bold" }}> “ </span>
              <br />
              HSE Cert. International is about delivering best quality Training
              and provide Consultancy services in Quality, Health, Safety &
              Environment (QHSE)
              <br /> ”
            </strong>
          </p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Company;
