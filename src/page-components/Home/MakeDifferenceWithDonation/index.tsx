import HomeSectionHeading from "../HomeSectionHeading";
import ReasonToDonateContainer from "./ReasonToDonateContainer";

interface MakeDifferenceWithDonationProps {
    className?: string;
}

const MakeDifferenceWithDonation = ({
    className
}: MakeDifferenceWithDonationProps) => {
    return (
        <div className={`pt-5 pb-14 bg-transparent ${className}`}>
            <h2 className="font-roboto font-bold text-2xl ssm:text-4xl sm:text-40px text-center text-heading leading-relaxed sm:leading-[55px]">
                Make a Difference with Your Donation
            </h2>

            <ReasonToDonateContainer className="mt-12" />
        </div>
    )
}
export default MakeDifferenceWithDonation;