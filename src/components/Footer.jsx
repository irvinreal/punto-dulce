import Image from "next/image";
import Link from "next/link";
import puntoDulceLogo from "../../public/assets/imgs/punto-dulce.svg";
const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-black from-10% to-gray-500 h-80 flex justify-between items-center w-screen px-16 text-xs">
            <div className="w-2/5 h-2/3  flex flex-col justify-start">
                <div className="flex flex-col md:flex-row justify-start w-full">
                    <Image
                        src={puntoDulceLogo}
                        width={90}
                        height={90}
                        alt="punto dulce logotipo"
                        className="bg-white p-1 rounded-full me-5"
                    />
                    <div className="flex items-center mx-4 my-2">
                        <Link href={`/contacto`} className="text-white">
                            Contacto
                        </Link>
                    </div>
                    <div className="flex items-center mx-4 my-2">
                        <Link
                            href={`/aviso-de-privacidad`}
                            className="text-white"
                        >
                            Aviso de Privacidad
                        </Link>
                    </div>
                    <div className="flex items-center mx-4 my-2">
                        <Link
                            href={`/terminos-y-condiciones`}
                            className="text-white"
                        >
                            Terminos y condiciones
                        </Link>
                    </div>
                </div>
            </div>
            <div className="w-2/5 h-2/3 bg-teal-300 bg-opacity-30 flex items-center justify-center">
                para el dueño..
            </div>
        </footer>
    );
};

export default Footer;
