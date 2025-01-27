import Image from "next/image";
import { Button } from "@mui/material";
import HomeSectionHeading from "../HomeSectionHeading";

interface AboutFounderProps {
    className?: string;
}

const AboutFounder = ({
    className
}: AboutFounderProps) => {
    return (
        <section className={`flex flex-col xlg:flex-row gap-6 ${className}`}>
            <div className="grow w-full xlg:w-7/12 xxlg:pt-8 xlg:pr-20">
                <HomeSectionHeading>Dr. Muhammad Ashraf Asif Jalali: The Founder of Idara Sirat-e-Mustaqeem</HomeSectionHeading>
                <p className="font-normal font-roboto text-lg text-paragraph mt-4">
                    Dr. Muhammad Ashraf Asif Jalali is a renowned Islamic scholar and leader
                    within the Sunni Barelvi movement in Pakistan. Known for his deep knowledge of Islamic jurisprudence and theology, he has significantly contributed to religious education and community development. He is the founder of Markaze Sirat-e-Mustaqeem and Tehreek-e-Sirat-e-Mustaqeem, organizations focused on promoting Islamic teachings and values. Dr. Jalali is also a prolific author and speaker, delivering lectures and publishing works on various Islamic topics. His initiatives include organizing educational programs and community outreach activities.
                </p>

                <div className="hidden xlg:flex flex-row justify-center xlg:justify-start">
                    <Button
                        className="text-LandingPageButton border border-gray-500 border-solid font-bold text-lg font-roboto rounded-3xl mt-8 px-8 py-2 normal-case"
                        variant="outlined"
                        size="medium"
                    >
                        View More
                    </Button>
                </div>
            </div>

            <div className="flex flex-col gap-4 grow w-full xlg:w-5/12">
                <div className="flex flex-row gap-4 h-auto xlg:h-80 xxlg:h-72">
                    <div className="w-full">
                        <Image
                            src="/Home/AboutFounder/1.png"
                            alt="Dr. Muhammad Ashraf Asif Jalali"
                            title="Dr. Muhammad Ashraf Asif Jalali"
                            fill={true}
                            className="block relative rounded-md shadow-lg"
                        />
                    </div>
                    <div className="w-full">
                        <Image
                            src="/Home/AboutFounder/2.png"
                            alt="Dr. Muhammad Ashraf Asif Jalali"
                            title="Dr. Muhammad Ashraf Asif Jalali"
                            fill={true}
                            className="block relative rounded-md shadow-lg"
                        />
                    </div>
                </div>
                <div className="w-full">
                    <Image
                        src="/Home/AboutFounder/3.png"
                        alt="Dr. Muhammad Ashraf Asif Jalali"
                        title="Dr. Muhammad Ashraf Asif Jalali"
                        fill={true}
                        className="block relative rounded-md shadow-lg"
                    />
                </div>
            </div>
            <div className="flex xlg:hidden flex-row justify-center xlg:justify-start">
                <Button
                    className="text-LandingPageButton border border-gray-500 border-solid font-bold text-lg font-roboto rounded-3xl mt-4 xlg:mt-8 px-8 py-2 normal-case"
                    variant="outlined"
                    size="medium"
                >
                    View More
                </Button>
            </div>
        </section>
    )
}
export default AboutFounder;