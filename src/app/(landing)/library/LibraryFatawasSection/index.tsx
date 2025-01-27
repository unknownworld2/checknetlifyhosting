interface LibraryFatawasSectionProps {
    className?: string;
}

const LibraryFatawasSection = (
    {
        className
    }: LibraryFatawasSectionProps
) => {
    return (
        <div
            className={`${className} mt-20`}
        >
            <h2 className="text-3xl font-bold font-roboto text-heading text-center">Fatwas and Islamic Rulings</h2>
            <p className="px-6 ssm:px-10 md:px-10 lg:px-20 sm:px-48 mt-6 font-roboto text-xl text-center text-[#5C4C5C] font-light">
                Explore a collection of scholarly Fatwas issued by renowned Islamic scholars, providing guidance on various aspects of life according to Shariah. These rulings address contemporary issues with deep-rooted Islamic principles.
            </p>
        </div>
    );
};

export default LibraryFatawasSection;