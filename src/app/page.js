"use server"
import Slider from "./_components/Slider";
import { getSliders } from "./_utils/GlobalApi";

export default async function Home () {
  const sliders=await getSliders();
  return (
   <div className="md:p-10 md:px-16 p-5 px-10 overflow-scroll h-[100vh]">
    <Slider sliders={sliders}/>
   </div>
  );
}
