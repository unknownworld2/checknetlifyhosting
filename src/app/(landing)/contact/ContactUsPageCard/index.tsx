"use client";

import ContactInformation from "./ContactInformation";
import ContactUsForm from "./ContactUsForm";

interface ContactUsPageCardProps {
    className?: string;
}

const ContactUsPageCard = ({
    className
}: ContactUsPageCardProps) => {
    return (
        <section
            className={`
                ${className}
                shadow-2xl
                rounded-lg
                py-6
                px-8
                w-full
                bg-white
                flex 
                lg:flex-row
                flex-col 
            `}
        >
            <div className="w-full lg:w-7/12 py-4">
                <h2 className="text-2xl sm:text-3xl text-gray-700 font-bold font-raleway">
                    Send Us a Message !
                </h2>

                <ContactUsForm
                    className="mt-4"
                    setCallRefetch={() => {
                        console.log("Call Refetch");
                    }}
                />
            </div>
            <div className="w-full lg:w-5/12 lg:border-l lg:border-gray-300 lg:border-solid py-4 sm:pl-6">
                <h2 className="text-2xl sm:text-3xl text-gray-700 font-bold font-raleway">
                    Contact Information
                </h2>

                <ContactInformation />
            </div>
        </section>
    )
}
export default ContactUsPageCard;