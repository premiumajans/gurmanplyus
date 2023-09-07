import BreadCrumb from "@/components/atoms/BreadCrumb";
import Title from "@/components/atoms/Title";
import PageWrapper from "@/components/molecules/PageWrapper";
import PagesMenu from "@/components/molecules/PagesMenu";
import Image from "next/image";
import React, { ReactNode } from "react";
import Img from "../assets/img/vuqar_ibrahimov.png";
import { useTranslations } from "next-intl";

function AboutContainer() {
  const i18n = useTranslations("index");
  return (
    <PageWrapper breadcrumb={<BreadCrumb />} menu={<PagesMenu  />}>
      <div className="container">
        <Title>{i18n("who_we")}</Title>
        <section className="flex-col flex lg:flex-row  items-start gap-[60px] pb-[50px]">
          <div className="w-full lg:order-1 order-2 lg:w-[calc((100%-60px)/3*2)] text-[20px]">
            <p className="pb-[16px]">{i18n("about-us-3")}</p>
            <p className="pb-[16px]">{i18n("about-us-4")}</p>
            <p className="pb-[16px]">{i18n("about-us-5")}</p>
          </div>
          <div className="w-full order-1  lg:w-[calc((100%-60px)/3)]">
            <Image className="w-[100%] mb-[10px]" src={Img} alt="image" />
            <h3 className="font-bold">İbrahimov Vüqar</h3>
            <p className="text-[#979797]">Qurman Plyus şirkətinin direktoru</p>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}

export default AboutContainer;
