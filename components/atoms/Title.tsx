import { ReactNode } from "react";

interface ISectionTitle {
  children: ReactNode;
  className?: string;
}

function Title({ children, className }: ISectionTitle) {
  return (
    <h3
      className={`${className} text-[#e31e24] text-[35px] lg:text-[50px] font-bold mb-[25px]`}
    >
      {children}
    </h3>
  );
}

export default Title;
