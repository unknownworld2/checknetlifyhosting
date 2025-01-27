"use client";

import { ButtonBase, Box } from "@mui/material";
import Image from "next/image";

interface SubscribeToYoutubeChannelProps {
    className?: string;
}

const SubscribeToYoutubeChannel = ({
    className
}: SubscribeToYoutubeChannelProps) => {
    return (
        <div>
            <div className={`bg-transparent py-16 ${className}`}>
                <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-6xl lg:px-8">
                    <Box
                        component="div"
                        sx={{ display: 'block', textDecoration: 'none' }}
                        onClick={() => {
                            // Open the link in a new tab
                            window.open("https://www.youtube.com/@TheDrJalali?sub_confirmation=1", "_blank");
                        }}
                    >
                        <div className="px-6 py-10 bg-white rounded-lg shadow-lg cursor-pointer">
                            <h2 className="text-xl ssm:text-2xl font-semibold ssm:font-bold mb-6">
                                Subscribe to <span className="text-green-800">Dr Muhammad Ashraf Asif Jalali</span> YouTube Channel
                            </h2>
                            <div className="relative w-full h-48 shadow-none sm:shadow-2xl rounded-lg my-8">
                                <Image
                                    src="/Home/SubscribeToYoutubeChannel/channels4_banner.jpg"
                                    alt="Dr Muhammad Ashraf Asif Jalali"
                                    fill={true}
                                    title="Dr Muhammad Ashraf Asif Jalali"
                                    className="rounded-lg bg-inherit sm:bg-cover object-cover object-center"
                                />
                            </div>
                            <p className="text-gray-600 mb-6 italic font-raleway tracking-wider line-clamp-4 hover:line-clamp-none transition-all duration-300">
                                Dr Muhammad Ashraf Asif Jalali, Founder of Tehreek e Sirat e Mustaqeem and Chairman Tehreek e Labbaik Ya Rasool Allah, is a renowned and international Islamic PhD scholar, researcher, orator, writer of Ahle sunnat Wa-Jamaa&apos;t Barelvi. He presides as one of the leading Islamic spiritual leaders of this era amongst the Sunni muslims around the world. Popularly and affectionately known as Kanzul Ulama, Mufakir-e-Islam and Waaris-e Uloom-e Aala Hazrat. Dr Jalali organized hundreds of seminars and conferences, one of his Seminar named &quot;Aqeeda e Toheed&quot; seminar is very famous world wide, He has authored hundrerds of Books, and continuously working on it. Dr Jalali has delivered more than 20,000+ lectures ( in Urdu, English and Arabic) on a Wide Range of subjects. Many madrasas and Schools are running under his supervision in pakistan. His followers are in millions around the world and has a strong stance for the protection of 295C, (law) and worked for Namoos e Risalat and Khatm e Nabuwat.
                            </p>
                            <ButtonBase
                                component="a"
                                href="https://www.youtube.com/@TheDrJalali?sub_confirmation=1"
                                target="_blank"
                                className="inline-flex items-center py-3 px-4 bg-red-500 hover:bg-red-600 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 text-white rounded-md transition duration-300"
                            >
                                <svg className="w-5 h-5 fill-current mr-2" viewBox="0 0 24 24">
                                    <path d="M21.9 5.9c-.2-.7-.7-1.2-1.4-1.4C18.3 4 12 4 12 4s-6.3 0-8.5.5c-.7.2-1.2.7-1.4 1.4C2 8.1 2 12 2 12s0 3.9.5 5.1c.2.7.7 1.2 1.4 1.4 2.2.5 8.5.5 8.5.5s6.3 0 8.5-.5c.7-.2 1.2-.7 1.4-1.4.5-1.2.5-5.1.5-5.1s0-3.9-.5-5.1zM9.5 15.5V8.5l6.5 3z" />
                                </svg>
                                <span>Subscribe Now</span>
                            </ButtonBase>
                        </div>
                    </Box>

                    {/* Second Channel */}
                    <Box
                        className="mt-10"
                        component="div"
                        sx={{ display: 'block', textDecoration: 'none' }}
                        onClick={() => {
                            window.open("https://www.youtube.com/@SirateMustaqeem.92", "_blank");
                        }}
                    >
                        <div className="px-6 py-10 bg-white rounded-lg shadow-lg cursor-pointer">
                            <h2 className="text-xl ssm:text-2xl font-semibold ssm:font-bold mb-6">
                                Subscribe to <span className="text-blue-800">Markaze Sirate Mustaqeem</span> YouTube Channel
                            </h2>
                            <div className="relative w-full h-48 shadow-none sm:shadow-2xl rounded-lg my-8">
                                <Image
                                    src="/Home/SubscribeToYoutubeChannel/markazesiratemustaqeem.jpg"
                                    alt="Sirate Mustaqeem"
                                    fill={true}
                                    title="Sirate Mustaqeem"
                                    className="rounded-lg bg-inherit sm:bg-cover object-cover object-center"
                                />
                            </div>
                            <ButtonBase
                                component="a"
                                href="https://www.youtube.com/@SirateMustaqeem.92"
                                target="_blank"
                                className="inline-flex items-center py-3 px-4 bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-white rounded-md transition duration-300"
                            >
                                <svg className="w-5 h-5 fill-current mr-2" viewBox="0 0 24 24">
                                    <path d="M21.9 5.9c-.2-.7-.7-1.2-1.4-1.4C18.3 4 12 4 12 4s-6.3 0-8.5.5c-.7.2-1.2.7-1.4 1.4C2 8.1 2 12 2 12s0 3.9.5 5.1c.2.7.7 1.2 1.4 1.4 2.2.5 8.5.5 8.5.5s6.3 0 8.5-.5c.7-.2 1.2-.7 1.4-1.4.5-1.2.5-5.1.5-5.1s0-3.9-.5-5.1zM9.5 15.5V8.5l6.5 3z" />
                                </svg>
                                <span>Subscribe Now</span>
                            </ButtonBase>
                        </div>
                    </Box>
                </div>
            </div>
        </div >
    );
}

export default SubscribeToYoutubeChannel;

// "use client";

// import { ButtonBase, Box } from "@mui/material";
// import Image from "next/image";

// interface SubscribeToYoutubeChannelProps {
//     className?: string;
// }

// const SubscribeToYoutubeChannel = ({
//     className
// }: SubscribeToYoutubeChannelProps) => {
//     return (
//         <div>
//             <div className={`bg-transparent py-16 ${className}`}>
//                 <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-6xl lg:px-8">
//                     {/* First Channel */}
//                     <Box
//                         component="div"
//                         sx={{ display: 'block', textDecoration: 'none', marginBottom: '3rem' }}
//                         onClick={() => {
//                             window.open("https://www.youtube.com/@TheDrJalali?sub_confirmation=1", "_blank");
//                         }}
//                     >
//                         <div className="px-6 py-10 bg-white rounded-lg shadow-lg cursor-pointer">
//                             <h2 className="text-xl ssm:text-2xl font-semibold ssm:font-bold mb-6">
//                                 Subscribe to <span className="text-green-800">Dr Muhammad Ashraf Asif Jalali</span> YouTube Channel
//                             </h2>
//                             <div className="relative w-full h-48 shadow-none sm:shadow-2xl rounded-lg my-8">
//                                 <Image
//                                     src="/Home/SubscribeToYoutubeChannel/channels4_banner.jpg"
//                                     alt="Dr Muhammad Ashraf Asif Jalali"
//                                     fill={true}
//                                     title="Dr Muhammad Ashraf Asif Jalali"
//                                     className="rounded-lg bg-inherit sm:bg-cover object-cover object-center"
//                                 />
//                             </div>
//                             <ButtonBase
//                                 component="a"
//                                 href="https://www.youtube.com/@TheDrJalali?sub_confirmation=1"
//                                 target="_blank"
//                                 className="inline-flex items-center py-3 px-4 bg-red-500 hover:bg-red-600 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 text-white rounded-md transition duration-300"
//                             >
//                                 <svg className="w-5 h-5 fill-current mr-2" viewBox="0 0 24 24">
//                                     <path d="M21.9 5.9c-.2-.7-.7-1.2-1.4-1.4C18.3 4 12 4 12 4s-6.3 0-8.5.5c-.7.2-1.2.7-1.4 1.4C2 8.1 2 12 2 12s0 3.9.5 5.1c.2.7.7 1.2 1.4 1.4 2.2.5 8.5.5 8.5.5s6.3 0 8.5-.5c.7-.2 1.2-.7 1.4-1.4.5-1.2.5-5.1.5-5.1s0-3.9-.5-5.1zM9.5 15.5V8.5l6.5 3z" />
//                                 </svg>
//                                 <span>Subscribe Now</span>
//                             </ButtonBase>
//                         </div>
//                     </Box>

//                     {/* Second Channel */}
//                     <Box
//                         component="div"
//                         sx={{ display: 'block', textDecoration: 'none' }}
//                         onClick={() => {
//                             window.open("https://www.youtube.com/@SirateMustaqeem.92", "_blank");
//                         }}
//                     >
//                         <div className="px-6 py-10 bg-white rounded-lg shadow-lg cursor-pointer">
//                             <h2 className="text-xl ssm:text-2xl font-semibold ssm:font-bold mb-6">
//                                 Subscribe to <span className="text-blue-800">Markaze Sirate Mustaqeem</span> YouTube Channel
//                             </h2>
//                             <div className="relative w-full h-48 shadow-none sm:shadow-2xl rounded-lg my-8">
//                                 <Image
//                                     src="/Home/SubscribeToYoutubeChannel/markazesiratemustaqeem.jpg"
//                                     alt="Sirate Mustaqeem"
//                                     fill={true}
//                                     title="Sirate Mustaqeem"
//                                     className="rounded-lg bg-inherit sm:bg-cover object-cover object-center"
//                                 />
//                             </div>
//                             <ButtonBase
//                                 component="a"
//                                 href="https://www.youtube.com/@SirateMustaqeem.92"
//                                 target="_blank"
//                                 className="inline-flex items-center py-3 px-4 bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-white rounded-md transition duration-300"
//                             >
//                                 <svg className="w-5 h-5 fill-current mr-2" viewBox="0 0 24 24">
//                                     <path d="M21.9 5.9c-.2-.7-.7-1.2-1.4-1.4C18.3 4 12 4 12 4s-6.3 0-8.5.5c-.7.2-1.2.7-1.4 1.4C2 8.1 2 12 2 12s0 3.9.5 5.1c.2.7.7 1.2 1.4 1.4 2.2.5 8.5.5 8.5.5s6.3 0 8.5-.5c.7-.2 1.2-.7 1.4-1.4.5-1.2.5-5.1.5-5.1s0-3.9-.5-5.1zM9.5 15.5V8.5l6.5 3z" />
//                                 </svg>
//                                 <span>Subscribe Now</span>
//                             </ButtonBase>
//                         </div>
//                     </Box>
//                 </div>
//             </div>
//         </div >
//     );
// }

// export default SubscribeToYoutubeChannel;

