import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";

export default function Root(props) {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}
