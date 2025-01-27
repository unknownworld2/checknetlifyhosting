"use client";

import { Button, Divider, IconButton } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { EmpoweringThroughEducationAndCommunityInitiativesList } from "../data";
import DialogModal from "@/components/base/DialogModal";

// id: 1,
// title: "مرکزی پروگرامز",
// romanUrduTitle: "Markazi Programs",
// playListLink: "https://www.youtube.com/playlist?list=PL1bJ1Zx5Y1Z"

interface IndividualPlaylistsProps {
    className?: string;
    data: EmpoweringThroughEducationAndCommunityInitiativesList;
    key?: number;
}

const IndividualPlaylists = ({
    className,
    data,
    key
}: IndividualPlaylistsProps) => {
    const router = useRouter();

    const [dialogModalOpen, setDialogModalOpen] = useState(false);

    const handlePlayListLink = () => {
        // router.push(`${data.playListLink}`);
        window.open(data.playListLink, "_blank");
        // setDialogModalOpen(true);
    }

    return (
        <div onClick={handlePlayListLink} className={`cursor-pointer w-72 h-[280px] block rounded-3xl sm:rounded-4xl border border-gray-700 border-solid ${className}`} key={key}>
            <div className="relative w-full h-40 bg-white rounded-t-3xl sm:rounded-t-4xl flex flex-col justify-center gap-6">
                <p className="text-center font-semibold text-3xl text-urduCommunityEventsTitle font-nooriNastaleeq">{data.urduTitle}</p>
                {(data.includeDaroodShareef) && (
                    <p className="text-lg text-green-600 w-full text-center font-nooriNastaleeq">({data.daroodText})</p>
                )}
            </div>

            <div className="px-8 bg-communityEventsCardTitleBlock h-[calc(100%-160px)] rounded-b-3xl sm:rounded-b-4xl flex flex-col justify-center tracking-wider">
                <h3 className="text-2xl font-roboto font-bold text-white text-center">{data.romanUrduTitle}</h3>
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
                    This site is under construction. The playlist will be available soon. Thank you for your patience.
                </p>
            </DialogModal>
        </div>
    )
}
export default IndividualPlaylists;