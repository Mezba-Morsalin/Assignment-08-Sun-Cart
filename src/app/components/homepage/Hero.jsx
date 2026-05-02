"use client";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "animate.css";

import bottle from "@/assets/bottle.png";
import towel from "@/assets/towel.png";
import glass from "@/assets/glass.png";
import { FaShoppingBag } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-white backdrop-blur-2xl"></div>
      <div className="absolute left-0 top-0 h-full w-1/2 bg-blue-200/30 blur-3xl"></div>
      <div className="absolute right-0 top-0 h-full w-1/2 bg-sky-200/30 blur-3xl"></div>

      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="w-11/12 lg:w-9/12 mx-auto py-32">
            <div className="flex justify-between flex-col md:flex-row gap-20">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold mb-8 animate__animated animate__fadeInDown">
                  Insulated Water Bottle
                </h2>

                <h2 className="text-3xl md:text-5xl font-bold animate__animated animate__fadeInUp">
                  Now from $40 —{" "}
                  <span className="bg-linear-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
                    Enjoy 30% OFF
                  </span>
                </h2>

                <p className="w-full leading-7 text-gray-500 md:w-[600px] animate__animated animate__fadeIn">
                  An Insulated Water Bottle keeps your drinks hot or cold for hours using advanced double-wall stainless steel technology. It is perfect for daily use at work, school, gym, or travel.
                </p>

                <button className="bg-linear-to-r from-blue-400 to-sky-400 hover:from-sky-400 hover:to-blue-500 text-white px-6 py-2 rounded-lg transition duration-300 flex gap-3 items-center cursor-pointer animate__animated animate__pulse animate__infinite">
                  <FaShoppingBag /> Buy Now
                </button>
              </div>

              <div className="shadow rounded-2xl rotate-25 bg-white p-14">
                <Image
                  className="mx-auto rounded-full -rotate-25"
                  src={bottle}
                  alt="water bottle"
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="w-11/12 lg:w-9/12 mx-auto py-32">
            <div className="flex justify-between flex-col md:flex-row gap-20">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold mb-8 animate__animated animate__fadeInDown">
                  Summer Beach Towel
                </h2>

                <h2 className="text-3xl md:text-5xl font-bold animate__animated animate__fadeInUp">
                  Now from $32 —{" "}
                  <span className="bg-linear-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
                    Enjoy 25% OFF
                  </span>
                </h2>

                <p className="w-full leading-7 text-gray-500 md:w-[600px] animate__animated animate__fadeIn">
                  Soft, lightweight, and highly absorbent beach towel designed for ultimate comfort during summer trips. Perfect for beach days, swimming, and outdoor relaxation.
                </p>

                <button className="bg-linear-to-r from-blue-400 to-sky-400 hover:from-sky-400 hover:to-blue-500 text-white px-6 py-2 rounded-lg transition duration-300 flex gap-3 items-center cursor-pointer animate__animated animate__pulse animate__infinite">
                  <FaShoppingBag /> Buy Now
                </button>
              </div>

              <div className="rotate-15 rounded-2xl shadow bg-white p-14">
                <Image
                  className="mx-auto rounded-full -rotate-15"
                  src={towel}
                  alt="towel"
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="w-11/12 lg:w-9/12 mx-auto py-32">
            <div className="flex justify-between flex-col gap-20 md:flex-row">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold mb-8 animate__animated animate__fadeInDown">
                  UV Protection Sunglasses
                </h2>

                <h2 className="text-3xl md:text-5xl font-bold animate__animated animate__fadeInUp">
                  Now from $35 —{" "}
                  <span className="bg-linear-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
                    Enjoy 15% OFF
                  </span>
                </h2>

                <p className="w-full leading-7 text-gray-500 md:w-[600px] animate__animated animate__fadeIn">
                  Stylish UV protection sunglasses that block harmful sun rays and keep your eyes safe and comfortable. Perfect for driving, travel, and outdoor activities.
                </p>

                <button className="bg-linear-to-r from-blue-400 to-sky-400 hover:from-sky-400 hover:to-blue-500 text-white px-6 py-2 rounded-lg transition duration-300 flex gap-3 items-center cursor-pointer animate__animated animate__pulse animate__infinite">
                  <FaShoppingBag /> Buy Now
                </button>
              </div>

              <div className="-rotate-15 rounded-2xl shadow bg-white p-12">
                <Image
                  className="mx-auto rotate-15"
                  src={glass}
                  alt="sunglasses"
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;