import React from "react";
import SectionTitle from "../atoms/Title";
import { useTranslations } from "next-intl";

function SectionCare() {
  const i18n = useTranslations("index");
  return (
    <section id="care" className="text-[18px] py-[20px]">
      <div className="container">
        <SectionTitle>{i18n("cares")}</SectionTitle>
        <p className="mb-[16px]">{i18n("care-1")}</p>
        <p>{i18n("care-2")}</p>
      </div>
    </section>
  );
}

export default SectionCare;
