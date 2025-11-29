import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./testimonial.css";
import { testimonials } from "../data.js";

export const Testimonial = () => {
  return (
    <section className="testimonials-section">
      <h1 className="testimonials-title">What Our Students Say</h1>

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        className="testimonial-wrapper"
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        id="slider"
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <div className="circles">
                <img src={t.image} alt={t.name} className="testimonial-img" />
              </div>

              <div className="stars">
                {Array.from({ length: 5 }).map((_, i) =>
                  i < t.stars ? (
                    <FaStar key={i} className="star filled" />
                  ) : (
                    <FaRegStar key={i} className="star empty" />
                  )
                )}
              </div>

              <p className="testimonial-feedback">“{t.feedback}”</p>
              <h4 className="testimonial-name">{t.name}</h4>
              <p className="testimonial-role">{t.role}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
