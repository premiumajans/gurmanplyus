import React, { ReactNode } from "react";

interface IPageWrapper {
  menu: ReactNode;
  children: ReactNode;
  breadcrumb: ReactNode;
}

function PageWrapper({ breadcrumb, menu, children }: IPageWrapper) {
  return (
    <main className="pt-[120px]">
      <div className="container">
        {breadcrumb}
        {menu}
      </div>
      {children}
    </main>
  );
}

export default PageWrapper;
