import React, { Component } from "react";
import "./upcomingEvents.css";
import axios from "axios";
import Announcements from "./announcements";
class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trainings: [],
    };
  }

  async componentDidMount() {
    const { data: trainings } = await axios.get(
      "http://127.0.0.1:8000/coursesSchedule/"
    );
    this.setState({ trainings });
  }
  getTrainingsList(training) {
    return (
      <div class="list-group">
        <a
          href="/futureTrainingDetails"
          class="display: flex"
          class="list-group-item linkcolor"
        >
          <span className="datecolor">{training.start_date}</span> <br />
          {training.title}
        </a>
        <br />
      </div>
    );
  }
  render() {
    const trainings = this.state.trainings;
    let trainingsArr = [];
    if (trainings.length > 0) {
      for (let i = 0; i < trainings.length; i++) {
        trainingsArr.push(this.getTrainingsList(trainings[i]));
      }
    }
    return (
      <div className="eventsWrapper">
        <div className="headcolor">
          <strong>Upcoming Trainings</strong>
        </div>
        <div className="linksdiv"> {trainingsArr} </div>
      </div>
    );
  }
}

export default Events;
