import React, { Component } from "react";
import Announcements from "./announcements";
import Events from "./upcomingEvents";
import "./footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { SocialIcon } from "react-social-icons";

export default class Footer extends Component {
  componentDidMount() {}
  render() {
    return (
      <div class="container-fluid">
        <div className="row display: flex primaryBackground footerMainDiv">
          <div className="col-md-4 aligncontent pad">
            <strong style={{ color: "#f7941d" }}>Contact Us</strong>
            <br />
            <p className="fontsize inlineDisplay">
              (021) 111 222 444 <br />
              info@SafeSolutions.org
              <br />
              SafeSolutions, East Maqwa, Kuwait City, Kuwait.
            </p>
          </div>

          <div className="col-md-4 aligncontent pad">
            <strong style={{ color: "#f7941d" }}>Connect with us</strong>

            <br />
            <SocialIcon
              network="twitter"
              url="https://www.twitter.com"
              fgColor="white"
              bgColor="#002f5f"
              className="s_icons"
            />
            <SocialIcon
              network="facebook"
              url="https://www.facebook.com"
              fgColor="white"
              bgColor="#002f5f"
              className="s_icons"
            />
            <SocialIcon
              network="linkedin"
              url="https://www.linkedin.com"
              fgColor="white"
              bgColor="#002f5f"
              className="s_icons"
            />

            <SocialIcon
              network="instagram"
              url="https://www.instagram.com"
              fgColor="white"
              bgColor="#002f5f"
              className="s_icons"
            />
          </div>
          <div className="col-md-4 aligncontent pad">
            <strong style={{ color: "#f7941d" }}>Quick Links</strong>

            <br />
            <a href="/" className="footerLink fontsize">
              Archives
            </a>
            <br />
            <a href="/" className="footerLink fontsize">
              Photo Gallery
            </a>
            <br />
            <a href="/" className="footerLink fontsize">
              Help Center(FAQ)
            </a>
            <br />

            <br />
          </div>
        </div>
      </div>
    );
  }
}
