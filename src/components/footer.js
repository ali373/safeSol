import React, { Component } from "react";
import Announcements from "./announcements";
import Events from "./upcomingEvents";
import "./footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { SocialIcon } from "react-social-icons";
import axios from "axios";

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      archives: [],
      courseImages: [],
    };
  }

  async componentDidMount() {
    const { data: courseImages } = await axios.get(
      "http://127.0.0.1:8000/courseImages/"
    );
    const { data: archives } = await axios.get(
      "http://127.0.0.1:8000/archives/"
    );

    this.setState({ courseImages, archives });
  }

  render() {
    return (
      <div class="container-fluid">
        <div
          className="row display: flex primaryBackground footerMainDiv"
          style={{ backgroundColor: "#002f5f" }}
        >
          <div className="col-sm-4 aligncontent pad">
            <strong style={{ color: "#f7941d" }}>Contact Us</strong>
            <br />
            <p className="inlineDisplay">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-phone"
                fill="#f7941d"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M11 1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"
                />
                <path
                  fill-rule="evenodd"
                  d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                />
              </svg>
              <span> Pakistan : +92 334 1145908</span>
              <br />
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-phone"
                fill="#f7941d"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M11 1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"
                />
                <path
                  fill-rule="evenodd"
                  d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                />
              </svg>
              <span>
                {" "}
                Kuwait : +965 65106756,
                <br /> +965 99614518
              </span>
              <br />
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-envelope"
                fill="#f7941d"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"
                />
              </svg>{" "}
              <span> admin@hsecertintl.com</span>
              <br />
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-geo-alt"
                fill="#f7941d"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                />
              </svg>
              <span>
                {" "}
                HseCertIntl, Klass wala road, <br />
                Pasrur dist. Sialkot, Pakistan
              </span>
              <br />
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-geo-alt"
                fill="#f7941d"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                />
              </svg>
              <span> HseCertIntl, Mahboula, Ahmadi, Kuwait</span>
            </p>
          </div>

          <div className="col-sm-4 aligncontent pad">
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
          <div className="col-sm-4 aligncontent pad">
            <strong style={{ color: "#f7941d" }}>Quick Links</strong>

            <br />
            <a href="/archives" className="footerLink">
              Archives
            </a>
            <br />
            <a href="/imageGallery" className="footerLink">
              Photo Gallery
            </a>
            <br />
            <a href="/" className="footerLink">
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
