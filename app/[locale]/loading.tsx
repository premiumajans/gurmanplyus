import Image from "next/image";
import React from "react";
import Loader from "../../assets/img/loader.svg";

function loading() {
  return (
    <div className="h-[100vh] flex-center">
      <Image src={Loader} alt="loader" />
    </div>
  );
}

export default loading;
