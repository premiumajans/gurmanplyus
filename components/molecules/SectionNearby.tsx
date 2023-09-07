import React from "react";
import Title from "../atoms/Title";
import { useTranslations } from "next-intl";

function SectionNearby() {
  const i18n = useTranslations("index");
  return (
    <footer className="py-[50px]">
      <div className="container  lg:flex-row lg:flex lg:items-center gap-[40px]">
        <div className="w-full lg:w-[calc((100%-40px)/2)] mb-[50px]  ">
          <Title>{i18n("nearby")}</Title>
          <ul>
            <li>
              <span className="text-[#979797] font-bold mb-[5px]">
                {i18n("contacts")}
              </span>
              <p className="text-[14px] font-bold mb-[16px]">
                {i18n("nearby-1")}
              </p>
            </li>
            <li>
              <span className="text-[#979797] font-bold mb-[5px]">
                {i18n("our_adress")}
              </span>
              <p className="text-[14px] font-bold mb-[16px]">
                {i18n("nearby-2")}
              </p>
            </li>
            <li>
              <span className="text-[#979797] font-bold mb-[5px]">
                {i18n("call_us")}
              </span>
              <div className="flex gap-[10px] flex-wrap mb-[20px]">
                <p className="text-[14px] font-bold w-[calc((100%-20px)/2)] ">
                  (+994) 12 565-61-71
                </p>
                <p className="text-[14px] font-bold w-[calc((100%-20px)/2)] ">
                  (+994) 12 565-61-72
                </p>
                <p className="text-[14px] font-bold w-[calc((100%-20px)/2)] ">
                  (+994) 50 628-27-94
                </p>
                <p className="text-[14px] font-bold w-[calc((100%-20px)/2)] ">
                  (+994) 55 265 45 55
                </p>
              </div>
            </li>
            <li>
              <span className="text-[#979797] font-bold mb-[5px]">E-MAIL</span>
              <p className="text-[14px] font-bold mb-[16px]">
                office@gurmanplyus.az
              </p>
            </li>
          </ul>
        </div>
        <div
          id="footer-map"
          className=" w-full flex justify-center  lg:w-[calc((100%-40px)/2)] "
        >
          <div className="frame border-[15px] border-[#ff00006b] rounded-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.99865945531!2d49.85928958349267!3d40.408880482494986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d55f483215d%3A0x6579b75be1ed3d12!2sAhmad%20Rajabli%2C%20Baku!5e0!3m2!1str!2saz!4v1693224539658!5m2!1str!2saz"
              // style={{ border: "0" }}
              loading="lazy"
              className="rounded-full  w-[275px] h-[275px] sm:w-[450px] sm:h-[450px]"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default SectionNearby;
