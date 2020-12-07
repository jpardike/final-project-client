import React from "react";
import { Link } from "react-router-dom";
// import UserModel from "../../models/user";

import "./landing.css";

function Landing(props) {
    return (
      <div className="row p-0 m-0">
        <div className="col-md text-center">COMPANY LOGO</div>
        <div className="col-md text-center">
          <div>Brief description of site</div>
          <div>
            <Link to="/user/new" className="btn">
              SIGNUP
            </Link>
            <Link to="/user/login" className="btn">
              LOGIN
            </Link>
          </div>
        </div>
      </div>
    );
}

export default Landing;
