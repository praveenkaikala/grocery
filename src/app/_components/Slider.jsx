"use server";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { baseUrl } from "../_utils/GlobalApi";

const Slider = async ({ sliders }) => {
  return (
    <div>
      <Carousel>
        <CarouselContent>
            {
                sliders.map((slider,ind)=>{
return(
<CarouselItem key={ind}>
    <Image src={baseUrl+slider?.image[0]?.url} width={200} height={200} 
    className="w-full h-[200px] md:h-[400px] object-fit rounded-md"
    alt={slider?.name}
    />
</CarouselItem>
                    )
                })
            }
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Slider;
