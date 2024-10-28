import React from "react";

export default function Footer() {
  return (
    <>
      <div className="bg-black">
        <div className="w-custom mx-auto text-white  py-20 flex gap-10 font-Poppins">
          <div className="flex flex-col gap-5 w-1/4">
            <h1 className="font-Poppins text-2xl font-medium">Exclusive</h1>
            <p className="font-Poppins ">Subscribe</p>
            <p className="font-Poppins ">Get 10% off your first order</p>
          </div>
          <div className="w-1/4">
            <h1 className="font-Poppins text-2xl font-medium pb-3">Support</h1>
            <ul className="space-y-3">
              <li>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</li>
              <li>exclusive@gmail.com</li>
            </ul>
          </div>
          <div className="w-1/4">
            <h1 className="font-Poppins text-2xl font-medium pb-3">Account</h1>
            <ul className="space-y-3">
              <li>My Account</li>
              <li>Login / Register</li>
              <li>Cart</li>
              <li>Wishlist</li>
              <li>Shop</li>
            </ul>
          </div>
          <div className="w-1/4">
            <h1 className="font-Poppins text-2xl font-medium pb-3">Quick Link</h1>
            <ul className="space-y-3">
              <li>Privacy Policy</li>
              <li>Terms Of Use</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className=" border-white border-t-2 w-custom mx-auto">
            <h1 className="text-white font-Poppins text-center py-4">Copyright Rimel 2022. All right reserved</h1>
        </div>
      </div>
    </>
  );
}
