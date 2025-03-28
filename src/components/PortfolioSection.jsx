import React from "react";
import Card from "./Card";
import { projects } from "../data/projects";

const PortfolioSection = () => {
  return (
    <div className="container py-5" id="portfolio">
      <div className="portfolio-section">
        <div className="d-flex flex-column align-items-center justify-content-center">
          <div className="title">Portfolio</div>
          <div className="description">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </div>
        </div>
        <div className="portfolio-items mt-4">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {" "}
            {/* Bootstrap 5 grid gutter */}
            {projects.map((project) => (
              <div className="col" key={project.id}>
                <Card {...project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
