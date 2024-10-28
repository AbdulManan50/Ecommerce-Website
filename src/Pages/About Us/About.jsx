import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { FaHeadset } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function About() {
  return (
    <>
      <div className="w-custom mx-auto flex py-20">
        <div className="w-1/2 p-10 flex justify-center  flex-col">
          <h1 className="font-Poppins font-bold text-4xl">Our Story</h1>
          <p className="font-Poppins pt-5">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>
          <p className="font-Poppins pt-3">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <div className="w-1/2">
          <img src="/public/img/aboutus.png" alt="" />
        </div>
      </div>
      <div className="w-custom mx-auto flex gap-10 pb-10">
        <div className="w-1/4 flex justify-center items-center flex-col p-5 border-primary border-[2px] rounded-md">
          <div className="bg-black p-4 rounded-full">
            <img src="/public/img/icon1.png" alt="" />
          </div>
          <h1 className="font-Poppins text-2xl font-bold pt-3">10.5k </h1>
          <p className="font-Poppins">Sallers active our site</p>
        </div>
        <div className="w-1/4 flex justify-center items-center flex-col p-5 border-primary border-[2px] rounded-md bg-secondary">
          <div className="bg-white p-4 rounded-full">
            <img src="/public/img/icon2.png" alt="" />
          </div>
          <h1 className="font-Poppins text-2xl font-bold pt-3 text-white">
            33k
          </h1>
          <p className="font-Poppins text-white">Mopnthly Produduct Sale</p>
        </div>
        <div className="w-1/4 flex justify-center items-center flex-col p-5 border-primary border-[2px] rounded-md">
          <div className="bg-black p-4 rounded-full">
            <img src="/public/img/icon3.png" alt="" />
          </div>
          <h1 className="font-Poppins text-2xl font-bold pt-3">45.5k</h1>
          <p className="font-Poppins">Customer active in our site</p>
        </div>
        <div className="w-1/4 flex justify-center items-center flex-col p-5 border-primary border-[2px] rounded-md">
          <div className="bg-black p-4 rounded-full">
            <img src="/public/img/icon1.png" alt="" />
          </div>
          <h1 className="font-Poppins text-2xl font-bold pt-3">25k</h1>
          <p className="font-Poppins">Anual gross sale in our site</p>
        </div>
      </div>
      <div className="w-custom mx-auto flex gap-10 pt-20">
        <div className="w-1/3">
          <div className="bg-primary">
            <img className="mx-auto pt-5" src="/public/img/person1.png" alt="" />
          </div>
          <div className="pt-3 space-y-2">
            <h1 className="text-2xl font-bold font-Poppins">Tom Cruise</h1>
            <p className="font-Poppins">Founder & Chairman</p>
            <div className="flex space-x-5 text-2xl">
              <IoLogoInstagram />
              <FaLinkedin />
              <FaXTwitter />
            </div>
          </div>
        </div>
        <div className="w-1/3">
          <div className="bg-primary">
            <img className="mx-auto pt-5" src="/public/img/person2.png" alt="" />
          </div>
          <div className="pt-3 space-y-2">
            <h1 className="text-2xl font-bold font-Poppins">Emma Watson</h1>
            <p className="font-Poppins">Managing Director</p>
            <div className="flex space-x-5 text-2xl">
              <IoLogoInstagram />
              <FaLinkedin />
              <FaXTwitter />
            </div>
          </div>
        </div>
        <div className="w-1/3">
          <div className="bg-primary">
            <img className="mx-auto pt-5" src="/public/img/person3.png" alt="" />
          </div>
          <div className="pt-3 space-y-2">
            <h1 className="text-2xl font-bold font-Poppins">Will Smith</h1>
            <p className="font-Poppins">Product Designer</p>
            <div className="flex space-x-5 text-2xl">
              <IoLogoInstagram />
              <FaLinkedin />
              <FaXTwitter />
            </div>
          </div>
        </div>
      </div>
      <div className="w-custom mx-auto flex py-20">
        <div className="w-1/3 flex gap-3 flex-col justify-center items-center">
          <div className="w-16 h-16 text-4xl flex justify-center items-center bg-black  text-white rounded-full">
            <TbTruckDelivery />
          </div>
          <div className="text-center">
            <h1 className="text-xl font-bold font-Poppins">
              FREE AND FAST DELIVERY
            </h1>
            <p className="font-Poppins">
              Free delivery for all orders over $140
            </p>
          </div>
        </div>
        <div className="w-1/3 flex gap-3 flex-col justify-center items-center">
          <div className="w-16 h-16 text-4xl flex justify-center items-center bg-black  text-white rounded-full">
            <FaHeadset />
          </div>
          <div className="text-center">
            <h1 className="text-xl font-bold font-Poppins">
              24/7 CUSTOMER SERVICE
            </h1>
            <p className="font-Poppins">Friendly 24/7 customer support</p>
          </div>
        </div>
        <div className="w-1/3 flex gap-3 flex-col justify-center items-center">
          <div className="w-16 h-16 text-4xl flex justify-center items-center bg-black  text-white rounded-full">
            <MdOutlineSecurity />
          </div>
          <div className="text-center">
            <h1 className="text-xl font-bold font-Poppins">
              MONEY BACK GUARANTEE
            </h1>
            <p className="font-Poppins">We reurn money within 30 days</p>
          </div>
        </div>
      </div>
    </>
  );
}
