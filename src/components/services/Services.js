import React from "react";

import "./services.css";

import Service from "./Service";


const Services = ()=>{
    return(
        <section id="services">
            <div className="services-container box-dark">
                <div className="services-context flex">
                    <div className="section-title">
                        <p>DOMAIN OF WORK</p>
                    </div>

                    <p className="p2">
                    A brief overview of the services and solutions we offer to our clients and partners in the sports industry.
                    </p>
                </div>


                    <Service index={"one"} title="Junior Athlete Program" description="We nurture and empower young and aspiring footballers from the grassroots level, providing them with quality coaching, infrastructure, and exposure to the competitive environment."/>
                    <Service index={"two"} title="Talent Scouting and Edusports" description="We scout and identify potential footballers from various schools and colleges, and provide them with opportunities to showcase their skills and learn from the best in the field."/>
                    <Service index={"three"} title="Elite Sports Academic" description="We offer a comprehensive and holistic sports education program for talented and promising footballers, combining academic excellence, professional training, and personal development."/>
                    <Service index={"four"} title="Sports Scholarships" description="We facilitate and support deserving and meritorious footballers to pursue their dreams and goals, by providing them with financial assistance, mentoring, and guidance."/>
                    <Service index={"five"} title="Sports Consulting" description="We provide expert advice and consultancy to various stakeholders in the sports industry, such as clubs, associations, federations, and sponsors, on various aspects of sports management, marketing, and development."/>
                    <Service index={"six"} title="Athlete Management" description="We take care of the professional and personal needs of our athletes, such as contracts, endorsements, media relations, career planning, and welfare."/>

                    <div className="service-ad box"
                        style={{
                            backgroundImage: `url("/images/ads.jpg")`, // Display the background of the first movie
                            backgroundPosition: "right",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundColor: "rgb(0, 0, 0, .40)",
                            backgroundBlendMode: "overlay",
                        }} 
                    >
                    </div>
                </div>
        </section>
    )
}

export default Services;