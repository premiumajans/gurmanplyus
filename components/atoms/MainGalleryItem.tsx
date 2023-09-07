import React from "react";
import Image from "next/image";
import Button from "./Button";
import { useTranslations } from "next-intl";
import { URL } from "@/const/api";

interface IMainGalleryItem {
  photo: string;
  name: string;
  link: string;
}
function MainGalleryItem({ photo, name, link }: IMainGalleryItem) {
  const i18n = useTranslations("index");
  return (
    <div className="gallery-item w-full  md:w-[calc((100%-20px)/2)]  xl:w-[calc((100%-40px)/3)]">
      <div className="relative w-[100%]  h-[240px] group">
        <Image
          fill
          className="w-[100%] border inset-0 absolute object-cover"
          src={`${URL}/${photo}`}
          alt="gallery-item"
        />
        <div className="gallery-item-overlay flex flex-center overflow-hidden absolute group-hover:top-0  top-[100%] bottom-0 left-0 right-0 bg-[#e31e24]">
          <Button type="contained" link={`${link}`}>
            {i18n("website")}
          </Button>
        </div>
      </div>
      <h3 className="font-bold mt-[20px]">{name}</h3>
    </div>
  );
}

export default MainGalleryItem;
