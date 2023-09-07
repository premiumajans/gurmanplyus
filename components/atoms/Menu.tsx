import { categories } from "@/const/categories";
import { toCapitalize } from "@/utils/toCapitalize";
import { nanoid } from "@reduxjs/toolkit";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

function Menu() {
  const locale = useLocale();

  const i18n = useTranslations("index");
  return (
    <nav className=" hidden md:block bg-[#e31e24] py-[30px] font-bold text-[18px]">
      <ul className="flex container  flex-wrap items-center text-white gap-[30px]">
        <li>
          <Link href={`${locale}`}>{i18n("main")}</Link>
        </li>
        {categories.slice(1).map((item) => (
          <li key={nanoid()}>
            <Link href={`/${locale}/${item.path}`}>
              {toCapitalize(i18n(item.name))}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
