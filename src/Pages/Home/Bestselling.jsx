import React, { useEffect, useState } from "react";
import { IoMdStar } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import axios from "axios";
import { Link } from "react-router-dom";
import Popup from "../PopupView.jsx/Popup";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Feature/AddtocartSlice";
import { addToWishlist, removeFromWishlist } from "../Feature/wishlistSlice";

export default function Bestselling() {
  const [products, setProducts] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.items);
  const [isInCart, setIsInCart] = useState({});

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  const handleEyeClick = (product) => {
    setSelectedProduct(product);
    setShowPopup(true);
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setIsInCart((prevState) => ({
      ...prevState,
      [product.id]: true,
    }));
  };

  const handleWishlistToggle = (product) => {
    if (wishlist.some((item) => item.id === product.id)) {
      dispatch(removeFromWishlist(product.id));
    } else {
      dispatch(addToWishlist(product));
    }
  };

  return (
    <>
      <div className="flex justify-center gap-7">
        {products.slice(5, 10).map((data) => {
          return (
            <div className="w-[18%] mt-10" key={data.id}>
              <div className="bg-primary relative h-[230px] flex justify-center items-center flex-col group">
                <div>
                  <img
                    className="mx-auto w-full h-[150px] flex justify-center items-center"
                    src={data.image}
                    alt=""
                  />
                </div>
                <div className="group-opacity-0">
                  <div
                    className={
                      wishlist.some((item) => item.id === data.id)
                        ? "text-red-500 p-2 text-xl bg-white absolute top-3 right-3 rounded-full cursor-pointer "
                        : "p-2 text-xl bg-white absolute top-3 right-3 rounded-full cursor-pointer"
                    }
                    onClick={() => handleWishlistToggle(data)}
                  >
                    <FaRegHeart />
                  </div>
                  <div
                    onClick={() => handleEyeClick(data)}
                    className="p-2 text-xl bg-white absolute top-16 right-3 rounded-full cursor-pointer"
                  >
                    <IoEyeOutline />
                  </div>
                </div>
                <div
                  onClick={() => handleAddToCart(data)}
                  className={`py-2 mt-10 bg-black w-full z-50 absolute bottom-0 opacity-0 text-white group-hover:opacity-100 text-center transition ease-linear duration-500 cursor-pointer ${
                    isInCart[data.id] ? "bg-red-500" : "bg-black"
                  }`}
                >
                  <h1 className="font-Poppins">Add To Cart</h1>
                </div>
              </div>

              <div className="pt-2">
                <Link to={`/product/${data.id}`}>
                  <h1 className="font-Poppins font-medium cursor-pointer line-clamp-[2]">
                    {data.title}
                  </h1>
                </Link>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-red-500 text-lg font-bold font-Poppins">
                  ${data.price}
                </span>
              </div>
              <div className="flex items-center space-x-1 mt-2">
                <div className="flex items-center">
                  <div className="text-[#FFAD33] flex">
                    {[...Array(Math.round(data.rating.rate))].map(
                      (_, index) => (
                        <IoMdStar key={index} />
                      )
                    )}
                  </div>
                </div>
                <span className="text-sm text-gray-500">
                  {data.rating.count} reviews
                </span>
              </div>
            </div>
          );
        })}
      </div>
      {showPopup && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <Popup
            closePopup={() => setShowPopup(false)}
            product={selectedProduct}
          />
        </div>
      )}
    </>
  );
}
