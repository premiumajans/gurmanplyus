"use client";
import React, { ReactNode, useState } from "react";
import { HiRefresh } from "react-icons/hi";
import { nanoid } from "@reduxjs/toolkit";
import { URL } from "@/const/api";
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";
import { RxCross1 } from "react-icons/rx";
import Image from "next/image";
import {
  MdPhotoSizeSelectActual,
  MdPhotoSizeSelectLarge,
} from "react-icons/md";

interface IPageProducts {
  data: any;
  name: any;
  btnText: string;
  children: ReactNode;
}

function PageProducts({ data, name, btnText, children }: IPageProducts) {
  const [limite, setLimite] = useState(8);
  const [loader, setLoader] = useState(false);
  const [activeImg, setActiveImg] = useState({ img: "", index: 0 });
  const [activeModal, setActiveModal] = useState(false);
  const [size, setSize] = useState(true);

  const images = data.map((item: any) => `${URL}/${item.photo}`);

  const handleLimite = async (parameter: boolean) => {
    if (parameter) {
      setLimite(limite + 8);
    } else {
      setLimite(8);
    }
  };

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
  // const bodyStyle = activeModal ? "overflow-hidden" : "overflow-y-auto";
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
  console.log(activeImg);

  return (
    <>
      <div className="relative">
        <h3 className="text-[#212529] mb-[25px] text-[30px] font-bold">
          {name}
        </h3>
        <div className="flex gap-[30px] md:gap-[20px] flex-wrap ">
          {images.slice(0, limite).map((item: any, index: any) => {
            return (
              <div
                key={nanoid()}
                onClick={() => handleView(item, index)}
                className="product rounded-[3px] relative w-full md:w-[calc((100%-20px)/2)] lg:w-[calc((100%-40px)/3)] xl:w-[calc((100%-60px)/4)]  h-[250px]"
              >
                <Image
                fill
                  className="w-full inset-0 h-full absolute object-cover"
                  src={`${item}`}
                  alt="product"
                />
              </div>
            );
          })}
        </div>
        <div className="flex-center my-[40px] gap-[20px]">
          {limite > data.length ? (
            <button
              onClick={() => handleLimite(false)}
              className="bg-[#fff] rounded-full  flex-center gap-[8px] text-[18px] font-semibold w-[200px]  hover:bg-[#e31e24] hover:text-[#fff] text-[#e31e24] border px-[17px] py-[11px] border-[#e31e24] "
            >
              {loader ? "loading" : "Daha az"}
              <HiRefresh />
            </button>
          ) : (
            <button
              onClick={() => handleLimite(true)}
              className="bg-[#fff]  rounded-full flex-center gap-[8px] text-[18px] font-semibold w-[200px]  hover:bg-[#e31e24] hover:text-[#fff] text-[#e31e24] border px-[17px] py-[11px] border-[#e31e24] "
            >
              {btnText} <HiRefresh />
            </button>
          )}
        </div>
      </div>
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
              className={`bg-[#fff] transition-all relative w-[80vw] h-[50vh] mx-auto ${ImgBoxStyle} `}
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
      {children}
    </>
  );
}

export default PageProducts;
