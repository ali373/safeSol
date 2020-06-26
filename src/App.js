import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./components/home";
class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Home} />

        {/* <div className="container">
          <h2>microsafety app</h2>
        </div> */}
      </Router>
    );
  }
}

export default App;
