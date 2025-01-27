"use client";

import React, { useRef, useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import IndividualBooks from '../IndividualBooks';
import { exploreIslamicLiteratureBooksList } from '../data';

interface ExploreIslamicBooksSliderProps {
    className?: string;
}

const ExploreIslamicBooksSlider = ({
    className
}: ExploreIslamicBooksSliderProps) => {
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
        <div className={`${className}`}>
            <div className="block">
                <Swiper
                    slidesPerView={slidesPerView}
                    spaceBetween={1}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2000, // Adjust the delay in milliseconds (3000ms = 3 seconds)
                        disableOnInteraction: false, // Continue autoplay after user interaction
                    }}
                    modules={[FreeMode, Pagination, Autoplay]}
                    className="exploreIslamicLiterature"
                >
                    {exploreIslamicLiteratureBooksList.map((books, index) => {
                        return (
                            <SwiperSlide key={index} className='flex flex-row justify-center'>
                                <IndividualBooks
                                    bookName={books.title}
                                    bookImage={books.image}
                                    bookAuthor={books.author}
                                />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>

            {/* <div className='flex flex-row w-full justify-center'>
                <div className='grid grid-cols-1 sslg:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sslg:gap-4 sm:gap-16 slg:gap-8 0.5xl:hidden'>
                    {exploreIslamicLiteratureBooksList.map((books, index) => {
                        return (
                            <div key={index}>
                                <IndividualBooks
                                    bookName={books.title}
                                    bookImage={books.image}
                                    bookAuthor={books.author}
                                />
                            </div>
                        )
                    })}
                </div>
            </div> */}
        </div>
    )
}
export default ExploreIslamicBooksSlider;