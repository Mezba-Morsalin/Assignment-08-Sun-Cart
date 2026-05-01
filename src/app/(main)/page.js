import Image from "next/image";
import Hero from "../components/homepage/Hero";
import Navbar from "../components/shared/Navbar";
import Brands from "../components/shared/Brands";
import Products from "../components/shared/Products";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Brands></Brands>
      <Products></Products>
    </div>
  );
}
