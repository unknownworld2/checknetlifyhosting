export interface OurImpactMakingADifferenceItemsListProps {
    id?: number;
    image: {
        url: string;
        width: number;
        height: number;
    };
    title: string;
}

export const OurImpactMakingADifferenceItemsList = [
    {
        id: 1,
        image: {
            url: "/Home/OurImpactMakingADifference/1.png",
            width: 71,
            height: 45
        },
        title: "More than 10,000+ students studied"
    },
    {
        id: 2,
        image: {
            url: "/Home/OurImpactMakingADifference/2.png",
            width: 60,
            height: 50
        },
        title: "More than 100+ books been published"
    },
    {
        id: 3,
        image: {
            url: "/Home/OurImpactMakingADifference/3.png",
            width: 56,
            height: 45
        },
        title: "Our renowned Madrissah"
    }
] as OurImpactMakingADifferenceItemsListProps[];