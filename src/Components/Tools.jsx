import React from "react";

const Tools = () => {
  return (
    <>
      <div className="container">
        <div className="row mx-center">
          <h1 className="text-light text-center">Tools</h1>{" "}
          <hr className="text-light" />
          <div className="col-md-4 text-center py-2">
            <button className="btn btn-light w-100 py-2 fw-bold fs-3 border border-primary border-5">
              JavaScript
            </button>{" "}
          </div>
          <div className="col-md-4 text-center py-2">
            <button className="btn btn-light w-100 py-2 fw-bold fs-3 border border-warning border-5">
              Express.js
            </button>{" "}
          </div>
          <div className="col-md-4 text-center py-2">
            <button className="btn btn-light w-100 py-2 fw-bold fs-3 border border-primary border-5">
              React.js
            </button>{" "}
          </div>
        </div>
        <div className="row mx-center">
          <div className="col-md-4 text-center py-2">
            <button className="btn btn-light w-100 py-2 fw-bold fs-3 border border-primary border-5">
              Node.js
            </button>{" "}
          </div>
          <div className="col-md-4 text-center py-2">
            <button className="btn btn-light w-100 py-2 fw-bold fs-3 border border-warning border-5">
              Next.js
            </button>{" "}
          </div>
          <div className="col-md-4 text-center py-2">
            <button className="btn btn-light w-100 py-2 fw-bold fs-3 border border-primary border-5">
              TypeScript
            </button>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tools;
