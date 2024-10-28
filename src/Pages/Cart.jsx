import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "./Feature/AddtocartSlice";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleQuantityChange = (id, quantity) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const cartTotal = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <>
      <div className="h-[20vh]"></div>
      <div className="w-custom mx-auto text-lg font-Poppins flex justify-between px-5 py-5 shadow-md mb-10 rounded-md">
        <div className="w-[40%]">
          <h1>Product</h1>
        </div>
        <div className="w-[10%]">
          <h1>Price</h1>
        </div>
        <div className="w-[30%]">
          <h1 className="text-center">Quantity</h1>
        </div>
        <div className="w-[10%]">
          <h1>Subtotal</h1>
        </div>
        <div className="w-[10%]">
          <h1 className="text-end">Remove</h1>
        </div>
      </div>
      {cartItems.map((item) => (
        <div
          key={item.id}
          className=" w-custom mx-auto flex justify-between px-5 py-5 shadow-md mb-10 rounded-md"
        >
          <div className="w-[40%]">
            <div className="flex gap-5 ">
              <img className="w-[5%]" src={item.image} alt={item.title} />
              <h1 className="font-Poppins">{item.title}</h1>
            </div>
          </div>
          <div className="w-[10%]">
            <h1 className="font-Poppins">${item.price}</h1>
          </div>
          <div className="w-[30%]">
            <div className="flex justify-center">
              <button
                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                className="font-Poppins px-3 py-1 border-black border-[2px]  rounded-l-md"
              >
                -
              </button>
              <button className="font-Poppins px-10 py-1 border-black border-t-[2px] border-b-[2px]">
                {item.quantity}
              </button>
              <button
                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                className="font-Poppins px-3 py-1 border-secondary border-[2px] bg-secondary text-white  rounded-r-md"
              >
                +
              </button>
            </div>
          </div>
          <div className="w-[10%]">
            <h1 className="font-Poppins">
              ${(item.price * item.quantity).toFixed(2)}
            </h1>
          </div>
          <div className="text-3xl  w-[10%] flex justify-end">
            <MdDelete
              className="text-end cursor-pointer"
              onClick={() => handleRemove(item.id)}
            />
          </div>
        </div>
      ))}
      <div className="w-custom mx-auto flex justify-between pt-5 ">
        <div>
          <button className="font-Poppins px-5 py-3 border-black border-[2px] rounded-md ">
            Return To Shop
          </button>
        </div>
        <div>
          <button className="font-Poppins px-5 py-3 border-black border-[2px] rounded-md ">
            Update Cart
          </button>
        </div>
      </div>
      <div className="w-custom mx-auto flex justify-between py-20">
        <div className="w-[30%]">
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Coupon Code"
              className="bg-transparent py-3 outline-none border-black border-[1px] px-2 rounded-md"
            />
            <button className="px-5 py-3 text-white bg-secondary rounded-md">
              Apply Coupon
            </button>
          </div>
        </div>
        <div className="w-[30%] border-black border-[2px] py-10 px-5 rounded-md">
          <h1 className="font-Poppins text-2xl font-semibold">Cart Total</h1>
          <div className="flex justify-between border-black border-b-[2px] pb-3 pt-5">
            <h1 className="font-Poppins">Subtotal:</h1>
            <h1 className="font-Poppins">${cartTotal.toFixed(2)}</h1>
          </div>
          <div className="flex justify-between border-black border-b-[2px] pb-3 pt-5">
            <h1 className="font-Poppins">Shipping:</h1>
            <h1 className="font-Poppins">Free</h1>
          </div>
          <div className="flex justify-between py-5">
            <h1 className="font-Poppins">Total:</h1>
            <h1 className="font-Poppins">${cartTotal.toFixed(2)}</h1>
          </div>
          <div className="flex justify-center">
            <Link to={"/checkout"}>
              <button className="bg-secondary py-3 px-5 text-white font-Poppins rounded-md">
                Procees to checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
