import React, { Component } from "react";
import "./body.css";

import HowWeWork from "./howWeWork";
import Whtwedo from "./whtWeDo";
import Welcome from "./welcome";
import Announcements from "./announcements";
import OurTrainings from "./ourTrainings";
import Events from "./upcomingEvents";
import axios from "axios";

// there's a mix of high level and low level components or elements here!
//apis: these are basically end points that are publically accessible on the internet
//rest: its a bunch of conventions and rules that we have to follow to build or consume APIS for exchanging data

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
    };
  }
  async componentDidMount() {
    const { data: courses } = await axios.get("http://127.0.0.1:8000/courses/");
    this.setState({ courses });
  }

  render() {
    console.log(this.state.courses);
    return (
      <div className="container-fluid spacing bodyWrapper">
        <div class="row mainRow">
          <div class="col-sm-10 contentBar toppad">
            <Welcome />
            <Whtwedo />
            <HowWeWork />
            <OurTrainings />
          </div>
          <div class="col-md-2 toppad">
            <div className="thisbackground">
              <Events />
            </div>
            <div className="thisbackground">
              <Announcements />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
