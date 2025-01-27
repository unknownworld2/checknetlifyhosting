"use client";
import { Button } from "@mui/material";
import VideosSlider from "./VideosSlider";
import HomeSectionHeading from "../HomeSectionHeading";

const ExploreOurVideos = () => {
    return (
        <div>
            <div className="pt-20">
                <HomeSectionHeading className="text-left sm:text-center">
                    Latest Bayanaat and Videos
                </HomeSectionHeading>
                <p className="font-roboto text-paragraph text-base font-light text-left sm:text-center mt-2">
                    Our motive is to spread the message of Islam through every possible means
                </p>
            </div>

            <VideosSlider className="mt-10" />

            <div>
                add a 
            </div>

            <div className="flex flex-row justify-center items-center mt-5">
                <Button
                    className="text-gray-800 border border-gray-800 border-solid font-semibold text-lg font-roboto rounded-full mt-10 px-16 py-3 normal-case"
                    variant="outlined"
                    size="medium"
                >
                    View All
                </Button>
            </div>
        </div>
    )
}
export default ExploreOurVideos;