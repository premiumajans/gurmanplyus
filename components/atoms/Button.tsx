import Link from "next/link";
import React, { ReactNode } from "react";

interface IOutlinedButton {
  children: ReactNode;
  link: string;
  type: string;
  className?: string;
}

function Button({
  children,
  link,
  className = "",
  type = "contained",
}: IOutlinedButton) {
  const btnClass = type === "outlined"
      ? "bg:red hover:bg-[#e31e24]  hover:text-[#fff] text-[#e31e24] border-[#e31e24]"
      : "bg-[#fff] hover:bg-[#e31e24] hover:text-[#fff] text-[#e31e24] border-[#fff]";

  return (
    <Link
      className={`btn border-[1px] ${className}  ${btnClass} inline-block transition-all duration-300 mt-[15px] rounded-full px-[17px] py-[11px] `}
      href={link}
    >
      <button>{children}</button>
    </Link>
  );
}

export default Button;
