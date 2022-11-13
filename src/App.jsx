import React from "react";
import { Navbar, CourseInfo, Referral, Work, Footer } from "./components";

import "./App.css";
const App = () => {
  return (
    <div className="App ">
      <div className="simple__bg">
        <Navbar />
        <CourseInfo info={"UI/UX > Refer & Earn"}/>
        <Referral />
        <Work />
        <Footer />
      </div>
    </div>
  );
};

export default App;
