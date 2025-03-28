import React from "react";
import Arrow from "../assets/arrow.svg";

const Card = ({ id, preHeading, heading, description, image, link }) => {
    return (
      <div className="card h-100"> {/* Add h-100 */}
        <img 
          src={image} 
          className="card-img-top object-fit-cover" 
          style={{ height: "200px" }}
          alt={heading}
        />
        <div className="card-body d-flex flex-column">
          <div className="pre-heading mb-2">{preHeading}</div>
          <h3 className="heading h5 mb-3">{heading}</h3>
          <p className="card-text flex-grow-1 mb-3">{description}</p>
          <div className="mt-auto">
            <a
              href={link}
              className="btn btn-outline-primary d-inline-flex align-items-center gap-2"
            >
              Case Study
              <img src={Arrow} alt="" width="16" />
            </a>
          </div>
        </div>
      </div>
    );
  };

export default Card;
