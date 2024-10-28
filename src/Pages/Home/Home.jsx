import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FiArrowRight } from "react-icons/fi";
import Timmer from "./Timmer";
import Products from "./Products";
import ProcuctsExplor from "./ProcuctsExplor";
import { TbTruckDelivery } from "react-icons/tb";
import { FaHeadset } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import Bestselling from "./Bestselling";

export default function Home() {
  return (
    <>
      <div className="w-custom mx-auto flex">
        <div className="w-[17%] border-primary border-r-[2px] px-2 pt-8">
          <ul className="font-Poppins flex flex-col gap-3">
            <li className="font-semibold flex items-center justify-between">
              Woman’s Fashion <MdKeyboardArrowRight />
            </li>
            <li className="flex items-center justify-between">
              Men’s Fashion <MdKeyboardArrowRight />
            </li>
            <li>Electronics</li>
            <li>Home & Lifestyle</li>
            <li>Medicine</li>
            <li>Sports & Outdoor</li>
            <li>Baby’s & Toys</li>
            <li>Groceries & Pets</li>
            <li>Health & Beauty</li>
          </ul>
        </div>
        <div className="w-[83%] bg-black mt-8 ml-8 flex ">
          <div className="w-1/2  flex flex-col justify-center gap-3 pl-20">
            <div className="flex gap-3 items-center">
              <div>
                <img src="img/apple.png" alt="" />
              </div>
              <div>
                <h1 className="text-white font-Poppins">iPhone 14 Series</h1>
              </div>
            </div>
            <div>
              <h1 className="font-Poppins text-5xl leading-[60px] font-bold text-white">
                Up to 10% <br /> off Voucher
              </h1>
            </div>
            <div>
              <button className="text-white font-Poppins underline flex items-center gap-2">
                Shop Now
                <FiArrowRight />
              </button>
            </div>
          </div>
          <div className="w-1/2 ">
            <img className="pt-5" src="img/phone.png" alt="" />
          </div>
        </div>
      </div>
      <div className="w-custom mx-auto flex pt-20">
        <div>
          <div className="flex items-center gap-5">
            <div className="border-secondary border-l-[20px] py-5 rounded-md"></div>
            <div>
              <h1 className="font-Poppins">Today’s</h1>
            </div>
          </div>
          <div className="pt-5 flex items-center gap-8">
            <div>
              <h1 className="text-4xl font-semibold font-Poppins">
                Flash Sales
              </h1>
            </div>
            <div>
              <Timmer duration={7 * 24 * 60 * 60 * 1000} />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto w-custom ">
        <div className="pb-16">
          <Products />
        </div>
        <div className="flex justify-center border-primary border-b-2">
          <button className="text-white bg-secondary font-Poppins rounded-md py-3 px-8 mb-16">
            View All Products
          </button>
        </div>
      </div>
      <div className="w-custom mx-auto pt-20">
        <div className="flex items-center gap-5">
          <div className="border-secondary border-l-[20px] py-5 rounded-md"></div>
          <div>
            <h1 className="font-Poppins">Categories</h1>
          </div>
        </div>
        <div className="pt-5">
          <h1 className="text-4xl font-semibold font-Poppins">
            Browse By Category
          </h1>
        </div>
      </div>
      <div className="w-custom mx-auto ">
        <div className="pt-10 flex gap-10">
          <div className="p-5 border-primary border-[2px] w-[15%] flex flex-col items-center rounded-md">
            <img src="img/mobile.png" alt="" />
            <h1 className="font-Poppins">Phones</h1>
          </div>
          <div className="p-5 border-primary border-[2px] w-[15%] flex flex-col items-center rounded-md">
            <img src="img/compature.png" alt="" />
            <h1 className="font-Poppins">Computers</h1>
          </div>
          <div className="p-5 border-primary border-[2px] w-[15%] flex flex-col items-center rounded-md">
            <img src="img/watch.png" alt="" />
            <h1 className="font-Poppins">SmartWatch</h1>
          </div>
          <div className="p-5 border-primary text-white bg-secondary border-[2px] w-[15%] flex flex-col items-center rounded-md">
            <img src="img/camera.png" alt="" />
            <h1 className="font-Poppins">Camera</h1>
          </div>
          <div className="p-5 border-primary border-[2px] w-[15%] flex flex-col items-center rounded-md">
            <img src="img/headphone.png" alt="" />
            <h1 className="font-Poppins">HeadPhones</h1>
          </div>
          <div className="p-5 border-primary border-[2px] w-[15%] flex flex-col items-center rounded-md">
            <img src="img/game.png" alt="" />
            <h1 className="font-Poppins">Gaming</h1>
          </div>
        </div>
      </div>
      <div className="w-custom mx-auto pt-32">
        <div className="flex items-center gap-5">
          <div className="border-secondary border-l-[20px] py-5 rounded-md"></div>
          <div>
            <h1 className="font-Poppins">This Month</h1>
          </div>
        </div>
        <div className="pt-5">
          <h1 className="text-4xl font-semibold font-Poppins">
            Best Selling Products
          </h1>
        </div>
      </div>
      <div className="mx-auto w-custom ">
        <div className="pb-16">
          <Bestselling />
        </div>
      </div>
      <div className="w-custom mx-auto">
        <div className=" bg-black mt-20 flex ">
          <div className="w-1/2  flex flex-col justify-center gap-3 pl-20">
            <div className="flex gap-3 items-center">
              <div>
                <h1 className="text-white font-Poppins">iPhone 14 Series</h1>
              </div>
            </div>
            <div>
              <h1 className="font-Poppins text-5xl leading-[60px] font-bold text-white">
                Enhance Your <br /> Music Experience
              </h1>
            </div>
            <div>
              <button className="text-white font-Poppins py-2 px-6 flex items-center gap-2 bg-secondary">
                Buy now
                <FiArrowRight />
              </button>
            </div>
          </div>
          <div className="w-1/2 ">
            <img className="pt-5" src="img/spcker.png" alt="" />
          </div>
        </div>
      </div>
      <div className="w-custom mx-auto pt-24">
        <div className="flex items-center gap-5">
          <div className="border-secondary border-l-[20px] py-5 rounded-md"></div>
          <div>
            <h1 className="font-Poppins">This Month</h1>
          </div>
        </div>
        <div className="pt-5">
          <h1 className="text-4xl font-semibold font-Poppins">
            Best Selling Products
          </h1>
        </div>
      </div>
      <div className="mx-auto w-custom ">
        <div className="pb-16">
          <ProcuctsExplor />
        </div>
      </div>
      <div className="w-custom mx-auto flex pb-20">
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
