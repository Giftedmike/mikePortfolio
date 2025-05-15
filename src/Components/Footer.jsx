import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="container text-center text-light mt-2 mb-3" id="contact">
        <button className="btn btn-primary py-2" type="button" disabled>
          <span
            className="spinner-grow spinner-grow-sm"
            role="status"
            aria-hidden="true"
          ></span>
          Contact Me By Clicking Mail Below...
        </button>{" "}
        <br />
        <button className="btn border border-light mt-2">
          <a
            href="mailto:michael.patrick.org.com"
            className="text-light text-decoration-none"
          >
            <img src="/email.jpg" alt="" />
          </a>
        </button>
      </footer>
    </>
  );
};

export default Footer;
