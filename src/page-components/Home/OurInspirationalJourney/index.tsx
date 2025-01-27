import HomeSectionHeading from "../HomeSectionHeading";
import DailyStatusUpdate from "./DailyStatusUpdate";
import LatestNewsHeadline from "./LatestNewsHeadline";
import OurJourneyToInspireDetails from "./OurJourneyToInspireDetails";

interface OurInspirationalJourneyProps {
    className?: string;
}

const OurInspirationalJourney = ({
    className
}: OurInspirationalJourneyProps) => {
    return (
        // <section className={`flex flex-col-reverse xlg:flex-row gap-12 xlg:gap-6 ${className}`}>
        //     <div className="grow w-full xlg:w-7/12 xlg:pr-10">
        //         <OurJourneyToInspireDetails />
        //     </div>

        //     <div className="grow w-full xlg:w-5/12">
        //         <LatestNewsHeadline />
        //     </div>
        // </section>
        <section className={`${className}`}>
            <HomeSectionHeading className="text-center">
                Daily Hadees Shareef & Latest News
            </HomeSectionHeading>
            <div className={`flex flex-col xlg:flex-row gap-12 xlg:gap-6 mt-8`}>
                <div className="grow w-full xlg:w-6/12 px-0 sm:xlg:pr-4">
                    <DailyStatusUpdate />
                </div>

                <div className="grow w-full xlg:w-6/12">
                    <LatestNewsHeadline />
                </div>
            </div>
        </section>
    )
}
export default OurInspirationalJourney;