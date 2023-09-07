import { headers } from "next/headers";
import Link from "next/link";
import React from "react";
import { BsTriangleFill } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa";

function LanguageSelect() {
  const headersList = headers();
  const pathname = headersList.get("x-invoke-path") || "";
  const lang = pathname.split("/")[1];
  const path = pathname.split("/")[2] ?? "";

  return (
    <div
      className="flex items-center  group relative rounded-full bg-[#e31e24] px-[25px]
     py-[11px]"
    >
      <span>{lang.toUpperCase()}</span>
      <FaAngleDown />
      <div className=" transition-all overflow-hidden max-h-[0] group-hover:max-h-max  w-[100%] left-0 rounded-[3px] dropdown-body absolute top-[41px] group-hover:pt-[20px]">
        <BsTriangleFill
          fill="#e31e24"
          className="absolute top-[9px] right-[10px]"
        />
        <ul className="bg-[#e31e24]">
          <li className=" hover:bg-red-500 border-b border-[#fff]">
            <Link className="p-[10px] inline-block" href={`/az/${path}`}>
              AZ
            </Link>
          </li>
          <li className=" hover:bg-red-500 border-b border-[#fff]">
            <Link className="p-[10px] inline-block" href={`/ru/${path}`}>
              RU
            </Link>
          </li>
          <li className=" hover:bg-red-500">
            <Link className="p-[10px] inline-block" href={`/en/${path}`}>
              ENG
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LanguageSelect;
