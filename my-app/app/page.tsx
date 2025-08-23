'use client';
import React from "react";
import { Dock } from "@/components/Dock";
import { ButtonGroup } from "@/components/Btn"; 

export default function Home() {
  return (
   <div className="h-screen w-screen flex items-center justify-center relative overflow-hidden">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Sourish Ghosh.
        </h1>
        <p className="mt-4 font-normal text-xl text-base text-neutral-300 max-w-lg text-center mx-auto mb-12">
          Creating the Unimaginable
        </p>
        <ButtonGroup />
      </div>
      <Dock />
    </div>
  );
}

