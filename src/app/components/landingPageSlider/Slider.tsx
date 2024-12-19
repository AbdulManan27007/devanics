import React, { useRef } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper as SwiperCore } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Card from '../landingPageSlider/testimonial';

const SwiperCarousel = () => {
  const swiperRef = useRef<SwiperCore | null>(null);

  return (
    <div>
      {/* Custom navigation buttons */}
      <div className="flex justify-between mb-4">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="bg-blue-500 text-white px-4 py-4 rounded-full"
        >
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="bg-blue-500 text-white px-4 py-4 rounded-full"
        >
        </button>
      </div>

      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
      >
        {[...Array(4)].map((_, index) => (
          <SwiperSlide key={index}>
            <Card />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperCarousel;
