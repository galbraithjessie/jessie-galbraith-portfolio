import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contentPicture from "../../../static/assets/images/auth/login.jpg";


export default function() {
  return (
    <div className="content-page-wrapper">
      <div
      className="left-column"
      style={{
        background: "url(" + contentPicture + ") no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center" 
      }}
      />

      <div className="right-column">
        <div className="contact-bullet-points">
          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="phone-volume" />
            </div>

            <div className="text">
              801-822-6314
            </div>
          </div>

          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="envelope" />
            </div>

            <div className="text">
              galbraithjessie@gmail.com
            </div>
          </div>

          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="map-marked-alt" />
            </div>

            <div className="text">
              Payson, Ut
            </div>
          </div>

        </div> 
      </div>
    </div>
  );
}
