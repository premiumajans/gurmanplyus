import React, { ReactNode } from "react";

interface IPageProductsInner {
  children: ReactNode;
}

function PageProductsInner({ children }: IPageProductsInner) {
  return (
    <section className="container py-[50px]">
      {children}
    </section>
  );
}

export default PageProductsInner;
