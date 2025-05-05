import React from "react";
import "./AppDownload.css";
import { assets } from "../../assets/assets";

const AppDownload = () => {
  return (
    <div className="app-download-container">
      <div className="app-download" id="app-download">
        <p>
          For a Better Experience, <br />
          Download <span className="highlight">Tomato App</span>
        </p>
      </div>

      <div className="app-download-platforms">
        <a href="#" className="app-link">
          <img src={assets.play_store} alt="Google Play Store" />
        </a>
        <a href="#" className="app-link">
          <img src={assets.app_store} alt="Apple App Store" />
        </a>
      </div>
    </div>
  );
};

export default AppDownload;
