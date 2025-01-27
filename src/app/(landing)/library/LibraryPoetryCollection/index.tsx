import LibraryPoetrySlider from "./LibraryPoetrySlider";

interface LibraryPoetryCollectionProps {
    className?: string;
}

const LibraryPoetryCollection = (
    {
        className
    }: LibraryPoetryCollectionProps
) => {
    return (
        <div
            className={`${className} mt-20`}
        >
            <h2 className="text-3xl font-bold font-roboto text-heading text-center">Poetry Collection</h2>
            <p className="px-6 ssm:px-10 md:px-10 lg:px-20 sm:px-48 mt-6 font-roboto text-xl text-center text-[#5C4C5C] font-light">
                Explore a rich collection of Islamic poetry that delves into themes of spirituality, love for the Prophet (PBUH), and reflections on the divine. Each verse captures the essence of faith and devotion, bringing the beauty of Islamic teachings to life.
            </p>

            <LibraryPoetrySlider />
        </div>
    );
};

export default LibraryPoetryCollection;