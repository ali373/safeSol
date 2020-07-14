import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Navbar from "./components/navbar";
// import Footer from "./components/footer";
import Home from "./components/home";
import AnnouncementDetail from "./components/announcementDetail";
import UpcomingEventDetail from "./components/upcomingEventDetail";
import AllCourses from "./components/allCourses";
import ImageGallery from "./components/imageGallery";
import ArchivesText from "./components/archivesText";
import ArchivesAudio from "./components/archivesAudio";
import ArchivesVideo from "./components/archivesVideo";
import Archives from "./components/archives";
import Company from "./components/company";
import Team from "./components/team";
class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/announcementDetails" component={AnnouncementDetail} />
        <Route path="/futureTrainingDetails" component={UpcomingEventDetail} />
        <Route path="/allCourses" component={AllCourses} />
        <Route path="/imageGallery" component={ImageGallery} />
        <Route path="/archives" component={Archives} />
        <Route path="/archiveText" component={ArchivesText} />
        <Route path="/archiveAudio" component={ArchivesAudio} />
        <Route path="/archiveVideo" component={ArchivesVideo} />
        <Route path="/company" component={Company} />
        <Route path="/team" component={Team} />
      </Router>
    );
  }
}

export default App;
