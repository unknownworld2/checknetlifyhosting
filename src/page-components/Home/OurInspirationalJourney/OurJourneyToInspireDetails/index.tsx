"use client";

import { Button } from "@mui/material";
import { insiprationalJourneyList } from "./data";
import HomeSectionHeading from "../../HomeSectionHeading";

interface OurJourneyToInspireDetailsProps {
    className?: string;
}

const OurJourneyToInspireDetails = ({
    className
}: OurJourneyToInspireDetailsProps) => {
    return (
        <div className={className}>
            <HomeSectionHeading>Our Journey to Inspire and Educate</HomeSectionHeading>

            <div className="flex flex-col gap-2 mt-4">
                {insiprationalJourneyList.map((item, index) => {
                    return (
                        <div className="flex flex-row gap-2" key={index}>
                            <div className="text-primary">
                                ➤
                            </div>
                            <div>
                                <h5 className="font-bold font-roboto text-lg">{item.title}</h5>
                                <p className="font-normal font-roboto text-base">{item.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="flex flex-row justify-center xlg:justify-start">
                <Button
                    className="text-LandingPageButton border border-gray-500 border-solid font-bold text-lg font-roboto rounded-3xl mt-8 px-8 py-2 normal-case"
                    variant="outlined"
                    size="medium"
                >
                    Learn More
                </Button>
            </div>
        </div>
    )
}
export default OurJourneyToInspireDetails;