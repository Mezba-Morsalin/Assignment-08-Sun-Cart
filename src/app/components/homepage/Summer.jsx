import Image from "next/image";
import logo1 from "@/assets/logo1.png";
import logo2 from "@/assets/logo2.png";
import logo3 from "@/assets/logo3.png";
import { IoWater } from "react-icons/io5";
import { FaLeaf, FaRegSun } from "react-icons/fa";
import summerImg from "@/assets/summer.png";

import "animate.css";

const Summer = () => {
  return (
    <div
      className="py-20 mt-24 animate__animated animate__fadeIn"
      style={{
        minHeight: "90vh",
        backgroundImage: `url(${summerImg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-11/12 lg:w-10/12 mx-auto space-y-12">

        <div className="space-y-3 text-center animate__animated animate__fadeInUp">
          <h2 className="text-3xl md:text-5xl font-bold bg-linear-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
            Summer Care Tips
          </h2>

          <p className="text-gray-700 max-w-2xl mx-auto animate__animated animate__fadeIn">
            Follow these easy summer care tips to stay cool, comfortable, and full of energy all day long.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          {/* Card 1 */}
          <div className="p-8 rounded-2xl shadow bg-white space-y-4 animate__animated animate__zoomIn hover:animate__pulse">

            <Image className="mx-auto" src={logo1} width={200} height={200} alt="water" />

            <h3 className="text-xl font-bold text-center text-blue-500">
              Stay Hydrated
            </h3>

            <p className="text-center text-gray-600">
              Drink plenty of water throughout the day to keep your body cool and prevent dehydration.
            </p>

            <div className="bg-blue-100 px-4 py-2 rounded-full mx-auto w-fit">
              <p className="text-blue-600 text-sm flex items-center gap-2">
                <IoWater /> 8–10 glasses daily
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-2xl shadow bg-white space-y-4 animate__animated animate__zoomIn hover:animate__pulse">

            <Image className="mx-auto" src={logo2} width={200} height={200} alt="sun" />

            <h3 className="text-xl font-bold text-center text-orange-400">
              Use Sun Protection
            </h3>

            <p className="text-center text-gray-600">
              Apply sunscreen regularly and wear sunglasses or hats to protect your skin from UV rays.
            </p>

            <div className="bg-yellow-100 px-4 py-2 rounded-full mx-auto w-fit">
              <p className="text-orange-500 text-sm flex items-center gap-2">
                <FaRegSun /> Use SPF 30+
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-2xl shadow bg-white space-y-4 animate__animated animate__zoomIn hover:animate__pulse">

            <Image className="mx-auto" src={logo3} width={200} height={200} alt="clothes" />

            <h3 className="text-xl font-bold text-center text-green-500">
              Wear Light Clothing
            </h3>

            <p className="text-center text-gray-600">
              Choose lightweight and breathable fabrics like cotton to stay comfortable in heat.
            </p>

            <div className="bg-green-100 px-4 py-2 rounded-full mx-auto w-fit">
              <p className="text-green-600 text-sm flex items-center gap-2">
                <FaLeaf /> Cotton is best
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Summer;