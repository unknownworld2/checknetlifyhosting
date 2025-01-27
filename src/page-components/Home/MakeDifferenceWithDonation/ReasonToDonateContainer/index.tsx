"use client";
import { Button } from "@mui/material";
import Image from "next/image";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { reasonsToDonateList, reasonToDonateImages } from "./data";

interface ReasonToDonateContainerProps {
    className?: string;
}

const ReasonToDonateContainer = ({
    className
}: ReasonToDonateContainerProps) => {
    return (
        <section className={`w-full flex flex-col-reverse gap-6 xlg:gap-3 xlg:flex-row xlg:justify-between h-full ${className}`}>
            <div className="w-full xlg:w-6/12">
                {reasonsToDonateList.map((reason, index) => {
                    return (
                        <div className="flex flex-row gap-4 mt-4" key={index}>
                            <div>
                                <IoIosCheckmarkCircle className="text-3xl text-primary" />
                            </div>
                            <div>
                                <h3 className="text-xl font-inter font-semibold text-headerSearchFieldBg mb-2">{reason.title}</h3>
                                <p className="text-base font-roboto font-normal text-paragraph">{reason.description}</p>
                            </div>
                        </div>
                    )
                })}

                <div className="flex flex-row justify-center xlg:justify-start">
                    <Button
                        className="text-gray-800 border border-gray-800 border-solid font-semibold text-lg font-roboto rounded-full mt-10 px-8 py-3 normal-case"
                        variant="outlined"
                        size="medium"
                    >
                        Donate Now
                    </Button>
                </div>
            </div>
            <div className="hidden sslg:flex w-full xlg:w-fit h-full flex-row justify-center xlg:block pb xlg:pt-10">
                <div>
                    <section className="flex flex-row gap-4">
                        <div className="w-[354px] h-[366px] relative ml-6">
                            <Image
                                src={reasonToDonateImages[0].src}
                                alt={reasonToDonateImages[0].alt}
                                title={reasonToDonateImages[0].title}
                                fill={true}
                                className="block relative rounded-none shadow-2xl"
                            />
                        </div>
                        <div className="w-[160px] h-[228px] relative mt-10">
                            <Image
                                src={reasonToDonateImages[1].src}
                                alt={reasonToDonateImages[1].alt}
                                title={reasonToDonateImages[1].title}
                                fill={true}
                                className="block relative rounded-none shadow-2xl"
                            />
                        </div>
                    </section>
                    <section className="flex flex-row gap-4">
                        <div className="w-[321px] h-[176px] relative mt-4">
                            <Image
                                src={reasonToDonateImages[2].src}
                                alt={reasonToDonateImages[2].alt}
                                title={reasonToDonateImages[2].title}
                                fill={true}
                                className="block relative rounded-none shadow-2xl"
                            />
                        </div>
                        <div className="w-[209px] h-[261px] relative -mt-20 ml-0">
                            <Image
                                src={reasonToDonateImages[3].src}
                                alt={reasonToDonateImages[3].alt}
                                title={reasonToDonateImages[3].title}
                                fill={true}
                                className="block relative rounded-none shadow-2xl"
                            />
                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}
export default ReasonToDonateContainer;