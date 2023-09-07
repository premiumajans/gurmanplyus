import React, { ReactNode } from "react";
import { online_points, points } from "@/const/sales-point";
import Image from "next/image";
import Partnership from "../atoms/Partnership";
import { nanoid } from "@reduxjs/toolkit";
import { useTranslations } from "next-intl";

interface ISectionDistrubition {
  title?: ReactNode;
  banner?: ReactNode;
}

function SectionDistrubition({ title, banner = false }: ISectionDistrubition) {
  const i18n = useTranslations("index");

  return (
    <section id="partners" className="container py-[20px]">
      {!banner && title}
      <div className="map">
        {!banner && (
          <>
            <p className="font-bold mb-[16px]">{i18n("partners-1")}</p>
            <p className="mb-[16px]">{i18n("partners-2")}</p>
          </>
        )}
        <h3 className="font-bold text-[20px] mb-[20px]">{i18n("you_give")}</h3>
        <ul className="my mb-[20px]-[16px] items-start flex flex-col gap-[20px] md:flex-row ">
          <li className="w-full md: md:w-[calc((100%-60px)/3)]">
            <span className="text-[40px] font-bold leading-[1.5] mb-[16px] inline-block">
              01
            </span>
            <p>{i18n("partners-3")}</p>
          </li>
          <li className="w-full md:w-[calc((100%-60px)/3)]">
            <span className="text-[40px] font-bold leading-[1.5] mb-[16px] inline-block">
              02
            </span>
            <p>{i18n("partners-4")}</p>
          </li>
          <li className="w-full md:w-[calc((100%-60px)/3)]">
            <span className="text-[40px] font-bold leading-[1.5] mb-[16px] inline-block">
              03
            </span>
            <p>{i18n("partners-5")}</p>
          </li>
        </ul>
        {banner && <Partnership />}
        <div className="my-[20px] pt-[20px]">
          <h3 className="font-bold text-[20px] md:text-[35px] mb-[20px]">
            {i18n("shops")}
          </h3>
          <div className="flex items-center flex-wrap gap-[20px]">
            {points.map((item) => (
              <div
                key={nanoid()}
                className="w-[55px] object-cover h-[50px] relative"
              >
                <Image
                  fill
                  className="absolute inset-0"
                  src={item}
                  alt="point"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="my-[20px]">
        <h3 className="font-bold text-[20px] md:text-[35px] mb-[20px]">
          {i18n("online-shops")}
        </h3>
        <div className="flex gap-[20px]  items-center">
          {online_points.map((item) => (
            <div className="w-[45px] relative h-[45px]">
              <Image
                fill
                key={nanoid()}
                className="rounded-full absolute inset-0"
                src={item}
                alt="online-point"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SectionDistrubition;
