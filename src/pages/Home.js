// import React from "react";

// import Navbar from "../components/navbar/Navbar";
// import Hero from "../components/hero/Hero";
// import About from "../components/about/About";
// import Presence from "../components/presence/Presence";
// import Services from "../components/services/Services";
// import Programs from "../components/programs/Programs";
// import Quote from "../components/quote/Quote";
// import Footer from "../components/footer/Footer";


// const Home = ()=>{
//     return(
//         <section>
//             <Navbar />
//             <Hero />
//             <About />
//             <Presence />
//             <Services />
//             <Programs />
//             <Quote />
//             <Footer />
//         </section>
//     )
// }

// export default Home;


import React, { useState, useEffect } from 'react';
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Presence from "../components/presence/Presence";
import Services from "../components/services/Services";
import Programs from "../components/programs/Programs";
import Quote from "../components/quote/Quote";
import Footer from "../components/footer/Footer";
import LoadingScreen from "../components/loading/LoadingScreen"; // Adjust the path based on your project structure

const Home = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadingPercentage, setLoadingPercentage] = useState(0);

  useEffect(() => {
    const imageFolder = 'images';
    const imageUrls = [
      "about.jpg",
      "ads.jpg",
      "argentina.png",
      "arrow.png",
      "australia.png",
      "australia.png",
      "australia.png",
      "bangladesh.png",
      "brazil.png",
      "canada.png",
      "china.png",
      "five.jpg",
      "flag.png",
      "four.jpg",
      "ground.jpg",
      "hero-ad.png",
      "hero-demo.jpg",
      "map.gif",
      "six.jpg",
      "sub-hero-img.png",
    ];

    const imagePromises = imageUrls.map((imageUrl) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = `${process.env.PUBLIC_URL}/${imageFolder}/${imageUrl}`;
        img.onload = () => {
          resolve();
          setLoadingPercentage((prevPercentage) =>
            prevPercentage + (100 / imageUrls.length)
          );
        };
        img.onerror = resolve;
      });
    });

    Promise.all(imagePromises)
      .then(() => {
        setImagesLoaded(true);
      })
      .catch(() => {
        setImagesLoaded(true); 
      });
  }, []);

  return (
    <>
      {imagesLoaded ? (
        <section>
          <Navbar />
          <Hero />
          <About />
          <Presence />
          <Services />
          <Programs />
          <Quote />
          <Footer />
        </section>
      ) : (
        <LoadingScreen progress={loadingPercentage} />
      )}
    </>
  );
};

export default Home;
