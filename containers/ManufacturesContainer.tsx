import BreadCrumb from "@/components/atoms/BreadCrumb";
import Title from "@/components/atoms/Title";
import PageWrapper from "@/components/molecules/PageWrapper";
import PagesMenu from "@/components/molecules/PagesMenu";
import SectionManufacturersInner from "@/components/molecules/SectionManufacturersInner";
import { useTranslations } from "next-intl";
import React from "react";

function ManufacturesContainer() {
  const i18n = useTranslations("index")
  return (
    <PageWrapper breadcrumb={<BreadCrumb />} menu={<PagesMenu />}>
      <div className="container">
        <Title>{i18n("partners")}</Title>
        <SectionManufacturersInner />
      </div>
    </PageWrapper>
  );
}

export default ManufacturesContainer;
