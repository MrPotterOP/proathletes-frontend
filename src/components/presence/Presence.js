import React from "react";
import Country from "./Country";
import "./presence.css";

const Presence = () => {
    const countriesData = [
        { imageUrl: "/images/ground.jpg", flagImage: "/images/flag.png", name: "INDIA" },
        { imageUrl: "/images/ground.jpg", flagImage: "/images/brazil.png", name: "BRAZIL" },
        { imageUrl: "/images/ground.jpg", flagImage: "/images/argentina.png", name: "ARGENTINA" },
        { imageUrl: "/images/ground.jpg", flagImage: "/images/australia.png", name: "AUSTRALIA" },
        { imageUrl: "/images/ground.jpg", flagImage: "/images/bangladesh.png", name: "BANGLADESH" },
        { imageUrl: "/images/ground.jpg", flagImage: "/images/canada.png", name: "CANADA" },
        { imageUrl: "/images/ground.jpg", flagImage: "/images/china.png", name: "CHINA" },
        { imageUrl: "/images/ground.jpg", flagImage: "/images/nepal.png", name: "NEPAL" },
        { imageUrl: "/images/ground.jpg", flagImage: "/images/switzerland.png", name: "SWITZERLAND" },
        { imageUrl: "/images/ground.jpg", flagImage: "/images/qatar.png", name: "QATAR" },
        { imageUrl: "/images/ground.jpg", flagImage: "/images/spain.png", name: "SPAIN" },
        { imageUrl: "/images/ground.jpg", flagImage: "/images/uk.png", name: "UK" },
        { imageUrl: "/images/ground.jpg", flagImage: "/images/usa.png", name: "USA" },

    ];

    return (
        <section id="presence">
            <div className="presence-container">
                <div className="our-presence box-outline">
                    <div className="our-presence-context flex">
                        <div className="section-title-dark">
                            <p>OUR PRESENCE</p>
                        </div>
                        <h1>We have a <span>global network</span> of partners and professionals who can support you in every aspect of your sports career.</h1>
                    </div>
                </div>

                <div className="presence-globe box">
                    <div
                        className="card-bg"
                        style={{
                            backgroundImage: `url("/images/map.gif")`,
                            backgroundPosition: "right",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover"
                        }}
                    ></div>
                </div>

                <div className="countries-container">
                    <div className="countries">
                        {countriesData.map((country, index) => (
                            <Country key={index} country={country} />
                        ))}
                    </div>

                    <div className="countries">
                        {countriesData.map((country, index) => (
                            <Country key={index} country={country} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Presence;
