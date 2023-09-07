"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { getData } from "@/service/getData";
import { URL } from "@/const/api";
import { nanoid } from "@reduxjs/toolkit";
import Image from "next/image";

export default function Slider() {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const { slider } = await getData("slider");
      setData(slider);
    })();
  }, []);
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="w-[100%] realtive !h-[80vh] md:!h-[97vh] lg:!h-[100vh]">
          {/* <video className="w-[100vw]" loop autoPlay muted>
            <source src="https://demo.gurmanplyus.az/images/video.mp4" />
          </video> */}
        </SwiperSlide>

        {data.map((item: any) => (
          <SwiperSlide
            key={nanoid()}
            className="w-[100%] realtive !h-[80vh] md:!h-[97vh] lg:!h-[100vh]"
          >
            <Image
              fill
              priority
              src={`${URL}/${item.photo}`}
              className="w-[100%] inset-0 absolute !h-[100%] object-cover "
              alt="slider-image"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
