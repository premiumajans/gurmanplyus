"use client";
import { menuToggle } from "@/store/slices/LayoutSlice";
import React from "react";
import { HiMiniBars3 } from "react-icons/hi2";
import { useDispatch } from "react-redux";
function HamburgerIcon() {
  const dispatch = useDispatch();
  const handleMenu = () => {
    dispatch(menuToggle());
    // document.body.classList.toggle("overflow")
  };
  return (
    <HiMiniBars3
      onClick={handleMenu}
      className="block md:hidden text-[30px]"
      fill="#e31e24"
    />
  );
}

export default HamburgerIcon;
