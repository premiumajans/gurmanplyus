"use client";

import Image from "next/image";
import React from "react";
import logo from "../../assets/img/logo-white.png";
import logoBlack from "../../assets/img/logo.png";
import { usePathname } from "next/navigation";
import { categories } from "@/const/categories";
import Link from "next/link";
import MobileLogo from "../../assets/img/mobile-logo.png";

function Logo() {
  const pathname = usePathname();
  let control = categories.some((item) => item.path === pathname.split("/")[2]);
  
  return (
    <Link href="/az">
      <Image
        className="hidden sm:block max-w-[130px] sm:max-w-[220px] md:max-w-[300px]"
        src={control ? logoBlack : logo}
        alt="logo"
      />
      <Image className="block w-[43px] sm:hidden" src={MobileLogo} alt="logo"/>
    </Link>
  );
}

export default Logo;
