"use client";

export const dynamic = "force-dynamic";
import { usePathname } from "next/navigation";
import React from "react";
import Chat from "./chat/page";
import Home from "./home/page";

type Props = {
  params: { workspaceId: string };
};

const Page = ({ params: { workspaceId } }: Props) => {
  return (
    <main className="fixed top-0 w-full mt-16 h-screen md:mt-0 md:ml-64 flex-grow bg-white text-black">
      Dashboard Page
    </main>
  );
};

export default Page;
