import React from "react";
import { IoMdStar } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";

const productsData = [
  {
    imgSrc: "img/controler.png",
    discount: "-40%",
    name: "HAVIT HV-G92 Gamepad",
    price: "$120",
    originalPrice: "$160",
    reviews: "88",
    rating: 5,
  },
  {
    imgSrc: "img/car.png",
    discount: "-40%",
    name: "HAVIT HV-G92 Gamepad",
    price: "$120",
    originalPrice: "$160",
    reviews: "88",
    rating: 5,
  },
  {
    imgSrc: "img/chair.png",
    discount: "-40%",
    name: "HAVIT HV-G92 Gamepad",
    price: "$120",
    originalPrice: "$160",
    reviews: "88",
    rating: 5,
  },
  {
    imgSrc: "img/shose.png",
    discount: "-40%",
    name: "HAVIT HV-G92 Gamepad",
    price: "$120",
    originalPrice: "$160",
    reviews: "88",
    rating: 5,
  },
  {
    imgSrc: "img/table.png",
    discount: "-40%",
    name: "HAVIT HV-G92 Gamepad",
    price: "$120",
    originalPrice: "$160",
    reviews: "88",
    rating: 5,
  },
];

export default function JustYouProductd() {
  return (
    <>
      <div className="flex justify-center items-center gap-7 pb-16">
        {productsData.map((products) => (
          <div key={products.id} className="w-[18%] mt-10">
            <div className="bg-primary relative h-[230px] flex justify-center items-center flex-col group">
              <div>
                <img className="mx-auto" src={products.imgSrc} alt="" />
              </div>
              <div>
                <div className="p-2 text-xl bg-white absolute top-3 right-3 rounded-full">
                  <FaRegHeart />
                </div>
                <div className="p-2 text-xl bg-white absolute top-16 right-3 rounded-full">
                  <IoEyeOutline />
                </div>
                <div className="w-14 py-1 bg-secondary rounded-md absolute top-5 left-3">
                  <h1 className="text-xs text-center  text-white font-Poppins">
                    {products.discount}
                  </h1>
                </div>
              </div>
              <div className="py-2 mt-10 bg-black w-full z-50 absolute bottom-0 opacity-0 text-white group-hover:opacity-100 text-center transition ease-linear duration-500 cursor-pointer">
                <h1 className="font-Poppins">Add To Cart</h1>
              </div>
            </div>

            <div className="pt-2">
              <h1 className="font-Poppins font-medium">{products.name}</h1>
            </div>
            <div class="flex items-center space-x-2">
              <span class="text-red-500 text-lg font-bold font-Poppins">
                {products.price}
              </span>
              <span class="text-gray-400 line-through font-Poppins">
                {products.originalPrice}
              </span>
            </div>
            <div className="flex items-center space-x-1 mt-2">
              <div className="flex items-center">
                <div className="text-[#FFAD33] flex">
                  {[...Array(products.rating)].map((_, index) => (
                    <IoMdStar key={index} />
                  ))}
                </div>
              </div>
              <span className="text-sm text-gray-500">
                ({products.reviews})
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
