import React from "react";

class Landing extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md text-center">COMPANY LOGO</div>
        <div className="col-md text-center">
          <div>Brief description of site</div>
          <div>
            <button className="btn">SIGNUP</button>
            <button className="btn">LOGIN</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
