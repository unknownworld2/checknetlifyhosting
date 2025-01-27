"use client";
import Image from 'next/image';
import MobileNavbar from './MobileNavbar';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Button, ButtonBase } from "@mui/material";
import ThemeSwitch from '@/components/base/ThemeSwitch';
import MenuIcon from '@mui/icons-material/Menu';
import DialogModal from '@/components/base/DialogModal';

interface NavActionButtonsProps {
    className?: string;
}

const NavActionButtons = ({
    className
}: NavActionButtonsProps) => {
    const router = useRouter();
    const [theme, setTheme] = useState<"light" | "dark">("light");

    const [donateModalOpen, setDonateModalOpen] = useState(false);

    useEffect(() => {
        const currentTheme = localStorage.theme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        setTheme(currentTheme);
        document.documentElement.classList.add(currentTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        document.documentElement.classList.remove(theme);
        document.documentElement.classList.add(newTheme);
        localStorage.theme = newTheme;
    };

    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const handleOpen = () => {
        setState({ ...state, right: true });
    };

    return (
        <div>
            <div className='flex flex-row justify-center items-center gap-2 sm:gap-4'>
                <Button
                    variant="contained"
                    color="primary"
                    className="bg-sky-700 text-white text-xl py-2 normal-case hidden sm:block rounded-md px-6"
                    onClick={() => {
                        // router.push("/");
                        // alert("Thank you for your interest. Please whatsapp or call at this number for donating to Idara Sirate Mustaqeem +92 327 2021111");
                        setDonateModalOpen(true);
                    }}
                >
                    {/* Donate Now */}
                    Donate
                </Button>
                <ButtonBase
                    className="flex flex-row justify-center items-center xlg:hidden"
                    onClick={handleOpen}
                >
                    <MenuIcon className="text-5xl text-black" />
                </ButtonBase>

                <MobileNavbar
                    state={state}
                    setState={setState}
                    theme={theme}
                    toggleTheme={toggleTheme}
                />
            </div>

            <DialogModal
                open={donateModalOpen}
                setOpen={setDonateModalOpen}
                type="success"
                title="Donate to Tehreek e Sirate Mustaqeem"
                confirmText="Contact Now"
                cancelText="Contact Later"
                onConfirm={() => {
                    window.open("https://wa.me/+923272021111", "_blank");
                    setDonateModalOpen(false);
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
    )
}
export default NavActionButtons;