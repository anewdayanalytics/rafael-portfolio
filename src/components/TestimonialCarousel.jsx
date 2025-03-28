import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { testimonials } from "../data/testimonials";

const TestimonialCarousel = ({ projects }) => {
  return (
    <div className="px-lg-5 position-relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          576: { slidesPerView: 1 },
          992: { slidesPerView: 1 },
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="py-4"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="d-flex flex-column align-items-center justify-content-center gap-3 testimonial-wrapper m-auto">
              <div className="testimonial-description">
                {testimonial.description}
              </div>
              <div className="testimonial-author">{testimonial.author}</div>
              <div className="testimonial-company">{testimonial.company}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Optional Progress Bar */}
      <div className="swiper-pagination position-relative mt-3"></div>
    </div>
  );
};

export default TestimonialCarousel;
