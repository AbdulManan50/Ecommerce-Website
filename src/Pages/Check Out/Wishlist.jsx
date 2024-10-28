import React from "react";
import { IoMdStar } from "react-icons/io";
import { IoTrashOutline, IoCartOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../Feature/wishlistSlice";
import { addToCart } from "../Feature/AddtocartSlice";

export default function Wishlist() {
  const wishlist = useSelector((state) => state.wishlist.items);
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromWishlist = (productId) => {
    dispatch(removeFromWishlist(productId));
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const isInCart = (productId) =>
    cartItems.some((cartItem) => cartItem.id === productId);

  return (
    <>
      <div className="h-[20vh]"></div>
      <div className="w-custom mx-auto flex justify-between">
        <h1 className="font-Poppins text-5xl font-bold">My Wishlist</h1>
      </div>
      <div className="w-custom mx-auto mb-20">
        <div className="flex justify-start items-start flex-wrap gap-7">
          {wishlist.length > 0 ? (
            wishlist.map((product) => (
              <div key={product.id} className="w-[18%] mt-10">
                <div className="bg-primary relative h-[230px] flex justify-center items-center flex-col group">
                  <img
                    className="mx-auto w-[50%] h-[150px]"
                    src={product.image}
                    alt={product.title}
                  />
                  <div
                    className="p-2 text-xl bg-white absolute top-3 right-3 rounded-full cursor-pointer"
                    onClick={() => handleRemoveFromWishlist(product.id)}
                  >
                    <IoTrashOutline />
                  </div>
                  <div
                    className={`py-2 mt-10 bg-black w-full z-50 absolute bottom-0  text-white  text-center transition ease-linear duration-500 cursor-pointer ${
                      isInCart(product.id) ? "bg-red-500" : "bg-black"
                    }`}
                    onClick={() =>
                      !isInCart(product.id) && handleAddToCart(product)
                    }
                  >
                    <h1 className="font-Poppins flex justify-center items-center gap-3">
                      <span>
                        <IoCartOutline className="text-2xl" />
                      </span>
                      {isInCart(product.id) ? "In Cart" : "Add To Cart"}
                    </h1>
                  </div>
                </div>

                <div className="pt-2">
                  <h1 className="font-Poppins font-medium line-clamp-[2]">
                    {product.title}
                  </h1>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-red-500 text-lg font-bold font-Poppins">
                    ${product.price}
                  </span>
                </div>
                <div className="flex items-center space-x-1 mt-2">
                  <div className="text-[#FFAD33] flex">
                    {[...Array(Math.round(product.rating.rate))].map(
                      (_, index) => (
                        <IoMdStar key={index} />
                      )
                    )}
                  </div>
                  <span className="text-sm text-gray-500">
                    {product.rating.count} reviews
                  </span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center mt-20 w-full">Your wishlist is empty!</p>
          )}
        </div>
      </div>
    </>
  );
}
