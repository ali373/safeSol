import React, { Component } from "react";
import "./announcements.css";
class Announcements extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //   announcements: [
      //     "Announcement1",
      //     "Announcement2",
      //     "Announcement3",
      //     "Announcement4",
      //     "Announcement5",
      //   ],
    };
  }
  render() {
    let aStyle = {
      //   paddingLeft: "0px",
      //   margin: "0px",
      //   color: "white",
    };
    return (
      <div class="flex-column" className="borderr">
        <div class="display: flex" className="headingcolor">
          <strong>Announcements</strong>
        </div>
        <div>
          <a href="#" class="display: flex" className="linkcolor">
            Announcement1
          </a>
          <br />
          <a href="#" className="linkcolor">
            Announcement2
          </a>
          <br />
          <a href="#" className="linkcolor">
            Announcement3
          </a>
          <br />
          <a href="#" className="linkcolor">
            Announcement4
          </a>
          <br />
          <a href="#" className="linkcolor">
            Announcement5
          </a>
        </div>
      </div>
    );
  }
}

export default Announcements;
