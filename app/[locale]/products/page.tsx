import ProductContainer from "@/containers/ProductContainer";
import { getData } from "@/service/getData";
import React from "react";

async function Products() {
  const { category } = await getData("category");

  return <div><ProductContainer category={category} /></div>;
}

export default Products;
