"use client"

import Image from "next/image";
import React, { useState } from "react";
import { baseUrl } from "../_utils/GlobalApi";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

const ProductItemDetails = ({ product }) => {
    const [productTotalPrice,setProductTotalPrice]=useState(product.sellingPrice?product.sellingPrice:product.mrp);
    const [quantity,setQuantitity]=useState(1);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center">
      <Image
        src={`${baseUrl}${product?.images[0]?.url}`}
        width={500}
        height={200}
        unoptimized={true}
        alt={product?.name || "Category"}
        loading="lazy"
        className="object-contain w-[200px] h-[200px]"
      />
      <div className="mt-2 flex flex-col gap-3 items-baseline">
        <div className="flex flex-col gap-2">
          <h1 className="font-2xl font-bold text-black">{product?.name}</h1>
          <h1 className="font-2xl text-gray-500">{product?.description}</h1>
        </div>
        <div className="flex gap-2">
          <h2 className="font-extralight line-through">${product?.mrp}</h2>
          <h2 className="text-black font-bold">${product?.sellingPrice}</h2>
        </div>
        <h2 className="font-medium text-md text-black">Quantity({product?.itemQuantityType})</h2>
        <div className="flex flex-col items-baseline">
            <div className="flex gap-3 items-center">

            <div className="p-2 border flex gap-10 items-center">
                <button disabled={quantity==1} onClick={()=>setQuantitity((prev)=>prev-1)}>-</button>
                <p className="text-black">{quantity}</p>
                <button onClick={()=>setQuantitity((prev)=>prev+1)}>+</button>
            </div>
            <h2 className="text-black font-bold">= {quantity*productTotalPrice}</h2>
            </div>
            
        </div>
        <Button className="flex gap-3 p-2 px-5">
                <ShoppingBag/>
                Add To Cart 
            </Button>

            <h2 className="text-sm text-black"><span className="font-bold">Category : </span> {product?.categories[0]?.name}</h2>
      </div>
    </div>
  );
};

export default ProductItemDetails;
