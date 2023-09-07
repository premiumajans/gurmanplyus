import GaleryContainer from "@/containers/GaleryContainer";
import { getData } from "@/service/getData";
import React from "react";

async function Gallery() {
  const data = await getData("gallery");

  return <GaleryContainer data={data} />;
}

export default Gallery;
