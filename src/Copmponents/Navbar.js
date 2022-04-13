import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Navbar() {
  return (
    <div className=" container mt-3 Navbar">
      <div className="row  ">
        <div className="col-sm-12 col-md-10  d-flex justify-content-between w-100 align-items-center">
          <h3 className="my-1 Navbar__Brand">SHIVAM</h3>

          <div className="Navbar__Right">
            <ul className="my-1">
              <li className=" mx-sm-0 mx-md-3">
                <a
                  target="blank"
                  href="images/shivam.png"
                  download="shivam.resume"
                >
                  Resume
                </a>
              </li>
              <li className=" mx-sm-0 mx-md-3">
                <a target="blank" href="https://github.com/Shivam-dev925">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li className=" mx-sm-0 mx-md-3">
                <a target="blank" href=" https://twitter.com/SHIVAMC84334661">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li className=" mx-sm-0 mx-md-3">
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

export default Navbar;
