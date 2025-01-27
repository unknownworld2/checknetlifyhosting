import { categoriesList } from "./data";

const LibraryCategoriesSection = () => {
    return (
        <div className="pt-10">
            <h2 className="text-3xl font-bold font-roboto text-heading">Categories</h2>

            {/* Add flex and gap for spacing */}
            <div className="flex flex-wrap gap-4 mt-6">
                {categoriesList.map((category, index) => {
                    return (
                        <div
                            key={index}
                            className="inline-block rounded-full border border-gray-400 border-solid py-2 px-4 w-fit mt-2"
                        >
                            {category.name}
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
export default LibraryCategoriesSection;