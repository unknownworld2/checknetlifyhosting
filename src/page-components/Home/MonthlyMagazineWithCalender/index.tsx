"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import CustomStaticDatePicker from "@/components/base/CustomStaticDatePicker";
import MonthlyCalender from "./MonthlyCalender";

interface MonthlyMagazineWithCalenderProps {
    className?: string;
}

const MonthlyMagazineWithCalender = ({
    className
}: MonthlyMagazineWithCalenderProps) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
    const [isMounted, setIsMounted] = useState(false); // To track if it's mounted on the client-side

    const size = useWindowSize();

    const [dayFontSize, setDayFontSize] = useState<number>(20);
    const [weekDayLabelFontSize, setWeekDayLabelFontSize] = useState<number>(24);

    useEffect(() => {
        // Mark the component as mounted when it runs in the client
        setIsMounted(true);
    }, []);

    // Hook to track window size
    function useWindowSize() {
        const [windowSize, setWindowSize] = useState<{ width: number | undefined; height: number | undefined }>({
            width: undefined,
            height: undefined,
        });

        useEffect(() => {
            if (typeof window !== "undefined") {
                const handleResize = () => {
                    setWindowSize({
                        width: window.innerWidth,
                        height: window.innerHeight,
                    });
                }
                window.addEventListener("resize", handleResize);
                handleResize(); // Initialize size on mount

                return () => window.removeEventListener("resize", handleResize);
            }
        }, []);

        return windowSize;
    }

    useEffect(() => {
        if (size.width) {
            if (size.width > 1366) {
                setDayFontSize(20);
                setWeekDayLabelFontSize(24);
            } else if (size.width > 1024) {
                setDayFontSize(16);
                setWeekDayLabelFontSize(20);
            } else if (size.width > 768) {
                setDayFontSize(14);
                setWeekDayLabelFontSize(18);
            } else {
                setDayFontSize(12);
                setWeekDayLabelFontSize(16);
            }
        }
    }, [size.width]);

    // Only render content after the component is mounted (client-side)
    if (!isMounted) {
        return null; // Avoid hydration issues by rendering nothing on the server
    }

    return (
        <div className={`${className} pt-12 pb-14 bg-primary mt-20 bg-curved_lines_texture bg-cover`}>
            <h2 className="font-roboto font-bold text-2xl ssm:text-40px text-center text-white leading-8 ssm:leading-tight sm:leading-normal">
                Monthly Magazines
            </h2>

            <div className="flex flex-col xlg:flex-row justify-center xlg:justify-evenly gap-10 mt-10">
                <div className="w-full 0.5xl:w-fit 0.5xl:pl-10 flex xlg:block justify-center xlg:items-start">
                    {/* <CustomStaticDatePicker
                        className="w-full xlg:w-96 text-white bg-staticCalenderBg rounded-md"
                        selectedDate={selectedDate as Date}
                        handleDateChange={setSelectedDate}
                        sx={{
                            '.MuiPickersDay-root': {
                                fontSize: dayFontSize,
                                fontWeight: 200,
                                color: "white"
                            },
                            '.MuiDayCalendar-weekDayLabel': {
                                color: 'white',
                                fontSize: weekDayLabelFontSize
                            },
                            '.MuiInputLabel-root': {
                                display: 'none'
                            },
                            '.MuiPickersCalendarHeader-label': {
                                color: 'white',
                                fontSize: dayFontSize
                            },
                            // Make label text white
                            '.MuiTypography-root': {
                                color: 'white',
                            }
                        }}
                    /> */}
                    <MonthlyCalender className="mt-4 sm:mt-10" />
                </div>
                <div className="flex justify-center">
                    <div className="w-full md:w-[558px] h-96 ssm:h-[410px] sslg:h-[460px] sm:h-[500px] md:h-[525px] relative">
                        <Image
                            src="/Home/MonthlyMagazine/magazine.png"
                            alt="Monthly Magazine"
                            className="rounded-none shadow-none"
                            fill={true}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MonthlyMagazineWithCalender;
