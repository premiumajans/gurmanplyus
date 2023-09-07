import { ReactNode } from "react";

interface IBanner {
  children: ReactNode;
}
function Banner({ children }: IBanner) {
  return (
    <div className="bg-[#e31e24]  py-[50px] md:px-[50px] text-[#fff]">
      <div className="container">{children}</div>
    </div>
  );
}

export default Banner;
