import { OurImpactMakingADifferenceItemsList } from "./data";
import IndividualImpactItem from "./IndividualImpactItem";

interface ImpactItemsContainerProps {
    className?: string;
}

const ImpactItemsContainer = ({
    className
}: ImpactItemsContainerProps) => {
    return (
        <div className={`w-full ${className} flex flex-col gap-6 sslg:gap-0 sslg:flex-row justify-between`}>
            {OurImpactMakingADifferenceItemsList.map((item, index) => {
                return (
                    <div key={index}>
                        <IndividualImpactItem
                            title={item.title}
                            image={item.image}
                        />
                    </div>
                )
            })}
        </div>
    )
}
export default ImpactItemsContainer;