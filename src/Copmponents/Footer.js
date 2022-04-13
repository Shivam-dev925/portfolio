import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Footer() {
  return (
    <div className="container-fluid footer ">
      <div className="row">
        <div className="col-12 ">
          <h1
            data-aos="fade-up"
            data-aos-duration="500"
            style={{ fontSize: "4rem" }}
          >
            Contact with me{" "}
          </h1>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12">
          <div className="Navbar__Right">
            <ul className="my-1">
              <li data-aos="fade-up" data-aos-delay="200" className="mx-3">
                <a
                  target="blank"
                  href="images/shivam.png"
                  download="shivam.resume"
                >
                  Resume
                </a>
              </li>
              <li data-aos="fade-up" data-aos-delay="400" className="mx-3">
                <a target="blank" href="https://github.com/Shivam-dev925">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li data-aos="fade-up" data-aos-delay="600" className="mx-3">
                <a target="blank" href=" https://twitter.com/SHIVAMC84334661">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li data-aos="fade-up" data-aos-delay="800" className="mx-3">
                <a
                  target="blank"
                  href="https://www.linkedin.com/in/atheletic-india-058061218/"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
