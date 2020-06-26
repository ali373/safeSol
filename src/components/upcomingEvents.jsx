import React, { Component } from "react";
import "./upcomingEvents.css";
class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //   trainings: [
      //     "Construction Safety",
      //     "Construction Supervisor",
      //     "Basic Firefighting Training",
      //     "IOSH Managing Safely Certification",
      //     "Certified scaffolders training",
      //   ],
    };
  }
  render() {
    return (
      <div className="maindiv">
        <div className="headcolor">
          <strong>Future Trainings</strong>
        </div>
        <div className="linksdiv">
          <a href="#" className="linkkcolor afont">
            Construction Safety
          </a>
          <br />
          {/* <a href="#" className="linkkscolor">
          Construction Supervisor
        </a>
        <br /> */}
          <a href="#" className="linkkcolor afont">
            Basic Firefighting Training
          </a>
          <br />
          <a href="#" className="linkkcolor afont">
            IOSH Managing Safely
          </a>
          <br />
          <a href="#" className="linkkcolor afont">
            Certified Scaffolders Training
          </a>
        </div>
      </div>
    );
  }
}

export default Events;
