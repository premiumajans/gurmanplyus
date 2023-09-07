import React from "react";
import { URL } from "@/const/api";
import Image from "next/image";

function GaleryItem({ item, onClick }: { item: string; onClick: () => void }) {
  return (
    <div className="w-full md:w-[calc((100%-20px)/2)] lg:w-[calc((100%-40px)/3)] relative h-[250px] border">
      <Image
        fill
        onClick={onClick}
        className="w-full absolute inset-0 h-full object-cover"
        src={`${item}`}
        alt="gallery"
      />
    </div>
  );
}

export default GaleryItem;
