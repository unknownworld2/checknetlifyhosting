import TopNav from "@/components/TopNav";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeaderNavItems from "@/components/HeaderNavItems";
import SubscribeToYoutubeChannel from "@/components/SubscribeToYoutubeChannel";

interface MainAppLayoutProps {
    children: React.ReactNode;
}

const MainAppLayout = ({
    children
}: MainAppLayoutProps) => {
    return (
        <div>
            {/* <TopNav /> */}

            <section className="px-6 ssm:px-10 sm:px-20">
                <Header className="bg-white" />
            </section>
            <div>
                <HeaderNavItems className="px-6 ssm:px-10 sm:px-20" />
            </div>

            {children}

            <br />

            <SubscribeToYoutubeChannel className="" />
            <br />
            <Footer />
        </div>
    )
}
export default MainAppLayout;