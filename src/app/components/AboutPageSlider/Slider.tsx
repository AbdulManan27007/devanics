"use client";
import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Card from "./cardAbout";

const SwiperCarousel = () => {
  return (
    <div className="">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={3}
        navigation
      >
        <SwiperSlide>
          <Card
            numbers="1"
            title="Satisfaction"
            description="We prioritize our clients' needs and continually aim to exceed their expectations with each project."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            numbers="2"
            title="Excellence"
            description="We are committed to delivering high-quality software solutions through best practices and continuous improvement."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            numbers="3"
            title="Teamwork"
            description="We foster collaboration and clear communication to achieve shared goals and successful outcomes"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            numbers="4"
            title="Integrity"
            description="We are committed to delivering high-quality software solutions through best practices and continuous improvement."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            numbers="5"
            title="Sustainability"
            description="We are committed to reducing our environmental footprint and advocating for sustainable practices."
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperCarousel;
