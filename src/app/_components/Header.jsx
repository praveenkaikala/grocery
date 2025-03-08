"use client"
import { Button } from "@/components/ui/button";
import { LayoutGrid, Search, ShoppingBag } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
const Category=dynamic(()=>import("./Category"),
{ ssr: false })
import dynamic from "next/dynamic";

const Header = () => {
  return (
    <header className="p-2 shadow-md flex justify-between">
      <div className="flex gap-3 items-center">
        <div>
          <Image src={"/logo.png"} alt="logo" width={200} height={200} loading="lazy" unoptimized="true"/>
        </div>
       <Category/>
        <div className="md:flex gap-2 items-center border rounded-full p-2 hidden">
          <Search />
          <input type="text" placeholder="Search" className="outline-none" />
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <h2 className="flex gap2 items-center text-xl">
          <ShoppingBag />0
        </h2>
        <Button>Login</Button>
      </div>
    </header>
  );
};

export default Header;
