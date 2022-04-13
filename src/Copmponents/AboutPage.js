import React from "react";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <div className="container-fluid AboutPage" id="Parallax">
      <div className="row d-flex flex-column">
        <div className="col-12 aboutSection">
          <div className="Description">
            <p className="lead">
              Hii, Shivam choudhary from Faridabad a Front end developer.. I
              love coding ,use Syntactic way and make code more Reusables
              <strong>Readable</strong>
              and <strong>Reusable</strong>
            </p>

            <button>
              <Link style={{ color: "white" }} to="/about-self">
                More about me
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
