import React, { ReactNode } from "react";
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import LanguageSelect from "@/components/atoms/LanguageSelect";
import Logo from "@/components/atoms/Logo";
import HamburgerMenu from "@/components/molecules/HamburgerMenu";
import HamburgerIcon from "@/components/atoms/HamburgerIcon";
import Header from "@/components/atoms/Header";
import { StorageProvider } from "@/store/provider";
import WriteUs from "@/components/molecules/ReviewInner";
import WriteUsModal from "@/components/molecules/ReviewModal";

interface IPagesLayout {
  children: ReactNode;
  params: any;
}

async function PagesLayout({ children, params }: IPagesLayout) {
  const locale = useLocale();

  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body >
        {/* <WriteUsModal /> */}
        <StorageProvider>
          <Header
            language={<LanguageSelect />}
            logo={<Logo />}
            menu={<HamburgerMenu />}
            icon={<HamburgerIcon />}
          />
          {children}
        </StorageProvider>
      </body>
    </html>
  );
}

export default PagesLayout;
