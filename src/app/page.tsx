import Navbar from "@/components/global/layout/Navbar";
import HeroSection from "@/components/landing-page/HeroSection";
import InstantWithdrawSection from "@/components/landing-page/InstantWithdrawSection";
import NoChecksSection from "@/components/landing-page/NoChecksSection";
import React from "react";

export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        <HeroSection />

        <InstantWithdrawSection />
        <NoChecksSection />
      </main>
    </>
  );
}
