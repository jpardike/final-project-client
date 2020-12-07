import React from "react";
import { Link } from "react-router-dom";
// import UserModel from "../../models/user";

import "./landing.css";

function Landing(props) {
  return (
    <div className="row p-0 m-0 align-items-center landing-body justify-content-around">
      <div className="col-md-5 text-center landing-col landing-logo">COMPANY LOGO</div>
      <div className="col-md-5 text-center landing-col">
        <p className="py-3">BandMates is a social media app for musicians and music lovers who are looking for upcoming events and new music from other musicians.</p>
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
