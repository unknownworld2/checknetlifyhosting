"use client";

import Link from "next/link";
import Image from "next/image";
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import { footerLinksList } from "./data";
import { ButtonBase } from "@mui/material";

const Footer = () => {
    return (
        <footer className="bg-footerBg">
            <div className="mx-auto max-w-screen px-8 py-16 sm:px-8 lg:px-20">
                <div className="flex flex-col slg:flex-row justify-between w-full gap-14 mlg:gap-20">
                    <div className="w-full slg:w-4/12">
                        <Image
                            src="/FooterLogo.png"
                            alt="Markaze Sirate Mustaqeem"
                            width={284}
                            height={90}
                            className="mb-8 lg:mb-0 block"
                        />

                        <h2 className="text-white font-semibold sm:font-bold font-roboto text-xl mt-8 tracking-wide">Head Office</h2>

                        <div className="flex flex-row gap-4 mt-4">
                            <div>
                                <PlaceIcon className="text-greenHeading" />
                            </div>
                            <p className="font-roboto text-base font-light text-white leading-loose slg:leading-normal">
                                Jalali Street , Taj Bagh phase 3 Lahore 54900 , Punjab Pakistan under the supervision of Kanzul Ulama Dr. Muhammad Ashraf Asif Jalali sahab
                            </p>
                        </div>
                    </div>

                    <div className="w-full block sslg:hidden">
                        <h3 className="font-bold text-greenHeading font-roboto text-2xl">{footerLinksList[2].title}</h3>

                        <ul className="mt-6 space-y-2 text-sm">
                            {footerLinksList[2].links.map((link, index) => (
                                <li key={index}>
                                    {(link?.type === "email" || link?.type === "phone" || link?.type === "time") ? (
                                        <p className="text-white font-roboto font-normal text-lg transition hover:opacity-75 flex items-center">
                                            {(link.type === "email") && (
                                                <ButtonBase
                                                    onClick={() => window.location.href = `mailto:${link.name}`}
                                                    className="text-blue-500 cursor-pointer"
                                                >
                                                    <EmailIcon className="text-blue-500" />
                                                </ButtonBase>
                                            )}

                                            {(link.type === "phone") && (
                                                <ButtonBase
                                                    onClick={() => window.location.href = `tel:${link.name}`}
                                                    className="text-green-500 cursor-pointer"
                                                >
                                                    <LocalPhoneIcon className="text-green-500" />
                                                </ButtonBase>
                                            )}

                                            {(link.type === "time") && (
                                                <AccessTimeFilledIcon className="text-yellow-500" />
                                            )}

                                            <span className="max-w-72 truncate ssm:max-w-80 sm:max-w-full block">&nbsp;&nbsp; {link.name}</span>
                                        </p>
                                    ) : (
                                        <Link href={link.url as string} className="text-white transition hover:opacity-75 font-roboto font-normal text-lg">
                                            {link.name}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="w-full slg:w-8/12">
                        <div className="mt-8 grid grid-cols-2 sslg:flex sslg:flex-row sslg:justify-between gap-2">
                            {footerLinksList.map((list, index: number) => {
                                return (
                                    <div key={index} className={`w-fit sslg:w-52 ${(list.id === 3) && ("hidden sslg:block")}`}>
                                        <h3 className="font-bold text-greenHeading font-roboto text-2xl">{list.title}</h3>

                                        <ul className="mt-6 space-y-2 sm:space-y-4 text-sm">
                                            {list.links.map((link, index) => {
                                                return (
                                                    <li key={index}>
                                                        {(link?.type === "email" || link?.type === "phone" || link?.type === "time") ? (
                                                            <p className="text-white font-roboto font-normal text-lg transition hover:opacity-75 truncate hover:overflow-visible hover:whitespace-normal hover:truncate-none hover:max-w-20">
                                                                {link.name}
                                                            </p>
                                                        ) : (
                                                            <Link href={link.url as string} className="text-white transition hover:opacity-75 font-roboto font-normal text-lg">
                                                                {link.name}
                                                            </Link>
                                                        )}
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <ul className="flex flex-row gap-6 justify-center slg:justify-end mt-8">
                    <li>
                        <ButtonBase
                            href="https://www.facebook.com/dr.ashrifasifjalali/"
                            rel="noreferrer"
                            target="_blank"
                            className="text-[#1877F2] transition hover:opacity-75"
                        >
                            <span className="sr-only">Facebook</span>

                            <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    fillRule="evenodd"
                                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </ButtonBase>
                    </li>

                    <li>
                        <ButtonBase
                            href="https://www.instagram.com/drjalalitly/?igsh=MzRlODBiNWFlZA%3D%3D"
                            rel="noreferrer"
                            target="_blank"
                            className="transition hover:opacity-75"
                        >
                            <span className="sr-only">Instagram</span>

                            <svg className="h-8 w-8" viewBox="0 0 24 24" aria-hidden="true">
                                <defs>
                                    <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" style={{ stopColor: '#833ab4', stopOpacity: 1 }} />
                                        <stop offset="50%" style={{ stopColor: '#fd1d1d', stopOpacity: 1 }} />
                                        <stop offset="100%" style={{ stopColor: '#fcb045', stopOpacity: 1 }} />
                                    </linearGradient>
                                </defs>
                                <path
                                    fill="url(#instagram-gradient)"
                                    fillRule="evenodd"
                                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </ButtonBase>
                    </li>

                    <li>
                        <ButtonBase
                            href="https://twitter.com/DrJalaliTLY?s=09"
                            rel="noreferrer"
                            target="_blank"
                            className="text-[#1DA1F2] transition hover:opacity-75"
                        >
                            <span className="sr-only">Twitter</span>

                            <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                                />
                            </svg>
                        </ButtonBase>
                    </li>

                    {/* <li>
                        <ButtonBase>
                            <a
                                href="https://www.linkedin.com/in/dr-muhammad-ashraf-asif-jalali-787049190/?originalSubdomain=pk"
                                rel="noreferrer"
                                target="_blank"
                                className="text-gray-400 transition hover:opacity-75"
                            >
                                <span className="sr-only">Linkedin</span>

                                <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48">
                                    <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z" /><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z" />
                                </svg>
                            </a>
                        </ButtonBase>
                    </li> */}

                    <li>
                        <ButtonBase
                            href="https://www.youtube.com/channel/UCiQoMsK_mCObTvPjuKBcPzg?sub_confirmation=1"
                            rel="noreferrer"
                            target="_blank"
                            className="text-[#FF0000] transition hover:opacity-75"
                        >
                            <span className="sr-only">YouTube</span>

                            <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48">
                                <path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z" /><path fill="#FFF" d="M20 31L20 17 32 24z" />
                            </svg>
                        </ButtonBase>
                    </li>
                </ul>

                <div className="mt-8 border-t-[0.5px] border-gray-50 pt-8">
                    <div className="flex flex-col gap-0 sslg:gap-2 mlg:gap-0 mlg:flex-row justify-center items-center mlg:items-start mlg:justify-between w-full">
                        <p className="text-lg text-gray-300 w-fit">
                            &copy; 2024. Idara Sirate-Mustaqeem All rights reserved.
                        </p>

                        <ul className="mt-8 hidden sslg:flex w-full mlg:w-fit mlg:flex-wrap justify-evenly items-center mlg:items-start mlg:justify-start gap-4 text-lg sm:mt-0 lg:justify-end">
                            <li>
                                <a href="#" className="text-gray-300 transition hover:opacity-75">
                                    Terms & Conditions
                                </a>
                            </li>

                            <li>
                                <a href="#" className="text-gray-300 transition hover:opacity-75">
                                    Privacy Policy
                                </a>
                            </li>

                            <li>
                                <a href="#" className="text-gray-300 transition hover:opacity-75">
                                    Our Mission
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;