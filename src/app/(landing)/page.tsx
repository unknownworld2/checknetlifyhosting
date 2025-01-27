// "use client";

// import Divider from '@mui/material/Divider';
// import LandingPageSlider from "@/page-components/Home/LandingPageSlider";
// import AboutFounder from "@/page-components/Home/AboutFounder";
// import OurInspirationalJourney from '@/page-components/Home/OurInspirationalJourney';
// import IslamicNewsAndUpdates from '@/page-components/Home/IslamicNewsAndUpdates';
// import ExploreIslamicLiterature from '@/page-components/Home/ExploreIslamicLiterature';
// import EmpoweringThroughEducationAndCommunityInitiatives from "@/page-components/Home/EmpoweringThroughEducationAndCommunityInitiatives";
// import OutImpactMakingADifference from '@/page-components/Home/OurImpactMakingADifference';
// import MakeDifferenceWithDonation from '@/page-components/Home/MakeDifferenceWithDonation';
// import ReasonToDonateContainer from '@/page-components/Home/MakeDifferenceWithDonation/ReasonToDonateContainer';
// import MonthlyMagazineWithCalender from '@/page-components/Home/MonthlyMagazineWithCalender';
// import SnapShotsOfOurImpact from '@/page-components/Home/SnapShotsOfOurImpact';
// import ExploreOurVideos from '@/page-components/Home/ExploreOurVideos';
// import OurBlogsSection from '@/page-components/Home/OurBlogsSection';
// import MonthlyMagazineBanner from '@/page-components/Home/MonthlyMagazineBanner';

// function Home() {
//   return (
//     <main className="m-0 p-0 w-full">
//       <LandingPageSlider />

//       <section className="px-6 ssm:px-10 sm:px-20">
//         <MonthlyMagazineBanner className="mt-20" />

//         <ExploreOurVideos />

//         <Divider className="my-11 xlg:my-14" />

//         {/* <AboutFounder className="mt-16" />

//         <Divider className="my-11 xlg:my-14" /> */}

//         <OurInspirationalJourney />
//       </section>

//       <section className='px-6 ssm:px-10 sm:px-20'>
//         <ExploreIslamicLiterature />
//       </section>


//       <EmpoweringThroughEducationAndCommunityInitiatives className='mt-20 px-6 ssm:px-10 sm:px-20' />

//       <section className="px-6 ssm:px-10 sm:px-20">
//         <OutImpactMakingADifference />
//       </section>

//       <section className="px-6 ssm:px-10 sm:px-20">
//         <Divider className="mb-14 mt-8" />

//         {/* <MakeDifferenceWithDonation /> */}
//       </section>

//       <MonthlyMagazineWithCalender className="mt-20 px-6 ssm:px-10 sm:px-20" />


//       <section className="px-6 ssm:px-10 sm:px-20">
//         <SnapShotsOfOurImpact />
//         {/*
//         <Divider className="mt-20" />
//         */}
//       </section>

//       <Divider className="mt-20" />

//       <OurBlogsSection className="" />

//       <IslamicNewsAndUpdates />
//     </main>
//   );
// }
// export default Home;

"use client";

import dynamic from 'next/dynamic';
import Divider from '@mui/material/Divider';

// Dynamically import components with SSR disabled for better performance
const LandingPageSlider = dynamic(() => import("@/page-components/Home/LandingPageSlider"), { ssr: true });
const AboutFounder = dynamic(() => import("@/page-components/Home/AboutFounder"), { ssr: true });
const OurInspirationalJourney = dynamic(() => import('@/page-components/Home/OurInspirationalJourney'), { ssr: true });
const IslamicNewsAndUpdates = dynamic(() => import('@/page-components/Home/IslamicNewsAndUpdates'), { ssr: true });
const ExploreIslamicLiterature = dynamic(() => import('@/page-components/Home/ExploreIslamicLiterature'), { ssr: true });
const EmpoweringThroughEducationAndCommunityInitiatives = dynamic(() => import("@/page-components/Home/EmpoweringThroughEducationAndCommunityInitiatives"), { ssr: true });
const OutImpactMakingADifference = dynamic(() => import('@/page-components/Home/OurImpactMakingADifference'), { ssr: true });
const MonthlyMagazineWithCalender = dynamic(() => import('@/page-components/Home/MonthlyMagazineWithCalender'), { ssr: true });
const SnapShotsOfOurImpact = dynamic(() => import('@/page-components/Home/SnapShotsOfOurImpact'), { ssr: true });
const ExploreOurVideos = dynamic(() => import('@/page-components/Home/ExploreOurVideos'), { ssr: true });
const OurBlogsSection = dynamic(() => import('@/page-components/Home/OurBlogsSection'), { ssr: true });
const MonthlyMagazineBanner = dynamic(() => import('@/page-components/Home/MonthlyMagazineBanner'), { ssr: true });
const IslamicMagazinesSection = dynamic(() => import('@/page-components/Home/IslamicMagazinesSection'), { ssr: true });

function Home() {
  return (
    <main className="m-0 p-0 w-full">
      {/* Hero Section */}
      <LandingPageSlider />

      <section className="px-6 ssm:px-10 sm:px-20">
        <MonthlyMagazineBanner className="mt-20" />
        <ExploreOurVideos />
      </section>

      <section>
        <Divider className="mt-20" />
        <IslamicMagazinesSection />
      </section>

      <section className='px-6 ssm:px-10 sm:px-20'>
        <Divider className="my-11 xlg:my-14" />

        <OurInspirationalJourney />
      </section>


      {/* Explore Section */}
      <section className="px-6 ssm:px-10 sm:px-20">
        <ExploreIslamicLiterature />
      </section>

      {/* <Divider className="mt-20" />
      <IslamicMagazinesSection /> */}

      {/* Education & Community Initiatives */}
      <EmpoweringThroughEducationAndCommunityInitiatives className="mt-20 px-6 ssm:px-10 sm:px-20" />

      {/* Impact Section */}
      <section className="px-6 ssm:px-10 sm:px-20">
        <OutImpactMakingADifference />
      </section>

      {/* Divider section for better visual separation */}
      <section className="px-6 ssm:px-10 sm:px-20">
        <Divider className="mb-14 mt-8" />
      </section>

      {/* Monthly Magazine & Snapshot */}
      <MonthlyMagazineWithCalender className="mt-20 px-6 ssm:px-10 sm:px-20" />
      <section className="px-6 ssm:px-10 sm:px-20">
        <SnapShotsOfOurImpact />
      </section>

      {/* Footer Blogs & News */}
      <Divider className="mt-20" />
      <OurBlogsSection />
      <IslamicNewsAndUpdates />
    </main>
  );
}

export default Home;
