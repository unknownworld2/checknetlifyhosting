"use client";
import { useState } from "react";
import { Button } from "@mui/material";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { ourBlogsList } from "./data";
import HomeSectionHeading from "../HomeSectionHeading";
import DialogModal from "@/components/base/DialogModal";

interface OurBlogsSectionProps {
    className?: string;
}

const OurBlogsSection = ({
    className
}: OurBlogsSectionProps) => {
    const [dialogModalOpen, setDialogModalOpen] = useState<boolean>(false);

    return (
        <div className={className}>
            <div className="pt-20">
                <HomeSectionHeading className="text-center">
                    Dr. Jalali&apos;s Columns
                </HomeSectionHeading>
                <p className="font-roboto text-paragraph text-base font-light text-center mt-2 px-8">
                    Our motive is to spread the message of Islam worldwide through the best of our knowledge
                </p>
            </div>

            <div className="mt-10 h-[400px] mlg:h-80 overflow-y-auto">
                {ourBlogsList.map((blog, index) => {
                    return (
                        <div key={index} className="w-full py-2 mlg:py-0 my-2 bg-gray-200 flex flex-col gap-4 sm:gap-4 mlg:gap-0 mlg:flex-row justify-between px-8 mlg:pl-5">
                            <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center gap-2 sm:gap-4">
                                <h3 className="text-lg ssm:text-2xl font-semibold ssm:font-medium">{blog.title}</h3>
                                <p className="text-gray-800 text-base ssm:text-xl font-light ssm:font-normal">{blog.date}</p>
                            </div>
                            <div className="flex flex-row justify-center items-center gap-4">
                                <Button
                                    className="text-white bg-gray-600 hover:bg-gray-700 rounded-md mlg:rounded-sm font-light text-sm ssm:text-base lg:text-lg font-roboto px-4 lg:px-16 py-2 normal-case"
                                    variant="contained"
                                    size="medium"
                                    startIcon={<AutoStoriesIcon />}
                                    onClick={() => setDialogModalOpen(true)}
                                >
                                    Read
                                </Button>
                                <Button
                                    className="text-white bg-primary hover:bg-red-600 rounded-md mlg:rounded-sm font-light text-sm ssm:text-base lg:text-lg font-roboto px-4 lg:px-16 py-2 normal-case"
                                    variant="contained"
                                    startIcon={<CloudDownloadIcon />}
                                    size="medium"
                                    onClick={() => setDialogModalOpen(true)}
                                >
                                    Download
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

            <DialogModal
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
            </DialogModal>
        </div>
    )
}
export default OurBlogsSection;