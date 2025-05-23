import React from 'react'
import { baseUrl } from '../_utils/GlobalApi'
import Image from 'next/image'
import Header from './styles/Header'

const CategoryList = ({categories}) => {
  return (
    <div className='mt-5'>
      <Header heading={"Shop By Categories"}/>
        <div className='flex flex-wrap py-4 gap-3 justify-evenly md:justify-start'>
        {
            categories && (
                categories.map((item,key)=>{
                    return(
                        <div className='flex flex-col items-center width-auto group cursor-pointer bg-green-100 hover:bg-green-200 p-3 rounded-md transition-all ease-in-out my-3' key={key}>
                            <Image
                            src={`${baseUrl}${item?.icon[0]?.url}`}
                            width={100}
                            height={100}
                            unoptimized={true}
                            alt={item?.name || "Category"}
                            loading="lazy"
                            className='group-hover:scale-105 transition-all ease-in-out'
                          />
                          <h2 className='font-semibold text-green-700'>{item?.name}</h2>
                        </div>
                    )
                })
            )
        }

        </div>
       {/* { categories?.map((item, ind) => (
                      <div key={ind}>

                          <Image
                            src={`${baseUrl}${item?.icon[0]?.url}`}
                            width={23}
                            height={23}
                            unoptimized={true}
                            alt={item?.name || "Category"}
                            loading="lazy"
                          />
                          <h2>{item?.name}</h2>
                      </div>
                    ))} */}
    </div>
  )
}

export default CategoryList