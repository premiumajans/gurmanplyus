"use client";
import { RootState } from "@/store";
import { menuClose } from "@/store/slices/LayoutSlice";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function HamburgerMenu() {
  const params = usePathname();

  const handleMenu = useCallback(() => {
    dispatch(menuClose());
  }, []);

  useEffect(() => {
    handleMenu();
    // document.body.classList.remove("overflow");
  }, [params, handleMenu]);

  const dispatch = useDispatch();

  const { isMenuActive } = useSelector((store: RootState) => store.layout);

  const activeClass = isMenuActive ? "right-0" : "-right-[100%]";

  return (
    <nav
      className={`bg-[#e31e24] flex  flex-col  md:hidden transition-all py-[30px] w-[100%] sm:w-[350px] md:w-[350px] absolute ${activeClass} top-[100px] h-[86vh]  font-bold text-[18px]`}
    >
      <ul className="flex container flex-col  items-center text-white gap-[30px]">
        <li>
          <Link href="/">Ana səhifə</Link>
        </li>
        <li>
          <Link href="/about">Haqqımızda</Link>
        </li>
        <li>
          <Link href="/manufacturers">İstehsalçılar</Link>
        </li>
        <li>
          <Link href="/products">Məhsullarımız</Link>
        </li>
        <li>
          <Link href="/partners">Tərəfdaşlar</Link>
        </li>
        <li>
          <Link href="/gallery">Foto qalereya</Link>
        </li>
        <li>
          <Link href="/contact">Bizimlə əlaqə</Link>
        </li>
      </ul>
    </nav>
  );
}

export default HamburgerMenu;
