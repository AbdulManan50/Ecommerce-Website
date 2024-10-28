import React from "react";
import { IoIosStar} from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";

export default function Popup({ closePopup, product }) {
  return (
    <>
      <div className="w-[1280px] mx-auto flex justify-center items-center relative bg-white p-8 shadow-xl h-[80vh]">
        <div className="absolute right-2 top-2  ">
          <RxCrossCircled
          onClick={closePopup}
            className="text-3xl font-semibold cursor-pointer"
          />
        </div>
        <div className="w-1/2 ">
          <img className="w-[50%] mx-auto" src={product.image} alt="" />
        </div>
        <div className="w-1/2 space-y-3">
          <div>
            <h1 className="text-2xl font-Poppins font-semibold">
             {product.title}
            </h1>
          </div>
          <div className="flex gap-10">
            <div className="text-[#FFAD33] text-xl flex space-x-1">
                    {[...Array(Math.round(product.rating.rate))].map(
                      (_, index) => (
                        <IoIosStar key={index} />
                      )
                    )}
            </div>
            <h1 className="font-Poppins">
              {product.rating.count} Reviews |
              <span className="text-secondary font-Poppins">In Stock</span>
            </h1>
          </div>
          <div>
            <h1 className="text-3xl font-Poppins">$120</h1>
          </div>
          <div className=" border-black border-b-[2px]">
            <p className="font-Poppins pb-3">
            {product.description}
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-lg font-medium">Size:</span>
            <button className="w-8 h-8 border rounded-lg flex items-center justify-center font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500">
              XS
            </button>
            <button className="w-8 h-8 border rounded-lg flex items-center justify-center font-semibold focus:outline-none">
              S
            </button>
            <button className="w-8 h-8 border rounded-lg bg-secondary text-white flex items-center justify-center font-semibold focus:outline-none">
              M
            </button>
            <button className="w-8 h-8 border rounded-lg flex items-center justify-center font-semibold focus:outline-none">
              L
            </button>

            <button className="w-8 h-8 border rounded-lg flex items-center justify-center font-semibold focus:outline-none">
              XL
            </button>
          </div>
          <div className="flex gap-x-10 pt-3 pb-5">
            <div>
              <button className="text-2xl font-Poppins px-3 py-1 border-black border-[2px]  rounded-l-md">
                -
              </button>
              <button className="text-2xl font-Poppins px-10 py-1 border-black border-t-[2px] border-b-[2px]">
                2
              </button>
              <button className="text-2xl font-Poppins px-3 py-1 border-secondary border-[2px] bg-secondary text-white  rounded-r-md">
                +
              </button>
            </div>
            <div className="flex justify-center items-center gap-5">
              <button className="py-2 bg-secondary text-white px-8 font-Poppins rounded-md">
                Buy Now
              </button>
              <button className="px-2 py-2 border-black border-[2px] rounded-md text-xl">
                <FaRegHeart />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
