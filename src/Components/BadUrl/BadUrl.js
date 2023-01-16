import React from "react";
import "./BadUrl.css";
import NavBar from "../NavBar/NavBar";

const BadUrl = () => {
  return (
    <div>
      <NavBar />
      <h1>404</h1>
      <h2>The page you are looking for isn't here.</h2>
    </div>
  );
};

export default BadUrl;
