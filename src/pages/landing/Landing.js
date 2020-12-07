import React from "react";
import { Link } from "react-router-dom";
// import UserModel from "../../models/user";

import "./landing.css";

function Landing(props) {
  return (
    <div className="row p-0 m-0 align-items-center landing-body">
      <div className="col-md text-center landing-col">COMPANY LOGO</div>
      <div className="col-md text-center landing-col">
        <p>Brief description of site</p>
        <Link to="/user/new" className="btn mr-4">
          SIGNUP
        </Link>
        <Link to="/user/login" className="btn ml-4">
          LOGIN
        </Link>
      </div>
    </div>
  );
}

export default Landing;
