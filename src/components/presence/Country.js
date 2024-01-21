import React from "react";
import "./presence.css";

const Country = ({ country }) => {
    const { imageUrl, flagImage, name } = country;

    return (
        <div className="country">
            <div
                className="card-bg"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                    backgroundPosition: "right",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundColor: "rgb(0, 0, 0, .40)",
                    backgroundBlendMode: "overlay",
                }}
            ></div>
            <div className="country-context">
                <img className="country-img" src={flagImage} alt={`flag-${name}`} />
                <h1>{name}</h1>
            </div>
        </div>
    );
};

export default Country;
