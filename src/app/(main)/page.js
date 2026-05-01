import Image from "next/image";
import Hero from "../components/homepage/Hero";
import Navbar from "../components/shared/Navbar";
import Brands from "../components/shared/Brands";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Brands></Brands>
    </div>
  );
}
