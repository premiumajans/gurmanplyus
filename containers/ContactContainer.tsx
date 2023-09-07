import BreadCrumb from "@/components/atoms/BreadCrumb";
import PageContactInner from "@/components/molecules/ContactInner";
import PageWrapper from "@/components/molecules/PageWrapper";
import PagesMenu from "@/components/molecules/PagesMenu";
import SectionNearby from "@/components/molecules/SectionNearby";
import { useTranslations } from "next-intl";

import React from "react";

function ContactContainer() {
  const i18n = useTranslations("index");
  
  const titles = {
    title: i18n("feedback_form"),
    name: i18n("name"),
    phone: i18n("tel"),
    message: i18n("text_message"),
    attach_files: i18n("attach_files"),
    send: i18n("send"),
  };
  return (
    <PageWrapper breadcrumb={<BreadCrumb />} menu={<PagesMenu />}>
      <PageContactInner {...titles} />
      <SectionNearby />
    </PageWrapper>
  );
}

export default ContactContainer;
