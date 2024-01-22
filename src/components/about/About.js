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
                        We are experienced Sports Management professionals with well hands on experience in the field. We are here to boost Indian sports ecosystem, Fan engagement, opening gateways for Indian athletes to international clubs.
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
                            Develop sports culture in India and making sports a daily need rather than a lifestyle. <br></br>
                            Our campaigns and different projects will be promoting the need of sports in everyday life. Also how sports is a pathway to a remarkable carrier. We will not only develop the sports culture but also will be supporting the athletes to become an Elite.
                            </p>
                        </div>
                </div>

                <div className="our-service box-outline">
                    <div className="flex service-context">
                        <div className="section-title-dark">
                            <p>OUR SERVICES</p>
                        </div>

                        <p className="p2 fw-md">
                        We offer <span>world-class training</span> and <span>infrastructure</span> to our students. We have set up sports centres in association with premium european clubs for upcoming youths across the country. We provide them with the <span>best coaching, equipment, and facilities</span>. We also organise <span>tournaments, camps, and workshops</span> to enhance their skills and exposure. We cater to all age groups and levels of proficiency.
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
                        <span>We have been there in the field since 10 years.</span> We have seen birth of many leagues across India and around the globe. We have been a part of those legendary leagues as well. We as individuals have been a part of those leagues and few still are.
                        
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default About;