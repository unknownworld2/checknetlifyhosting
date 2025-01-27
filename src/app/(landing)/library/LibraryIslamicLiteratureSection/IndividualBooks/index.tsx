"use client";

import { useState } from "react";
import DialogModal from "@/components/base/DialogModal";
import { Button, Divider, IconButton } from "@mui/material";
import Image from "next/image";

interface IndividualBooksProps {
    className?: string;
    bookName: string;
    bookImage: string;
    bookAuthor?: string;
    key?: number;
}

const IndividualBooks = ({
    className,
    bookName = "Book Name",
    bookImage = "/Home/Books/book1.png",
    bookAuthor,
    key
}: IndividualBooksProps) => {
    const [dialogModalOpen, setDialogModalOpen] = useState(false);

    return (
        <div
            className={`
                border border-gray-300 border-solid w-full sslg:w-[286px] slg:w-[360px] lg:w-[300px] xl:w-[310px] 0.5xl:w-[300px] h-auto sslg:h-[440px] py-4 ssm:py-8 sslg:py-2 rounded-md 
                hover:shadow-lg sm:hover:shadow-2xl transition-all duration-300 ease-in-out overflow-hidden cursor-pointer
                ${className}
            `}
            key={key}
        >
            <div className="relative w-full h-[280px]">
                <Image
                    src={bookImage}
                    alt="Book Image"
                    title={bookName}
                    fill={true}
                    className="block"
                />
            </div>

            <div className="w-full border-[0.5px] border-gray-300 border-solid"></div>

            <div className="pt-5 px-6">
                <h3 className="text-xl font-roboto font-bold text-gray-800 text-center h-auto sm:h-14">{bookName}</h3>

                <div className="flex flex-row gap-2 mt-4">
                    <Button
                        variant="contained"
                        color="primary"
                        className="w-full bg-grayButtonBg text-gray-800 rounded-md normal-case"
                        startIcon={<Image src="/Home/Books/icons/read.png" alt="Read" width={32} height={32} />}
                        onClick={() => setDialogModalOpen(true)}
                    >
                        Read
                    </Button>

                    <IconButton
                        className="w-fit bg-grayButtonBg text-gray-800 rounded-md px-6 normal-case"
                        aria-label="Download"
                        onClick={() => setDialogModalOpen(true)}
                    >
                        <Image src="/Home/Books/icons/download.png" alt="Download" width={24} height={24} />
                    </IconButton>

                    <Button
                        className="w-fit bg-grayButtonBg text-gray-800 rounded-md normal-case"
                        aria-label="Share"
                        onClick={() => setDialogModalOpen(true)}
                    >
                        <div className="relative w-7 h-6">
                            <Image src="/Home/Books/icons/share.png" alt="Share" className="block" fill={true} />
                        </div>
                    </Button>
                </div>
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
                    This site is under construction. Books of this category will be available soon. Thank you for your patience.
                </p>
            </DialogModal>
        </div>
    )
}
export default IndividualBooks;