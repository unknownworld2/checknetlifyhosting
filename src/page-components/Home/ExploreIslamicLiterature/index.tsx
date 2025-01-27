import { Button } from "@mui/material";
import ExploreIslamicBooksSlider from "./ExploreIslamicBooksSlider";
import HomeSectionHeading from "../HomeSectionHeading";

interface ExploreIslamicLiteratureProps {
    className?: string;
}

const ExploreIslamicLiterature = ({
    className
}: ExploreIslamicLiteratureProps) => {
    return (
        <div className={`${className}`}>
            <h2 className="font-roboto font-bold text-2xl ssm:text-40px text-center text-heading leading-tight sm:leading-normal mt-20">
                Explore Our Rich Collection of Islamic Literature
            </h2>

            <ExploreIslamicBooksSlider className="mt-10 0.5xl:mt-6" />

            <div className="flex flex-row justify-center">
                <Button
                    className="text-LandingPageButton border border-gray-500 border-solid font-bold text-lg font-roboto rounded-3xl mt-8 px-10 py-2 normal-case"
                    variant="outlined"
                    size="medium"
                >
                    View More
                </Button>
            </div>
        </div>
    )
}
export default ExploreIslamicLiterature;