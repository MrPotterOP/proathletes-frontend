import React from "react";
import { Link } from "react-router-dom";

import "./hero.css";

const Hero = () =>{
    return(
        <section id="hero">
            <div className="hero-container">
                <div className="main-hero-conatiner box">
                    <div className="hero-bg" 
                        style={{
                            backgroundImage: `url("/images/hero-demo.jpg")`, // Display the background of the first movie
                            backgroundPosition: "right",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundColor: "rgb(0, 0, 0, .40)",
                            backgroundBlendMode: "overlay",
                        }}  
                    ></div>

                    <div className="hero-context-container flex">
                        <div className="hero-context flex">
                            <div className="section-title">
                                <p>ABOUT US</p>
                            </div>

                            <p className="p2">
                                We have been working in the field of football for last 40 years as Shimla Sports Club. As a club we have produced many national and international players like Mushtaque Ali, Amit Kumar Singh, Dhirendra Kumar, Singh, Shammi Pal, Saket Singh, Amit Kumar, Poonam Chauhan, Mona Verma and many more.
                            </p>
                        </div>

                        <div className="hero-bars flex">
                            <div className="hero-bar">
                                <div className="bar-progress"
                                style={{
                                    "width": "10%"
                                }}
                                ></div>
                            </div>
                            <div className="hero-bar">
                                <div className="bar-progress"></div>
                            </div>
                            <div className="hero-bar">
                                <div className="bar-progress"></div>
                            </div>
                        </div>
                    </div>
                </div>


            <div className="hero-side flex">
                <div className="sub-hero box-dark">
                    <div className="sub-hero-context">
                        <h1>
                        Championing Athletes Futures Through Our Exclusive <span>Talent Scouting</span> and <span>Edusports</span>
                        </h1>

                        <Link to="/" className="btn btn-primary">READ MORE
                        <img className="arrow-icon" alt="arrow" src="/images/arrow.png"></img>
                        </Link>
                    </div>

                    <img alt="athlete" className="sub-hero-img" src="/images/sub-hero-img.png"></img>
                </div>


                <div className="hero-extra">
                    <div className="hero-ad box">
                        <Link to="/">
                        <img className="hero-ad-img" src="/images/hero-ad.png" alt="ad"></img>
                        </Link>
                    </div>

                    <div className="hero-numbs box-outline flex">
                        <div className="numbs">
                            <h1>100+</h1>
                            <p className="p1">Centres Ongoing</p>
                        </div>
                        
                        <Link to="/" className="btn btn-primary-dark">READ MORE
                            <img className="arrow-icon" alt="arrow" src="/images/arrow.png"></img>
                        </Link>

                    </div>
                </div>
            </div>

            </div>
        </section>
    )
}

export default Hero;
