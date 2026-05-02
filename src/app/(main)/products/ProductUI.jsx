"use client";

import Image from "next/image";
import { MdCategory } from "react-icons/md";
import { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { LuPackageOpen } from "react-icons/lu";
import { GrDeliver } from "react-icons/gr";
import { TbRosetteDiscountFilled } from "react-icons/tb";
import { IoTimer } from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";

const ProductUI = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [liked, setLiked] = useState(false);

  const discountedPrice =
    product.price - (product.price * product.discount) / 100;

  return (
    <div className="w-11/12 lg:w-9/12 mx-auto py-10">
      <div className="flex justify-center flex-col lg:flex-row gap-12">
        <div className=" flex justify-center">
          <Image  className="rounded-2xl" src={product.image} alt="product-image" width={700} height={400}/>
        </div>
        <div className="space-y-5">
          <p className="bg-white rounded-full px-4 py-2 shadow flex items-center gap-3 text-sky-400 w-fit">
            <MdCategory />
            {product.category}
          </p>
          <h2 className="bg-linear-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent text-3xl font-bold">
            {product.name}
          </h2>
          <div className="flex items-center gap-3">
            <p className="text-gray-400 line-through text-lg">
              ${product.price}
            </p>
            <p className="text-3xl font-bold text-black">
              ${discountedPrice.toFixed(2)}
            </p>
          </div>
          <h3 className="text-gray-500 text-lg">Select Size</h3>

          <div className="flex gap-3 flex-wrap">
            {product.sizes.map((size) => (
              <button key={size} onClick={() => setSelectedSize(size)} className={`px-6 py-3 rounded-full transition ${ selectedSize === size ? "bg-linear-to-r from-blue-400 to-sky-400 text-white" : "bg-gray-200 text-black hover:bg-gray-300"
                }`}>
                {size}
              </button>
            ))}
          </div>
          <div className="flex gap-3 mt-4">
            <button disabled={!selectedSize} onClick={() => {
                if (!selectedSize) 
                return;
                toast.success(`${product.name} added to cart`);
                }} 
                className={`px-6 py-3 rounded-full text-white transition ${ selectedSize ? "bg-linear-to-r from-blue-400 to-sky-400 hover:from-sky-400 hover:to-blue-500" : "bg-gray-300 cursor-not-allowed"}`}>
              Add to Cart
            </button>
            <button
              onClick={() => setLiked(!liked)}
              className="bg-base-300 w-12 h-12 rounded-full flex items-center justify-center"
            >
              {liked ? (
                <FaHeart className="text-red-500 text-xl scale-110 transition" />
              ) : (
                <FaRegHeart className="text-gray-500 text-xl transition" />
              )}
            </button>
          </div>
          <div className="space-y-3 p-5 rounded-2xl border border-gray-200 mt-6">
            <h3 className="text-black/70 text-xl font-bold">
              Description & Fit
            </h3>
            <p className="text-gray-500 leading-7">
              {product.description}
            </p>
          </div>
          <div className="space-y-5 p-5 rounded-2xl border border-gray-200 mt-6">
            <div className="flex gap-4 items-center">
              <div className="bg-base-300 rounded-full w-12 h-12 flex items-center justify-center">
                <TbRosetteDiscountFilled className="text-xl" />
              </div>
              <div>
                <p className="text-gray-500">Discount</p>
                <h4 className="bg-linear-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent font-bold">
                  {product.discount}%
                </h4>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-base-300 rounded-full w-12 h-12 flex items-center justify-center">
                <LuPackageOpen className="text-xl" />
              </div>

              <div>
                <p className="text-gray-500">Package Includes</p>

                <div className="flex flex-wrap gap-2 mt-2">
                  {product.package.map((p, i) => (
                    <span
                      key={i}
                      className="bg-blue-50 text-blue-500 px-3 py-1 rounded-full text-sm"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
                <div className="flex gap-4 items-center">
              <div className="bg-base-300 rounded-full w-12 h-12 flex items-center justify-center">
                <GrDeliver className="text-xl" />
              </div>
              <div>
                <p className="text-gray-500">Delivery Time</p>
                <h4 className="bg-linear-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent font-bold">
                  {product.delivery_time}
                </h4>
              </div>
            </div>
                <div className="flex gap-4 items-center">
              <div className="bg-base-300 rounded-full w-12 h-12 flex items-center justify-center">
                <IoTimer className="text-xl" />
              </div>
              <div>
                <p className="text-gray-500">Estimation Arrive</p>
                <h4 className="bg-linear-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent font-bold">
                  {product.estimated_arrival}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default ProductUI;