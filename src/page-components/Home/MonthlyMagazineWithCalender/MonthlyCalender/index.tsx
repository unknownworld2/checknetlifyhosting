"use client";

import { useState } from "react";
import toast from 'react-hot-toast';
import { monthsList } from "./data";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import IconButton from "@mui/material/IconButton";

interface MonthlyCalenderProps {
    className?: string;
}

const MonthlyCalender = ({ className }: MonthlyCalenderProps) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth(); // 0-based index for months
    const [selectedYear, setSelectedYear] = useState(currentYear);
    const [selectedMonth, setSelectedMonth] = useState(currentMonth);

    const handlePreviousYear = () => {
        setSelectedYear((prevYear) => prevYear - 1);
    };

    const handleNextYear = () => {
        if (selectedYear < currentYear) {
            setSelectedYear((prevYear) => prevYear + 1);
        }
    };

    const handleMonthSelect = (index: number) => {
        // Disable future months
        if (
            selectedYear > currentYear ||
            (selectedYear === currentYear && index > currentMonth)
        ) {
            return;
        }

        setSelectedMonth(index);

        let localSelectedMonth = index + 1; // Convert 0-based index to 1-based
        let localSelectedYear = selectedYear;

        // Check if the selected month and year match January 2025
        if (localSelectedMonth === 1 && localSelectedYear === 2025) {
            console.log("Download PDF");

            // Notify the user that the file is available for download
            toast(`Fikr-e-Mustaqeem Magazine for January 2025 is available for download.`, {
                icon: '📰',
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            });

            // Trigger file download
            const link = document.createElement('a');
            link.href = "https://siratemustaqeem.website/Home/MonthlyMagazine/FikreMustaqeemJanuary2025.pdf";
            link.download = "FikreMustaqeemJanuary2025.pdf"; // Optional: Set a default download name
            link.target = "_blank"; // Open in a new tab
            link.click();
        } else {
            // Notify the user that no magazine is available for the selected month and year
            toast(`Fikr-e-Mustaqeem Magazine for ${monthsList[index]} ${selectedYear} is not available.`, {
                icon: '🚫',
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            });
        }
    };

    return (
        <section className={`w-80 sm:w-[420px] ${className}`}>
            {/* Year Selector */}
            <div className="bg-white w-full py-1 sm:py-3 border border-green-500 border-solid flex flex-row">
                <IconButton
                    size="large"
                    className="text-gray-600 text-2xl sm:text-4xl"
                    onClick={handlePreviousYear}
                >
                    <KeyboardArrowLeftIcon className="text-gray-600 text-4xl" />
                </IconButton>
                <div className="text-center w-10/12 flex flex-col justify-center items-center text-2xl text-gray-600">
                    Year {selectedYear}
                </div>
                <IconButton
                    size="large"
                    className={`text-gray-600 text-2xl sm:text-4xl ${selectedYear >= currentYear ? "cursor-not-allowed text-gray-400" : ""}`}
                    onClick={handleNextYear}
                    disabled={selectedYear >= currentYear}
                >
                    <KeyboardArrowRightIcon className="text-gray-600 text-4xl" />
                </IconButton>
            </div>

            {/* Months Grid */}
            <div className="grid grid-cols-3 gap-4 px-0 mt-8">
                {monthsList.map((month, index) => {
                    const isSelected = selectedMonth === index;
                    const isDisabled =
                        selectedYear > currentYear ||
                        (selectedYear === currentYear && index > currentMonth);

                    return (
                        <div
                            key={index}
                            className={`py-2 sm:py-3 rounded-xl text-center text-lg sm:text-xl ${isSelected
                                    ? "bg-blue-600 border-white text-white"
                                    : isDisabled
                                        ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                                        : "bg-blue-800 text-white border-transparent"
                                } hover:border-white border border-solid sm:px-4 w-24 sm:w-32 ${isDisabled ? "cursor-not-allowed" : "cursor-pointer"
                                }`}
                            onClick={() => !isDisabled && handleMonthSelect(index)}
                        >
                            {month}
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default MonthlyCalender;
