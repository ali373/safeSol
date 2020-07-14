import React, { Component } from "react";
import axios from "axios";
import "./imageGallery.css";
import Topbanner from "./topBanner";
import Navbar from "./navbar";
import Footer from "./footer";
import img1 from "./pics/course_img1.jpg";
import img2 from "./pics/resized_group.png";
import img3 from "./pics/course_img4.jpg";

class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseImages: [],
    };
  }
  async componentDidMount() {
    const { data: courseImages } = await axios.get(
      "http://127.0.0.1:8000/courseImages/"
    );

    this.setState({ courseImages });
    console.log(courseImages);
  }

  render() {
    const { courseImages } = this.state;

    return (
      <div className="maindiv">
        <Topbanner />
        <Navbar />
        <br />

        <div className="container imagegallery">
          <h5 className="welcomemsg">
            <strong>Welcome to HSE Cert. International Image Gallery </strong>
          </h5>
          <div class="row">
            {courseImages.map((image) => {
              return (
                <div class="col-md-4">
                  <img
                    className="img-fluid img-thumbnail"
                    src={image.image}
                    alt="img"
                  />
                </div>
              );
            })}
          </div>
        </div>

        <br />
        <Footer />
      </div>
    );
  }
}

export default ImageGallery;
