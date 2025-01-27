"use client";
import ImageGallery from "react-image-gallery";
import { poetryCollectionImagesList } from "./data";

interface LibraryPoetrySliderProps {
    className?: string
}

const LibraryPoetrySlider = ({
    className
}: LibraryPoetrySliderProps) => {
    return (
        <div
            className={`${className} mt-10`}
        >
            <ImageGallery items={poetryCollectionImagesList} />
        </div>
    )
}
export default LibraryPoetrySlider;