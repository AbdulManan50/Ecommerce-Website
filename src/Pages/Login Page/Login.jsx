import React from "react";

export default function Login() {
  return (
    <>
      <div className=" w-custom flex justify-center items-center py-20">
        <div className="w-1/2 bg-[#CBE4E8]">
          <img src="img/login.png" alt="" />
        </div>
        <div className="w-1/2 px-20 space-y-3">
          <div>
            <h1 className="text-3xl font-Poppins font-bold">
              Create an account
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
            <div>
              <input
                className="border-b-2 border-black w-full text-lg outline-none"
                type="text"
                placeholder="Password"
              />
            </div>
          </div>
          <div>
            <button className="text-white bg-secondary py-3 w-full  mt-10 font-Poppins rounded-md">
              Create Account
            </button>
          </div>
          <div>
            <button className="bg-transparent py-4 w-full mt-10 flex justify-center items-center gap-3 font-Poppins border-black border-[2px]">
              <img src="img/google.png" alt="" />
              Sign up with Google
            </button>
          </div>
          <div className="flex justify-center items-center gap-3 mt-10">
            <h1 className="font-Poppins">Already have account?</h1>
            <button className="underline font-Poppins ">Log in</button>
          </div>
        </div>
      </div>
    </>
  );
}
