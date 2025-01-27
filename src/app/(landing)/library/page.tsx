// "use client";

// import LibraryPageBanner from "./LibraryPageBanner";
// import LibraryCategoriesSection from "./LibraryCategoriesSection";
// import LibraryIslamicLiteratureSection from "./LibraryIslamicLiteratureSection";
// import MonthlyMagazineWithCalender from "@/page-components/Home/MonthlyMagazineWithCalender";
// import LibraryPoetryCollection from "./LibraryPoetryCollection";
// import LibraryFatawasSection from "./LibraryFatawasSection";
// import LibraryFeedbackSection from "./LibraryFeedbackSection";

// const LibraryPage = () => {
//     return (
//         <div>
//             <LibraryPageBanner />

//             <section className="px-6 ssm:px-10 sm:px-20">
//                 <LibraryCategoriesSection />

//                 <LibraryIslamicLiteratureSection title="New Books" />

//                 <LibraryIslamicLiteratureSection title="Month Of Rajab Ul Murajjab" />
//             </section>

//             <MonthlyMagazineWithCalender className="mt-20 px-6 ssm:px-10 sm:px-20" />

//             <section className="px-6 ssm:px-10 sm:px-20">
//                 <LibraryPoetryCollection />

//                 <LibraryFatawasSection />

//                 <LibraryFeedbackSection />
//             </section>
//         </div>
//     )
// }
// export default LibraryPage;

"use client";

import dynamic from "next/dynamic";
import { Suspense, memo } from "react";
import LibraryPageBanner from "./LibraryPageBanner";
import LibraryCategoriesSection from "./LibraryCategoriesSection";
import LibraryIslamicLiteratureSection from "./LibraryIslamicLiteratureSection";
import Loader from "@/components/base/Loader";
import { Divider } from "@mui/material";

// Dynamically load less frequently used sections
const MonthlyMagazineWithCalender = dynamic(
    () => import("@/page-components/Home/MonthlyMagazineWithCalender"),
    { ssr: true, loading: () => <Loader /> }
);
const LibraryPoetryCollection = dynamic(() => import("./LibraryPoetryCollection"), {
    ssr: true,
    loading: () => <Loader />,
});
const LibraryFatawasSection = dynamic(() => import("./LibraryFatawasSection"), {
    ssr: true,
    loading: () => <Loader />,
});
const LibraryFeedbackSection = dynamic(() => import("./LibraryFeedbackSection"), {
    ssr: true,
    loading: () => <Loader />,
});
const IslamicMagazinesSection = dynamic(() => import('@/page-components/Home/IslamicMagazinesSection'), {
    ssr: true,
    loading: () => <Loader />,
});

// Memoize sections for performance
const MemoizedBanner = memo(LibraryPageBanner);
const MemoizedCategories = memo(LibraryCategoriesSection);
const MemoizedIslamicLiterature = memo(LibraryIslamicLiteratureSection);

const LibraryPage = () => {
    return (
        <div>
            {/* Memoized and lightweight banner */}
            <MemoizedBanner />

            <section className="px-6 ssm:px-10 sm:px-20">
                {/* Render critical sections first */}
                <MemoizedCategories />

                <MemoizedIslamicLiterature title="New Books" />

                <MemoizedIslamicLiterature title="Month Of Rajab Ul Murajjab" />
            </section>

            <section>
                <Divider className="mt-20" />
                <IslamicMagazinesSection />
            </section>


            {/* Suspense for dynamic loading */}
            <Suspense fallback={<Loader className="mt-20 px-6 ssm:px-10 sm:px-20" />}>
                <MonthlyMagazineWithCalender className="mt-20 px-6 ssm:px-10 sm:px-20" />
            </Suspense>

            <section className="px-6 ssm:px-10 sm:px-20">
                <Suspense fallback={<Loader />}>
                    <LibraryPoetryCollection />
                </Suspense>

                <Suspense fallback={<Loader />}>
                    <LibraryFatawasSection />
                </Suspense>

                <Suspense fallback={<Loader />}>
                    <LibraryFeedbackSection />
                </Suspense>
            </section>
        </div>
    );
};

export default memo(LibraryPage);
