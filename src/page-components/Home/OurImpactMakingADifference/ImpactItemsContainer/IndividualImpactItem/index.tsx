import Image from "next/image";
import { OurImpactMakingADifferenceItemsListProps } from "../data";

interface IndividualImpactItemProps extends OurImpactMakingADifferenceItemsListProps {
    key?: number;
    className?: string;
}

const IndividualImpactItem = ({
    key,
    className,
    title,
    image
}: IndividualImpactItemProps) => {
    return (
        <div className={`w-full sslg:w-fit h-auto flex flex-col xlg:flex-row gap-4 xlg:gap-0 ${className}`} key={key}>
            <div className="flex flex-row justify-center xlg:justify-start">
                <div className="relative w-116px h-116px bg-ourImpactBg rounded-full flex flex-col justify-center items-center xlg:grow">
                    <Image
                        src={image.url}
                        alt={title}
                        width={image.width}
                        height={image.height}
                        loading="eager"
                        className="block"
                    />
                </div>
            </div>
            <div className="flex flex-col justify-center items-center w-full sslg:w-fit xlg:w-[calc(100%-116px)] text-center xlg:text-left md:px-4 xlg:pl-4 xlg:pr-12">
                <h3 className="font-roboto font-normal italic sslg:not-italic text-lg text-urduCommunityEventsTitle">{title}</h3>
            </div>
        </div>
    )
}
export default IndividualImpactItem;