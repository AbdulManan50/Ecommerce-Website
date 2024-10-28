import React from "react";
import ProductsShop from "./ProductsShop";

export default function Shop() {
  return (
    <>
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
              </button>
            </div>
          </div>
          <div className="w-1/2 ">
            <img className="pt-5" src="/public/img/spcker.png" alt="" />
          </div>
        </div>
      </div>
      <div className="w-custom mx-auto py-10">
        <h1 className="text-5xl font-semibold font-Poppins">Explor Products</h1>
      </div>
      <div className="w-custom mx-auto pb-32">
        <ProductsShop/>
      </div>
    </>
  );
}
