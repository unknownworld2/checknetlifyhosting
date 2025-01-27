"use client";

import { useEffect, useRef, useState } from "react";
import { latestNewsHeadlineData } from "./data";

const LatestNewsHeadline = () => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
    const [progress, setProgress] = useState<number>(0);
    const [scrolling, setScrolling] = useState<boolean>(true);

    const scrollContainerRef = useRef<any>(null);
    const highlighterRef = useRef<any>(null);

    const highlightStep = 1; // Pixels to move highlighter on each step
    const intervalTime = 700; // Time between steps in milliseconds
    const slideDuration = 5000; // 5 seconds for slide change

    // // Handle progress bar and slide transitions
    useEffect(() => {
        let progressInterval: NodeJS.Timeout;

        // Start the progress bar and slide transitions once on mount
        const startProgressBarAndSlides = () => {
            setProgress(0); // Reset progress at the start

            progressInterval = setInterval(() => {
                setProgress((prevProgress) => {
                    const increment = 100 / (slideDuration / 100);
                    const newProgress = prevProgress + increment;

                    if (newProgress >= 100) {
                        // Slide complete, move to the next slide
                        setCurrentSlideIndex((prevIndex) =>
                            (prevIndex + 1) % latestNewsHeadlineData.length
                        );
                        return 0; // Reset progress after completing the slide
                    }

                    return newProgress; // Update the progress value
                });
            }, 100); // Update progress every 100ms
        };

        startProgressBarAndSlides();

        // Cleanup the interval on unmount
        return () => clearInterval(progressInterval);
        // No dependencies needed, we only start this once
    }, []);

    // Manage the independent scrolling behavior
    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        const highlighter = highlighterRef.current;
        const highlighterHeight = highlighter.offsetHeight;

        let currentTop = 0;

        const moveHighlighter = () => {
            currentTop += highlightStep;

            if (currentTop + highlighterHeight >= scrollContainer.clientHeight) {
                if (
                    scrollContainer.scrollTop + scrollContainer.clientHeight <
                    scrollContainer.scrollHeight
                ) {
                    // Scroll the container
                    scrollContainer.scrollTop += highlightStep;
                } else {
                    // Restart from the top if we've scrolled to the end
                    scrollContainer.scrollTop = 0;
                    currentTop = 0;
                }
            }

            highlighter.style.top = `${currentTop}px`;

            if (scrolling) {
                setTimeout(moveHighlighter, intervalTime);
            }
        };

        if (scrolling) {
            moveHighlighter();
        }

        return () => { }; // No cleanup needed here for scrolling
    }, [scrolling, highlightStep, intervalTime]);

    // Move to the next slide after 5 seconds 
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlideIndex((prevIndex) =>
                (prevIndex + 1) % latestNewsHeadlineData.length
            );
        }, slideDuration);

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            ref={scrollContainerRef}
            className="bg-gray-100 xlg:bg-transparent text-gray-800 w-full shadow-lg border border-gray-300 border-solid rounded-lg h-[500px] 0.5xl:h-[600px] overflow-y-auto relative rtl"
            onMouseEnter={() => setScrolling(false)} // Stop scrolling on hover
            onMouseLeave={() => setScrolling(true)} // Resume scrolling on hover out
        >
            {/* Progress Bar */}
            <div className="absolute top-0 left-0 w-full h-2 bg-blue-200 hidden">
                <div
                    className="h-full bg-blue-600"
                    style={{ width: `${progress}%`, transition: "width 0.1s linear" }}
                ></div>
            </div>
            {/* Highlighter Div */}
            <div
                ref={highlighterRef}
                className="absolute left-0 w-full h-8 bg-green-200 opacity-50"
            ></div>
            {/* Text Content */}
            <div id="textContent" className="p-4 font-nooriNastaleeq">
                <p dir="rtl" className="font-bold text-purple-800 mt-4 text-2xl">
                    پریس ریلیز
                </p>
                <p dir="rtl" className="mt-4">
                    {latestNewsHeadlineData[currentSlideIndex].date} :تاریخ
                </p>

                <p dir="rtl" className="leading-8 mt-4">
                    {latestNewsHeadlineData[currentSlideIndex].description}
                </p>
                <p dir="rtl" className="leading-8 mt-4">جاری کردہ ۔۔۔</p>
                <p className="text-green-600 mt-4" dir="rtl">
                    شعبہ نشرو اشاعت: تحریک لبیک یارسول اللہ ﷺ وتحریک صراط مستقیم TLY+TSM+TLI
                </p>
                <p dir="rtl" className="mt-4">
                    <b className="text-sky-700">محمد جمیل بیگ جلالی</b> : 03224552042 =
                    baigj91@gmail.com
                </p>
            </div>
        </div>
    );
};

export default LatestNewsHeadline;
