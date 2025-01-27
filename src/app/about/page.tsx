"use client";

import { Suspense, lazy } from "react";
import Loader from "@/components/base/Loader";

// Lazy load the components
const AboutPageBanner = lazy(() => import("./AboutPageBanner"));
const AboutPageDrAshrafAsifJalaliIntroduction = lazy(() => import("./AboutPageDrAshrafAsifJalaliIntroduction"));

const AboutPage = () => {
    return (
        <div>
            {/* Suspense ensures that a fallback loader is shown while the components are being loaded */}
            <Suspense fallback={<Loader />}>
                <AboutPageBanner />
            </Suspense>

            <Suspense fallback={<Loader />}>
                <AboutPageDrAshrafAsifJalaliIntroduction />
            </Suspense>
        </div>
    );
};

export default AboutPage;
