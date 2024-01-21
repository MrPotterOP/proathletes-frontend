import React from "react";

import "./quote.css";


const Quote = ()=>{
    return(
        <section id="quote">
            <div className="quote-container box">
                    <div className="hero-bg" 
                        style={{
                            backgroundImage: `url("/images/quote.gif")`, // Display the background of the first movie
                            backgroundPosition: "right",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundColor: "rgb(0, 0, 0, .40)",
                            backgroundBlendMode: "overlay",
                        }}  
                    ></div>

                    <h1 className="quote-text">Fuel your win with passion; let your effort create a triumph never heard before in the arena of dreams</h1>
            </div>
        </section>
    )
}


export default Quote;