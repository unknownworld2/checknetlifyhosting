import { Button } from "@mui/material";
import ExploreEducationAndCommunityEventsSlider from "./ExploreEducationAndCommunityEventsSlider";

interface EmpoweringThroughEducationAndCommunityInitiativesProps {
    className?: string;
}

const EmpoweringThroughEducationAndCommunityInitiatives = ({
    className
}: EmpoweringThroughEducationAndCommunityInitiativesProps) => {
    return (
        <div className={`${className} pt-12 pb-14 bg-primary bg-curved_lines_texture bg-cover`}>
            <h2 className="font-roboto font-bold text-2xl ssm:text-40px text-center text-white leading-8 ssm:leading-tight sm:leading-normal">
                Islamic Lectures related to Quran <div className="hidden xlg:block"></div> Sunnah, Seerat, and Islamic Aqaid
            </h2>

            <ExploreEducationAndCommunityEventsSlider className="mt-10" />

            <div className="flex flex-row justify-center">
                <Button
                    className="text-white border border-white border-solid font-semibold text-lg font-roboto rounded-full mt-10 px-8 py-3 normal-case"
                    variant="outlined"
                    size="medium"
                >
                    View All Updates
                </Button>
            </div>
        </div>
    )
}
export default EmpoweringThroughEducationAndCommunityInitiatives;