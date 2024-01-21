import React from "react";
import { Link } from "react-router-dom";

import "./about.css";

const About = ()=>{
    return(
        <section id="about">
            <div className="about-container">
                <div className="who-are-we box">
                    <div className="card-bg"
                        style={{
                            backgroundImage: `url("/images/about.jpg")`, // Display the background of the first movie
                            backgroundPosition: "right",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundColor: "rgb(0, 0, 0, .40)",
                            backgroundBlendMode: "overlay",
                        }}
                    ></div>
                    <div className="flex who-are-we-context">
                        <div className="section-title">
                            <p>WHO ARE WE</p>
                        </div>

                        <p className="p2">
                            We have been working in the field of football for last 40 years as Shimla Sports Club. As a club we have produced many national and international players like Mushtaque Ali, Amit Kumar Singh, Dhirendra Kumar, Singh, Shammi Pal, Saket Singh, Amit Kumar, Poonam Chauhan, Mona Verma and many more.
                        </p>
                    </div>
                </div>

                <div className="our-vision">
                        <div className="card-bg"
                            style={{
                                backgroundImage: `url("/images/vision.jpg")`, // Display the background of the first movie
                                backgroundPosition: "right",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                backgroundColor: "rgb(0, 0, 0, .40)",
                                backgroundBlendMode: "overlay",
                            }}
                        ></div>
                        <div className="flex who-are-we-context vision-context">
                            <div className="section-title">
                                <p>OUR VISION</p>
                            </div>

                            <p className="p2">
                                We have been working in the field of football for last 40 years as Shimla Sports Club. As a club we have produced many national and international players like Mushtaque Ali, Amit Kumar Singh, Dhirendra Kumar, Singh, Shammi Pal, Saket Singh, Amit Kumar, Poonam Chauhan, Mona Verma and many more.
                            </p>
                        </div>
                </div>

                <div className="our-service box-outline">
                    <div className="flex service-context">
                        <div className="section-title-dark">
                            <p>OUR SERVICES</p>
                        </div>

                        <p className="p2 fw-md">
                        We offer <span>world-class training</span> and infrastructure to our students. We have set up <span>football centres</span> for upcoming footballers across the country. We provide them with the best <span>coaching</span>, <span>equipment</span>, and <span>facilities</span>. We also <span>organise tournaments</span>, <span>camps</span>, and <span>workshops</span> to enhance their skills and exposure. We cater to all age groups and levels of proficiency.
                        </p>

                        <Link to="/" className="btn btn-primary-dark">VIEW ALL SERVICES
                            <img className="arrow-icon" alt="arrow" src="/images/arrow.png"></img>
                        </Link>
                    </div>
                </div>

                <div className="our-service our-legacy box-outline">
                    <div className="flex service-context">
                        <div className="section-title-dark">
                            <p>OUR LEGACY</p>
                        </div>

                        <p className="p2 fw-md">
                        We are not new to the field of football. We have been working in this domain for the last <span>40 years as Shimla Sports Club</span>. As a club, 
                        <span>we have produced many national and international players who have made us proud</span>. We have also helped interested former footballers and sportspersons to get certified as coaches through AIFF and AFC license.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default About;