import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

import AboutPage from "./AboutPage";
import HeroSection from "./HeroSection";
import Loader from "./Loader";
import Projects from "./Projects";
import Footer from "./Footer";

function ProtectedRoutes() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    clearTimeout();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <HeroSection />

          <div className="container-fluid">
            <h1 className="my-5" style={{ textAlign: "center" }}>
              Projects
            </h1>
          </div>
          <Projects
            img="images/netflix3.jpg"
            projectName="Netflix clone"
            para="A web app 100% similar to the original netflix contains signin and signup methods available with firebase.. "
          />

          <AboutPage />

          <Footer />
        </>
      )}
    </>
  );
}

export default ProtectedRoutes;
