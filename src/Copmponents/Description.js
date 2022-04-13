import React from "react";

function Description() {
  return (
    <>
      <div
        style={{
          height: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="row section1 "
      >
        <div className="col-6 offset-2">
          <h1 style={{ color: "slate" }}>Passionate About my work</h1>
        </div>
        <div className=" d-none d-md-block  absolte "></div>
      </div>

      <div
        style={{
          height: "400px",
          display: "flex",
          padding: "2rem ",
          alignItems: "center",
        }}
        className="row d-flex justify-content-sm-center justify-content-md-end "
      >
        <div
          className=" col-sm-12 col-md-5  
         "
        >
          <p data-aos="fade-up" data-aos-delay="500" className="Section1-para">
            People can become developers from almost any background, whether
            they started programming at an early age or majored in computer
            science (CS), or they taught themselves how to code later in life as
            I am.
          </p>
        </div>
      </div>

      <div
        style={{ backgroundColor: "rgb(223, 223, 75)",height:"500px",alignItems:"center",display:"flex" }}
        className="row  d-flex  justify-content-sm-center justify-content-md-end "
      >
        <div className="col-sm12 col-md-5">
          <p id="p" data-aos="fade-up" data-aos-delay="400">
            Implementing web design and development principles to build stable
            software.Building websites and apps that are responsive and usable.
            Proficient in HTML, CSS, jQuery, JavaScript and Angualr; plus modern
            libraries and frameworks.
          </p>
        </div>
      </div>
    </>
  );
}

export default Description;
