import React from "react";
import { Link } from "react-router-dom";

import "./programs.css";


const Programs =() =>{
    return(
        <section id="programs">
            <div className="programs-container box-dark">
                <div className="services-context flex">
                    <div className="section-title">
                        <p>OUR INITIATIVES</p>
                    </div>

                    <p className="p2">
                    We are soon launching our Foundation where we will create a room full of support for the underprivileged sports persons and para athletes
                    </p>
                </div>

                <div className="program-links">
                    <div className="program-link flex">
                        <Link className="link-master" to="/">
                            <h1>ASPIRE KIDS</h1>
                            <img className="master-arrow" src="/images/arrow.png" alt="arrow"></img>
                            
                        </Link>

                        <Link className="link-master" to="/">
                            <h1>ASPIRE ATHLETES</h1>
                            <img className="master-arrow" src="/images/arrow.png" alt="arrow"></img>
                            
                        </Link>

                        <Link className="link-master" to="/">
                            <h1>ASPIRE SPORTS & ENT.</h1>
                            <img className="master-arrow" src="/images/arrow.png" alt="arrow"></img>
                            
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Programs;