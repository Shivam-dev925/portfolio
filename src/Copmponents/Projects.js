import React from "react";

function Projects({ img, projectName, para }) {
  return (
    <div className="container  pd-5 projects">
      <div className="row">
        <div className="col-12">
          <div className="row">
            <div className=" col-12 col-md-7 ">
              <img
                data-aos="fade-right"
                data-aos-delay="200"
                className="projects__image"
                src={img}
                alt=""
              />
            </div>
            <div className="col-12 col-md-5 mt-sm-5 mt-0 Projects__right">
              <h2 data-aos="fade-left" data-aos-delay="350">
                {projectName}
              </h2>
              <p data-aos="fade-left" data-aos-delay="400">
                {para}
              </p>
              <h2 data-aos="fade-left" data-aos-delay="450">
                Tools Used :
              </h2>
              <ul>
                <li
                  data-aos="fade-left"
                  data-aos-delay="500"
                  style={{ listStyleType: "circle" }}
                >
                  Html
                </li>
                <li
                  data-aos="fade-left"
                  data-aos-delay="550"
                  style={{ listStyleType: "circle" }}
                >
                  css
                </li>
                <li
                  data-aos="fade-left"
                  data-aos-delay="600"
                  style={{ listStyleType: "circle" }}
                >
                  javascript
                </li>
                <li
                  data-aos="fade-left"
                  data-aos-delay="650"
                  style={{ listStyleType: "circle" }}
                >
                  React
                </li>
                <li
                  data-aos="fade-left"
                  data-aos-delay="700"
                  style={{ listStyleType: "circle" }}
                >
                  firebase
                </li>
              </ul>
              <div data-aos="fade-left" data-aos-delay="750">
                <button>open site</button>
                <button style={{ marginLeft: "1rem" }}>
                  <a target="blank" style={{color:"black"}} href="https://github.com/Shivam-dev925/Netflix_clone">
                    open code{" "}
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
