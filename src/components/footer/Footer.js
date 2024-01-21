import React from "react";
import { Link } from "react-router-dom";

import "./footer.css";


const Footer = ()=>{
    return (
        <section id="footer">
            <div className="footer-conatiner box-dark flex">
                <div className="footer-intro flex">
                    <h1>Atletas India Sports and Entertainment</h1>

                    <p>We have been working in the field of football for last 40 years as Shimla Sports Club. As a club we have produced many national and international players like Mushtaque Ali, Amit Kumar Singh, Dhirendra Kumar, Singh, Shammi Pal, Saket Singh, Amit Kumar, Poonam Chauhan, Mona Verma and many more.</p>

                    <p>© All Rights Reserved @AtletasIndiaSportsAndEntertainment</p>
                </div>

                <div className="footer-contact flex">
                    <h1>CONTACT US</h1>

                    <input className="input-dark" type="text" placeholder="Your Email"></input>
                    <input className="input-dark" type="text" placeholder="Your MESSAGE"></input>

                    <Link className="bn btn-primary">SEND MESSAGE
                        <img className="arrow-icon" alt="arrow" src="/images/arrow.png"></img>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Footer;