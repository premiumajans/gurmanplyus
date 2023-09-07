import React from "react";
import Button from "../atoms/Button";
import MainGalleryItem from "../atoms/MainGalleryItem";
import Title from "../atoms/Title";
import SectionManufacturersInner from "./SectionManufacturersInner";
import { useTranslations } from "next-intl";

function SectionManufacturers() {
  const i18n = useTranslations('index')
  return (
    <section className="container">
      <Title>{i18n("partners")}</Title>
      <Button type="outlined" link="/all">
        {i18n("show_partners")}
      </Button>
      <SectionManufacturersInner/>
    </section>
  );
}

export default SectionManufacturers;
