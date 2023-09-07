import Banner from "@/components/atoms/Banner";
import BreadCrumb from "@/components/atoms/BreadCrumb";
import Title from "@/components/atoms/Title";
import PageProductsInner from "@/components/molecules/PageProductsInner";
import PageWrapper from "@/components/molecules/PageWrapper";
import PagesMenu from "@/components/molecules/PagesMenu";
import React from "react";
import { useTranslations } from "next-intl";
import PageProducts from "@/components/molecules/PageProducts";

function ProductContainer({ category }: { category: any }) {
  const i18n = useTranslations("index");
  return (
    <PageWrapper breadcrumb={<BreadCrumb />} menu={<PagesMenu />}>
      <div className="container">
        <Title>{i18n("product")}</Title>
      </div>
      <Banner>
        <h3 className="container text-[26px]">{i18n("product_sale")}</h3>
      </Banner>

      <PageProductsInner>
        {category.map((item: any) => (
          <PageProducts
            name={item.name}
            data={item.product}
            btnText={i18n("load_more")}
          >
          </PageProducts>
        ))}
        {/* <PageProducts name={"Kamar"} data=""  /> */}
      </PageProductsInner>
    </PageWrapper>
  );
}

export default ProductContainer;
