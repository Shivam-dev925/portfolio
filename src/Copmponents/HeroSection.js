import React from "react";

function HeroSection() {
  return (
    <div className=" container-sm-fluid container hero">
      <div className="row h-100 ">
        <div className="col-8 ">
          <h1
            data-aos="fade-up"
            className="hero__title display-sm-1 display-md-5"
          >
            I creates{" "}
            <strong style={{ fontSize: "5.3rem", color: "violet" }}>
              Playful{" "}
            </strong>
            Experiences
          </h1>
          <p className="lead para mt-5" data-aos="fade-up" data-aos-delay="600">
            Shivam choudhary / Frontend developer
          </p>
        </div>
        <div className="col-4">
          <img
            data-aos="fade-up"
            data-aos-delay="400"
            className="hero__image "
            src="images/hero.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
