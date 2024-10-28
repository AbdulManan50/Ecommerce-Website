import React from "react";

export default function Singup() {
  return (
    <div className=" w-custom flex justify-center items-center py-20">
      <div className="w-1/2 bg-[#CBE4E8]">
        <img src="img/login.png" alt="" />
      </div>
      <div className="w-1/2 px-20 space-y-3">
        <div>
          <h1 className="text-3xl font-Poppins font-bold">
            Log in to Exclusive
          </h1>
        </div>
        <div>
          <p className="text-lg font-Poppins">Enter your details below</p>
        </div>
        <div className="space-y-10">
          <div>
            <input
              className="border-b-2 border-black w-full text-lg outline-none"
              type="text"
              placeholder="Name"
            />
          </div>
          <div>
            <input
              className="border-b-2 border-black w-full text-lg outline-none"
              type="text"
              placeholder="Email or Phone Number"
            />
          </div>
        </div>
        <div className="flex gap-10 items-center pt-10">
          <button className="text-white bg-secondary py-3 px-4 font-Poppins rounded-md">
            Create Account
          </button>
          <button className="text-secondary font-Poppins">Create Account</button>
        </div>
      </div>
    </div>
  );
}
