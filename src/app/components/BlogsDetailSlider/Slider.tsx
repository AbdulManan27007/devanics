"use client";
import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import BlogDetails from "../Blogs";
import Link from "next/link";

const Slider = () => {
  return (
    <div className="">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={3}
        spaceBetween={42}
        navigation
      >
        <SwiperSlide>
        <Link href="/BlogDetails">
            <BlogDetails
              imageSrc="/images/Blogs/blog01.png"
              heading="Migrating to Linear 101"
              date="Phoenix Baker • 19 Jan 2024"
              description="Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started."
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link href="/BlogDetails">
            <BlogDetails
              imageSrc="/images/Blogs/blog02.png"
              heading="Migrating to Linear 101"
              date="Phoenix Baker • 19 Jan 2024"
              description="Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started."
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link href="/BlogDetails">
            <BlogDetails
              imageSrc="/images/Blogs/blog03.png"
              heading="Migrating to Linear 101"
              date="Phoenix Baker • 19 Jan 2024"
              description="Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started."
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link href="/BlogDetails">
            <BlogDetails
              imageSrc="/images/Blogs/blog04.png"
              heading="Migrating to Linear 101"
              date="Phoenix Baker • 19 Jan 2024"
              description="Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started."
            />
                      </Link>

        </SwiperSlide>
        <SwiperSlide>
        <Link href="/BlogDetails">
            <BlogDetails
              imageSrc="/images/Blogs/blog05.png"
              heading="Migrating to Linear 101"
              date="Phoenix Baker • 19 Jan 2024"
              description="Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started."
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link href="/BlogDetails">
            <BlogDetails
              imageSrc="/images/Blogs/blog06.png"
              heading="Migrating to Linear 101"
              date="Phoenix Baker • 19 Jan 2024"
              description="Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started."
            />
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
