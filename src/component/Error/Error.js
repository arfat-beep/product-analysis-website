import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";
const Error = () => {
  return (
    <div id="main">
      <div class="fof">
        <h1>Error 404</h1>
        <br />
        <Link to="/">Go Home</Link>
      </div>
    </div>
  );
};

export default Error;
