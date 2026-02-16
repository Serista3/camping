'use client'

import Image from "next/image";
import { LandmarkCardProps } from "@/utils/types";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import OtherInfo from "./OtherInfo";

export default function Hero({ landmarks }: { landmarks: LandmarkCardProps[] }){
  return (
    <div>
      <Swiper 
        navigation={true} 
        autoplay={{delay: 2000}} 
        pagination={{ clickable: true }} 
        modules={[Autoplay, Pagination, Navigation]} 
        className="mySwiper"
      >
        {landmarks.map(landmark => (
          <SwiperSlide key={`${landmark.id}-${landmark.name}`} className="group">
            <div className="relative rounded-lg overflow-hidden w-full max-h-100">
              <Image 
                src={landmark.image} 
                className="object-cover w-full brightness-75 group-hover:brightness-50 transition-all duration-300" 
                alt={landmark.name} 
                width={1000} 
                height={300} 
              />
              <div className="absolute bottom-0 left-0 z-50">
                <div className="col-span-4 mb-4 flex h-full flex-1 px-5 md:mb-4 md:justify-end md:px-10">
                  <OtherInfo landmark={landmark} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}