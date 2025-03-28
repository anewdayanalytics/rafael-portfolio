import React from "react";
import Arrow from "../assets/arrow-white.svg";

const DiscussProjectSection = () => {
  return (
    <div className="discuss-project-section">
      <div className="container">
        <div className="d-flex flex-column align-items-center justify-content-center">
          <div className="title">Do you have Project Idia?</div>
          <div className="title">Let's discuss your project!</div>
          <div className="description mt-5">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </div>
        </div>
        <div className="mt-4 d-flex justify-content-start justify-content-md-center">
          <a href="" className="btn btn-primary px-4 d-flex align-items-center gap-2">
            Let’s work Together <img src={Arrow} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DiscussProjectSection;
