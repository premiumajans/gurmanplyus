import React from "react";
import MainGalleryItem from "../atoms/MainGalleryItem";
import { nanoid } from "@reduxjs/toolkit";
import { getData } from "@/service/getData";

async function SectionManufacturersInner() {
  const { manufacturers } = await getData("manufacturer");

  return (
    <div className="flex flex-wrap justify-center md:justify-normal gap-[20px] py-[40px]">
      {manufacturers
        .sort((a: any, b: any) => b.id- a.id)
        .map((item: any) => (
          <MainGalleryItem {...item} key={nanoid()} />
        ))}
    </div>
  );
}

export default SectionManufacturersInner;
