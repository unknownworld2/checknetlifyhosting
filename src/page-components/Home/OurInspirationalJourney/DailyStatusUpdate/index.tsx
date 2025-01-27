"use client";

import Image from "next/image";
import { daily_status_update_hadeesePaak } from "./data";

interface DailyStatusUpdateProps {
    className?: string;
}

const DailyStatusUpdate = ({
    className
}: DailyStatusUpdateProps) => {
    return (
        <div className={className}>
            <div className="grow shadow-2xl rounded-lg w-full h-80 sssm:h-96 ssm:h-[400] sm:h-[500px] 0.5xl:h-[600px] relative overflow-hidden">
                <Image
                    src={daily_status_update_hadeesePaak.image}
                    alt={daily_status_update_hadeesePaak.IslamicDate}
                    fill={true}
                    // layout="fill" // Fills the container
                    // objectFit="contain" // Ensures the entire image is visible inside the container
                    className="transition-all ease-linear duration-300 h-full w-full"
                />
            </div>
        </div>
    )
}
export default DailyStatusUpdate;