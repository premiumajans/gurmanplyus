import { useTranslations } from "next-intl";
import React from "react";
import WriteUsInner from "./ReviewInner";

function WriteUsModal() {
  const i18n = useTranslations("index");

  const titles = {
    title: i18n("review"),
    name: i18n("name"),
    phone: i18n("tel"),
    message: i18n("text_message"),
    attach_files: i18n("attach_files"),
    send: i18n("send"),
  };

  return <WriteUsInner {...titles} />;
}

export default WriteUsModal;
