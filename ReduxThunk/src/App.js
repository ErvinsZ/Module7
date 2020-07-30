import React from "react";
import "./App.css";
import StudentList from "./components/StudentList";
import { Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="container margin-top">
      <div className="row">
        <div className="col-sm-12 text-center background-div">
          <Link to="/">
            <h1>Student List</h1>
          </Link>
        </div>
      
      </div>
      <hr />
      <div className="container">
        <Route path="/" exact component={StudentList
      } />
      </div>
    </div>
  );
}

export default App;
