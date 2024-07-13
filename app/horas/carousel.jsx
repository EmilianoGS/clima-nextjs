'use client';
import React, {useState} from 'react'
import Card1 from '../componentes/card1'
import { Swiper, SwiperSlide } from 'swiper/react';
import './styles.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Carousel = (props) => {
    
 
 const data=  props.data
 const [swiper, setSwiper] = useState(null);

  return (
    <div className='p-4 text-indigo-600 w-1/2 gap-4'>
        <p>Clima por horas {data[0].startTime?.slice(0,10)}</p>
        Min {props.minTemp}, Max {props.maxTemp}
                    <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    centeredSlides={true}
                    slidesPerView={3}
                    // onSlideChange={(swiper) => console.log(swiper)}
                        // onSwiper={setSwiper}
                    >
                        {data.map((elem, i)=>{
                            const hour= elem.startTime.slice(11,16)
                            return(
                                <SwiperSlide>
                           
                                    <Card1 key={i}                                     
                                    hour={hour} 
                                    page={'horas'} elem={elem.values}/>
                                    
                                </SwiperSlide>
                            )
                        })}
                    </Swiper> 
    </div>
  )
}

export default Carousel