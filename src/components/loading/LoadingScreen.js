import React from "react";
import "./loading.css";

const LoadingScreen = ({ progress }) => {
  return (
    <div className="loading-screen">

        <div className="loading-context">
            <img className="load-gif" src="/images/load.gif" alt="football"></img>

            <div>
                <h1>LOADING</h1>
                <p>{progress}</p>
            </div>
        </div>
      
    </div>
  );
};

export default LoadingScreen;
