"use client"
import React, { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LayoutGrid } from "lucide-react";
import { baseUrl, getCategory } from "../_utils/GlobalApi";
import Image from "next/image";
const Category = () => {
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    getCategoryList();
  }, []);
  const getCategoryList = () => {
    getCategory()
      .then((data) => {
        setCategoryList(data.data.data);
      })
      .catch((error) => console.log(error));
  };
  return (
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
          {categoryList.length > 0 ? (
            categoryList.map((item, ind) => (
              <DropdownMenuItem key={ind} className={"cursor-pointer"}>
                <Image
                  src={`${baseUrl}${item?.icon[0]?.url}`}
                  width={23}
                  height={23}
                  unoptimized={true}
                  alt={item?.name || "Category"}
                  loading="lazy"
                />
                <h2>{item?.name}</h2>
              </DropdownMenuItem>
            ))
          ) : (
            <DropdownMenuItem>Loading...</DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Category;
