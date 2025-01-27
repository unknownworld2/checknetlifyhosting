"use client";

import Logo from '../../Logo';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'nextjs13-progress';
import Button from '@mui/material/Button';
import toast from "react-hot-toast";
import { ButtonBase } from '@mui/material';
import { navItemsList } from '../../NavItems/data';
import ThemeSwitch from '@/components/base/ThemeSwitch';
import CancelIcon from '@mui/icons-material/Cancel';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { headerNavItemsList, IHeaderNavItems } from '@/components/HeaderNavItems/data';
import DialogModal from '@/components/base/DialogModal';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

interface SwipeableTemporaryDrawerProps {
    state: { [key in Anchor]: boolean };
    setState: React.Dispatch<React.SetStateAction<{ [key in Anchor]: boolean }>>;
    theme: "light" | "dark";
    toggleTheme: () => void;
}

const MobileNavbar = ({
    state,
    setState,
    theme,
    toggleTheme
}: SwipeableTemporaryDrawerProps) => {
    const router = useRouter();

    const [dialogModal, setDialogModalOpen] = useState<{
        open: boolean,
        type: "donate" | "warning",
    }>({
        open: false,
        type: "warning",
    });

    const [mobileNavList, setMobileNavList] = useState<IHeaderNavItems[]>([] as IHeaderNavItems[]);

    useEffect(() => {
        setMobileNavList([...navItemsList]);
    }, []);

    const handleClose = () => {
        setState({ ...state, right: false });
    };

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event &&
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState({ ...state, [anchor]: open });
            };

    const list = (anchor: Anchor) => {
        return (
            <div
                className='h-screen bg-mobileNavBg text-white flex flex-col justify-end items-end w-screen sssm:w-[calc(100vw-50px)] sm:w-[calc(100vw-200px)]'
                onClick={handleClose}
            >
                <div className='w-full px-6 ssm:px-10 sm:px-20'>
                    <div className='w-full flex flex-row justify-between'>
                        <Logo />
                        <ButtonBase className='rounded-full' onClick={handleClose}>
                            <CancelIcon className='text-4xl md:text-5xl lg:text-6xl text-white' />
                        </ButtonBase>
                    </div>
                    <div className='h-[calc(100vh-140px)] pb-10 ssm:pb-20 mt-9 text-right flex flex-col justify-start overflow-y-hidden'>
                        {mobileNavList.map((item, index) => (
                            <div
                                key={index}
                                className={`flex flex-col justify-end ${(index !== mobileNavList.length - 1) && ("border-b border-gray-300 border-solid")} py-2 hover:cursor-pointer`}
                                onClick={(e) => {
                                    if (item.name !== "Contact" && item.name !== "Home" && item.name !== "Library" && item.name !== "About") {
                                        e.preventDefault(); // Prevent default navigation
                                        toast.error("This page is under construction. Please visit later.", {
                                            duration: 1000,
                                            position: "top-right",
                                            style: {
                                                background: "#333",
                                                color: "#fff",
                                            },
                                            icon: "🚧",
                                        });
                                        return;
                                    }
                                    handleClose();
                                    toast.success(`Redirecting to ${item.name}`, {
                                        duration: 3000,
                                        position: "top-right",
                                        style: {
                                            background: "#333",
                                            color: "#fff",
                                        },
                                        icon: "🚀",
                                    });
                                    // router.push(item.path);
                                }}
                            >
                                <a href={item.path}>
                                    <h4 className='w-fit text-white font-inter text-xl ssm:text-2xl hover:animate-pulse sm:text-3xl md:text-4xl lg:text-5xl font-normal border border-transparent hover:border-solid border-t-0 hover:border-white border-x-0 border-b-2 transition-all ease-in-out duration-300 cursor-pointer'>
                                        {item.name}
                                    </h4>
                                </a>
                            </div>
                        ))}

                        <Button
                            variant="contained"
                            color="primary"
                            className="block sm:hidden bg-green-400 text-white text-xl py-3 normal-case rounded-full px-6 mt-4"
                            onClick={() => {
                                setDialogModalOpen({
                                    open: true,
                                    type: "donate",
                                });
                            }}
                        >
                            Donate Now
                        </Button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            {(['left', 'right', 'top', 'bottom'] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                    >
                        {list(anchor)}
                    </SwipeableDrawer>
                </React.Fragment>
            ))}

            <DialogModal
                open={dialogModal.open && dialogModal.type === "warning"}
                setOpen={(open) => setDialogModalOpen((prev) => ({ ...prev, open }))}
                type="warning"
                title="Site Under Construction"
                confirmText="OK"
                cancelText="Cancel"
                onConfirm={() => setDialogModalOpen({ open: false, type: dialogModal.type })}
            >
                <p className="text-sm text-gray-500 animate-fadeIn">
                    This site is under construction. Please visit later.
                </p>
            </DialogModal>

            <DialogModal
                open={dialogModal.open && dialogModal.type === "donate"}
                setOpen={(open) => setDialogModalOpen((prev) => ({ ...prev, open }))}
                type="success"
                title="Donate to Tehreek e Sirate Mustaqeem"
                confirmText="Contact Now"
                cancelText="Contact Later"
                onConfirm={() => {
                    window.open("https://wa.me/+923272021111", "_blank");
                    setDialogModalOpen({
                        open: false,
                        type: "donate"
                    });
                }}
            >
                <p className="text-sm text-gray-500 animate-fadeIn">
                    Thank you for your interest. Please WhatsApp or call at this number for donating to Markaze Sirate Mustaqeem at the following number:
                    <a
                        href="tel:+923272021111"
                        className="text-blue-500 hover:underline hover:text-blue-700 transition duration-300 ease-in-out animate-bounce"
                    >
                        +92 327 2021111
                    </a>
                </p>
            </DialogModal>
        </div>
    );
}

export default MobileNavbar;
