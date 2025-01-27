"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { navItemsList } from "./data";
import toast from "react-hot-toast";

interface NavItemsProps {
    className?: string;
}

const NavItems = ({
    className
}: NavItemsProps) => {
    const pathname = usePathname();

    return (
        <div className={className}>
            <ul className="flex flex-row">
                {navItemsList.map((item, index) => (
                    <li key={index} className="mx-3">
                        {["Contact", "Home", "About", "Library"].includes(item.name) ? (
                            <Link
                                href={item.path}
                                className={`cursor-pointer text-xl border-b-2 no-underline border-transparent hover:border-blue-700 hover:text-blue-700 hover:border-b-2 ${pathname === item.path ? "text-primary font-bold" : "text-navText"
                                    }`}
                                onClick={() => {
                                    toast.success(`Redirecting to ${item.name}`, {
                                        duration: 2000,
                                        position: "top-right",
                                        style: {
                                            background: "#333",
                                            color: "#fff",
                                        },
                                        icon: "🚀",
                                    });
                                }}
                            >
                                {item.name}
                            </Link>
                        ) : (
                            <span
                                className="cursor-not-allowed text-xl text-gray-500"
                                onClick={() =>
                                    toast.error("This page is under construction. Please visit later.", {
                                        duration: 2000,
                                        position: "top-right",
                                        style: {
                                            background: "#333",
                                            color: "#fff",
                                        },
                                        icon: "🚧",
                                    })
                                }
                            >
                                {item.name}
                            </span>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NavItems;
