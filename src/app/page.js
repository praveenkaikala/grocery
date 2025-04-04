"use server"
import CategoryList from "./_components/CategoryList";
import Footer from "./_components/Footer";
import ProductList from "./_components/ProductList";
import Slider from "./_components/Slider";
import { getAllProducts, getCategory, getSliders } from "./_utils/GlobalApi";

export default async function Home () {
  const sliders=await getSliders();
  const categories=await getCategory().then((data)=>{
    return data.data.data;
  }).catch((error)=>{
    console.log(error);
  })
  const products=await getAllProducts();
  // console.log("era",categories);
  return (
   <div className="md:p-10 md:px-16 p-5 px-10">
    <Slider sliders={sliders}/>
    <CategoryList categories={categories}/>
    <ProductList products={products}/>
    <Footer/>
   </div>
  );
}
