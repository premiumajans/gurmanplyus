import Menu from "@/components/atoms/Menu";
import SectionAboutUs from "@/components/molecules/SectionAboutUs";
import SectionCare from "@/components/molecules/SectionCare";
import SectionNearby from "@/components/molecules/SectionNearby";
import SectionOurPartners from "@/components/molecules/SectionManufacturers";
import SectionPartners from "@/components/molecules/SectionPartners";
import Slider from "@/components/molecules/Slider";
import React from "react";
import Title from "@/components/atoms/Title";
import { useTranslations } from "next-intl";

function MainContainer() {
  const i18n = useTranslations("index");
  return (
    <main>
      <Slider />
      <Menu />
      <SectionAboutUs />
      <SectionPartners title={<Title>{i18n("distribution")}</Title>} />
      <SectionOurPartners />
      <SectionCare />
      <SectionNearby />
    </main>
  );
}

export default MainContainer;
