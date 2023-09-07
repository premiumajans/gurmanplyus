import { ICategories, categories } from "@/const/categories";
import { toCapitalize } from "@/utils/toCapitalize";
import { nanoid } from "@reduxjs/toolkit";
import { headers } from "next/headers";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import React from "react";

function BreadCrumb() {
  const i18n = useTranslations("index");
  const headersList = headers();
  const locale = useLocale()
  const pathname = headersList.get("x-invoke-path") || "";
  const path = pathname.split("/")[2];

  const crumb = categories.find((catItem) => catItem.path === path);

  console.log(crumb);
  return (
    <div>
      <ul className="text-[14px] flex items-center w-full gap-[5px]">
        <li className="text-[#e31e24] font-bold ">
          <Link href={`/${locale}`}>{i18n("main")} {">"}</Link>
        </li>
        <li key={nanoid()} className="font-bold text-[#979797]">
          <Link href={`${crumb?.path}`}>
            {toCapitalize(`${i18n(crumb?.name)}`)}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default BreadCrumb;
