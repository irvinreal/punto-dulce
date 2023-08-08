import Footer from "@/components/Footer";
import Header from "../components/header/Header";
import PresentacionHeader from "../components/presentacionHeader/PresentacionHeader";
import Navbar from "@/components/Navbar";
import SectionLinkToMenu from "@/components/SectionLinkToMenu";

export default function Home() {
    return (
        <main className=" relative flex min-h-screen flex-col items-center justify-between">
                <Navbar />
            <Header />
            <PresentacionHeader />
            <SectionLinkToMenu />
            <Footer />
        </main>
    );
}
