import { categories } from "@/const/categories";
import { nanoid } from "@reduxjs/toolkit";
import { useLocale, useTranslations } from "next-intl";
import { headers } from "next/headers";
import Link from "next/link";
import React from "react";

function PagesMenu() {
  const i18n = useTranslations("index");
  const locale = useLocale();
  const headersList = headers();
  const pathname = headersList.get("x-invoke-path") || "";
  const path = pathname.split("/")[2];
  const categories2 = categories.map((item, index) => {
    return index === 0 ? { ...item, path: `/${locale}` } : item;
  });

  return (
    <ul className="hidden md:flex pt-[35px] flex-wrap gap-[10px] pb-[40px]">
      {categories2.map((item) => {
        return item.path == path ? (
          <li key={nanoid()} className="page-menu-item active">
            <Link href={`${item.path}`}>
              {i18n(item.name)?.toLocaleUpperCase()}
            </Link>
          </li>
        ) : (
          <li key={nanoid()} className="page-menu-item">
            <Link href={`${item.path}`}>
              {i18n(item.name)?.toLocaleUpperCase()}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default PagesMenu;
