import Image from "next/image";
import Hero from "../components/homepage/Hero";
import Brands from "../components/homepage/Brands";
import Products from "../components/homepage/Products";
import Summer from "../components/homepage/Summer";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Brands></Brands>
      <Products></Products>
      <Summer></Summer>
    </div>
  );
}
