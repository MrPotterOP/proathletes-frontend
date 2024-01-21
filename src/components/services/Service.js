import React from "react";



const Service = ({title, description, index})=>{
    return(
        <div className={`service box ${index}`}>
            <h1>{title}</h1>
            <div className="gray-line"></div>

            <p className="p2 service-text">{description}</p>

            <div className="service-img"
                style={{
                    backgroundImage: `url("/images/${index}.jpg")`, // Display the background of the first movie
                    backgroundPosition: "right",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundColor: "rgb(0, 0, 0, .40)",
                    backgroundBlendMode: "overlay",
                }}  
            >
            </div>
        </div>
    )
}

export default Service;