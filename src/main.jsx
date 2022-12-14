import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import FriendsEnrolled from "./components/friendsEnrolled/FriendsEnrolled";
import "./index.css";
import { BrowserRouter as Router, Route , Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element ={<App/>} />
        <Route path ="/friends/enrolled" element= {<FriendsEnrolled/>} />
      </Routes>
    </Router>  
    {/* <App /> */}
  </React.StrictMode>
);
