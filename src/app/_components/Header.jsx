import { Button } from "@/components/ui/button";
import { LayoutGrid, Search, ShoppingBag } from "lucide-react";
import Image from "next/image";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  return (
    <div className="p-2 shadow-md flex justify-between">
      <div className="flex gap-3 items-center">
        <div>
          <Image src={"/logo.png"} alt="logo" width={200} height={200} />
        </div>
        <div className="md:flex hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>
              {" "}
              <h2 className="flex items-center gap-2 border rounded px-10 py-2 bg-slate-200 cursor-pointer">
                <LayoutGrid size={20} /> Category
              </h2>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Browse Category</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
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
    </div>
  );
};

export default Header;
