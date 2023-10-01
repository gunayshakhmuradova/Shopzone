import React from 'react'
import Slider from "react-slick";

export const SliderComp = () => {
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div>
         <Slider {...settings}>
          <div className='!flex  items-center bg-gray-100 px-6'>
            <div>
                <div className='!text-6xl font-bold  '> Best shoes for you is here</div>
                <div className='!text-lg my-4' >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus nesciunt minima deleniti enim. Vitae, dicta porro aliquam beatae eligendi veritatis!</div>
                <div className='!border rounded-full coursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200'>Review</div>
            </div>
        
            <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0e03e7a2a9cb44dfac2bad6a00f95888_9366/NMD_R1_Shoes_White_GZ9261_01_standard.jpg" alt="" />
          </div>
          <div className='!flex  items-center bg-gray-100 px-6'>
            <div>
          <div className='!text-6xl font-bold  '> Best shoes for you is here</div>
                <div className='!text-lg my-4' >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus nesciunt minima deleniti enim. Vitae, dicta porro aliquam beatae eligendi veritatis!</div>
                <div className='!border rounded-full coursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200'>Review</div>
                </div>
            <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ed5307be61d14b9ea388561724b146ca_9366/Gazelle_Shoes_Pink_ID7006_01_standard.jpg" alt="" />
          </div>
          </Slider>
    </div>
  )
}

export default SliderComp