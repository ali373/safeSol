import React, { Component } from "react";
import Topbanner from "./topBanner";
import Navbar from "./navbar";
import Footer from "./footer";
import axios from "axios";
import "./allCourses.css";
// import AllCourses from "./allCourses";

class AllCourses extends Component {
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
  getCourses(course) {
    return (
      <div className="container list-group">
        {/* <ul>
          <li> */}
        <a href="#" className="links list-group-item">
          {course.title}
        </a>
        <br />
        {/* </li>
        </ul> */}
      </div>
    );
  }
  render() {
    let CoursesArr = [];
    const courses = this.state.courses;
    if (courses.length > 0) {
      for (let i = 0; i < courses.length; i++) {
        CoursesArr.push(this.getCourses(courses[i]));
      }
    }
    return (
      <div>
        <Topbanner />
        <Navbar />
        <br />
        <div className="container thistextarea">
          <h4 className="heading">Here's a complete list of our courses</h4>
          <p className="text">
            Elevate your skills and confidence level through our comprehensive
            theoretical as well as the practical knowledge about Quality,
            Health, Safety and Environment.
          </p>
        </div>
        <div className="container">{CoursesArr}</div>
        <br />
        <br />

        <Footer />
      </div>
    );
  }
}

export default AllCourses;
