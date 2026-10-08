import React from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { getCurrentDateBn } from "@/lib/utils";
import Link from "next/link";

function Hero() {
  return (
    <Container
      el={"header"}
      boxClassName="grid md:grid-cols-2 my-10 bg-gray-50 rounded-2xl shadow-sm"
    >
      <div className="text-center md:text-left">
        <span className="inline-block mb-2 py-2 px-4 bg-green-100 text-green-500 text-lg font-medium rounded-full">
          {getCurrentDateBn()}
        </span>
        <h1 className="font-bold text-5xl mb-4">আজকের বাজারের দাম এক নজরে</h1>
        <p className="max-w-[60ch] mb-6 text-lg text-gray-700">
          চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
          বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
        </p>
        <Link
          href={"/products"}
          className="btn btn-lg bg-pr hover:bg-pr-hover text-pr-content rounded-lg"
        >
          সব পণ্য দেখুন
        </Link>
      </div>
      <div className="flex justify-center md:justify-end">
        <Image
          src="/bazar-hero.png"
          alt="basket full of foods"
          width={316}
          height={264}
        />
      </div>
    </Container>
  );
}

export default Hero;
