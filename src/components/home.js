import React, { Component } from "react";
import "./home.css";
import Footer from "./footer";
import Navbar from "./navbar";
import Body from "./body";
import Topbanner from "./topBanner";
import Slider from "./slider";
import HowWeWork from "./howWeWork";
import Whtwedo from "./whtWeDo";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="homePriBackground">
        <Topbanner />
        <Navbar />
        <Slider />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default Home;
