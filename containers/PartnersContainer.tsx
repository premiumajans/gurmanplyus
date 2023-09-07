import Banner from "@/components/atoms/Banner";
import BreadCrumb from "@/components/atoms/BreadCrumb";
import Title from "@/components/atoms/Title";
import PageWrapper from "@/components/molecules/PageWrapper";
import PagesMenu from "@/components/molecules/PagesMenu";
import SectionPartners from "@/components/molecules/SectionPartners";
import { useTranslations } from "next-intl";
import React from "react";

function PartnersContainer() {
  const i18n = useTranslations("index");
  return (
    <PageWrapper breadcrumb={<BreadCrumb />} menu={<PagesMenu />}>
      <Title className="container">{i18n("distribution")}</Title>
      <Banner>
        <h3 className="text-[26px] mb-[16px]">{i18n("partners-1")}</h3>
        <p>{i18n("partners-2")}</p>
      </Banner>
      <SectionPartners title={<Title>Tərəfdaşlar</Title>} banner={true} />
    </PageWrapper>
  );
}

export default PartnersContainer;
