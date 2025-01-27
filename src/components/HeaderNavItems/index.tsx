"use client";
import Link from "next/link";
import { useState } from "react";
import { headerNavItemsList } from "./data";
import { usePathname } from "next/navigation";
import HeaderSearchField from "./HeaderSearchField";
import DialogModal from "@/components/base/DialogModal";

interface HeaderNavItemsProps {
    className?: string;
}

const HeaderNavItems = ({
    className
}: HeaderNavItemsProps) => {
    const pathname = usePathname();

    const [dialogModalOpen, setDialogModalOpen] = useState<boolean>(false);

    return (
        <div className={`${className} bg-navItemHeaderBg text-white w-full h-fit py-4 ssm:py-0 ssm:h-20 flex flex-col justify-center`}>
            <div className="flex flex-row justify-between">
                <div className="hidden xlg:flex flex-col justify-center items-center w-fit">
                    <ul className="flex flex-row w-fit h-fit">
                        {headerNavItemsList.map((item, index) => (
                            <li key={index} className="mx-4"
                                onClick={() => {
                                    setDialogModalOpen(true);
                                }}
                            >
                                <Link href={"/"} className={`text-lg border-b border-transparent hover:border-gray-400 transition-all duration-200 hover:text-green-500 hover:border-b-2 ${pathname === item.path ? "text-primary font-bold" : "text-white"}`}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <HeaderSearchField className="w-full xlg:w-fit" />
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
                    This site is under construction. This page will be available soon. Thank you for your patience.
                </p>
            </DialogModal>
        </div>
    )
}
export default HeaderNavItems;