import Link from "next/link";
import Logo from "@/components/Logo";
import Navbar from "@/components/Navbar";
import Promocion from "@/components/Promocion";

const Header = () => {
    return (
        <header className="bg-[url('../../public/assets/imgs/bg-reposteria.jpg')] w-screen h-screen bg-no-repeat bg-cover">
            <Promocion />
            <Navbar />
            <div className="bg-white rounded-full p-3.5 w-40 mt-10 ms-28 shadow-lg border-2 ease-in-out duration-700 hover:-translate-y-3 hover:shadow-inner hover:shadow-teal-500 hover:cursor-pointer  hover:border-teal-500">
                <Link href="/#punto-dulce" scroll={false}>
                    <Logo />
                </Link>
            </div>
        </header>
    );
};

export default Header;
