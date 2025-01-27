import { ButtonBase } from "@mui/material";

interface LibraryFeedbackSectionProps {
    className?: string;
}

const LibraryFeedbackSection = ({
    className,
}: LibraryFeedbackSectionProps) => {
    return (
        <div
            className={`${className} relative rounded-t-full rounded-b-none bg-[#BDFFE0] pt-20 pb-16 mt-24`}
        >
            <h2 className="text-4xl font-bold font-roboto text-heading text-center">FeedBack</h2>

            <p className="mt-4 font-roboto text-xl text-center text-[#636363] font-light">
                How Can We Serve You Better? Let Us Know
            </p>

            {/* "Give a FeedBack" Transparent Button */}
            <div className="flex justify-center">
                <ButtonBase
                    className="mt-6 w-56 h-14 border border-black border-solid rounded-md flex items-center justify-center"
                >
                    <span className="text-gray-800 font-roboto text-xl font-bold">Give a FeedBack</span>
                </ButtonBase>
            </div>
        </div>
    );
};

export default LibraryFeedbackSection;
