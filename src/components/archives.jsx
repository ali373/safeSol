import React, { Component } from "react";
import Topbanner from "./topBanner";
import Navbar from "./navbar";
import Footer from "./footer";
import "./archives.css";
class Archives extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Topbanner />
        <Navbar />
        <div className="container linkscontainer">
          <h5 className="welcomemsg">
            <strong>Welcome to HSE Cert. International Digital Archive</strong>
          </h5>
          <p style={{ color: "#002f5f" }}>Please select a file type below:</p>
          <ul>
            <li>
              <a href="/archiveText" className="mylinkcolor">
                Text Files
              </a>
              <br />
            </li>
            <li>
              <a href="/archiveAudio" className="mylinkcolor">
                Video Files
              </a>
              <br />
            </li>
            <li>
              <a href="/archiveVideo" className="mylinkcolor">
                Audio Files
              </a>
              <br />
            </li>
            <li>
              <a href="/archiveVideo" className="mylinkcolor">
                Photographs
              </a>
              <br />
            </li>
          </ul>

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>

        <Footer />
      </div>
    );
  }
}

export default Archives;
