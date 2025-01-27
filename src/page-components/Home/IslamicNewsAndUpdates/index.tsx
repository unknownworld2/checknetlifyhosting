"use client";
import Link from "next/link";
import Image from "next/image";
import { Icon } from '@iconify/react';
import Button from "@mui/material/Button";
import HomeSectionHeading from "../HomeSectionHeading";
import { islamic_news_and_updates } from "./data";
import { useEffect, useState } from "react";

const IslamicNewsAndUpdates = () => {

    const [currentEvent, setCurrentEvent] = useState<number>(0);

    const nextEvent = () => {
        if (currentEvent === islamic_news_and_updates.length - 1) {
            setCurrentEvent(0);
        } else {
            setCurrentEvent(currentEvent + 1);
        }
    }

    const previousEvent = () => {
        if (currentEvent === 0) {
            setCurrentEvent(islamic_news_and_updates.length - 1);
        } else {
            setCurrentEvent(currentEvent - 1);
        }
    }

    // Auto Slide
    useEffect(() => {
        const interval = setInterval(() => {
            nextEvent();
        }, 5000);

        return () => clearInterval(interval);
    }, [currentEvent]);

    return (
        <div>
            <section className="px-6 ssm:px-10 sm:px-20 pt-12 pb-10 bg-primary mt-20 bg-curved_lines_texture bg-cover">
                <div>
                    <div>
                        <h1 className="font-roboto font-bold text-2xl ssm:text-40px text-center text-white leading-8 ssm:leading-tight">Upcoming Events</h1>
                        <p className="font-roboto font-normal text-base text-center mt-4 xlg:mt-0.5 text-islamicNewsAndUpdateParagraph">Explore Our Spritual Upcoming Events full of Knowledge and for spreading correct Islamic Aqaid and teachings of Islam</p>
                    </div>

                    <div className="flex flex-col xlg:flex-row gap-14 xlg:gap-8 mt-6">
                        {/* <div className="grow shadow-2xl rounded-lg w-full h-80 ssm:h-96 sm:h-[500px] bg-no-repeat bg-cover animate-moveDown transition-all ease-linear duration-300 hover:bg-contain hover:duration-300 hover:transition-all bg-center object-fill"
                            style={{
                                backgroundImage: `url(${islamic_news_and_updates[currentEvent].image})`,
                            }}
                        >

                        </div> */}

                        <div className="grow shadow-2xl rounded-lg w-full h-80 sssm:h-80 ssm:h-96 sm:h-[500px] lg:h-[650px] 0.5xl:h-[700px] relative overflow-hidden">
                            <Image
                                src={islamic_news_and_updates[currentEvent].image}
                                alt="Event Image"
                                fill={true}
                                // layout="fill" // Fills the container
                                // objectFit="contain" // Ensures the entire image is visible inside the container
                                className="transition-all ease-linear duration-300 h-full w-full"
                            />
                        </div>

                        <div className="grow w-full flex flex-col gap-6 xlg:gap-0 justify-between pb-10 h-72 sssm:h-80 ssm:h-96 sm:h-[500px] lg:h-[650px] 0.5xl:h-[700px] overflow-y-auto overflow-x-hidden">
                            <div className="pt-2 sm:pt-4 bg-buttons">
                                <section>
                                    {/* URDU SECTION */}
                                    <h2
                                        className="font-roboto font-bold text-2xl sm:text-4xl ssm:text-3xl text-orange-300 leading-8 ssm:leading-10"
                                        dir="rtl"
                                    >
                                        {islamic_news_and_updates[currentEvent].urduTitle}
                                    </h2>
                                    <p className="font-roboto font-light text-lg sm:text-2xl  text-white mt-2"
                                        dir="rtl"
                                        dangerouslySetInnerHTML={{ __html: islamic_news_and_updates[currentEvent].urduDescription }}
                                    ></p>

                                    {/* Date */}
                                    <p className="font-roboto font-light text-lg text-islamicNewsAndUpdateParagraph mt-2" dir="rtl">
                                        <b className="font-bold text-green-400">تاریخ</b> : {islamic_news_and_updates[currentEvent].urduDate}
                                    </p>

                                    {/* Location */}
                                    <p className="font-roboto font-light text-lg text-islamicNewsAndUpdateParagraph mt-2" dir="rtl">
                                        <b className="font-bold text-indigo-800">مقام</b> : {islamic_news_and_updates[currentEvent].urduLocation}
                                    </p>
                                    {/* URDU SECTION */}
                                </section>

                                <section className="mt-6">
                                    {/* English SECTION */}
                                    <h2
                                        className="font-roboto font-bold text-2xl sm:text-4xl ssm:text-3xl text-blue-900 leading-8 ssm:leading-10"

                                    >
                                        {islamic_news_and_updates[currentEvent].title}
                                    </h2>
                                    <p className="font-roboto text-lg sm:text-2xl font-extralight text-white mt-2"

                                        dangerouslySetInnerHTML={{ __html: islamic_news_and_updates[currentEvent].description }}
                                    ></p>

                                    {/* Date */}
                                    <p className="font-roboto font-light text-lg text-islamicNewsAndUpdateParagraph mt-2">
                                        <b className="font-bold text-green-400">Date</b> : {islamic_news_and_updates[currentEvent].date}
                                    </p>

                                    {/* Location */}
                                    <p className="font-roboto font-light text-lg text-islamicNewsAndUpdateParagraph mt-2">
                                        <b className="font-bold text-indigo-800">Location</b> : {islamic_news_and_updates[currentEvent].location}
                                    </p>
                                    {/* English SECTION */}
                                </section>

                                <p className="font-roboto font-light text-lg text-islamicNewsAndUpdateParagraph mt-6">
                                    Youtube Channel&apos;s Link 👇
                                    <a href="https://www.youtube.com/channel/UC5J5yW3gJwHvX1fQy3B9V9w" className="text-red-400 hover:text-red-500 hover:animate-pulse duration-300 ease-linear">Click Here </a>
                                </p>
                            </div>

                            <div className="flex flex-row gap-4 xlg:border-b border-solid border-white hover:border-white hover:border-b-2 transition-all ease-linear w-fit cursor-pointer">
                                <Link href="/islamic-news-and-updates/nationwide-demonstrations-planned-by-tehreek-labbaik-ya-rasool-allah" className="underline leading-none xlg:leading-normal xlg:no-underline font-roboto font-bold text-xl text-white">
                                    Know More
                                </Link>
                                <Icon icon="icon-park-outline:double-right" className="text-white text-2xl mt-0" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row justify-center xlg:justify-end">
                    <Button
                        className="text-white border border-white border-solid font-bold text-lg font-roboto rounded-3xl mt-8 px-8 py-2 normal-case"
                        variant="outlined"
                        size="medium"
                    >
                        View All Updates
                    </Button>
                </div>
            </section>
        </div>
    )
}
export default IslamicNewsAndUpdates;