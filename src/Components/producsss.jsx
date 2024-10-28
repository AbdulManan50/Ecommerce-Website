// import React, { useEffect, useState } from "react";
// import { IoIosStar } from "react-icons/io";
// import { FaRegHeart } from "react-icons/fa";
// import { TbTruckDelivery } from "react-icons/tb";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// export default function SingleProducts() {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     axios
//       .get(`https://fakestoreapi.com/products/${id}`)
//       .then((response) => {
//         setProduct(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching product data:", error);
//       });
//   }, [id]);

//   if (!product) return <div>Loading...</div>;

//   return (
//     <>
//       <div className="w-custom mx-auto h-[20vh]"></div>
//       <div className="w-custom mx-auto flex justify-between gap-10 pb-20">
//         <div className="w-[15%] space-y-4">
//           {/* Add your related images or other details */}
//         </div>
//         <div className="w-[45%] bg-primary flex justify-center items-center">
//           <img
//             className="max-w-full max-h-full"
//             src={product.image}
//             alt={product.title}
//           />
//         </div>
//         <div className="w-[40%] space-y-3 pt-5">
//           <div>
//             <h1 className="text-2xl font-Poppins font-semibold">
//               {product.title}
//             </h1>
//           </div>
//           <div className="flex gap-10">
//             <div className="text-[#FFAD33] text-xl flex space-x-1">
//               {[...Array(Math.round(product.rating.rate))].map(
//                 (_, index) => (
//                   <IoIosStar key={index} />
//                 )
//               )}
//             </div>
//             <h1 className="font-Poppins">
//               ({product.rating.count} Reviews) |{" "}
//               <span className="text-[#00FF66] font-Poppins">In Stock</span>
//             </h1>
//           </div>
//           <div>
//             <h1 className="text-3xl font-Poppins">${product.price}</h1>
//           </div>
//           <div className="border-black border-b-[2px]">
//             <p className="font-Poppins pb-3">
//               {product.description}
//             </p>
//           </div>
//           {/* Additional UI elements like colors, sizes, etc. */}
//         </div>
//       </div>
//     </>
//   );
// }


      {/* <div className="w-custom mx-auto flex justify-between">
        <div className="flex items-center gap-5">
          <div className="border-secondary border-l-[20px] py-5 rounded-md"></div>
          <div>
            <h1 className="font-Poppins">Just For You</h1>
          </div>
        </div>
        <div>
          <button className="py-3 px-5 border-black border-[2px] font-Poppins">
            See All
          </button>
        </div>
      </div>
      <div className="mx-auto w-custom pb-20 pt-10">
        <JustYouProductd />
      </div> */}