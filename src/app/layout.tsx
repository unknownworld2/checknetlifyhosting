import Script from "next/script";
import type { Metadata } from "next";
import { Toaster } from 'react-hot-toast';
import { Analytics } from "@vercel/analytics/react"
import SnackBarProvider from "@/providers/SnackBarProvider";
import TopNavigationLoader from "@/components/common/TopNavigationLoader";
import MainAppLayout from "@/layouts/MainAppLayout";
import "react-simple-keyboard/build/css/index.css";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';
// Import Swiper styles
import "./globals.css";

// Components CSS
import "../page-components/Home/EmpoweringThroughEducationAndCommunityInitiatives/ExploreEducationAndCommunityEventsSlider/styles.css";
import "../page-components/Home/ExploreIslamicLiterature/ExploreIslamicBooksSlider/styles.css";
import "../page-components/Home/LandingPageSlider/styles.css";
import { FAQPage, WithContext } from "schema-dts";

export const metadata: Metadata = {
  title: "Markaze Sirate Mustaqeem Pakistan - Founded By Dr. Ashraf Asif Jalali Sahib, A Renowned Islamic Scholar , Leader and Author in Pakistan - Kanzul Ullama Mufikir e Islam",
  description: "Dr. Muhammad Ashraf Asif Jalali is a renowned Islamic scholar and leader within the Sunni Barelvi movement in Pakistan and The Founder of Markaze Sirat-e-Mustaqeem. Known for his deep knowledge of Islamic jurisprudence and theology, he has significantly contributed to religious education and community development. He is the founder of Markaze Sirat-e-Mustaqeem and Tehreek-e-Sirat-e-Mustaqeem, organizations focused on promoting Islamic teachings and values. Dr. Jalali is also a prolific author and speaker, delivering lectures and publishing works on various Islamic topics. His initiatives include organizing educational programs and community outreach activities.",
  publisher: "Markaze Sirate Mustaqeem Pakistan",
  category: "Religion, Islam, Islamic Education, Islamic Literature, Islamic Scholar, Islamic Leader, Sunni Barelvi Movement, Markaze Sirat-e-Mustaqeem, Tehreek-e-Sirat-e-Mustaqeem, Dr. Muhammad Ashraf Asif Jalali, Kanzul Ullama Mufikir e Islam Dr. Muhammad Ashraf Asif Jalali, Pakistan , Sunni Barelvi Scholar, Sunni Barelvi Leader, Sunni Barelvi Author, Sunni Barelvi Scholar in Pakistan, Sunni Barelvi Leader in Pakistan, Sunni Barelvi Author in Pakistan",
  icons: [
    {
      url: "/TSMLogo.png",
      sizes: "32x32",
      type: "image/png",
    },
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://siratemustaqeem.website/",
    siteName: "Markaze Sirate Mustaqeem Pakistan",
    images: [
      {
        url: "/TSMLogo.png",
        width: 800,
        height: 600,
        alt: "Markaze Sirate Mustaqeem Pakistan",
      },
    ],
  },
  twitter: {
    creator: "@drjalalitly",
    site: "@drjalalitly",
  },
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true
  },
  bookmarks: [
    "Dr. Muhammad Ashraf Asif Jalali is a renowned Islamic scholar and leader within the Sunni Barelvi movement in Pakistan and The Founder of Markaze Sirat-e-Mustaqeem. Known for his deep knowledge of Islamic jurisprudence and theology, he has significantly contributed to religious education and community development. He is the founder of Markaze Sirat-e-Mustaqeem and Tehreek-e-Sirat-e-Mustaqeem, organizations focused on promoting Islamic teachings and values. Dr. Jalali is also a prolific author and speaker, delivering lectures and publishing works on various Islamic topics. His initiatives include organizing educational programs and community outreach activities.",
    "https://siratemustaqeem.website/",
    "Markaze Sirate Mustaqeem Pakistan",
    "Religion, Islam, Islamic Education, Islamic Literature, Islamic Scholar, Islamic Leader, Sunni Barelvi Movement, Markaze Sirat-e-Mustaqeem, Tehreek-e-Sirat-e-Mustaqeem, Dr. Muhammad Ashraf Asif Jalali, Kanzul Ullama Mufikir e Islam Dr. Muhammad Ashraf Asif Jalali, Pakistan , Sunni Barelvi Scholar, Sunni Barelvi Leader, Sunni Barelvi Author, Sunni Barelvi Scholar in Pakistan, Sunni Barelvi Leader in Pakistan, Sunni Barelvi Author in Pakistan",
    "/TSMLogo.png",
    "32x32",
    "image/png",
    "en_US",
    "@drjalalitly",
    "@drjalalitly",
    "normal",
  ],
  classification: "Religion, Islam, Islamic Education, Islamic Literature, Islamic Scholar, Islamic Leader, Sunni Barelvi Movement, Markaze Sirat-e-Mustaqeem, Tehreek-e-Sirat-e-Mustaqeem, Dr. Muhammad Ashraf Asif Jalali, Kanzul Ullama Mufikir e Islam Dr. Muhammad Ashraf Asif Jalali, Pakistan , Sunni Barelvi Scholar, Sunni Barelvi Leader, Sunni Barelvi Author, Sunni Barelvi Scholar in Pakistan, Sunni Barelvi Leader in Pakistan, Sunni Barelvi Author in Pakistan",
  viewport: {
    width: "device-width",
    height: "device-height",
    initialScale: 1,
    minimumScale: 1,
    maximumScale: 1,
    userScalable: false,
    viewportFit: "cover",
    interactiveWidget: "resizes-visual",
  },
  appleWebApp: {
    capable: true,
    title: "Markaze Sirate Mustaqeem Pakistan",
    startupImage: [
      {
        url: "/TSMLogo.png",
        media: "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)",
      },
    ],
    statusBarStyle: "default",
  },
  appLinks: {
    ios: {
      url: "https://siratemustaqeem.website/",
      app_store_id: "12345",
      app_name: "Markaze Sirate Mustaqeem Pakistan",
    },
    android: {
      package: "com.siratemustaqeem.wel",
      url: "https://siratemustaqeem.website/",
      class: "com.idarasiratemustaqeem.MainActivity",
      app_name: "Markaze Sirate Mustaqeem Pakistan",
    },
    windows: {
      url: "https://siratemustaqeem.website/",
      app_id: "12345",
      app_name: "Markaze Sirate Mustaqeem Pakistan",
    },
    web: {
      url: "https://siratemustaqeem.website/",
      should_fallback: true,
    },
  },
  metadataBase: new URL("https://siratemustaqeem.website/"),
  keywords: [
    "Dr. Muhammad Ashraf Asif Jalali",
    "Markaze Sirate Mustaqeem Pakistan",
    "Sunni Barelvi Scholar",
    "Sunni Barelvi Leader",
    "Sunni Barelvi Author",
    "Sunni Barelvi Scholar in Pakistan",
    "Sunni Barelvi Leader in Pakistan",
    "Sunni Barelvi Author in Pakistan",
    "Sunni Barelvi Movement",
    "Idara Sirate Mustaqeem",
    "Markaze Sirate Mustaqeem",
    "Tehreeke Sirate Mustaqeem",
    "Kanzul Ullama Mufikir e Islam Dr. Muhammad Ashraf Asif Jalali",
    "Pakistan",
    "Islamic Education",
    "Islamic Literature",
    "Islamic Scholar",
    "Islamic Leader",
    "Religion",
    "Islam",
    "Sunni Barelvi Movement in Pakistan",
    "Religious Education",
    "Quran",
    "Hadith",
    "Islamic Jurisprudence",
    "Islamic Theology",
    "Islamic Values",
    "Islamic Teachings",
    "Community Development",
    "Community Outreach",
    "Educational Programs",
    "Religious Lectures",
    "Islamic Publications",
    "Islamic Books",
    "Islamic Literature",
    "Islamic Topics",
    "Islamic Studies",
    "Islamic History",
    "Islamic Culture",
    "Islamic Traditions",
    "Islamic Practices",
    "Islamic Principles",
    "Islamic Ethics",
    "Islamic Morality",
    "Islamic Philosophy",
    "Islamic Spirituality",
    "Islamic Beliefs",
    "Islamic Practices",
    "Islamic Rituals",
    "Islamic Festivals",
    "Islamic Celebrations",
    "Islamic Events",
    "Islamic Holidays",
    "Islamic Months",
    "Islamic Calendar",
    "Islamic Festivals",
    "Islamic Celebrations",
    "Islamic Events",
    "Islamic Holidays",
    "Islamic Months",
    "Islamic Calendar",
    "Islamic Festivals",
    "Islamic Celebrations",
    "Islamic Events",
    "Pakistani Islamic Scholar",
    "Kanzul Ullama Mufikir e Islam Dr. Muhammad Ashraf Asif Jalali",
    "Markaze Sirate Mustaqeem Pakistan",
    "Sunni Barelvi Scholar",
    "Sunni Barelvi Leader",
    "Sunni Barelvi Author",
    "Tehreek-e-Sirat-e-Mustaqeem",
    "Tehreeke Labbaik Islam",
    "Tehreek-e-Labbaik Pakistan",
    "TLP",
    "Tehreek-e-Labbaik",
    "Tehreek-e-Labbaik Pakistan",
    "TLP",
    "TLI",
    "Tehreek-e-Labbaik Islam",
    "Aqeeda e Tauheed",
    "Aqeeda e Risalat",
    "Aqeeda e Khatm e Nabuwwat",
    "Aqeeda e Sahaba",
    "Aqeeda e Ahle Bait",
    "Aqeeda e Ahle Sunnat",
    "Aqeeda e Ahle Sunnat Wal Jamaat",
    "Aqeeda e Ahle Sunnat Wal Jamaat Barelvi",
    "Hanafi",
    "Imam Ahmed Raza Khan",
    "Imam Ahmed Raza Khan Barelvi",
    "Imam Ahmed Raza Khan Barelvi Books",
    "Imam Ahmed Raza Khan Barelvi Books in Urdu",
    "Imam Ahmed Raza Khan Barelvi Books in Arabic",
    "Arabic Expert"
  ],
};

const jsonLd: WithContext<FAQPage> = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is Dr. Muhammad Ashraf Asif Jalali?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dr Muhammad Ashraf Asif Jalali, Founder of Markaze Sirat e Mustaqeem and Chairman Tehreek e Labbaik Ya Rasool Allah, is a renowned and international Islamic PhD scholar, researcher, orator, writer of Ahle sunnat Wa-Jamaa't Barelvi. He presides as one of the leading Islamic spiritual leaders of this era amongst the Sunni muslims around the world. Popularly and affectionately known as Kanzul Ulama, Mufakir-e-Islam and Waaris-e Uloom-e Aala Hazrat. Dr Jalali organized hundreds of seminars and conferences, one of his Seminar named 'Aqeeda e Toheed' seminar is very famous world wide, He has authored hundrerds of Books, and continuously working on it. Dr Jalali has delivered more than 20,000+ lectures ( in Urdu, English and Arabic) on a Wide Range of subjects. Many madrasas and Schools are running under his supervision in pakistan. His followers are in millions around the world and has a strong stance for the protection of 295C, (law) and worked for Namoos e Risalat and Khatm e Nabuwat.",
      },
    },
    {
      "@type": "Question",
      name: "What is Markaze Sirat e Mustaqeem?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Markaze Sirat e Mustaqeem is an organization that is working for the promotion of Islamic teachings and values. It is founded by Dr. Muhammad Ashraf Asif Jalali, a renowned Islamic scholar and leader within the Sunni Barelvi movement in Pakistan. The organization is focused on organizing educational programs and community outreach activities to spread the message of Islam and Ahle Sunnat Wal Jamaat Hanafi Barelvi.",
      }
    },
    {
      "@type": "Question",
      name: "What is the mission of Markaze Sirat e Mustaqeem?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The mission of Markaze Sirat e Mustaqeem is to promote the teachings of Islam and the values of Ahle Sunnat Wal Jamaat Hanafi Barelvi. The organization aims to educate people about the true teachings of Islam and to counter the spread of false and extremist ideologies. It is committed to spreading the message of peace, tolerance, and unity among Muslims and to brong the correct aqaid of Ahle Sunnat Wal Jamaat Hanafi Barelvi to the people around the globe.",
      }
    },
    {
      "@type": "Question",
      name: "How can I join Tehreek e Sirat e Mustaqeem?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To join Tehreek e Sirat e Mustaqeem, you can contact the organization through their official website or social media channels. The organization welcomes volunteers and supporters who are interested in promoting the teachings of Islam and the values of Ahle Sunnat Wal Jamaat Hanafi Barelvi. You can also participate in the educational programs and community outreach activities organized by the organization to contribute to their mission.",
      }
    },
    {
      "@type": "Question",
      name: "What are the activities of Markaze e Sirat e Mustaqeem?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Markaze e Sirat e Mustaqeem organizes a wide range of activities to promote the teachings of Islam and the values of Ahle Sunnat Wal Jamaat Hanafi Barelvi. These activities include educational programs, seminars, conferences, and community outreach activities. The organization also publishes books, articles, and other educational materials to spread the message of Islam and to counter the spread of false and extremist ideologies. Tehreek e Sirat e Mustaqeem is committed to promoting peace, tolerance, and unity among Muslims and to brong the correct aqaid of Ahle Sunnat Wal Jamaat Hanafi Barelvi to the people around the globe.",
      }
    },
    {
      "@type": "Question",
      name: "What are the Madrasas and Schools running under the supervision of Dr. Muhammad Ashraf Asif Jalali?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dr. Muhammad Ashraf Asif Jalali is the founder of several madrasas and schools that are running under his supervision in Pakistan. These madrasas and schools are dedicated to providing quality education and religious training to students. Some of the prominent madrasas and schools founded by Dr. Jalali include \t 1. Markaze Sirate Mustaqeem TajBagh Lahore, 2. Jamia Jalalia Darogha Wala Lahore",
      }
    }
  ],
  headline: "Markaze Sirat e Mustaqeem Pakistan - Frequently Asked Questions",
  description:
    "Frequently Asked Questions about Markaze Sirat e Mustaqeem Pakistan, Dr. Muhammad Ashraf Asif Jalali, and Tehreek e Sirat e Mustaqeem. Find answers to common questions about the organization, its mission, and activities.",
  author: {
    "@type": "Person",
    name: "Luca Restagno",
    url: "https://lucarestagno.com",
  },
  image: "",
  datePublished: "2023-12-10",
  dateModified: "2023-12-28",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white">
        <SnackBarProvider>
          <MainAppLayout>
            {children}
          </MainAppLayout>
        </SnackBarProvider>

        <Toaster
          position="top-right"
          reverseOrder={true}
        />

        <Analytics />

        <TopNavigationLoader />

        <Script
          id="faq-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
