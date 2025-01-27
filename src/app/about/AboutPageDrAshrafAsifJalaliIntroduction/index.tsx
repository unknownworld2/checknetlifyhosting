"use client";

import { aboutUsInroductionData } from "./data";

interface AboutPageDrAshrafAsifJalaliIntroductionProps {
    className?: string;
}

const AboutPageDrAshrafAsifJalaliIntroduction = ({
    className
}: AboutPageDrAshrafAsifJalaliIntroductionProps) => {
    return (
        <div className={`${className}`}>
            {aboutUsInroductionData.map((item, index) => {
                // 1) Replace /n with <br /> in the description
                const replacedText = item.description.replace(/\/n/g, "<br/>");

                return (
                    <div key={index} className="mt-10" style={{ direction: 'rtl' }}>
                        <h3
                            className="text-xl sm:text-2xl hover:animate-pulse hover:transition-all hover:ease-linear font-normal sm:font-bold font-nooriNastaleeq px-10 bg-primary rounded-bl-lg rounded-tl-lg rounded-r-none w-fit text-white pb-5 sm:pb-5 pt-2 sm:pt-4"
                            style={{ direction: "rtl" }}
                        >
                            {item.title}
                        </h3>

                        <section className="mt-2 sm:mt-6 px-6 ssm:px-10 sm:px-20">
                            {/* 2) Use dangerouslySetInnerHTML to render <br/> as HTML */}
                            <p
                                className="text-base cursor-copy hover:text-communityEventsCardTitleBlock sm:text-lg leading-8 sm:leading-10 font-normal font-nooriNastaleeq text-slate-900 mr-0 sm:mr-6 px-4 sm:pl-0 sm:pr-0"
                                style={{ direction: "rtl", wordSpacing: "5px" }}
                                dangerouslySetInnerHTML={{ __html: replacedText }}
                            />
                        </section>
                    </div>
                );
            })}
        </div>
    );
};

export default AboutPageDrAshrafAsifJalaliIntroduction;
