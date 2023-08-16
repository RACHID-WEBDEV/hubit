/* eslint-disable @next/next/no-img-element */
import { brandsData } from "@/Data/brandsData";
import React from "react";
import Button from "./Form/Button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-backgroundColor lg:overflow-auto" id="home">
      <div className="mx-auto max-w-7xl px-4 md:px-12 lg:px-6 xl:px-0">
        <div className="relative ml-auto pt-40 xl:pt-36">
          <div className="gap-12 md:flex md:items-center">
            <div className="text-center sm:px-12 md:w-2/3 md:px-0 md:text-left lg:w-1/2">
              <h1 className=" text-4xl font-bold md:text-6xl xl:text-7xl capitalize">
                {/* Helping You Move Onward{" "} */}
                {/* Elevate Your Brand{" "} */}
                {/* Make your brand stand out{" "} */}
                Turning Business Ideas into Digital{" "}
                <span className="font-Marcellus relative">
                  Realities
                  <img
                    src="/images/curve-line.svg"
                    width={300}
                    alt="line"
                    className="absolute -bottom-7 hidden lg:flex"
                  />
                </span>
              </h1>
              <div className="">
                <p className="mt-8 lg:mt-16 text-lg text-gray-700 dark:text-gray-100">
                  Odio incidunt nam sit illum. Voluptas doloribus asperiores
                  quaerat aperiam. Quidem harum omnis beatae ipsum soluta!
                </p>
                <div className="mt-12 flex justify-center gap-4 sm:gap-6 md:justify-start">
                  <Link href="/contact">
                    <Button title="Get Started" />
                  </Link>

                  <div className="hidden lg:flex items-center gap-2 cursor-pointer">
                    <img src="/images/play-icon.svg" alt="play icon" />
                    <p className="text-secondary font-bold font-Syne">
                      How it works
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative mt-20 md:mt-0 md:w-2/5 lg:w-3/5">
              <div className="-ml-6 md:-mr-72 lg:mr-0">
                <img
                  className="h-full object-cover object-left"
                  src="/images/hubit-new2.png"
                  alt="hubit technology hero image"
                  width="1628"
                  height="1233"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 text-center md:mt-32 lg:mt-20 xl:mt-16">
            <span className="text-base relative lg:inline-flex gap-1 font-semibold tracking-wider text-gray-800">
              Over
              <span className="relative">
                32K+
                <img
                  src="/images/short-curve-line.svg"
                  alt="curve"
                  className="absolute lg:-bottom-2 hidden lg:flex"
                />
              </span>
              Business Growing With Hubit Solutions
            </span>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 brightness-75 contrast-200 grayscale lg:gap-14">
              {brandsData.map((brand, index) => (
                <img
                  key={index}
                  src={brand}
                  className="h-6 w-auto lg:h-10"
                  alt={`Brand ${index}`}
                  width="100"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
