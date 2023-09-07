import Link from "next/link";

import { FaAngleDown } from "react-icons/fa";

import { BsTriangleFill } from "react-icons/bs";
import { ReactNode } from "react";
import { useTranslations } from "next-intl";

interface IHeader {
  menu: ReactNode;
  icon: ReactNode;
  logo: ReactNode;
  language: ReactNode;
}
function Header({ menu, icon, logo, language }: IHeader) {
  const i18n = useTranslations("index");
  return (
    <header className="absolute w-full top-0 z-[98]">
      <nav className="container flex-between pt-[30px]">
        {logo}
        <div className="flex items-center gap-[20px] text-[#fff] text-[13px]">
          <div className="write-us group relative">
            <button className="hidden md:block bg-[#e31e24] rounded-full px-[30px] py-[11px] ">
              {i18n("writeus").toUpperCase()}
            </button>
            <div className="dropdown-body w-[200px] items-end group-hover:pt-[30px] group-hover:h-[150px] absolute flex flex-col h-[0px] overflow-hidden gap-[30px] right-0">
              <button className="bg-[#e31e24]  whitespace-nowrap  relative rounded-full px-[30px] py-[11px] ">
                <BsTriangleFill
                  className="absolute -top-[11px] right-[24px]"
                  fill="#e31e24"
                />
                {i18n("review").toUpperCase()}
              </button>
              <button className="bg-[#e31e24] w-[180px] whitespace-nowrap  group-hover:translate-y-[70px] absolute rounded-full px-[30px] py-[11px] ">
                <BsTriangleFill
                  className="absolute -top-[11px] right-[24px]"
                  fill="#e31e24"
                />
                {i18n("cooperation").toUpperCase()}
              </button>
            </div>
          </div>
          {language}
          {icon}
        </div>
      </nav>
      {menu}
    </header>
  );
}

export default Header;
