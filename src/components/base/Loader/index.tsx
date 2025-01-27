"use client";

import CircularProgress from "@mui/material/CircularProgress";

interface LoaderProps {
    className?: string;
}

const Loader = ({
    className
}: LoaderProps) => {
    return (
        <div
            className={`fixed inset-0 bg-gradient-to-br from-blue-500 via-white to-green-400 bg-opacity-90 flex justify-center items-center z-50 ${className}`}
        >
            <div className="flex flex-col items-center">
                <CircularProgress
                    size={80}
                    thickness={4.5}
                    sx={{
                        color: "#2c3e50", // Add a sophisticated color, e.g., dark blue-gray
                    }}
                />
                <p className="mt-4 text-lg font-semibold text-gray-800">
                    Loading, please wait...
                </p>
            </div>
        </div>
    );
};

export default Loader;
