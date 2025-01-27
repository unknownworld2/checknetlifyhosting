const LibraryPageBanner = () => {
    return (
        <div className="relative h-72 sm:h-[400px] 0.5xl:h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat bg-library_banner">
            {/* Blurred Background with Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 filter blur-md"></div>

            {/* Centered Text */}
            <div className="relative z-10 text-center">
                <h2 className="text-white text-3xl px-4 sm:px-0 sm:text-4xl 0.5xl:text-5xl font-bold">
                    Welcome to Shah Jalal Books Library
                </h2>
                <p className="text-white text-lg 0.5xl:text-xl px-6 mt-4">
                    Explore Our Extensive Collection of Islamic Literature
                </p>
            </div>
        </div>
    );
};

export default LibraryPageBanner;
