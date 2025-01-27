// import Image from "next/image";
// import { SnapShotsOfOurImpactImagesList } from "./data";

// const SnapShotsOfOurImpact = () => {
//     return (
//         <div>
//             <div className="pt-20">
//                 <h2 className="text-heading font-roboto text-4xl text-center font-bold">Snapshots of our Impact</h2>
//                 <p className="font-roboto text-paragraph text-base font-light text-center mt-2">A Glimpse into Our Programs and Initiatives</p>
//             </div>

//             <div className="grid grid-cols-4 gap-4">
//                 <div className="relative bg-cover bg-center bg-no-repeat bg-snapshots1 h-48 transform transition-transform duration-300 hover:scale-110 image-quality" />
//                 <div className="bg-primary relative bg-cover bg-center bg-no-repeat bg-snapshots2 transform transition-transform duration-300 hover:scale-110 image-quality" />
//                 <div className="bg-primary relative row-span-2 bg-cover bg-center bg-no-repeat bg-snapshots3 transform transition-transform duration-300 hover:scale-110 image-quality" />
//                 <div className="bg-primary relative row-span-2 bg-cover bg-center bg-no-repeat bg-snapshots4 transform transition-transform duration-300 hover:scale-110 image-quality" />
//                 <div className="bg-primary relative bg-cover bg-center bg-no-repeat bg-snapshots5 h-48 transform transition-transform duration-300 hover:scale-110 image-quality" />
//                 <div className="bg-primary relative bg-cover bg-center bg-no-repeat bg-snapshots6 transform transition-transform duration-300 hover:scale-110 image-quality" />
//             </div>
//         </div>
//     )
// }
// export default SnapShotsOfOurImpact;
"use client";
import Image from "next/image";
import { Button } from "@mui/material";
import { SnapShotsOfOurImpactImagesList } from "./data";
import HomeSectionHeading from "../HomeSectionHeading";

const SnapShotsOfOurImpact = () => {
    return (
        <div>
            <div className="pt-20">
                <HomeSectionHeading className="text-center">
                    Snapshots of our Impact
                </HomeSectionHeading>
                <p className="font-roboto text-paragraph text-base font-light text-center mt-2">A Glimpse into Our Programs and Initiatives</p>
            </div>

            <div className="grid grid-cols-4 gap-4 mt-20">
                <div className="relative h-28 ssm:h-36 sm:h-48 overflow-hidden">
                    <div className="rounded-sm bg-cover bg-center bg-no-repeat bg-snapshots1 h-full w-full transform transition-transform duration-300 hover:scale-110 image-quality" />
                </div>
                <div className="relative h-28 ssm:h-36 sm:h-48 overflow-hidden">
                    <div className="rounded-sm bg-cover bg-center bg-no-repeat bg-snapshots2 h-full w-full transform transition-transform duration-300 hover:scale-110 image-quality" />
                </div>
                <div className="relative row-span-2 overflow-hidden">
                    <div className="rounded-sm bg-cover bg-center bg-no-repeat bg-snapshots3 h-full w-full transform transition-transform duration-300 hover:scale-110 image-quality" />
                </div>
                <div className="relative row-span-2 overflow-hidden">
                    <div className="rounded-sm bg-cover bg-center bg-no-repeat bg-snapshots4 h-full w-full transform transition-transform duration-300 hover:scale-110 image-quality" />
                </div>
                <div className="relative h-28 ssm:h-36 sm:h-48 overflow-hidden">
                    <div className="rounded-sm bg-cover bg-center bg-no-repeat bg-snapshots5 h-full w-full transform transition-transform duration-300 hover:scale-110 image-quality" />
                </div>
                <div className="relative h-28 ssm:h-36 sm:h-48 overflow-hidden">
                    <div className=" bg-cover bg-center bg-no-repeat bg-snapshots6 h-full w-full transform transition-transform duration-300 hover:scale-110 image-quality" />
                </div>
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
export default SnapShotsOfOurImpact;
