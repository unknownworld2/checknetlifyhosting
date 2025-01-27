import ImpactItemsContainer from "./ImpactItemsContainer";

interface OutImpactMakingADifferenceProps {
    className?: string;
}

const OutImpactMakingADifference = ({
    className
}: OutImpactMakingADifferenceProps) => {
    return (
        <div className={`pt-20 pb-14 bg-transparent ${className}`}>
            <h2 className="font-roboto font-bold text-2xl ssm:text-4xl sm:text-40px text-center text-heading leading-relaxed sm:leading-[55px]">
                Our Impact: Making a Difference in <br className="hidden xlg:block" /> the Islamic Community
            </h2>
            <p className="font-normal text-lg text-center px-2 sslg:px-6 md:px-20 lg:px-48 mt-4">Under the leadership of scholars like <b className="text-green-700 animate-pulse transition-all duration-200">Dr. Muhammad Ashraf Asif Jalali</b>, we continue to provide authoritative guidance on Islamic practices and beliefs.</p>

            <ImpactItemsContainer className="mt-10" />
        </div>
    )
}
export default OutImpactMakingADifference;