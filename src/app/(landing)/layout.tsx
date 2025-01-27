import Script from "next/script";
import { FAQPage, WithContext } from "schema-dts";
import "@/components/TopNav/index.css";

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

export default function LandingPageLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}
        </>
    );
}
