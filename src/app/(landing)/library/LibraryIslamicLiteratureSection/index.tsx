import { Button } from "@mui/material";
import ExploreIslamicBooksSlider from "./ExploreIslamicBooksSlider";
import HomeSectionHeading from "@/page-components/Home/HomeSectionHeading";

interface LibraryIslamicLiteratureSectionProps {
    className?: string;
    title?: string;
}

const LibraryIslamicLiteratureSection = ({
    className,
    title = "Library Books",
}: LibraryIslamicLiteratureSectionProps) => {
    return (
        <div className={`${className}`}>
            <h2 className="font-roboto font-bold text-3xl text-left text-heading leading-tight sm:leading-normal mt-20">
                {title}
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
export default LibraryIslamicLiteratureSection;