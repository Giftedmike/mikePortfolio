import React from "react";

const Experience = () => {
  return (
    <>
      <div className="container text-center ps-5">
        <div className="row">
          <h1 className="text-center text-light pb-2">Work Experience</h1>
          <div className="col-md-4 pb-3">
            <div className="card" style={{ width: "18rem" }}>
              <img src="/fidelity.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">
                  I.T Support <br /> Staff - Volunteering{" "}
                </h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 pb-3">
            <div className="card" style={{ width: "18rem" }}>
              <img src="/sqi.jpeg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">
                  Software Engineer Student Internship
                </h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 pb-3">
            <div className="card" style={{ width: "18rem" }}>
              <img src="/uog.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Junior Database Programmer</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
