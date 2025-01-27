"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import LoaderSmart from "@/components/base/LoaderSmart";

// Dynamically import components to optimize loading time
const ContactUsPageCard = dynamic(() => import("./ContactUsPageCard"), {
    ssr: true
});
const ContactUsPageBanner = dynamic(() => import("./ContactUsPageBanner"), {
    ssr: true
});
const ContactUsPageMap = dynamic(() => import("./ContactUsPageMap"), {
    ssr: true
});

const ContactUsPage = () => {
    return (
        <div>
            {/* Wrapping the banner with Suspense to show the loader until it's loaded */}
            <Suspense fallback={<LoaderSmart />}>
                <ContactUsPageBanner />
            </Suspense>

            <section className="px-6 ssm:px-10 sm:px-20">
                {/* Wrapping the card with Suspense to show the loader */}
                <Suspense fallback={<LoaderSmart />}>
                    <ContactUsPageCard className="-mt-10" />
                </Suspense>
            </section>

            <Suspense fallback={<LoaderSmart />}>
                <ContactUsPageMap />
            </Suspense>
        </div>
    );
};

export default ContactUsPage;
