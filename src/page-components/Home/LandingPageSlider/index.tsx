"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
    EffectCube,
    Pagination,
    Autoplay,
    Navigation
} from "swiper/modules";
import { sliderItems } from "./data";

const LandingPageSlider = () => {
    return (
        <div className="m-0 p-0">
            <Swiper
                effect={"flip"}
                grabCursor={true}
                speed={2000}
                cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 1
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true
                }}
                loop={true}
                pagination={
                    {
                        clickable: true
                    }
                }
                navigation={true}
                modules={[EffectCube, Autoplay, Pagination, Navigation]}
                className="landingPageSlider"
            >
                {sliderItems.map((slide, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className="w-full relative h-64 sssm:h-[290px] ssm:h-[calc(45vh)] sm:h-[calc(100vh-200px)] mlg:h-screen">
                                <Image src={slide.image} alt={slide.title} title={slide.title} fill={true} />
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    );
}
export default LandingPageSlider;
