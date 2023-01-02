import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Blogs from "./Blogs";

export class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Link to="/">home</Link>
          <button>
            <Link to="Contact">Contact</Link>
          </button>
          <button>
            <Link to="Blogs">Blogs</Link>
          </button>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Blogs" element={<Blogs />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
