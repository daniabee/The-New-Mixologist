import React from "react";
import "./BadUrl.css";
import NavBar from "../NavBar/NavBar";

const BadUrl = () => {
  return (
    <div>
      <NavBar />
      <h1 className="statusError">404</h1>
      <h3 className="message">The page you are looking for isn't here!</h3>
    </div>
  );
};

export default BadUrl;
