import React from "react";
import { Link } from "react-router-dom";

import "./footer.css";


const Footer = ()=>{
    return (
        <section id="footer">
            <div className="footer-conatiner box-dark flex">
                <div className="footer-intro flex">
                    <h1>Atletas India Sports and Entertainment</h1>

                    <p>We are a team of Youth Entrepreneurs who understands and feels the emotions of upcoming generation. We have worked around the world with top club franchises and organisations, Few are Juventus FC, Laliga , NBA , ATP tour ,Legends league cricket, Pro Kabaddi League, ISL ,IPL etc.</p>

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