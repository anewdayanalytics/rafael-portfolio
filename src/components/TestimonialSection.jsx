import React from "react";
import { clients } from "../data/clients";
import TestimonialCarousel from "./TestimonialCarousel";

const TestimonialSection = () => {
  return (
    <div>
      <div className="container py-5 testimonial-section">
        <div className="d-flex flex-column align-items-center justify-content-center gap-3">
          <div className="title">Happy Clients</div>
          <div className="description">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </div>
        </div>

        <div className="d-flex gap-4 aling-items-center justify-content-center">
          <div>
            {clients.map((client) => (
              <img src={client.url} alt="" />
            ))}
          </div>
        </div>

        <div className="d-flex flex-column align-items-center justify-content-center gap-3 clients-testimonial">
          <div className="title">Testimonials</div>
          <div className="description">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </div>
        </div>
        <div className="mt-5">
          <TestimonialCarousel />
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
