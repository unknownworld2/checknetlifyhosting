"use client";
import { useState } from "react";
import toast from 'react-hot-toast';
import { Button } from "@mui/material";
import { ourIslamicLiteratureList } from "./data";
import HomeSectionHeading from "../HomeSectionHeading";
import DialogModal from "@/components/base/DialogModal";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { NEXT_PUBLIC_WEB_APP_URL } from "@/utils/constants";

interface IslamicMagazinesSectionProps {
    className?: string;
}

const IslamicMagazinesSection = ({
    className
}: IslamicMagazinesSectionProps) => {
    const [dialogModalOpen, setDialogModalOpen] = useState<boolean>(false);

    const downloadMagazine = (link: string, title: string) => {
        // The link should be presented for user to download in standard web way
        console.log("Downloading magazine from link: ", link);

        console.log("Download PDF");

        // Notify the user that the file is available for download
        toast(`${title} is ready for download. Please wait while the file is being downloaded.`, {
            icon: '📰',
            style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
            },
            duration: 5000,
            position: "top-right"
        });

        // Trigger file download
        const downloadLink = document.createElement('a');
        //downloadLink.href = "https://siratemustaqeem.website/Home/MonthlyMagazine/FikreMustaqeemJanuary2025.pdf";
        downloadLink.href = `${NEXT_PUBLIC_WEB_APP_URL}${link}`;
        downloadLink.download = `${title}.pdf`; // Optional: Set a default download name
        downloadLink.target = "_blank"; // Open in a new tab
        downloadLink.click();
    }

    const openMagazineOnline = (link: string) => {
        // The link should be opened in a new tab
        console.log("Opening magazine online from link: ", link);

        window.open(`${NEXT_PUBLIC_WEB_APP_URL}${link}`, "_blank");
    }

    return (
        <div className={className}>
            <div className="pt-20">
                <HomeSectionHeading className="text-center">
                    Islamic Literature
                </HomeSectionHeading>
                <p className="font-roboto text-paragraph text-base font-light text-center mt-2 px-8">
                    To Spread the Message of Islam through the true aqaid of Quran and Sunnah
                </p>
            </div>

            <div className="mt-10 h-[400px] mlg:h-80 overflow-y-auto">
                {ourIslamicLiteratureList.map((blog, index) => {
                    return (
                        <div
                            key={index}
                            className="w-full py-2 mlg:py-0 my-2 bg-gray-200 flex flex-col gap-4 sm:gap-4 mlg:gap-0 mlg:flex-row justify-between px-8 mlg:pl-5"
                            // Start from right to left
                            style={{ direction: "rtl" }}
                        >
                            <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center gap-5 sm:gap-4">
                                <h3 className="text-lg ssm:text-2xl font-semibold ssm:font-medium hover:animate-pulse hover:text-blue-700 w-[550px] truncate font-nooriNastaleeq h-10"
                                    style={{ direction: "rtl" }}
                                    title={blog.title}
                                >{blog.title}</h3>
                                <p className="text-gray-600 text-base ssm:text-xl font-light ssm:font-normal">{blog.date}</p>
                            </div>
                            <div className="flex flex-row justify-center items-center gap-4">
                                <Button
                                    style={{
                                        direction: "ltr"
                                    }}
                                    className="text-white bg-green-600 hover:bg-green-800 rounded-md mlg:rounded-sm font-light text-sm ssm:text-base lg:text-lg font-roboto px-4 lg:px-16 py-2 normal-case"
                                    variant="contained"
                                    size="medium"
                                    startIcon={<AutoStoriesIcon />}
                                    onClick={() => openMagazineOnline(blog.link)}
                                >
                                    {/* Online Parhein in urdu */}
                                    آن لائن پڑھیں
                                </Button>
                                <Button
                                    style={{
                                        direction: "ltr"
                                    }}
                                    className="text-white bg-primary hover:bg-blue-700 rounded-md mlg:rounded-sm font-light text-sm ssm:text-base lg:text-lg font-roboto px-4 lg:px-16 py-2 normal-case"
                                    variant="contained"
                                    startIcon={<CloudDownloadIcon />}
                                    size="medium"
                                    onClick={() => downloadMagazine(blog.link, blog.title)}
                                >
                                    {/* Download */}
                                    ڈاؤن لوڈ کریں
                                </Button>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="flex flex-row justify-center items-center mt-4">
                <Button
                    className="bg-slate-900 border border-slate-900 border-solid font-semibold text-lg font-roboto rounded-full mt-10 px-16 py-3 normal-case"
                    variant="contained"
                    size="medium"
                >
                    See All
                </Button>
            </div>

            {/* <DialogModal
                open={dialogModalOpen}
                setOpen={setDialogModalOpen}
                type="warning"
                title="Site Under Construction"
                confirmText="OK"
                cancelText="Cancel"
                onConfirm={() => setDialogModalOpen(false)}
            >
                <p className="text-sm text-gray-500 animate-fadeIn">
                    This site is under construction. Blogs will be available soon. Thank you for your patience.
                </p>
            </DialogModal> */}
        </div>
    )
}
export default IslamicMagazinesSection;