import React from "react";
import SectionTitle from "../atoms/Title";
import Image from "next/image";
import AboutUsImg from "../../assets/img/section-about-us.png";
import Button from "../atoms/Button";
import { useTranslations } from "next-intl";

function SectionAboutUs() {
  const i18n = useTranslations("index");
  return (
    <section className="flex flex-wrap items-center container pt-[50px] pb-[25px] gap-[40px]">
      <div className=" w-full lg:w-[calc((100%-40px)/3*2)]">
        <SectionTitle>{i18n("about")}</SectionTitle>
        <p className="mb-[16px]">{i18n("about-us-1")}</p>
        <p className="mb-[16px]">{i18n("about-us-2")}</p>
        <Button type="outlined" link="/products">
          {i18n("product")}
        </Button>
      </div>
      <div className="w-full lg:w-[calc((100%-40px)/3)]">
        <Image className="w-full" src={AboutUsImg} alt="gurman-image" />
      </div>
    </section>
  );
}

export default SectionAboutUs;
