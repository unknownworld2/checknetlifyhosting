"use client";
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
    EffectCube,
    Pagination,
    Autoplay,
    Navigation
} from "swiper/modules";
import { landing_page_videos } from './data';
import YouTube from 'react-youtube';

interface VideosSliderProps {
    className?: string;
}

const VideosSlider = ({
    className
}: VideosSliderProps) => {

    const size = useWindowSize();

    const [slidesPerView, setSlidesPerView] = useState<number>(4);

    // Hook
    function useWindowSize() {
        // Initialize state with undefined width/height so server and client renders match
        // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
        const [windowSize, setWindowSize] = useState<{ width: number | undefined; height: number | undefined }>({
            width: undefined,
            height: undefined,
        });

        useEffect(() => {
            // only execute all the code below in client side
            // Handler to call on window resize
            function handleResize() {
                // Set window width/height to state
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            }

            // Add event listener
            window.addEventListener("resize", handleResize);

            // Call handler right away so state gets updated with initial window size
            handleResize();

            // Remove event listener on cleanup
            return () => window.removeEventListener("resize", handleResize);
        }, []); // Empty array ensures that effect is only run on mount
        return windowSize;
    }

    useEffect(() => {
        console.log("Width => ", size.width as number);
        console.log("Height => ", size.height as number);

        if (size.width as number > 1366) {
            setSlidesPerView(4);
        } else if (size.width as number > 1024) {
            setSlidesPerView(3);
        } else if (size.width as number > 768) {
            setSlidesPerView(2);
        } else {
            setSlidesPerView(1);
        }
    }, [size]);

    return (
        <div className={`w-full ${className}`}>
            <Swiper
                spaceBetween={20}
                slidesPerView={slidesPerView}
                navigation
                pagination={{
                    clickable: true,
                    // dynamicBullets: true,
                }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: true
                }}
                loop={true}
                scrollbar={{ draggable: true, hide: true }}
                modules={[EffectCube, Autoplay,
                    // Pagination, 
                    Navigation
                ]}
            >
                {landing_page_videos.map((video) => (
                    <SwiperSlide key={video.id}>
                        <div className="rounded-md bg-gray-200 shadow-2xl border-b border-l border-r border-t-0 border-gray-400 border-solid">
                            <div className="h-auto">
                                <YouTube videoId={video.id} opts={{ width: '100%', height: '250px' }} />
                            </div>
                            <h3 className='bg-white text-black text-center flex flex-col justify-center py-5 w-full overflow-hidden truncate px-6 text-lg font-sans'>{video.title} ...</h3>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default VideosSlider;
