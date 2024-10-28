import React, { useState, useEffect } from "react";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export default function Header() {


  return (
    <>
      <div className="bg-black py-3">
        <div className="w-custom mx-auto flex justify-center items-center text-white">
          <h1 className="font-Poppins text-sm pr-2">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </h1>
          <h1 className="font-Poppins text-sm font-semibold underline">
            ShopNow
          </h1>
        </div>
      </div>
      <div className="border-primary border-b-[2px]">
        <div className="w-custom mx-auto flex justify-between items-center pt-7 pb-3 ">
          <div>
            <NavLink to="/">
              <h1 className="font-Poppins text-2xl font-bold">Exclusive</h1>
            </NavLink>
          </div>
          <div>
            <ul className="flex gap-10 font-Poppins">
              <NavLink to="/">
                <li>Home</li>
              </NavLink>
              <NavLink to="about">
                <li>About</li>
              </NavLink>
              <NavLink to="shop">
                <li>Shop</li>
              </NavLink>
              <NavLink to="Contactus">
                <li>Contact Us</li>
              </NavLink>
              <NavLink to="login">
                <li>Login</li>
              </NavLink>
              <NavLink to="singup">
                <li>Sign Up</li>
              </NavLink>
            </ul>
          </div>
          <div className="flex gap-5 items-center justify-center">
            <div className="bg-primary flex items-center gap-2 py-2 px-3 rounded-sm">
              <input
                className="bg-transparent px-3 outline-none"
                type="text"
                placeholder="What are you looking for?"
              />
              <div className="text-2xl font-light">
                <HiMiniMagnifyingGlass />
              </div>
            </div>
            <div className="flex justify-between items-center gap-5">
              <div className="text-2xl relative">
                <NavLink to="wishlist">
                  <FaRegHeart />
                </NavLink>
              </div>
              <div className="text-3xl">
                <NavLink to="Cart">
                  <IoCartOutline />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
