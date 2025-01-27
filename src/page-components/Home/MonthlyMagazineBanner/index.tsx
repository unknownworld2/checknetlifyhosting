"use client"
import toast from 'react-hot-toast';

import React from "react";

interface MonthlyMagazineBannerProps {
    className: string;
}

const MonthlyMagazineBanner = ({
    className
}: MonthlyMagazineBannerProps) => {
    return (
        <div className={`relative w-full text-center bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 py-8 sm:py-12 px-4 sm:px-8 rounded-md ${className}`}>
            {/* English Title */}
            <h1 className="text-3xl sm:text-5xl font-bold text-white drop-shadow-lg">
                Download Fikr-e-Mustaqeem Magazine
            </h1>

            {/* Urdu Title */}
            <h2 className="text-2xl sm:text-4xl font-bold text-yellow-300 mt-4 drop-shadow-lg">
                فکرِ مستقیم میگزین ڈاؤن لوڈ کریں
            </h2>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-200 mt-4">
                Get the latest idara sirat e mustaqeem magazine &quot;FikreMustaqeem&quot; for January 2025.
            </p>

            {/* Button */}
            <a
                href="https://siratemustaqeem.website/Home/MonthlyMagazine/FikreMustaqeemJanuary2025.pdf"
                download="FikreMustaqeemJanuary2025.pdf"
                target="_blank"
                className="inline-block mt-6 py-3 px-6 bg-white text-green-600 font-semibold text-lg sm:text-xl rounded-full shadow-md hover:bg-yellow-400 hover:text-white hover:shadow-lg transition-all duration-300"
                onClick={() => {
                    toast.success("Downloading Fikr-e-Mustaqeem Magazine for January 2025...", {
                        icon: '📥',
                        style: {
                            borderRadius: '10px',
                            background: '#333',
                            color: '#fff',
                        },
                    });
                }}
            >
                Download Now
            </a>

            {/* Decorative Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-green-400/20 blur-xl -z-10"></div>
        </div>
    );
};

export default MonthlyMagazineBanner;
