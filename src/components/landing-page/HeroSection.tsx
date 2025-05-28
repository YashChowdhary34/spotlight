import Image from "next/image";
import React from "react";
import AwardImage from "@/assets/landing-page/award.png";
import Link from "next/link";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-24 pb-48 md:pb-60 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-16 md:mb-24">
          {/* Left Column */}
          <div className="max-w-xl">
            <h1 className="text-6xl md:text-7xl font-extrabold tracking-wide leading-tighter md:leading-tight">
              Digitize your Experience
            </h1>

            {/* Award - mobile */}
            <div className="mt-6 md:hidden">
              <div className="flex items-center">
                <Image
                  src={AwardImage}
                  alt="Award"
                  width={40}
                  height={40}
                  className="mr-3"
                />
                <p className="text-sm text-gray-300">
                  2025 India&apos;s best digital panel.
                </p>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col justify-start md:pl-12">
            <p className="text-lg text-gray-300 mb-6">
              Money should be easy. It&apos;s time to say goodbye to the
              traditional way to play. Join{" "}
              <span className="text-lime-400 font-extrabold">Spotlight</span>{" "}
              and experience the future of digital panels.
            </p>
            <div className="flex items-center space-x-4">
              <Link href="./dashboard">
                <Button className="px-8 py-6 bg-lime-400 text-black font-bold tracking-wide rounded-xl hover:bg-lime-400/90 transition-colors">
                  Digitize Now
                </Button>
              </Link>
            </div>

            {/* User stats - mobile */}
            <div className="mt-8 md:hidden">
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="User 1"
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-black"
                  />
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="User 2"
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-black"
                  />
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="User 3"
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-black"
                  />
                </div>
                <div className="ml-4">
                  <p className="text-2xl font-bold">1.2M</p>
                  <p className="text-sm text-gray-300">
                    World&apos;s Total Active Users
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom section with award and stats - desktop */}
        <div className="hidden md:flex justify-between items-end">
          <div className="flex items-center">
            <div className="mr-4">
              <Image
                src={AwardImage}
                alt="Award"
                width={60}
                height={60}
                className="object-contain"
              />
            </div>
            <p className="text-gray-300">
              2025 India&apos;s best
              <br />
              digital panel.
            </p>
          </div>

          <div className="flex items-center">
            <div className="flex -space-x-2 mr-4">
              <Image
                src="/placeholder.svg?height=50&width=50"
                alt="User 1"
                width={50}
                height={50}
                className="rounded-full border-2 border-black bg-gray-400"
              />
              <Image
                src="/placeholder.svg?height=50&width=50"
                alt="User 2"
                width={50}
                height={50}
                className="rounded-full border-2 border-black bg-gray-400"
              />
              <Image
                src="/placeholder.svg?height=50&width=50"
                alt="User 3"
                width={50}
                height={50}
                className="rounded-full border-2 border-black bg-gray-400"
              />
            </div>
            <div>
              <p className="text-3xl font-bold">1.2M</p>
              <p className="text-sm text-gray-300">
                World&apos;s Total Active Users
              </p>
            </div>
          </div>
        </div>

        {/* Credit cards */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-3xl">
          <div className="relative h-64 sm:h-80 md:h-96">
            {/* Left purple card */}
            <div className="absolute left-0 bottom-10 w-64 h-40 md:w-80 md:h-48 bg-gradient-to-br from-purple-800 to-purple-600 rounded-xl shadow-xl transform -rotate-12 z-10">
              <div className="p-4">
                <p className="text-xl font-bold">Spotlight-Dashboard</p>
                <div className="absolute bottom-4 left-4">
                  <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center opacity-70">
                    <div className="w-4 h-4 border-t-2 border-r-2 border-white rounded-full transform rotate-45"></div>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-8 bg-gray-300 rounded-sm"></div>
                </div>
              </div>
            </div>

            {/* Middle holographic card */}
            <div className="absolute left-1/2 bottom-12 w-64 h-40 md:w-80 md:h-48 bg-gradient-to-br from-pink-300 via-purple-300 to-blue-300 rounded-xl shadow-xl transform -translate-x-1/2 z-20">
              <div className="p-4">
                <p className="text-xl font-bold text-gray-800">
                  Spotlight-Dashboard
                </p>
                <div className="absolute bottom-4 left-4">
                  <div className="w-8 h-8 border border-gray-800 rounded-full flex items-center justify-center opacity-70">
                    <div className="w-4 h-4 border-t-2 border-r-2 border-gray-800 rounded-full transform rotate-45"></div>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-8 bg-gray-300 rounded-sm"></div>
                </div>
                <div className="absolute bottom-4 right-4">
                  <p className="text-sm text-gray-800">2712 5454</p>
                </div>
              </div>
            </div>

            {/* Right purple card */}
            <div className="absolute right-0 bottom-10 w-64 h-40 md:w-80 md:h-48 bg-gradient-to-br from-purple-700 to-purple-500 rounded-xl shadow-xl transform rotate-12 z-10">
              <div className="p-4">
                <p className="text-xl font-bold">Spotlight-Dashboard</p>
                <div className="absolute bottom-4 left-4">
                  <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center opacity-70">
                    <div className="w-4 h-4 border-t-2 border-r-2 border-white rounded-full transform rotate-45"></div>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-8 bg-gray-300 rounded-sm"></div>
                </div>
              </div>
            </div>

            {/* Explore More button */}
            <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 z-30">
              <div className="relative w-24 h-24 bg-black rounded-full flex items-center justify-center">
                {/* <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-500"></div>
                </div> */}
                <Image
                  src={"/logo.png"}
                  alt="Logo"
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Curved bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 100H1440V0C1440 0 1252.5 100 720 100C187.5 100 0 0 0 0V100Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
