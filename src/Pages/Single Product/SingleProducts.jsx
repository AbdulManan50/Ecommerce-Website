import React, { useEffect, useState } from "react";
import { IoIosStar } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import Products from "../Home/Products";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function SingleProducts() {
  const { id } = useParams();
  const [singledata, setsingledata] = useState(null);


  useEffect(() => {
 
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setsingledata(response.data);
      })
      .catch((error) => {
        console.error("loading", error);
      });
  }, [id]);
  if (!singledata) {
    return <div>Loading...</div>;
  }
  
  return (
    <>
      <div className="w-custom mx-auto h-[20vh]"></div>
      <div className="w-custom mx-auto flex justify-between gap-10 pb-20">
        <div className="w-[45%] bg-primary flex justify-center items-center">
          <img
            className="w-[60%] h-[500px]"
            src={singledata.image}
            alt=""
          />
        </div>
        <div className="w-[40%] space-y-3 pt-5">
          <div>
            <h1 className="text-2xl font-Poppins font-semibold">
              {singledata.title}
            </h1>
          </div>
          <div className="flex gap-10">
            <div className="text-[#FFAD33] text-xl flex space-x-1">
            {[...Array(Math.round(singledata.rating.rate))].map(
                (_, index) => (
                  <IoIosStar key={index} />
                )
              )}
            </div>
            <h1 className="font-Poppins">
              {singledata.rating.count} Reviews | &nbsp;
              <span className="text-secondary font-Poppins">In Stock</span>
            </h1>
          </div>
          <div>
            <h1 className="text-3xl font-Poppins">${singledata.price}</h1>
          </div>
          <div className=" border-black border-b-[2px]">
            <p className="font-Poppins pb-3">
              {singledata.description}
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-lg font-medium">Colours:</span>
            <div className="w-6 h-6 bg-blue-400 rounded-full border-2 border-black"></div>
            <div className="w-6 h-6 bg-red-400 rounded-full border-2 border-transparent hover:border-black"></div>
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
          <div className="border-black border-[2px] rounded-md p-5">
            <div className="flex items-center gap-5 pb-3 border-black border-b-[1px]">
              <div>
                <TbTruckDelivery className="text-5xl" />
              </div>
              <div>
                <h1 className="text-lg font-Poppins font-semibold">
                  Free Delivery
                </h1>
                <p className="font-Poppins">
                  Enter your postal code for Delivery Availability
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 pt-5">
              <div>
                <img src="img/return.png" alt="" />
              </div>
              <div>
                <h1 className="text-lg font-Poppins font-semibold">
                  Return Delivery
                </h1>
                <p className="font-Poppins">
                  Free 30 Days Delivery Returns. Details
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-5 w-custom mx-auto">
        <div className="border-secondary border-l-[20px] py-5 rounded-md"></div>
        <div>
          <h1 className="font-Poppins">Related Item</h1>
        </div>
      </div>
      <div className="mx-auto w-custom pb-20">
        <Products />
      </div>
    </>
  );
}
