import React from "react";
import img from "../../../public/images/rocket (1).webp"
import Link from "next/link";
import Image from "next/image";

function HeroSection() {
  return (
    <div className="bg-[#FBEBB5] w-full flex flex-col items-center">
      {/* <Navbar bgColor={"#FBEBB5"} /> */}
      <div className="w-full h-[700px] flex flex-col lg:flex-row items-center justify-between px-4 lg:px-8 py-12">
        {/* Left Section */}
        <div className="flex flex-col justify-center items-center lg:items-start lg:pl-16 text-center lg:text-left pt-12 lg:pt-0">
          <h1 className="text-black text-[2.5rem] sm:text-[3.5rem] md:text-[4rem] font-medium w-full">
            Rocket single seater
          </h1>
          {/* "Shop Now" text with Link for navigation */}
          <Link href="/shop" className="text-black text-lg sm:text-xl md:text-2xl font-medium mt-4 hover:underline">
            Shop Now
          </Link>
          <div className="bg-black w-32 h-0.5 mt-2 mx-auto lg:mx-0"></div>
        </div>

        {/* Right Section (Image) */}
        <div className="mt-8 lg:mt-0 w-full lg:w-auto flex justify-center">
          <Image
            src={img}
            width={853}
            height={300}
            alt="homeBannerSofa"
            className="max-w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
