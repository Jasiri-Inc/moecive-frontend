import React from "react";
import Footer from "components/Footer";

export default function Home() {
  return (
    <div>
      <main role="main">
      
        <div className="jumbotron">
          
          <div className="container ">
            <h1 className="display-3"> CIVE</h1>
            <p>
              <b>Welcome to College of Informatics and Virtual Education</b>
            </p>
            <p>
              <a
                className="btn btn-primary btn-lg"
                href="http://moecive.netlify.app/"
                role="button"
              >
                👽
              </a>
            </p>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h2>Electronics and Telecommunication Enginnering</h2>
              <p>asdasdsad</p>
              <p>
                <a
                  className="btn btn-secondary"
                  href="http://moecive.netlify.app/"
                  role="button"
                >
                  ✍🏽
                </a>
              </p>
            </div>
            <div className="col-md-4">
              <h2>Computer Science and Engineering</h2>
              <p>sdasdas</p>
              <p>
                <a
                  className="btn btn-secondary"
                  href="http://moecive.netlify.app/"
                  role="button"
                >
                  ✍🏽
                </a>
              </p>
            </div>
            <div className="col-md-4">
              <h2>Information System and Technology</h2>
              <p>sadsadsad</p>
              <p>
                <a
                  className="btn btn-secondary"
                  href="http://moecive.netlify.app/"
                  role="button"
                >
                  ✍🏽{" "}
                </a>
              </p>
            </div>
          </div>
          <hr />
        </div>{" "}
      </main>
      <Footer name="Bruno" />
    </div>
  );
}
