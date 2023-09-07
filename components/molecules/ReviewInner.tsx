"use client";
import { postForm } from "@/service/postForm";
import React, { useRef, useState } from "react";
import { BsCloudArrowUpFill } from "react-icons/bs";

interface IReviewInner {
  title: string;
  name: string;
  phone: string;
  message: string;
  attach_files: string;
  send: string;
}

function ReviewInner({
  title,
  name,
  phone,
  message,
  attach_files,
  send,
}: IReviewInner) {
  const FormRef = useRef();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleInfo = async (e: any) => {
    e.preventDefault();
    await postForm(form);
    console.log(form);
  };

  const inputHandler = (e: any) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  return (
    <section className="bg-[#fff] fixed inset-0 z-[99] flex-center  pt-[50px] pb-[80px]">
      <form onSubmit={handleInfo} className="container">
        <h3 className="text-[30px] font-bold mb-[40px]">{title}</h3>
        <div className="flex w-full gap-[20px] flex-wrap">
          <label className="border-b w-full border-[#000]">
            <h4 className="font-bold mb-[10px]">{name}</h4>
            <input
              onChange={inputHandler}
              type="text"
              name="name"
              className="bg-transparent w-full"
            />
          </label>
          <label className="border-b  w-full sm:w-[calc((100%-20px)/2)] border-[#000]">
            <h4 className="font-bold mb-[10px]">{phone}</h4>
            <input
              onChange={inputHandler}
              type="text"
              name="phone"
              className="bg-transparent w-full"
            />
          </label>
          <label className="border-b w-full sm:w-[calc((100%-20px)/2)] border-[#000]">
            <h4 className="font-bold mb-[10px]">E-mail</h4>
            <input
              onChange={inputHandler}
              type="text"
              name="email"
              className="bg-transparent w-full"
            />
          </label>
          <label className="border-b w-full border-[#000]">
            <h4 className="font-bold mb-[10px]">{message}</h4>
            <input
              onChange={inputHandler}
              type="text"
              name="message"
              className="bg-transparent w-full"
            />
          </label>
        </div>
        <div className="flex items-start gap-[30px] justify-between sm:flex-row sm:!items-center flex-col mt-[30px]">
          <label>
            <div className="flex items-center gap-[20px]">
              <div className="rounded-full  flex-center border w-[50px] h-[50px] border-[#e31e24] ">
                <BsCloudArrowUpFill fill="#e31e24" size={20} />
              </div>
              <p>{attach_files} Docx, exсel, pdf, jpg, png</p>
              <input
                onChange={inputHandler}
                type="file"
                name="file"
                className="absolute -left-[100%]"
              />
            </div>
          </label>
          <div className="w-full sm:w-auto  sm:text-left text-center">
            <button
              onClick={handleInfo}
              className="bg-[#e31e24] hover:bg-[rgb(255,0,0)] px-[17px] py-[11px] rounded-full text-[#fff] w-[150px]"
            >
              {send}
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default ReviewInner;
