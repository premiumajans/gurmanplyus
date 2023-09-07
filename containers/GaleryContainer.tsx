import BreadCrumb from "@/components/atoms/BreadCrumb";
import Title from "@/components/atoms/Title";
import PageGaleryInner from "@/components/molecules/PageGaleryInner";
import PageWrapper from "@/components/molecules/PageWrapper";
import PagesMenu from "@/components/molecules/PagesMenu";
import { useTranslations } from "next-intl";
import React from "react";

function GaleryContainer({ data }: { data: any }) {
  const i18n = useTranslations("index");

  return (
    <PageWrapper breadcrumb={<BreadCrumb />} menu={<PagesMenu />}>
      <div className="container">
        <Title>{i18n("gallery")}</Title>
        <PageGaleryInner data={data} />
      </div>
    </PageWrapper>
  );
}

export default GaleryContainer;
