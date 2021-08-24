import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Mail from "./Mail";
import EmailList from "./EmailList";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app_body">
          <Sidebar />
          <Switch>
            <Route exact path="/mail" component={Mail} />
            <Route exact path="/" component={EmailList} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
