import React from "react";
import { useSelector } from "react-redux";

export default function Checkout() {
  const cartItems = useSelector((state) => state.cart.items);

  const cartTotal = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  return (
    <>
      <div className="h-[20vh]"></div>
      <div className="w-custom mx-auto pb-20 flex justify-between items-center">
        <div className="w-[40%] p-10 shadow-xl rounded-3xl">
          <div>
            <h1 className="text-3xl font-Poppins font-bold pb-5">
              Billing Details
            </h1>
          </div>
          <div className="space-y-8">
            <div>
              <label htmlFor="">First Name</label>
              <input
                type="text"
                className="outline-none w-full py-2 px-2 bg-primary"
              />
            </div>
            <div>
              <label htmlFor="">Company Name</label>
              <input
                type="text"
                className="outline-none w-full py-2 px-2 bg-primary"
              />
            </div>
            <div>
              <label htmlFor="">Street Address*</label>
              <input
                type="text"
                className="outline-none w-full py-2 px-2 bg-primary"
              />
            </div>
            <div>
              <label htmlFor="">Apartment, floor, etc. (optional)</label>
              <input
                type="text"
                className="outline-none w-full py-2 px-2 bg-primary"
              />
            </div>
            <div>
              <label htmlFor="">Town/City*</label>
              <input
                type="text"
                className="outline-none w-full py-2 px-2 bg-primary"
              />
            </div>
            <div>
              <label htmlFor="">Phone Number*</label>
              <input
                type="text"
                className="outline-none w-full py-2 px-2 bg-primary"
              />
            </div>
            <div>
              <label htmlFor="">Email Address*</label>
              <input
                type="text"
                className="outline-none w-full py-2 px-2 bg-primary"
              />
            </div>
          </div>
          <div class="flex items-center space-x-2 pt-5">
            <input
              type="checkbox"
              id="save-info"
              class="w-6 h-6  focus:ring-0 focus:outline-none rounded"
            />
            <label for="save-info" class="text-sm font-Poppins">
              Save this information for faster check-out next time
            </label>
          </div>
        </div>
        <div className="w-[50%]">
          <div className="space-y-5">
            {cartItems.map((item) => (
              <div className="flex justify-between items-center border-[#868585] border-b-[1px]" key={item.id}>
                <div className="flex items-center gap-10 w-[80%]">
                  <img className="w-[8%] mb-3" src={item.image} alt={item.title} />
                  <h1 className="font-Poppins">{item.title}</h1>
                </div>
                <div className="w-[20%]">
                  <h1 className="font-Poppins text-base text-red-500 text-end ">${item.price}</h1>
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-7">
            <div className="flex justify-between items-center border-black border-b-[2px] pb-2 pt-20">
              <h1 className="font-Poppins text-lg">Subtotal:</h1>
              <h1 className="font-Poppins text-lg">${cartTotal.toFixed(2)}</h1>
            </div>
            <div className="flex justify-between items-center border-black border-b-[2px] pb-2">
              <h1 className="font-Poppins text-lg">Shipping:</h1>
              <h1 className="font-Poppins text-lg">Free</h1>
            </div>
          </div>
          <div className="flex justify-between pt-7">
            <h1 className="font-Poppins text-lg">Total:</h1>
            <h1 className="font-Poppins text-lg">${cartTotal.toFixed(2)}</h1>
          </div>
          <div className="flex justify-between pt-10">
            <div className="space-x-5 ">
              <input type="radio" id="bank" name="payment-method" />
              <label htmlFor="bank" className="font-Poppins text-lg">
                Bank
              </label>
            </div>
            <div>
              <img src="/public/img/bank.png" alt="" />
            </div>
          </div>
          <div className="space-x-5 pt-5">
            <input type="radio" id="bank" name="payment-method" />
            <label htmlFor="bank" className="font-Poppins text-lg">
              Cash on delivery
            </label>
          </div>
          <div className="flex gap-5 pt-5">
            <input
              type="text"
              placeholder="Coupon Code"
              className="outline-none border-black border-[1px]  py-2 px-3 rounded-md w-[70%]"
            />
            <button className="py-2 px-5 bg-secondary text-white font-Poppins rounded-md">
              Apply Coupon
            </button>
          </div>
          <div className="pt-10">
            <button className="px-5 py-2 bg-secondary text-white font-Poppins rounded-md">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
}


