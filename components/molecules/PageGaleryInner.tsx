"use client";
import React, { useState } from "react";
import GaleryItem from "./GaleryItem";
import { nanoid } from "@reduxjs/toolkit";
import { getData } from "@/service/getData";
import {
  MdPhotoSizeSelectActual,
  MdPhotoSizeSelectLarge,
} from "react-icons/md";
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";
import { RxCross1 } from "react-icons/rx";
import { URL } from "@/const/api";
import Image from "next/image";

function PageGaleryInner({ data }: { data: any }) {
  const [activeImg, setActiveImg] = useState({ img: "", index: 0 });
  const [activeModal, setActiveModal] = useState(false);
  const [size, setSize] = useState(true);

  const images = data.map((item: any) => `${URL}/${item.photo}`);
  console.log(images);

  const actionSlide = (action: string) => {
    const currentIndex: number = activeImg.index;
    let nextControl = action === "next" && currentIndex < images.length - 1;
    let prevControl = action === "prev" && currentIndex > 0;
    let step = 0;
    if (nextControl) step = 1;
    else if (prevControl) step = -1;
    setActiveImg({
      img: images[currentIndex + step],
      index: currentIndex + step,
    });
  };
  const ImgBoxStyle = size
    ? "lg:h-[500px] lg:w-[390px]"
    : "lg:w-[550px] lg:h-[600px]";

  const handleView = (img: string, index: number) => {
    if (!activeModal) setActiveModal(true);
    setActiveImg({ img: img, index: index });
    // document.body.classList.add("overflow-hidden");
  };

  const handleClose = () => {
    setActiveModal(false);
    // document.body.classList.remove("overflow-hidden");
  };
  const handleSize = () => {
    setSize((size) => !size);
  };

  return (
    <div id="photos" className="flex items-center flex-wrap gap-[20px]">
      {images.map((item: any, index: number) => (
        <GaleryItem
          onClick={() => handleView(item, index)}
          key={nanoid()}
          item={item}
        />
      ))}
      {activeModal && (
        <div className="custom-modal text-white z-[99] inset-0 w-full flex-center left-0 fixed top-0">
          <button
            className={`absolute left-[20px] top-[50%] ${
              size ? "md:left-[20%]" : "md:left-[12%]"
            }`}
            onClick={() => actionSlide("prev")}
          >
            <LiaAngleLeftSolid fill="#444" size={40} />
          </button>
          <div className="bg-[#000] rounded-[3px] overflow-hidden  flex flex-col lg:flex-row">
            <div
              className={`bg-[#fff] relative transition-all w-[80vw] h-[50vh] mx-auto ${ImgBoxStyle} `}
            >
              <Image
                fill
                className="w-[100%] absolute inset-0 h-[100%] object-contain"
                src={activeImg?.img}
                alt="photo"
              />
            </div>
            <div className="w-[90%] md:w-[400px]"></div>
          </div>
          <button
            className={`absolute top-[50%] right-[20px] ${
              size ? "md:right-[20%]" : "md:right-[12%]"
            }`}
            onClick={() => actionSlide("next")}
          >
            <LiaAngleRightSolid fill="#444" size={40} />
          </button>
          <div className="absolute top-[40px] text-[#777] flex items-center gap-[10px] right-[70px]">
            <button className="hidden md:block" onClick={handleSize}>
              {size ? (
                <MdPhotoSizeSelectLarge size={20} />
              ) : (
                <MdPhotoSizeSelectActual size={20} />
              )}
            </button>
            <button onClick={handleClose} className="">
              <RxCross1 />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PageGaleryInner;
