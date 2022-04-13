import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Education() {
  const AboutBox = styled.div`
    min-height: 100vh;
    background: black;
    border: none;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  `;
  return (
    <AboutBox>
      <div data-aos="fade-up" data-aos-delay="500" className="  details">
        <div className="header1">
          <h1 style={{ color: "slate", marginTop: "-3rem" }}>
            Short facts about me
          </h1>
        </div>
        <div className="left">
          <h4 className=" left_head pro">PROFILE</h4>
          <p>Frontend Developer</p>
          <h4 className=" left_head socpro"> SOCIAL PROFILES</h4>
          <div className="social_icons">
            <a
              href="http://github.com/Shivam-dev925"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="brand_icons" icon={faGithub} />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="brand_icons" icon={faInstagram} />
            </a>
            <a
              href="https://www.linkedin.com/feed/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="brand_icons" icon={faLinkedin} />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="brand_icons" icon={faFacebook} />
            </a>
          </div>
          <h4 className=" left_head skl">SKILLS</h4>
          <div className="my_skills">
            <div className="Html graph">85%</div>
            <div className=" Javascript graph">70%</div>
            <div className=" React graph">65%</div>
            <div className=" css graph">70%</div>
            <div className=" Tailwind graph">20%</div>
          </div>

          <h4 className=" left_head contct">CONTACT</h4>
          <div className="gmail">chshivam815@gmail.com</div>
        </div>
        <div className="right">
          <p>
            Hello, my name is shivam choudhary. I'm a 21 year old from Uttar
            Pradesh ,Dist. BIJNOR. <br /> <br />
            let me give you a short introduction of myself, with all the
            keyfacts. If you want to know more about me just further explore
            this page. Thanks alot for visiting.
          </p>
          <p style={{ marginTop: "30px", color: "black", opacity: "0.9" }}>
            ind Regards,
          </p>
          <h1>signature</h1>
        </div>
      </div>
    </AboutBox>
  );
}

export default Education;
