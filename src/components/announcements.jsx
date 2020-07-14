import React, { Component } from "react";
import "./announcements.css";
import axios from "axios";
class Announcements extends Component {
  constructor(props) {
    super(props);
    this.state = {
      announcements: [],
    };
  }

  async componentDidMount() {
    const { data: announcements } = await axios.get(
      "http://127.0.0.1:8000/announcements/"
    );
    this.setState({ announcements });
  }
  getAnnouncements(announcement) {
    return (
      <div className="list-group">
        <a
          href="/announcementDetails"
          class="display: flex"
          className="list-group-item thislinkcolor"
        >
          {announcement.title}
        </a>
        <br />
      </div>
    );
  }
  render() {
    let announcementArr = [];
    const announcements = this.state.announcements;
    if (announcements.length > 0) {
      for (let i = 0; i < announcements.length; i++) {
        announcementArr.push(this.getAnnouncements(announcements[i]));
      }
    }
    return (
      <div className="announcementsWrapper">
        <div className="headingcolor">
          <strong>Announcements</strong>
        </div>

        <div>{announcementArr}</div>
      </div>
    );
  }
}

export default Announcements;
