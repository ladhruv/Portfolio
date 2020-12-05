import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./components/mainPage";

function App() {
  return (
    <Router>
      <Route exact path="/" component={MainPage} />
    </Router>
  );
}

export default App;
