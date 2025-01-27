interface HomeSectionHeadingProps {
    children: React.ReactNode;
    className?: string;
}

const HomeSectionHeading = ({
    children,
    className
}: HomeSectionHeadingProps) => {
    return (
        <h3 className={`font-roboto text-heading text-2xl ssm:text-3xl sm:text-4xl font-bold leading-8 ssm:leading-10 sm:leading-[50px] ${className}`}>{children}</h3>
    )
}
export default HomeSectionHeading;