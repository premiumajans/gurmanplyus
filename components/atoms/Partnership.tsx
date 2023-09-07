import React from "react";
import { FaRegDotCircle } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { toCapitalize } from "@/utils/toCapitalize";

function SectionPartnersCondition() {
  const i18n = useTranslations("index");
  return (
    <div className="py-[48px]">
      <h3 className="text-[30px] mb-[8px] font-bold">
        {i18n("how_be_partner")}
      </h3>
      <p className="mb-[24px]">
        Bizimlə işləmək sizə rahat olacaq! Yerləşdiyiniz bölgədən və əməkdaşlıq
        şərtlərindən asılı olaraq sizə məhsul tədarükünün ən yaxşı variantlarını
        təklif edəcəyik.
      </p>
      <h4 className="text-[30px] pb-[16px]">
        4:{"  "} {toCapitalize(i18n("steps_partner"))}
      </h4>
      <ul className="partnership   border-l-[2px] font-bold flex flex-col pl-[50px] gap-[30px] border-[#e31e24]">
        <li className="relative">
          <div className="absolute rounded-full bg-[#fff] top-0 -left-[60px]">
            <FaRegDotCircle size={20} fill="#e31e24" />
          </div>
          <p>{i18n("call_to_manager")} </p>
          <span> (+99412) 565-61-71</span>
        </li>
        <li className="relative">
          <div className="absolute rounded-full bg-[#fff] top-0 -left-[60px]">
            <FaRegDotCircle size={20} fill="#e31e24" />
          </div>
          <p>{i18n("channels_of_partnership")}</p>
        </li>
        <li className="relative">
          <div className="absolute rounded-full bg-[#fff] top-0 -left-[60px]">
            <FaRegDotCircle size={20} fill="#e31e24" />
          </div>
          <p>{i18n("commercial_terms")}</p>
        </li>
        <li className="relative">
          <div className="absolute rounded-full bg-[#fff] bottom-0 -left-[60px]">
            <FaRegDotCircle size={20} fill="#e31e24" />
          </div>
          <p>{i18n("sign_contract")}</p>
        </li>
      </ul>
    </div>
  );
}

export default SectionPartnersCondition;
