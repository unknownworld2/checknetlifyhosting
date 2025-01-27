"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface LogoProps {
    className?: string;
}

const Logo = ({
    className
}: LogoProps) => {
    const router = useRouter();

    return (
        <div
            className={`${className} w-fit cursor-pointer flex flex-row items-center gap-2`}
            onClick={() => {
                router.push('/');
            }}
        >
            <div className="relative w-12 h-16">
                <Image
                    src="/TSMLogo.png"
                    alt="Markaze Sirate Mustaqeem Pakistan"
                    title="Markaze Sirate Mustaqeem Pakistan"
                    fill={true}
                />
            </div>
            <h3 className="hidden ssm:block text-black capitalize text-shadow-sm text-2xl font-sans font-semibold hover:animate-pulse">
                <span className="hidden xl:block">Markaze Sirate Mustaqeem Pakistan</span>
                <span className="hidden slg:block xl:hidden">Markaze Sirate Mustaqeem<span className="text-green-600 text-base font-raleway">(PK)</span></span>
                <span className="block slg:hidden">Markaze Sirate Mustaqeem <span className="text-green-600 text-base font-raleway">(PK)</span></span>
            </h3>
        </div>
    )
}
export default Logo;