import React from "react";
import Header from "./styles/Header";
import Image from "next/image";
import { baseUrl } from "../_utils/GlobalApi";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ProductItemDetails from "./ProductItemDetails";

const ProductList = ({ products }) => {
  console.log("products", products);
  return (
    <div className="mt-5">
      <Header heading={"Popular Products"} />
      <div className="grid md:grid-cols-3 grid-cols-2 lg:grid-cols-4 py-4 gap-3">
        {products &&
          products.map((item, key) => {
            return (
              <div
                className="flex flex-col items-center width-auto group cursor-pointer justify-between border p-3 rounded-md transition-all ease-in-out my-3"
                key={key}
              >
                <Image
                  src={`${baseUrl}${item?.images[0]?.url}`}
                  width={500}
                  height={200}
                  unoptimized={true}
                  alt={item?.name || "Category"}
                  loading="lazy"
                  className="group-hover:scale-105 transition-all ease-in-out bg-white w-40 h-50 rounded-lg"
                />
                <div className="flex flex-col items-center gap-1">
                  <h2 className="font-semibold text-green-700">{item?.name}</h2>
                  <div className="flex gap-2">
                    <h2 className="font-extralight line-through">
                      ${item?.mrp}
                    </h2>
                    <h2 className="">${item?.sellingPrice}</h2>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline">Add To Cart</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle></DialogTitle>
                        <DialogDescription asChild>
                          <ProductItemDetails product={item}/>
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProductList;
